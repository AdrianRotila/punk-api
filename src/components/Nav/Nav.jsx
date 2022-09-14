import React, { useState } from 'react'
import './Nav.scss'
import icon from '../../assets/images/icon.png';
import search from '../../assets/images/search.png'
import menuIcon from '../../assets/images/menu-icon.png'
import NavMenu from '../NavMenu/NavMenu';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='nav'>
            <div className = 'nav-left'>
                <img className = "nav-left__icon" src = {icon} alt="icon"/>
            </div>
            {showMenu &&
                <NavMenu 
                    toggleMenu = {toggleMenu}
                />
            }

            <div className='nav-right__menu'>
                <img src={menuIcon} alt="menu-icon" onClick={toggleMenu}/>
            </div>
            <div className='nav-right__search'>
                <img src={search} alt="search" />
                <input type="text"/>
            </div>
        </div>
    )
}

export default Nav