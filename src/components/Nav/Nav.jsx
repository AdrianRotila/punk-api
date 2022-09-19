import React, { useState } from 'react'
import './Nav.scss'
import icon from '../../assets/images/icon.png';
import menuIcon from '../../assets/images/menu-icon.png'
import NavMenu from '../NavMenu/NavMenu';
import SearchBox from '../SearchBox/SearchBox';
import {Link} from "react-router-dom"

const Nav = (props) => {
    const {getSearchInput, getBitterBeers, getClassicRange, getHighABV, 
            sortAscABV, sortDescABV,  sortAscIBU, sortDescIBU} = props;
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='nav'>
            {showMenu ? 
                (<NavMenu 
                    toggleMenu = {toggleMenu} 
                    getBitterBeers = {getBitterBeers}
                    getClassicRange = {getClassicRange}
                    getHighABV = {getHighABV}
                    sortAscABV = {sortAscABV}
                    sortDescABV = {sortDescABV}
                    sortAscIBU = {sortAscIBU}
                    sortDescIBU = {sortDescIBU}
                />) :
                (<>  
                    <div className = 'nav-left'>
                        <Link to = "/">
                            <img className = "nav-left__icon" src = {icon} alt="icon"/>
                        </Link>
                    </div>
                    
                    <SearchBox getSearchInput={getSearchInput}/>
                    <div className='nav-right'>
                        <img className = "nav-right__icon" src={menuIcon} alt="menu-icon" onClick={toggleMenu}/>
                    </div>
                </>)
            }
        </div>
    )
}

export default Nav