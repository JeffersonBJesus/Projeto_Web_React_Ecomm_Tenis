import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import './produto.css';

function Produto(){
    const [tenis, setTenis] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch('./api/tenis.json')
            .then(response => response.json())
            .then(data => {
                const produto_encontrado = data.find(item => item.cod_tenis === id);
                setTenis(produto_encontrado);
            })
            .catch(error => console.error("Falha ao carrega produtos:", error));
    }, [id]);

    if(!tenis) {
        return <h2>Carregando detalhes do produto...</h2>;
    }

    return(
        <div className="detail-container">
            <nav className="breadcrumb">
                <Link to="/">Home</Link> /
                <span> {tenis.categoria}</span> /
                <span> {tenis.modelo}</span>
            </nav>

            <div className="product-detail">
                <div className="product-images">
                    <img src={`${process.env.PUBLIC_URL}/${tenis.imagem}`} alt={tenis.modelo} className="main-image"/>
                    <div className="thumbnail-images">
                        <img src={`${process.env.PUBLIC_URL}/${tenis.imagem}`} alt="Thumbnail 1"/>
                        <img src={`${process.env.PUBLIC_URL}/${tenis.imagem}`} alt="Thumbnail 2"/>
                    </div>
                </div>

                <div className="product-info">
                    <h1>{tenis.modelo}</h1>
                    <p className="sku">SKU {tenis.cod_tenis} | {tenis.genero}</p>
                    <p className="price">{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(tenis.preco)}</p>
                    <p className="payment-info">em até 10x sem juros</p>


                    <div className="options">
                        <p className="option-label">Tamanho:</p>
                        <div className="option-buttons">
                            <button className="active">38</button>
                            <button>39</button>
                            <button>40</button>
                            <button>41</button>
                            <button>42</button>
                        </div>
                    </div>

                    <div className="actions-wrapper">
                        <div className="quantity-selection">
                            <button>-</button>
                            <input type="text" className="quantity-input" defaultValue={1}/>
                            <button>+</button>
                        </div>

                        <div className="action">
                            <button className="add-cart">Adicionar ao carrinho</button>
                            <button className="buy-now">Comprar agora</button>
                        </div>
                    </div>

                    <div className="additional-info">
                        <p><strong>Frete Grátis em Pedidos Acima de R$200,00</strong></p>
                        <p><strong>Garantia de 1 Ano do Fabricante</strong></p>
                        <p><strong>Entrega:</strong> 3 a 5 dias úteis</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Produto;