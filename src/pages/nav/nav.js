
import { NavLink} from 'react-router-dom';
import React from 'react';
import './nav.css'

export default function Nav() {
  return (

      <nav>
        <ul className='ulist'>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/produtos">Produtos</NavLink></li>
          <li><NavLink to="/categoria">Categorias</NavLink></li>
          <li><NavLink to="/marcas">Marcas</NavLink></li>
          <li><NavLink to="/about">Sobre Nos</NavLink></li>
        </ul>
      </nav>



  )
}
