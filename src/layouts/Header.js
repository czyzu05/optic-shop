import React from 'react';
import {NavLink} from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {
    return (
        <div className="logo">
            <div className="socialMedia">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pinterest"></i>
                <i class="fab fa-facebook-f"></i>
            </div>

            <div className="name">
                <p><NavLink to="/" exact>Optic</NavLink></p>
            </div>

            <div className="panel">
                <i class="fas fa-search"></i>
                <i class="far fa-user-circle"></i>
                <i class="fas fa-shopping-cart"></i>
            </div>
        </div>
    )
}
 
export default Header