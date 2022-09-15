import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard';
import "./BeersContainer.scss"
import { useState, useEffect } from 'react';

const BeersContainer = ({searchedTerm, bitterBeers, getClassicRange, getHighABV}) => {
    const [beers, setBeers] = useState([]);

    const fetchBeers = async (bitterBeers) => {
        const url = "https://api.punkapi.com/v2/beers";
        let urlWithParams = url;
        
        if(bitterBeers === true) urlWithParams += "?ibu_gt=50&ibu_lt=70"
        
        
        const res = await fetch(urlWithParams);
        const data = await res.json();
        setBeers(data);
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