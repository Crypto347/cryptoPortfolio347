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
    section1Data: {
        items: [],
        loading: false,
        error: null
    },
    section2Data: {
        items: [],
        loading: false,
        error: null
    }
}

const fetchAccordionsPageSection1DataBegin = (state, action) => {
    let updateSection1Data = {
        ...state.updateSection1Data,
        loading: true,
        error: null
    };

    return {
        ...state,
       section1Data: updateSection1Data
    };
}

const fetchAccordionsPageSection1DataSuccess = (state, action) => {
    let updateSection1Data = {
        ...state.updateSection1Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchAccordionsPageSection1DataFailur = (state, action) => {
    let updateSection1Data = {
        ...state.updateSection1Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section1Data: updateSection1Data
    };
}


const accordionsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SECTION_1_BEGIN:
            return fetchAccordionsPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_SECTION_1_SUCCESS:
            return fetchAccordionsPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_SECTION_1_FAILURE:
            return fetchAccordionsPageSection1DataFailur(state, action);
        default: 
            return state;
    }
}

export default accordionsPageReducer;
