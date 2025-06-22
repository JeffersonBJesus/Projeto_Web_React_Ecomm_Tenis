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
    <li className="fund">
      <div className='pd-3 aling '>
        <h6 class="my-0">{props.modelo}</h6>
        <small class="text-body-secondary">{props.marca}</small>
        <span class="text-body-secondary">{showPrice(props.preco)}</span>
      </div>

      <div className="input-group w-100 h-100 p-1">
        <button onClick={() => incrementoCarrinho(props.tenis)} className="btn  bord btn-outline-dark  btn-green btn-sm" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg> <i className="bi-caret-down" ></i>
        </button>
        <input type="text" className="form-control text-center bord border-dark " value={props.quant} />
        <button onClick={() => decrementoCarrinho(props.tenis)} className="btn btn-outline-dark btn-green btn-sm" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
          </svg> <i className="bi-caret-up" ></i>
        </button>
        <button onClick={() => deleteCarrinho(props.tenis)} className="btn  bord btn-outline-danger border-dark btn-red btn-sm" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
        </button>

      </div>
    </li>
  )
}

export default CardCheckout;