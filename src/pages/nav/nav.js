import {  useEffect } from 'react';
import { NavLink,Link} from 'react-router-dom';
import React from 'react';
import './nav.css'

export default function Nav() {
     useEffect(() => {
          
      }, []);
  return (
      <nav>
        <ul className='ulist'>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categoria
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/categoria/Esportivo">Esportivo</a></li>
            <li><a className="dropdown-item" href="/categoria/Streetwear">Streetwear</a></li>
            <li><a className="dropdown-item" href="/categoria/Casual">Casual</a></li>
            <li><a className="dropdown-item" href="/categoria/Skate">Skate</a></li>
            <li><a className="dropdown-item" href="/categoria/Outdoor">Outdoor</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marca
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/marca/Nike">Nike</a></li>
            <li><a className="dropdown-item" href="/marca/Puma">Puma</a></li>
            <li><a className="dropdown-item" href="/marca/Adidas">Adidas</a></li>
             <li><a className="dropdown-item" href="/marca/Outros">Outros</a></li>
          </ul>
        </li>
          <li><NavLink to="/sobrenos">Sobre Nos</NavLink></li>
        </ul>
      </nav>



  )
}
