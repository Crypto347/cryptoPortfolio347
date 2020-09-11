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

const fetchOverlayWithInfoPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchOverlayWithInfoPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchOverlayWithInfoPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const overlayWithInfoPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_OVERLAY_WITH_INFO_PAGE_BEGIN:
            return fetchOverlayWithInfoPageBegin (state, action); 
        case actionTypes.FETCH_OVERLAY_WITH_INFO_PAGE_SUCCESS:
            return fetchOverlayWithInfoPageSuccess (state, action);
        case actionTypes.FETCH_OVERLAY_WITH_INFO_PAGE_FAILURE:
            return fetchOverlayWithInfoPageFailur(state, action);
        default: 
            return state;
    }
}

export default overlayWithInfoPageReducer;
