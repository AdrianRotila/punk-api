import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard';
import "./BeersContainer.scss"
import { useState, useEffect } from 'react';

const BeersContainer = ({searchedTerm}) => {
    const [beers, setBeers] = useState([]);

    const fetchBeers = async () => {
      const url = "https://api.punkapi.com/v2/beers";
      const res = await fetch(url);
      const data = await res.json();
      setBeers(data);
    }
  
    useEffect(() => {
      fetchBeers();
    }, [])
    
    const search = (beers, searchedTerm) => {
        return beers.filter((beer) => beer.name.toLowerCase().includes(searchedTerm.toLowerCase()))
    }



    const beersToJSX = (beers) => {
        return search(beers, searchedTerm).map((beer) => {
            return (
                <BeerCard
                    key={beer.id}
                    image = {beer.image_url}
                    name = {beer.name} 
                    description = {beer.description.length > 250 ? beer.description?.substring(0, 200) + " . . ." : beer.description } 
                    tagline = {beer.tagLine} 
                    abv = {beer.abv}
                />
            )
        })
    }

    return (
        <div className='beer-container'>{beersToJSX(beers)}</div>
    )
}

export default BeersContainer