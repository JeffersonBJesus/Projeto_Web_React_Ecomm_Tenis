import { CartProvider } from './Cart.provider'


function Contexts(props) {

    return (
        <CartProvider>
            {props.children}
        </CartProvider>

    )
}

export default Contexts