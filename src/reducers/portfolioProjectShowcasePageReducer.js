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

const fetchPortfolioProjectShowcasePageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchPortfolioProjectShowcasePageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchPortfolioProjectShowcasePageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const setPortfolioProjectShowcasePageIsHoveringCategory = (state, action) => {
    let updatedItems = [...state.items];

    let updatedItem = {...updatedItems.find(item => item.key === action.key)};
    let updatedItemIndex = updatedItems.findIndex(item => item.key === action.key);

    let category = {...updatedItem.categories.find(item => item.id === action.id), isHover: action.val};
    let categoryIndex = updatedItem.categories.findIndex(item => item.id === action.id);
    
    updatedItem.categories.splice(categoryIndex, 1, category);
    updatedItems.splice(updatedItemIndex, 1, updatedItem);

    return {
        ...state,
        items: updatedItems
    };
}

const setPortfolioProjectShowcasePageIsHoveringTag = (state, action) => {
    let updatedItems = [...state.items];

    let updatedItem = {...updatedItems.find(item => item.key === action.key)};
    let updatedItemIndex = updatedItems.findIndex(item => item.key === action.key);

    let tag = {...updatedItem.tags.find(item => item.id === action.id), isHover: action.val};
    let tagIndex = updatedItem.tags.findIndex(item => item.id === action.id);
    
    updatedItem.tags.splice(tagIndex, 1, tag);
    updatedItems.splice(updatedItemIndex, 1, updatedItem);
    
    return {
        ...state,
        items: updatedItems
    };
}

const updateStyleValuesPortfolioProjectShowcasePage = (state, action) => {
    let updatedItems = [...state.items];

    let updatedItem = {...updatedItems.find(item => item.key === action.key)};
    let updatedItemIndex = updatedItems.findIndex(item => item.key === action.key);

    updatedItem.backgroundImage.style.width = action.obj.width;
    updatedItem.backgroundImage.style.transition = action.obj.transition;
    updatedItem.backgroundImage.style.rendered = action.obj.rendered;

    updatedItems.splice(updatedItemIndex, 1, updatedItem);
    
    return {
        ...state,
        items: updatedItems
    };
}

const portfolioProjectShowcasePageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PORTFOLIO_PROJECT_SHOWCASE_PAGE_DATA_BEGIN:
            return fetchPortfolioProjectShowcasePageDataBegin (state, action); 
        case actionTypes.FETCH_PORTFOLIO_PROJECT_SHOWCASE_PAGE_DATA_SUCCESS:
            return fetchPortfolioProjectShowcasePageDataSuccess (state, action);
        case actionTypes.FETCH_PORTFOLIO_PROJECT_SHOWCASE_PAGE_DATA_FAILURE:
            return fetchPortfolioProjectShowcasePageDataFailur(state, action);
        case actionTypes.SET_PORTFOLIO_PROJECT_SHOWCASE_PAGE_IS_HOVERING_CATEGORY:
            return setPortfolioProjectShowcasePageIsHoveringCategory(state, action);
        case actionTypes.SET_PORTFOLIO_PROJECT_SHOWCASE_PAGE_IS_HOVERING_TAG:
            return setPortfolioProjectShowcasePageIsHoveringTag(state, action);
        case actionTypes.UPDATED_STYLE_VALUES_PORTFOLIO_PROJECT_SHOWCASE_PAGE:
            return updateStyleValuesPortfolioProjectShowcasePage(state, action);
        default: 
            return state;
    }
}

export default portfolioProjectShowcasePageReducer;
