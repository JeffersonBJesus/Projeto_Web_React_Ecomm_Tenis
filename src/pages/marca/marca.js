import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/card_product/productCard'
import axios from 'axios'
import './marca.css'

export default function Marca() {
    const { buscar } = useParams()
    const [tenis, setTenis] = useState([])

    useEffect(() => {
        getDetails(buscar)
    }, []);


    function getDetails(buscar) {
        axios.get(`http://localhost:3000/api/tenis.json`)
            .then((response) => {
                if (buscar.toLowerCase() === 'Outros'.toLowerCase()) {
                     setTenis(response.data
                        .filter(i => i.marca.toLowerCase() !== 'Nike'.toLowerCase())
                        .filter(i => i.marca.toLowerCase() !== 'Puma'.toLowerCase())
                        .filter(i => i.marca.toLowerCase() !== 'Adidas'.toLowerCase())
                       );
                } else {
                setTenis(response.data.filter(i => i.marca.toLowerCase() === buscar.toLowerCase()));
                }

            })
            .catch((error) => {
                console.error(error.messege)
            });
    }


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                                        <div className="container-fluid" >
                        <div className="one">
                            <h2>{buscar.toLowerCase()}</h2>
                        </div>
                    </div>
                    {
                        tenis
                            .map(item => {
                                return (
                                    <ProductCard key={item.cod_tenis} img={'../' + item.imagem} modelo={item.modelo}
                                        product={item} preco={item.preco} marca={item.marca} />
                                )
                            })
                    }
                </div>
            </div>
        </>

    );
}