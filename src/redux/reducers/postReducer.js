import { CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "../actions/actionsType"

const initialState ={
    allPosts: [],
    loading: false,
    error: null,
}


const postReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading:false,
                allPosts: action.payload,
                error:null,
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload,
            }
        case CREATE_POST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case CREATE_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        
        default:
            return state;
    }

}

export default postReducer;