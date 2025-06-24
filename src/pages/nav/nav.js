import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/Cart.provider';
import './nav.css';

export default function Nav() {
    const { qtyCarrinho } = useContext(CartContext);

    const closeMenu = () => {
        const checkbox = document.getElementById('hamburger-checkbox');
        if (checkbox) {
            checkbox.checked = false;
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container container justify-content-end">
                <input type="checkbox" id="hamburger-checkbox" />
                <label htmlFor="hamburger-checkbox" className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </label>

                <ul className="menu-items">
                    <li onClick={closeMenu}><NavLink to="/">Início</NavLink></li>
                    <li className="dropdown">
                        <a href="#" className="nav-link dropdown-toggle" role="button">Categoria</a>
                        <ul className="dropdown-menu">
                            <li onClick={closeMenu}><a className="dropdown-item" href="/categoria/Esportivo">Esportivo</a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="/categoria/Streetwear">Streetwear</a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="/categoria/Casual">Casual</a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="/categoria/Skate">Skate</a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="/categoria/Outdoor">Outdoor</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link dropdown-toggle" role="button">Marca</a>
                        <ul className="dropdown-menu">
                            <li onClick={closeMenu}><a className="dropdown-item" href="/marca/Nike">Nike</a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="/marca/Puma">Puma</a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="/marca/Adidas">Adidas</a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="/marca/Outros">Outros</a></li>
                        </ul>
                    </li>
                    <li onClick={closeMenu}><NavLink to="/sobrenos">Sobre Nós</NavLink></li>
                </ul>

                <div className="right-nav ms-4">
                    <NavLink to="/check" className="cesta-link" onClick={closeMenu}>
                        <img src="/imagens/cesta.png" alt="Cesta de compras" className="cesta-icon" />
                        {qtyCarrinho > 0 &&
                            <span className="badge bg-success">{qtyCarrinho}</span>
                        }
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}