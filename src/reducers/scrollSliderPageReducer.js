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

const fetchScrollSliderPageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchScrollSliderPageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchScrollSliderPageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const scrollSliderPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_BEGIN:
            return fetchScrollSliderPageDataBegin (state, action); 
        case actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_SUCCESS:
            return fetchScrollSliderPageDataSuccess (state, action);
        case actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_FAILURE:
            return fetchScrollSliderPageDataFailur(state, action);
        default: 
            return state;
    }
}

export default scrollSliderPageReducer;
