import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import './BeerPage.scss'

const BeerPage = () => {
    const {id} = useParams();
    const [beer, setBeer] = useState();

    const fetchBeer = async(id) => {
      const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
      const json = await res.json();
      setBeer(json[0]);
    }

    useEffect(() => {
        fetchBeer(id)
      }, [id])


    return (
        <>
          {beer && <div key={beer.id}><img src={beer.image_url} alt="" /></div>}
        </> 
    )
}

export default BeerPage