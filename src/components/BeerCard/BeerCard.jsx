import React from 'react'
import "./BeerCard.scss"

const BeerCard = (props) => {
    const {image, name, tagline, description, abv} = props

    return (
        <div className="beer-card">
            <img className="beer-card__image" src={image} alt={name} />
            <div className="beer-card__content">
                <h2 className="beer-card__heading">{name}</h2>
                <h3 className='beer-card__tagline'>{tagline}</h3>
                <p className='beer-card__description'>{description}</p>
                <div className='beer-card__details'>
                    <h3 className='beer-card__abv'>{abv}%</h3>
                    <p className='beer-card__details'>More Info</p>
                </div>
            </div>
      </div>
    )
}

export default BeerCard