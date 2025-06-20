import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/card_product/productCard'
import axios from 'axios'
export default function Category() {
    const { buscar } = useParams()
    const [tenis, setTenis] = useState([])

    useEffect(() => {
        getDetails(buscar)
    }, []);

            
    function getDetails(buscar) {
        axios.get(`http://localhost:3000/api/tenis.json`)
            .then((response) => {
               setTenis(response.data.filter(i => i.categoria.toLowerCase() === buscar.toLowerCase()));
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