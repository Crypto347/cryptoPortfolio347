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

const fetchPortfolioGalleryPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchPortfolioGalleryPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchPortfolioGalleryPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}


const section1Reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_BEGIN:
            return fetchPortfolioGalleryPageBegin (state, action); 
        case actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_SUCCESS:
            return fetchPortfolioGalleryPageSuccess (state, action);
        case actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_FAILURE:
            return fetchPortfolioGalleryPageFailur(state, action);
        default: 
            return state;
    }
}

export default section1Reducer;
