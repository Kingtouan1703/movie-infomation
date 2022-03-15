import { FETCH_MOVIE_FAILURE, FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS } from "../actions/actions";



const initialState = {
    movie: [],
    loading: false,
    error: false
}
const fetchMovieReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_MOVIE_REQUEST:

            return {
                ...state,
                loading: true
            };
        case FETCH_MOVIE_SUCCESS:

            return {
                ...state,
                loading: false,
                movie: action.payload
            };
        case FETCH_MOVIE_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload,
                movie: []
            };
        default:
            return state;
    }
}
export default fetchMovieReducer 