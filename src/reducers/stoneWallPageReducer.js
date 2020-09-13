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

const fetchStoneWallPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchStoneWallPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchStoneWallPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const stoneWallPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STONE_WALL_PAGE_BEGIN:
            return fetchStoneWallPageBegin (state, action); 
        case actionTypes.FETCH_STONE_WALL_PAGE_SUCCESS:
            return fetchStoneWallPageSuccess (state, action);
        case actionTypes.FETCH_STONE_WALL_PAGE_FAILURE:
            return fetchStoneWallPageFailur(state, action);
        default: 
            return state;
    }
}

export default stoneWallPageReducer;
