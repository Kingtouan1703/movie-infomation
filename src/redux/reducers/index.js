import { combineReducers } from "redux";
import fetchMovieReducer from "./fetchMovieReducer";
import fetchShowReducer from "./fetchShowReducer";
import fetchSingleMovieReducer from "./fetchSingleMovieReducer";
import { serachReducer } from "./searchReducer";
export const allReducers = combineReducers({
    movie: fetchMovieReducer,
    show: fetchShowReducer,
    singleMovie: fetchSingleMovieReducer,
    search: serachReducer,
  
})