import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './productCard.css'
import CartContext from '../../context/Cart.provider'

function ProductCard(props) {
  const { addCarrinho } = useContext(CartContext)

  const showPrice = (number) => {
    let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

    return (
      <>
        <h6 className="font-price">{priceConverted}</h6>
      </>
    )

  }
    return(
        <div className="col-3">
                <div className="cont">
                    <div className="product-card">
                        
                        <Link to={`/produto/${props.product.cod_tenis}`}>
                          <div className="product-card__image">
                              <img src={props.img}/>
                          </div>
                        </Link>

                        <div className="product-card__info">
                             <Link to={`/produto/${props.product.cod_tenis}`} className='product-card-link'>
                              <h2 className="product-card__title">{props.modelo}</h2>
                             </Link>  
                            <p className="product-card__description">{props.marca}</p>
                            <div className="product-card__price-row">
                                <span className="product-card__price"> {showPrice(props.preco)}</span>
                                <button  onClick={() => addCarrinho(props.product)} className="product-card__btn">Adicionar ao Carrinho</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard;





