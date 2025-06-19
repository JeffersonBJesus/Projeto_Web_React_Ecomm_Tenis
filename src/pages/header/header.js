import Logo from "../logo/logo"
import Nav from "../nav/nav"
import React from 'react'; 
import { NavLink} from 'react-router-dom';

import './header.css'


export default function Header() {
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
          <NavLink to="/check"><span className="badge bg-success bg-cest " > 2 </span></NavLink>
        </div>
      </div>
    </header>
  )
}
