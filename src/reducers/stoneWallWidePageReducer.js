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

const fetchStoneWallWidePageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchStoneWallWidePageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchStoneWallWidePageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const stoneWallWidePageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STONE_WALL_WIDE_PAGE_BEGIN:
            return fetchStoneWallWidePageBegin (state, action); 
        case actionTypes.FETCH_STONE_WALL_WIDE_PAGE_SUCCESS:
            return fetchStoneWallWidePageSuccess (state, action);
        case actionTypes.FETCH_STONE_WALL_WIDE_PAGE_FAILURE:
            return fetchStoneWallWidePageFailur(state, action);
        default: 
            return state;
    }
}

export default stoneWallWidePageReducer;
