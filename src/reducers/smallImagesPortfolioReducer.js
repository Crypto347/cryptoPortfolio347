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
    item: {},
    loading: false,
    error: null
}

const fetchSmallImagesPortfolioBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchSmallImagesPortfolioSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        item: action.obj
    };
}

const fetchSmallImagesPortfolioFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        item: {}
    };
}


const smallImagesPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_BEGIN:
            return fetchSmallImagesPortfolioBegin (state, action); 
        case actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_SUCCESS:
            return fetchSmallImagesPortfolioSuccess (state, action);
        case actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_FAILURE:
            return fetchSmallImagesPortfolioFailur(state, action);
        default: 
            return state;
    }
}

export default smallImagesPortfolioReducer;
