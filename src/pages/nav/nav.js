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
                            <li onClick={closeMenu}><NavLink className="dropdown-item" to="/categoria/Esportivo">Esportivo</NavLink></li>
                            <li onClick={closeMenu}><NavLink className="dropdown-item" to="/categoria/Streetwear">Streetwear</NavLink></li>
                            <li onClick={closeMenu}><NavLink className="dropdown-item" to="/categoria/Casual">Casual</NavLink></li>
                            <li onClick={closeMenu}><NavLink className="dropdown-item" to="/categoria/Skate">Skate</NavLink></li>
                            <li onClick={closeMenu}><NavLink className="dropdown-item" to="/categoria/Outdoor">Outdoor</NavLink></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link dropdown-toggle" role="button">Marca</a>
                        <ul className="dropdown-menu">
                            <li onClick={closeMenu}><NavLink className="dropdown-item" to="/marca/Nike">Nike</NavLink></li>
                            <li onClick={closeMenu}><NavLink className="dropdown-item" to="/marca/Puma">Puma</NavLink></li>
                            <li onClick={closeMenu}><NavLink className="dropdown-item" to="/marca/Adidas">Adidas</NavLink></li>
                            <li onClick={closeMenu}><NavLink className="dropdown-item" to="/marca/Outros">Outros</NavLink></li>
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