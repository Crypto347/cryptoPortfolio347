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

const fetchArchiveBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchArchiveSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchArchiveFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const archiveReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ARCHIVE_BEGIN:
            return fetchArchiveBegin (state, action); 
        case actionTypes.FETCH_ARCHIVE_SUCCESS:
            return fetchArchiveSuccess (state, action);
        case actionTypes.FETCH_ARCHIVE_FAILURE:
            return fetchArchiveFailur(state, action);
        default: 
            return state;
    }
}

export default archiveReducer;
