import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthMovie } from '../../redux/actions/actions'
import { Movie } from '../movie/Movie'

import './MovieListing.css'
export const MovieListing = () => {
  const { movie } = useSelector(store => store.movie)

  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(fecthMovie())
    },
    [],
  )


  return (
    <>
        <h2 className='movie-title'>Movie</h2>
      <div className='movies-container'>
        {movie.map(item => {

          return <Movie {...item} key={item.Title}></Movie>
        })}
      </div>
    </>
  )
}
