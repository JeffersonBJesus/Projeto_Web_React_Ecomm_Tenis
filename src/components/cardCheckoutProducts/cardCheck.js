import CartContext from '../../context/Cart.provider'
import { useContext } from 'react'
import './cardCheck.css'
function CardCheckout(props) {

      const { incrementoCarrinho, decrementoCarrinho, deleteCarrinho } = useContext(CartContext)
  const showPrice = (number) => {
    let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

    return (
      <>
        <h6 className="font-price">{priceConverted}</h6>
      </>
    )

  }
  return (
    <li className="list-group-item d-flex justify-content-between lh-sm align-items-center">

      <div>
        <h6 className="my-0">{props.quantidade || 1}x  {props.modelo}</h6>
        <small className="text-body-secondary">{props.marca}</small>
      </div>
      <span className="text-body-secondary">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((props.preco || 0) * (props.quantidade || 1))}
      </span> 
    </li>
  )
}

export default CardCheckout;