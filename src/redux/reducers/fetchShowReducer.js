import { FETCH_SHOW_FAILURE , FETCH_SHOW_REQUEST ,FETCH_SHOW_SUCCESS } from "../actions/actions";

const initialState ={
    shows : [] ,
    loading : false , 
    error : false
}
const fetchShowReducer = (state=initialState, action) => {
    
    switch (action.type) {

        case FETCH_SHOW_REQUEST:

            return {
                ...state , 
                loading :true
            };
        case FETCH_SHOW_SUCCESS:

            return {
                ...state , 
                loading :false ,
                shows : action.payload
            };
        case FETCH_SHOW_FAILURE:

            return {
                ...state , 
                loading :false ,
                error : action.payload , 
                shows : []
            };
        default:
            return state;
    }
}
export default fetchShowReducer