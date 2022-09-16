import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard';
import "./BeersContainer.scss"
import { useState, useEffect } from 'react';

const BeersContainer = (props) => {
    const {searchedTerm, bitterBeers, classicRange, highABV,
        ascAVB, descAVB, ascIBU, descIBU} = props;
    const [beers, setBeers] = useState([]);

    const fetchBeers = async (bitterBeers, classicRange, highABV, ascAVB, descAVB, ascIBU, descIBU) => {
        let allBeers = [];

        for (let index = 1; index < 6; index++) {
            let url = `https://api.punkapi.com/v2/beers?page=${index}&per_page=80`;
            let res = await fetch(url);
            let data = await res.json();
            Array.prototype.push.apply(allBeers, data)
        }
        setBeers(allBeers)

        const abvFilter = allBeers.filter((beer) => beer.abv > 6)
        const classicFilter = allBeers.filter((beer) => parseInt(beer.first_brewed.substring(beer.first_brewed.length-4)) < 2010)
        const bitterFilter = allBeers.filter((beer) => beer.ibu <= 70 && beer.ibu >= 50)
        
        if(bitterBeers === true) { setBeers(bitterFilter)}
        if(classicRange === true) { setBeers(classicFilter)}
        if(highABV === true) { setBeers(abvFilter)}
        if(ascAVB === true) {setBeers(allBeers.sort((a, b) => a.abv - b.abv))}
        if(descAVB === true) {setBeers(allBeers.sort((a, b) => b.abv - a.abv))}
        if(ascIBU === true) {setBeers(allBeers.sort((a, b) => a.ibu - b.ibu))}
        if(descIBU === true) {setBeers(allBeers.sort((a, b) => b.ibu - a.ibu))}
    }

    useEffect(() => {
      fetchBeers(bitterBeers, classicRange, highABV, ascAVB, descAVB, ascIBU, descIBU);
    }, [bitterBeers, classicRange, highABV, ascAVB, descAVB, ascIBU, descIBU])
    
    const search = (beers, searchedTerm) => {
        return beers.filter((beer) => {
            return beer.name.toLowerCase().includes(searchedTerm.toLowerCase()) || 
            beer.ibu?.toString().includes(searchedTerm) ||
            beer.abv?.toString().includes(searchedTerm) ||
            beer.description.toLowerCase().includes(searchedTerm.toLowerCase()) ||
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
                    description = {beer.description} 
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