import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard';
import "./BeersContainer.scss"

const BeersContainer = (props) => {
    const {beers} = props;

    return (
        <div className='beer-container'>
            {beers?.map((beer) => (
                <BeerCard
                    key={beer.id}
                    image = {beer.image_url}
                    name = {beer.name} 
                    description = {beer.description.slice(0, 200)} 
                    tagline = {beer.tagLine} 
                    abv = {beer.abv}
                />
            ))}
        </div>
    )
}

export default BeersContainer