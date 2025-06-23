import { useState, useEffect } from 'react';
import ProductCard from '../../components/card_product/productCard'
import Carousel from '../../components/carrosel/carousel'
import './home.css'

export default function Home() {
  const [tenis, setTenis] = useState([])



  useEffect(() => {
    console.log('Componente montado (via useEffect)! Iniciando requisição de dados...');
    fetch('./api/tenis.json')
      .then(response => response.json())
      .then(data => {
        setTenis(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      })
  }, []);

  return (
    <>
      <div className="container-fluid" >
        <div className="one">
          <h1>Novidades </h1>
        </div>
      </div>

      <div className="container-fluid" >
        <div className="row">
          <Carousel />
        </div>
      </div>

      <div className="row">

        <div className="one">
          <h1>Conheça nosso catalogo</h1>
        </div>
        {
          tenis.map(item => {
            return (
              <ProductCard key={item.cod_tenis} img={item.imagem}  modelo={item.modelo}
                product={item} preco={item.preco} marca={item.marca} />
            )
          })
        }
      </div>

    </>
  )
}


