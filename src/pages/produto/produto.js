import React, {useState, useEffect, useContext} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import './produto.css';
import '../../context/Cart.provider';
import CartContext, { CartProvider } from "../../context/Cart.provider";

function Produto(){
    const [tenis, setTenis] = useState(null);
    const [tamanhoSelec, setTamanho] = useState(40);
    const [quantidade, setQuantidade] = useState(1);
    const navigate = useNavigate();

    const aumentarQuantidade = () => {setQuantidade (q => q + 1);}
    const diminuirQuantidade = () => {if (quantidade > 1) {setQuantidade(q => q - 1);}}
    const handleSelecTamanho = (tamanho) => {setTamanho(tamanho);}
    const {id} = useParams();
    const { addCarrinho } = useContext(CartContext);
    const handleComprarAgora = () => {addCarrinho(tenis, quantidade,tamanhoSelec);
        navigate('/check')
    }


    useEffect(() => {
        fetch('/api/tenis.json')
            .then(response => response.json())
            .then(data => {
                const produtoEncontrado = data.find(item => item.cod_tenis === id);
                setTenis(produtoEncontrado);
            })
            .catch(error => console.error("Falha ao carrega produtos:", error));
    }, [id]);

    if(!tenis) {
        return <h2>Carregando detalhes do produto...</h2>;
    }

    const tamanhosDisp = [38, 29, 40, 41, 42];

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
                </div>

                <div className="product-info">
                    <h1>{tenis.modelo}</h1>
                    <p className="sku">SKU {tenis.cod_tenis} | {tenis.genero}</p>
                    <p className="price">{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(tenis.preco)}</p>
                    <p className="payment-info">em até 10x sem juros</p>


                    <div className="option-buttons">
                        {tamanhosDisp.map((tamanho) => (
                         <button 
                                key={tamanho} 
                                className={tamanhoSelec === tamanho ? 'active' : ''} 
                                onClick={() => handleSelecTamanho(tamanho)}>
                                {tamanho}
                            </button>
                        ))}
                    </div>

                    <div className="actions-wrapper">
                        <div className="quantity-selection">
                            <button onClick={diminuirQuantidade}>-</button>
                            <input type="text" className="quantity-input" value={quantidade}/>
                            <button onClick={aumentarQuantidade}>+</button>
                        </div>

                        <div className="action">
                            <button className="add-cart" onClick={() => addCarrinho(tenis, quantidade, tamanhoSelec)}>Adicionar ao carrinho</button>
                            <button className="buy-now" onClick={handleComprarAgora}>Comprar agora</button>
                        </div>
                    </div>

                    <div className="additional-info">
                        <p><strong>Frete Grátis em Pedidos Acima de R$200,00</strong></p>
                        <p><strong>Garantia de 1 Ano do Fabricante</strong></p>
                        <p><strong>Entrega:</strong> 3 a 5 dias úteis</p>
                    </div>
                </div>
            </div>
            
            <div className="description-section">
                <div className="description-tabs">
                    <h2 className="description-title active"><strong>Descrição</strong></h2>
                </div>
                <p className="description-content">{tenis.descricao || "Descrição não disponível."}</p>
            </div>

        </div>
    );
}

export default Produto;