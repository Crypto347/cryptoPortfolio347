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
    error: null,
}

const fetchStandardPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchStandardPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchStandardPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const standardPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STANDARD_PAGE_BEGIN:
            return fetchStandardPageBegin (state, action); 
        case actionTypes.FETCH_STANDARD_PAGE_SUCCESS:
            return fetchStandardPageSuccess (state, action);
        case actionTypes.FETCH_STANDARD_PAGE_FAILURE:
            return fetchStandardPageFailur(state, action);
        default: 
            return state;
    }
}

export default standardPageReducer;
