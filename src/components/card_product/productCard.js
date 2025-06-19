

function ProductCard(props) {

    return(
        <div class="col-3">
                <div class="cont">
                    <div class="product-card">
                        <div class="product-card__image">
                            <img src={props.imagem}
                                alt="Red Nike Shoes"/>
                        </div>
                        <div class="product-card__info">
                            <h2 class="product-card__title">{props.modelo}</h2>
                            <p class="product-card__description">{props.marca}</p>
                            <div class="product-card__price-row">
                                <span class="product-card__price">{props.preco}</span>
                                <button  class="product-card__btn">Adicionar ao Carrinho</button> 
                                {/* onClick={ () => {}} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard;