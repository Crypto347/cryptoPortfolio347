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
    },
    section3Data: {
        items: [],
        loading: false,
        error: null
    },
}

const fetchTestimonialsPageSection1DataBegin = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchTestimonialsPageSection1DataSuccess = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchTestimonialsPageSection1DataFailur = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchTestimonialsPageSection2DataBegin = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchTestimonialsPageSection2DataSuccess = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchTestimonialsPageSection2DataFailur = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchTestimonialsPageSection3DataBegin = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const fetchTestimonialsPageSection3DataSuccess = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const fetchTestimonialsPageSection3DataFailur = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const testimonialsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_BEGIN:
            return fetchTestimonialsPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchTestimonialsPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_FAILURE:
            return fetchTestimonialsPageSection1DataFailur(state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_BEGIN:
            return fetchTestimonialsPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchTestimonialsPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_FAILURE:
            return fetchTestimonialsPageSection2DataFailur(state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_BEGIN:
            return fetchTestimonialsPageSection3DataBegin (state, action); 
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_SUCCESS:
            return fetchTestimonialsPageSection3DataSuccess (state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_FAILURE:
            return fetchTestimonialsPageSection3DataFailur(state, action);
        default: 
            return state;
    }
}

export default testimonialsPageReducer;
