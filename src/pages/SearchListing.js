import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearSearchMovie, searchMovie } from '../redux/actions/actions.js'
import { Movie } from '../componet/movie/Movie.js'
import { Loading } from '../componet/loading/Loading.js'
import Pagination from '@mui/material/Pagination';
import './SearchListing.css'
export const SearchListing = () => {
    const { error, loading, searchListing, data } = useSelector(store => store.search)
    const { movie } = useParams()
    const [page, setPage] = useState(1)
    console.log('check', page)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('heelo', page)
        dispatch(searchMovie(movie, page))
        return () => {
            dispatch(clearSearchMovie())
        }
    }, [movie, page])
    useEffect(() => {

    })
    if (loading) {
        return <>
            <Loading></Loading>
        </>
    } else if (error) {
        return <>
            <h2>Search</h2>
            <div className='movies-container'>
                <h1>We dont have That my fen</h1>
            </div>
        </>
    }
    const pageCount = Math.floor(data / 10)
    const handlePageClick = (event ,value) => {
        setPage(value)
    }
    return (
        <>
            <h2>Search</h2>
            <div className='movies-container'>
                {searchListing.map(item => {
                    return <Movie {...item} key={item.Title}></Movie>
                })}
            </div>
            <div id="container">
               <Pagination count={pageCount} page={page} onChange={handlePageClick}/> 
            </div>

        </>
    )
}
