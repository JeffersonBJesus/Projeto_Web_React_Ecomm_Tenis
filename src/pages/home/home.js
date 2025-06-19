import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/card_product/productCard'
import Carousel from '../../components/carrosel/carousel'


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
  });

  return (
    <>
      <h1>Conheça nosso Produtos</h1>
      
            <div class="row">
              <div className='col-7'>
<Carousel/>
              </div>
              
            </div>



      <div class="row">
        {
          tenis.map(item => {
            return (
              <ProductCard key={item.cod_tenis} img={item.imagem} link={`/product/${item.cod_tenis}`} modelo={item.modelo}
                product={item} preco={item.preco} marca={item.marca}  />
            )
          })
        }
      </div>

    </>
  )
}


