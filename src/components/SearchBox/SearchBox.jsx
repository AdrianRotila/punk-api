import React from 'react'
import './SearchBox.scss'
import search from '../../assets/images/search.png'

const SearchBox = ({getSearchInput}) => {

    return (
        <div className='nav-right__search'>
            <img src={search} alt="search" />
            <input type="text" onChange={getSearchInput}/>
        </div>
    )
}

export default SearchBox