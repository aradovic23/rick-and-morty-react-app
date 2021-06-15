import React, { useState, useEffect } from 'react'
import './card.scss'
import axios from 'axios'

const Card = ({ id }) => {

    const [singleChar, charState] = useState([])

    const api = `https://rickandmortyapi.com/api/character/${id}`


    useEffect(() => {
        axios.get(api)
            .then(data => {
                console.log(data.data)
                charState(data.data)
                    ;
            }, [])

    }, [])


    return (


        <div className='char-container'><div className='marina'>
            <img src={singleChar.image}></img>
            <h1>{singleChar.name}</h1>
            <span>Species: {singleChar.species}</span>
            <span>Is alive: {singleChar.status}</span>
            <span>Gender: {singleChar.gender}</span>
        </div>
        </div>

    )

}

export default Card