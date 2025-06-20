import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/card_product/productCard'
import axios from 'axios'
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
                    <h3 >Filtro {buscar.toLowerCase()}</h3>
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