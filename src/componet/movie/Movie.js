import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'
export const Movie = ({ Title, Year, imdbID, Poster }) => {
    return (
        <div className='single-movie'>
            <Link to={`/movie/${imdbID}`}> <img src={Poster} alt={Title} className='poster'></img></Link>
            <div className='desc'>
                <p className='desc-title'>{Title}</p>
                <span className='year'>{Year}</span>
            </div>
        </div>
    )
}
