/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Utility
*/

import * as Utility from "../utility";
import uuid from "uuid";

/**
* Initial State
*/

export const initialState = {
    items: [],
    loading: false,
    error: null
}

const fetcharchieveBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetcharchieveSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetcharchieveFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const archieveReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ARCHIEVE_BEGIN:
            return fetcharchieveBegin (state, action); 
        case actionTypes.FETCH_ARCHIEVE_SUCCESS:
            return fetcharchieveSuccess (state, action);
        case actionTypes.FETCH_ARCHIEVE_FAILURE:
            return fetcharchieveFailur(state, action);
        default: 
            return state;
    }
}

export default archieveReducer;
