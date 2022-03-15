import axios from 'axios'

export const FETCH_MOVIE_REQUEST = ' FETCH_MOVIE_REQUEST'
export const FETCH_MOVIE_SUCCESS = ' FETCH_MOVIE_SUCCESS'
export const FETCH_MOVIE_FAILURE = ' FETCH_MOVIE_FAILURE'
export const FETCH_ONE_MOVIE_REQUEST = ' FETCH_ONE_MOVIE_REQUEST'
export const FETCH_ONE_MOVIE_SUCCESS = ' FETCH_ONE_MOVIE_SUCCESS'
export const FETCH_ONE_MOVIE_FAILURE = ' FETCH_ONE_MOVIE_FAILURE'


export const FETCH_SHOW_REQUEST = ' FETCH_SHOW_REQUEST'
export const FETCH_SHOW_SUCCESS = ' FETCH_SHOW_SUCCESS'
export const FETCH_SHOW_FAILURE = ' FETCH_SHOW_FAILURE'
export const SEARCH_REQUEST = ' SEARCH_REQUEST'
export const SEARCH_SUCCESS = ' SEARCH_SUCCESS'
export const SEARCH_FAILURE = ' FETCH_SHOW_FAILURE'
export const NOT_FOUND ='NOT_FOUND'
export const CLEAR_SEARCH = ' CLEAR_SEARCH'
export const CLEAR_MOVIE ='CLEAR_MOVIE '
export const CHANGE_PAGE = 'CHANGE_PAGE'
const  API_KEY = '7f928a8d'
const MovieText = 'Harry'
const ShowText = 'Love'
const API_INIT_MOVIE = `https://www.omdbapi.com/?s=${MovieText}&apikey=${API_KEY}&type=movie&page=1`
const API_INIT_SHOW= `https://www.omdbapi.com/?s=${ShowText}&apikey=${API_KEY}&type=movie&page=1`

export const fecthMovie = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_MOVIE_REQUEST
    })
    try {
        const res = await axios.get(API_INIT_MOVIE)
        dispatch({
            type: FETCH_MOVIE_SUCCESS , 
            payload : res.data.Search 
        })
    } catch (error) {
        dispatch({
            type :FETCH_MOVIE_FAILURE  ,
            payload : error
        })
    }
}
export const fecthShow = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_SHOW_REQUEST
    })
    try {
        const res = await axios.get(API_INIT_MOVIE)
        dispatch({
            type: FETCH_SHOW_SUCCESS, 
            payload : res.data.Search 
        })
    } catch (error) {
        dispatch({
            type :FETCH_SHOW_FAILURE  ,
            payload : error
        })
    }
}
export const fetchSingleMovie = (id) => async (dispatch,getState)=>{
    
    dispatch({
        type : FETCH_ONE_MOVIE_REQUEST
    })
    try {
        const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=7f928a8d`)
        dispatch({
            type : FETCH_ONE_MOVIE_SUCCESS  , 
            payload : res.data ,    
           
        })
    } catch (error) {
        dispatch( {
            type: FETCH_ONE_MOVIE_FAILURE , 
            payload  : error ,
            movie : {}
        })
    }
}
export const clearMovie =()=>{
    return {
        type : CLEAR_MOVIE
    }
}
export const searchMovie = (movie,page) => async (dispatch, getState) => {
    const API_MOVIE = `https://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}&type=movie&page=${page}`
    dispatch({
        type: SEARCH_REQUEST
    })
    try {
        const res = await axios.get(API_MOVIE)
        if(res.data.Error){
            dispatch({
                type: NOT_FOUND
            })
        }else{
            dispatch({
            type: SEARCH_SUCCESS, 
            payload : {
                
               movie :  res.data.Search ,
               pageCount : res.data.totalResults
            }
        })
        }
        
    } catch (error) {
        dispatch({
            type :SEARCH_FAILURE ,
            payload : error
        })
    }
}
export const clearSearchMovie = ()=>{
    return {
        type :CLEAR_SEARCH , 
    }
}
export const changPage= ()=>async (dispatch ,getState )=>{

    
    return {

    }
}
