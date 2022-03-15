import React from 'react'
import { MovieListing } from '../componet/movie-listing/MovieListing'
import { ShowListing } from '../componet/ShowListing'
export const Home = () => {
  return (
    <div className='home-page'>
    <MovieListing/>
    <ShowListing/>
    </div>
  )
}
