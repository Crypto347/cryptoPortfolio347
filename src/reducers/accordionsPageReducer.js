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
        ...state.section1Data,
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
        ...state.section1Data,
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

const fetchAccordionsPageSection2DataBegin = (state, action) => {
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

const fetchAccordionsPageSection2DataSuccess = (state, action) => {
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

const fetchAccordionsPageSection2DataFailur = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const setIsHoverSection2ItemAccordionsPage = (state, action) => {
    let updatedItems = [...state.section2Data.items];

    let item = {
        ...updatedItems
        .find(item => item.id === action.id), isHover: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            items: updatedItems
        }
    };
}

const setActivitySection1ItemAccordionsPage = (state, action) => {
    let updatedItems = [...state.section1Data.items];

    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            active: false
        }
    })
    
    let item = {
        ...updatedItems
        .find(item => item.id === action.id), active: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            items: updatedItems
        }
    };
}

const setActivitySection2ItemAccordionsPage = (state, action) => {
    let updatedItems = [...state.section2Data.items];

    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            active: false
        }
    })

    let item = {
        ...updatedItems
        .find(item => item.id === action.id), active: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            items: updatedItems
        }
    };
}

const accordionsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_BEGIN:
            return fetchAccordionsPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchAccordionsPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_FAILURE:
            return fetchAccordionsPageSection1DataFailur(state, action);
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_2_DATA_BEGIN:
            return fetchAccordionsPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchAccordionsPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_2_DATA_FAILURE:
            return fetchAccordionsPageSection2DataFailur(state, action);
        case actionTypes.SET_IS_HOVER_SECTION_2_ITEM_ACCORDIONS_PAGE:
            return setIsHoverSection2ItemAccordionsPage(state, action);
        case actionTypes.SET_ACTIVITY_SECTION_1_ITEM_ACCORDION_PAGE:
            return setActivitySection1ItemAccordionsPage(state, action);
        case actionTypes.SET_ACTIVITY_SECTION_2_ITEM_ACCORDION_PAGE:
            return setActivitySection2ItemAccordionsPage(state, action);
        default: 
            return state;
    }
}

export default accordionsPageReducer;
