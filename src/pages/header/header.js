import Logo from "../logo/logo"
import Nav from "../nav/nav"
import React, {useContext ,useEffect} from 'react'
import { NavLink} from 'react-router-dom';
import CartContext from '../../context/Cart.provider'
import './header.css'


export default function Header() {
    const { qtyCarrinho, total } = useContext(CartContext)
    useEffect(() => {

    }, [])

    var tt = null
    function quantidade() {
        if (qtyCarrinho === 0) {
            return tt
        }
        return tt = qtyCarrinho;
    }


  return (
    <header className="topo container-fluid" >
      <div className="row">

        <div className="col-12">
          <Logo></Logo>
        </div>
        <div className="col-10">
          <Nav></Nav>
        </div>
       <div className="col-2 cesta">
          <NavLink to="/check"> {
            quantidade() != null 
            ? <span className="badge bg-success bg-cest " >  { tt } </span>
            : <></>
          }</NavLink>
        </div>
      </div>
    </header>
  )
}
