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

const fetchMetroPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchMetroPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchMetroPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

// const setStoneWallWidePageIsHoveringCategory = (state, action) => {
//     let updatedItems = [...state.items];

//     let category = {
//         ...updatedItems
//         .find(item => item.id === action.pathOfIds[0]).categories
//         .find(item => item.id === action.pathOfIds[1]), isHover: action.val};

//     let categoryIndex = updatedItems
//         .find(item => item.id === action.pathOfIds[0]).categories
//         .findIndex(item => item.id === action.pathOfIds[1]);
        
//         updatedItems
//         .find(item => item.id === action.pathOfIds[0]).categories
//         .splice(categoryIndex, 1, category);

//     return {
//         ...state,
//         items: updatedItems
//     };
// }

const metroPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_METRO_PAGE_BEGIN:
            return fetchMetroPageBegin (state, action); 
        case actionTypes.FETCH_METRO_PAGE_SUCCESS:
            return fetchMetroPageSuccess (state, action);
        case actionTypes.FETCH_METRO_PAGE_FAILURE:
            return fetchMetroPageFailur(state, action);
        // case actionTypes.SET_STONE_WALL_WIDE_PAGE_IS_HOVERING_CATEGORY:
        //     return setStoneWallWidePageIsHoveringCategory(state, action);
        default: 
            return state;
    }
}

export default metroPageReducer;
