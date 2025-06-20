
function CardCheckout(props) {
  const showPrice = (number) => {
    let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

    return (
      <>
        <h6 className="font-price">{priceConverted}</h6>
      </>
    )

  }
  return (
    <li class="list-group-item d-flex justify-content-between lh-sm align-items-center">

      <div>
        <h6 class="my-0">{props.modelo}</h6>
        <small class="text-body-secondary">{props.marca}</small>
      </div>
      <span class="text-body-secondary">R$ {showPrice(props.preco)}</span>
    </li>
  )
}

export default CardCheckout;