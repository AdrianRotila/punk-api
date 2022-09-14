import React from 'react'
import "./BeerCard.scss"
import cap from '../../assets/images/bottle-cap.png'

const BeerCard = (props) => {
    const {image, name, tagline, description, abv, foodPairing} = props

    return (
        <div className="beer-card">
            <img className="beer-card__image" src={image} alt={name} />
            <img className='beer-card__cap' src={cap}  alt="cap"/>
            <p className='beer-card__abv'>{abv}</p>
            <div className="beer-card__content">
                <h2 className="beer-card__heading">{name}</h2>
                <h3 className='beer-card__tagline'>{tagline}</h3>
                <p className='beer-card__description'>{description}</p>
                <div className='beer-card__details'>
                    <p className='beer-card__match'><p>Food Match: </p> {foodPairing.join(", ")}</p>
                </div>
            </div>
      </div>
    )
}

export default BeerCard