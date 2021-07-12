import './cards.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Cards(props) {

    const [characters, setState] = useState([])

    const api = 'https://rickandmortyapi.com/api/character/?page=25'

    useEffect(() => {
        axios.get(api)
            .then(data => {
                console.log(data.data.results)
                setState(data.data.results)
                    ;
            }, [])

    }, [])

    return (
        <div className='wrapper'>
            <div className='container'>{characters.map(character => <div className='card' key={character.id} onClick={() => props.onIdChange(character.id)}>
                <img id={character.id} src={character.image} alt="no-img" ></img>
                <h4>{character.name}</h4>
                <button>View More</button>
            </div >)}</div>
        </div >

    )
}

export default Cards