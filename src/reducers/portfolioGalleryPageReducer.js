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
    itemsCooradinateRange: [
        {
            id: 1,
            updated: false
        },
        {
            id: 2,
            updated: false
        },
        {
            id: 3,
            updated: false
        },
        {
            id: 4,
            updated: false
        },
        {
            id: 5,
            updated: false
        },
        {
            id: 6,
            updated: false
        },
        {
            id: 7,
            updated: false
        },
        {
            id: 8,
            updated: false
        },
        {
            id: 9,
            updated: false
        },
        {
            id: 10,
            updated: false
        },
        {
            id: 11,
            updated: false
        },
        {
            id: 12,
            updated: false
        },
        {
            id: 13,
            updated: false
        },
        {
            id: 14,
            updated: false
        },
        {
            id: 15,
            updated: false
        },
        {
            id: 16,
            updated: false
        },
        {
            id: 17,
            updated: false
        },
        {
            id: 18,
            updated: false
        }
    ],
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

const rememberCoordinateRangeForPortfolioGalleryPage = (state, action) => {
    let updatedItemsCooradinateRange = [...state.itemsCooradinateRange];
    
    let objIndex = updatedItemsCooradinateRange.findIndex(item => item.id === action.id);
    updatedItemsCooradinateRange.splice(objIndex, 1, action.coordinateRange);

    return {
        ...state,
        itemsCooradinateRange: updatedItemsCooradinateRange
    };
}

const forgetCoordinateRangeForPortfolioGalleryPage = (state, action) => {
    return {
        ...state,
        itemsCooradinateRange: action.arr
    };
}

const setPortfolioGalleryPageIsHoveringDesignType = (state, action) => {
    let updatedItems = [...state.items];

    let item = {...updatedItems.find(item => item.id === action.id), designTypeIsHover: action.val};
    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        items: updatedItems
    };
}

const setPortfolioGalleryPageIsHoveringArrow = (state, action) => {
    let updatedItems = [...state.items];

    let item = {...updatedItems.find(item => item.id === action.id), arrowIsHovering: action.val};
    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        items: updatedItems
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
        case actionTypes.REMEMBER_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE:
            return rememberCoordinateRangeForPortfolioGalleryPage(state, action);
        case actionTypes.FORGET_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE:
            return forgetCoordinateRangeForPortfolioGalleryPage(state, action);
        case actionTypes.SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_DESIGN_TYPE:
            return setPortfolioGalleryPageIsHoveringDesignType(state, action);
        case actionTypes.SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_ARROW:
            return setPortfolioGalleryPageIsHoveringArrow(state, action);
        default: 
            return state;
    }
}

export default section1Reducer;
