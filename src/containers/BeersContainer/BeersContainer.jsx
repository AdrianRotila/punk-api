import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard';
import "./BeersContainer.scss"
import { useState, useEffect } from 'react';

const BeersContainer = ({searchedTerm, bitterBeers, classicRange, highABV}) => {
    const [beers, setBeers] = useState([]);

    const fetchBeers = async (bitterBeers) => {
        
        let urlWithParams = [];

        for (let index = 1; index < 6; index++) {
            let url = `https://api.punkapi.com/v2/beers?page=${index}&per_page=80`;
            let res = await fetch(url);
            let data = await res.json();
            Array.prototype.push.apply(urlWithParams, data)
        }
        
        setBeers(urlWithParams)
        
       
    }

    useEffect(() => {
      fetchBeers(bitterBeers);
    }, [bitterBeers])
    
    const search = (beers, searchedTerm) => {
        return beers.filter((beer) => {
            return beer.name.toLowerCase().includes(searchedTerm.toLowerCase()) || 
            beer.ibu.toString().includes(searchedTerm) ||
            beer.abv.toString().includes(searchedTerm) ||
            beer.food_pairing.join(", ").toLowerCase().includes(searchedTerm.toLowerCase())
        } )
    }

    const beersToJSX = (beers) => {
        return search(beers, searchedTerm).map((beer) => {
            return (
                <BeerCard
                    key={beer.id}
                    image = {beer.image_url}
                    name = {beer.name} 
                    description = {beer.description.length > 250 ? beer.description?.substring(0, 100) + " . . ." : beer.description } 
                    abv = {beer.abv}
                    foodPairing = {beer.food_pairing}
                    ibu = {beer.ibu}
                />
            )
        })
    }

    return (
        <div className='beer-container'>{beersToJSX(beers)}</div>
    )
}

export default BeersContainer