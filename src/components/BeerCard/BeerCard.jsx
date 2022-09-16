import React from 'react'
import "./BeerCard.scss"
import cap from '../../assets/images/bottle-cap.png'

const BeerCard = (props) => {
    const {image, name, description, abv, foodPairing, ibu} = props

    return (
        <div className="beer-card">
            <img className="beer-card__image" src={image} alt={name} />
            <img className='beer-card__cap' src={cap}  alt="cap"/>
            <p className='beer-card__abv'>{abv}%</p>
            <div className="beer-card__content">
                <h2 className="beer-card__heading">{name}<p>IBU {ibu}</p></h2>
                <p className='beer-card__description'>
                    {description.length > 250 ? description?.substring(0, 200) + ". . ." : description}
                </p>
                <div className='beer-card__details'>
                    <p className='beer-card__match'><span>Food match: </span>{foodPairing.join(", ")}</p>
                </div>
            </div>
      </div>
    )
}

export default BeerCard