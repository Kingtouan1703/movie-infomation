import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchSingleMovie, clearMovie } from '../redux/actions/actions.js'
import { Loading } from '../componet/loading/Loading.js'
import './style/SingleMovie.css'
export const SingleMovie = () => {
  const state = useSelector(store => store.singleMovie)

  const { Title, Runtime, imdbRating, imdbVotes, Year, Plot, Director, Language, Actors, Genre, Awards, Poster } = state.movie

  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSingleMovie(id))
    return () => {
      dispatch(clearMovie())
    }
  }, [id])
  if (state.loading) {
    return <>
      <Loading></Loading>
    </>
  }
  return (
    <div className='container'>
      <h2 className='title'>DETAIL</h2>
      <div className='singleMovie-container '>
        <div className='desc-container'>
          <h2>{Title}</h2>
          <p className='plot  '>{Plot} </p>
          <p>Director : {Director}</p>
          <p>Actors : {Actors}</p>
          <p>Genre : {Genre}</p>
          <p>Language : {Language}</p>
          <p>Awards : {Awards}</p>
        </div>
        <div className='poster-container'>
          <img src={Poster} />
        </div>
      </div>
      <Link to='/'><button>RETURN</button></Link>
    </div>
  )
}
