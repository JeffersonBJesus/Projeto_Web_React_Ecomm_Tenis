import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/card_product/productCard'


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
      {
        tenis.map(item => {
          return (
            <ProductCard key={item.cod_tenis}  img={item.imagem} link={`/product/${item.cod_tenis}`} nome={item.modelo}
               product={item} price={item.preco} />
          )
        })
      }
    </>
  )
}


