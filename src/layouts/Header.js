import React from 'react';
import { NavLink } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {
    return (
        <div className="logo">
            <div className="socialMedia">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-facebook-f"></i>
            </div>

            <div className="name">
                <p><NavLink to="/" exact >Optic</NavLink></p>
            </div>

            <div className="panel">
                <i className="fas fa-search"></i>
                <i className="far fa-user-circle"></i>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>
    )
}

export default Header