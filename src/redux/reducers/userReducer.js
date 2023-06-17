import {
    CREATE_USER_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
} from "../actions/actionsType";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        case LOGOUT_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    

        case CREATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case CREATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
};

export default userReducer;
