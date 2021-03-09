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
    inputForm: {},
    inputFormResponse: {
        item: {},
        loading: false,
        error: null
    },
    activeCategory: {
        activated: false,
        categoryName: ""
    },
    categoriesList: [],
    tagsList: []
}

const initInputFormForBlogListStandardPage = (state, action) => {
    return {
        ...state,
        inputForm: action.obj
    }
} 

const activateListStandardBlogCategory = (state, action) => {
    let updatedActiveCategory = {
        ...state.activeCategory,
        activated: action.categoryIsActive,
        categoryName: action.categoryName
    };

    let updatedCategoryList = [...state.categoriesList];

    updatedCategoryList = updatedCategoryList.map(el => {
        return {
            ...el,
            active: "off"
        }
    })

    let category = {...updatedCategoryList.find(item => item.key === action.categoryName), active: "on"};
    let categoryIndex = updatedCategoryList.findIndex(item => item.key === action.categoryName);
    
    updatedCategoryList.splice(categoryIndex, 1, category)
    console.log(updatedCategoryList)

    return {
        ...state,
        activeCategory: updatedActiveCategory,
        categoriesList: updatedCategoryList
    }
} 

const initCategoriesForBlogListStandardPage = (state, action) => {
    return {
        ...state,
        categoriesList: action.array
    }
}

const initTagsForBlogListStandardPage = (state, action) => {
    return {
        ...state,
        tagsList: action.array
    }
}

const blogListStandardPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INIT_INPUT_FORM_FOR_BLOG_LIST_STANDARD_PAGE:
            return initInputFormForBlogListStandardPage (state, action);
        case actionTypes.ACTIVATE_LIST_STANDARD_BLOG_CATEGORY:
            return activateListStandardBlogCategory (state, action);
        case actionTypes.INIT_CATEGORIES_FOR_BLOG_LISTS_STANDARD_PAGE:
            return initCategoriesForBlogListStandardPage (state, action);
        case actionTypes.INIT_TAGS_FOR_BLOG_LISTS_STANDARD_PAGE:
            return initTagsForBlogListStandardPage (state, action);
        // case actionTypes.SUBMIT_CONTACT_FORM_PAGE:
        //     return submitContactFormPage (state, action);
        // case actionTypes.FETCH_GET_DIRECTION_CONTACT_FORM_PAGE_BEGIN:
        //     return fetchGetDirectionContactFormPageBegin (state, action); 
        // case actionTypes.FETCH_GET_DIRECTION_CONTACT_FORM_PAGE_SUCCESS:
        //     return fetchGetDirectionContactFormPageSuccess (state, action);
        // case actionTypes.FETCH_GET_DIRECTION_CONTACT_FORM_PAGE_FAILURE:
        //     return fetchGetDirectionContactFormPageFailur(state, action);
        // case actionTypes.FETCH_SUBSCRIBE_CONTACT_FORM_PAGE_BEGIN:
        //     return fetchSubscribeContactFormPageBegin (state, action); 
        // case actionTypes.FETCH_SUBSCRIBE_CONTACT_FORM_PAGE_SUCCESS:
        //     return fetchSubscribeContactFormPageSuccess (state, action);
        // case actionTypes.FETCH_SUBSCRIBE_CONTACT_FORM_PAGE_FAILURE:
        //     return fetchSubscribeContactFormPageFailur(state, action);
        // case actionTypes.FETCH_SUBMIT_CONTACT_FORM_PAGE_BEGIN:
        //     return fetchSubmitContactFormPageBegin (state, action); 
        // case actionTypes.FETCH_SUBMIT_CONTACT_FORM_PAGE_SUCCESS:
        //     return fetchSubmitContactFormPageSuccess (state, action);
        // case actionTypes.FETCH_SUBMIT_CONTACT_FORM_PAGE_FAILURE:
        //     return fetchSubmitContactFormPageFailur(state, action);
        default: 
            return state;
    }
}

export default blogListStandardPageReducer;
