import React from 'react';
import {NavLink} from 'react-router-dom'

import '../styles/Navigation.css'

const list = [
    {name: "men", path: '/men'},
    {name: "women", path: '/women'},
    {name: "brands", path: '/brands'},
    {name: "lookbook", path: '/lookbook'},
    {name: "sale", path: '/sale'},
    {name: "contact", path: '/contact'},
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav className="mainNav">
            <ul>
                {menu}
            </ul>
        </nav>
    )
}
 
export default Navigation