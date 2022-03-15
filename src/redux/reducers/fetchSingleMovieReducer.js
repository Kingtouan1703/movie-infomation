
import { FETCH_ONE_MOVIE_FAILURE, FETCH_ONE_MOVIE_SUCCESS, FETCH_ONE_MOVIE_REQUEST, CLEAR_MOVIE } from "../actions/actions";
const initialState = {
    movie: {},
    loading: false,
    error: false,
}

const fetchSingleMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ONE_MOVIE_REQUEST:

            return {
                ...state, 
                loading : true
            };
        case FETCH_ONE_MOVIE_SUCCESS:

            return {
                ...state , 
                movie: action.payload , 
                loading : false  , 
            };
        case FETCH_ONE_MOVIE_FAILURE:

            return {
                ...state , 
                error : action.payload , 
                loading : false  , 
            };
            case CLEAR_MOVIE:

                return {
                    ...state , 
                   movie : {}
                };
        default:
            return state;
    }
}
export default fetchSingleMovieReducer