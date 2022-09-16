import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import "./BeerInfo.scss"

const BeerInfo = ({beers}) => {

    const {beerId} = useParams();

    const clickedBeer = beers.find((beer) => beer.id === beerId)

    return (
        
        <Link to = "/:beerId">
            <div>
                 <img src={clickedBeer.image_url} alt="" />
                asdf
            </div>
       
        </Link>
    )
}

export default BeerInfo






