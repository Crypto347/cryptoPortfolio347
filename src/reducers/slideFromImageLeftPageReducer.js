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

const fetchSlideFromImageLeftPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchSlideFromImageLeftPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchSlideFromImageLeftPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const slideFromImageLeftPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_BEGIN:
            return fetchSlideFromImageLeftPageBegin (state, action); 
        case actionTypes.FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_SUCCESS:
            return fetchSlideFromImageLeftPageSuccess (state, action);
        case actionTypes.FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_FAILURE:
            return fetchSlideFromImageLeftPageFailur(state, action);
        default: 
            return state;
    }
}

export default slideFromImageLeftPageReducer;
