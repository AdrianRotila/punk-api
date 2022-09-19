import React from 'react'
import "./BeerCard.scss"
import cap from '../../assets/images/bottle-cap.png'
import { Link } from 'react-router-dom'

const BeerCard = (props) => {
    const {image, name, description, abv, foodPairing, ibu, id} = props;

    return (
        <div className="beer-card">
            <Link to = {`/beer/${id}`}>
                <img className="beer-card__image" src={image} alt={name} />
            </Link>
            <img className='beer-card__cap' src={cap}  alt="cap"/>
            <p className='beer-card__abv'>{abv}%</p>
            <div className="beer-card__content">
                <h2 className="beer-card__heading">{name}<p>IBU {ibu}</p></h2>
                <p className='beer-card__description'>
                    {description.length > 250 ? description?.substring(0, 150) + " . . ." : description}
                </p>
                <div className='beer-card__details'>
                    <p className='beer-card__match'><span>Food match: </span>{foodPairing.join(", ")}</p>
                </div>
            </div>
      </div>
    )
}

export default BeerCard