import { SEARCH_FAILURE, SEARCH_SUCCESS, SEARCH_REQUEST, CLEAR_SEARCH, NOT_FOUND } from "../actions/actions";
const initialState = {
    searchListing: [],
    loading: false,
    error: false,
    data : 0,
}
export const serachReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEARCH_REQUEST:

            return {
                ...state,
                loading: true
            };
        case SEARCH_SUCCESS:

            return {
                ...state,
                loading: false,
                searchListing: action.payload.movie , 
                data : action.payload.pageCount
            };
        case SEARCH_FAILURE:

            return {
                ...state,
                loading: false,
                searchListing: []
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                searchListing: [],
                error : false , 
            }
        case NOT_FOUND:
            
            return {
                ...state , 
                loading : false,
                error : true , 
            }

        default:
            return state;
    }
}