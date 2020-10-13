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
    loadingMoreData: false,
    errorMoreData: null,
    disableLoadMoreButton: false,
    categories: []
}

const fetchTwoColumnsPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchTwoColumnsPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchTwoColumnsPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const loadMoreTwoColumnsPageDataBegin = (state, action) => {
    return {
        ...state,
        loadingMoreData: true,
        errorMoreData: null
    };
}

const loadMoreTwoColumnsPageDataSuccess = (state, action) => {
    return {
        ...state,
        loadingMoreData: false,
        // items: action.array
    };
}

const loadMoreTwoColumnsPageDataFailur = (state, action) => {
    return {
        ...state,
        loadingMoreData: false,
        errorMoreData: action.err,
        items: [...state.items]
    };
}

const loadMoreDisableButtonStateForTwoColumnsPage = (state, action) => {
    return {
        ...state,
        disableLoadMoreButton: action.val
    };
}

const setCategoriesTwoColumnsPage = (state, action) => {
    return {
        ...state,
        categories: action.array
    };
}

const setTwoColumnsPageIsHoveringCategoryFromHeader = (state, action) => {
    let updatedCategories = [...state.categories];
    let categoryObj = {...updatedCategories.find(item => item.id === action.id), isHover: action.val};
    let categoryIndex = updatedCategories.findIndex(item => item.id === action.id);
    updatedCategories.splice(categoryIndex, 1, categoryObj);
    return {
        ...state,
        categories: updatedCategories
    };
}

const twoColumnsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TWO_COLUMNS_PAGE_BEGIN:
            return fetchTwoColumnsPageBegin (state, action); 
        case actionTypes.FETCH_TWO_COLUMNS_PAGE_SUCCESS:
            return fetchTwoColumnsPageSuccess (state, action);
        case actionTypes.FETCH_TWO_COLUMNS_PAGE_FAILURE:
            return fetchTwoColumnsPageFailur(state, action);
        case actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_BEGIN:
            return loadMoreTwoColumnsPageDataBegin (state, action); 
        case actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_SUCCESS:
            return loadMoreTwoColumnsPageDataSuccess (state, action);
        case actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_FAILURE:
            return loadMoreTwoColumnsPageDataFailur(state, action);
        case actionTypes.LOAD_MORE_DISABLE_BUTTON_STATE_FOR_TWO_COLUMNS_PAGE:
            return loadMoreDisableButtonStateForTwoColumnsPage(state, action);
        case actionTypes.SET_CATEGORIES_TWO_COLUMNS_PAGE:
            return setCategoriesTwoColumnsPage(state, action);
        case actionTypes.SET_TWO_COLUMNS_PAGE_IS_HOVERING_CATEGORY_FROM_HEADER:
            return setTwoColumnsPageIsHoveringCategoryFromHeader(state, action);
        default: 
            return state;
    }
}

export default twoColumnsPageReducer;
