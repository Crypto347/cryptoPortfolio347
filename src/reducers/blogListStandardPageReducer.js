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
    postBlogContent: {},
    loading: false,
    error: null,
    inputForm: {},
    inputFormResponse: {
        item: {},
        loading: false,
        error: null
    },
    activeCategory: {
        activated: "init",
        categoryName: ""
    },
    activeItem: {
        activated: "init",
        itemName: ""
    },
    categoriesList: [],
    tagsList: [],
    activePageId: 1,
    pagesArray: []
}

const fetchBlogListStandardPageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchBlogListStandardPageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchBlogListStandardPageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const fetchPostBlogDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchPostBlogDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        postBlogContent: action.obj
    };
}

const fetchPostBlogDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        postBlogContent: {}
    };
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

const blogListCardCategoryIsHoverForBlogListStandardPage = (state, action) => {
    let updatedItems = [...state.items];

    let card = {...updatedItems.find(item => item.key === action.cardKey)};
    let cardIndex = updatedItems.findIndex(item => item.key === action.cardKey);

    let updatedCategories = [...card.categories];
    let category = {...updatedCategories.find(item => item.key === action.categoryKey), isHover: action.val};
    let categoryIndex = updatedCategories.findIndex(item => item.key === action.categoryKey);

    updatedCategories.splice(categoryIndex, 1, category);

    card = {...card, categories: updatedCategories}
    updatedItems.splice(cardIndex, 1, card);

    return {
        ...state,
        items: updatedItems
    }
}

const setSwiperStateForBlogListStandardPage = (state, action) => {

    let updatedItems = [...state.items];

    let updatedSwiper = {
        slides: action.slides,
        _slides: action._slides,
        activeIndex: action.activeIndex,
        translate: action.translate,
        transition: action.transition,
        rerender: action.rerender
    };
    
    let card = updatedItems.filter(item => item.key === action.cardKey);

    if(card.length !== 0){
        card = {...card[0], swiper: updatedSwiper};
        let cardIndex = updatedItems.findIndex(item => item.key === action.cardKey);
        
        updatedItems.splice(cardIndex, 1, card);
    }
    
    return {
        ...state,
        items: updatedItems
    };
}


const initBlogPagination = (state, action) => {
    let updatedPagesArray = Utility.getArrayOfEmptyVal(action.numOfPages);
    updatedPagesArray = updatedPagesArray.map((el, i) => {
        return {
            id: i + 1,
            active: i + 1 === state.activePageId ? true : false
        }
    })

    return {
        ...state,
        pagesArray: updatedPagesArray
    };
}

const activatePageNumberForBlogListStandardPage = (state, action) => {
    let updatedPagesArray = [...state.pagesArray];
    updatedPagesArray = updatedPagesArray.map((el, i) => {
        return {
            ...el,
            active: false
        }
    })

    let page = {...updatedPagesArray.find(item => item.id === action.activePageId), active: true};
    let pageIndex = updatedPagesArray.findIndex(item => item.id === action.activePageId);

    updatedPagesArray.splice(pageIndex, 1, page);
    
    return {
        ...state,
        activePageId: action.activePageId,
        pagesArray: updatedPagesArray
    };
}

const activateListStandardBlogItem = (state, action) => {
    let updatedActiveItem = {
        ...state.activeItem,
        activated: action.itemIsActive,
        itemName: action.itemName
    };

    // let updatedCategoryList = [...state.categoriesList];

    // updatedCategoryList = updatedCategoryList.map(el => {
    //     return {
    //         ...el,
    //         active: "off"
    //     }
    // })

    // let category = {...updatedCategoryList.find(item => item.key === action.categoryName), active: "on"};
    // let categoryIndex = updatedCategoryList.findIndex(item => item.key === action.categoryName);
    
    // updatedCategoryList.splice(categoryIndex, 1, category)

    return {
        ...state,
        activeItem: updatedActiveItem
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
        case actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_BEGIN:
            return fetchBlogListStandardPageDataBegin (state, action);
        case actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_SUCCESS:
            return fetchBlogListStandardPageDataSuccess (state, action); 
        case actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_FAILURE:
            return fetchBlogListStandardPageDataFailur (state, action);
        case actionTypes.FETCH_POST_BLOG_DATA_BEGIN:
            return fetchPostBlogDataBegin (state, action);
        case actionTypes.FETCH_POST_BLOG_DATA_SUCCESS:
            return fetchPostBlogDataSuccess (state, action); 
        case actionTypes.FETCH_POST_BLOG_DATA_FAILURE:
            return fetchPostBlogDataFailur (state, action);
        case actionTypes.BLOG_LIST_CARD_CATEGORY_IS_HOVER_FOR_BLOG_LIST_STANDARD_PAGE:
            return blogListCardCategoryIsHoverForBlogListStandardPage(state, action);
        case actionTypes.SET_SWIPER_STATE_FOR_BLOG_LIST_STANDARD_PAGE:
            return setSwiperStateForBlogListStandardPage(state, action);
        case actionTypes.INIT_BLOG_PAGINATION:
            return initBlogPagination (state, action);
        case actionTypes.ACTIVATE_PAGE_NUMBER_FOR_BLOG_LIST_STANDARD_PAGE:
            return activatePageNumberForBlogListStandardPage(state, action);
        case actionTypes.ACTIVATE_LIST_STANDARD_BLOG_ITEM:
            return activateListStandardBlogItem (state, action); 
        default: 
            return state;
    }
}

export default blogListStandardPageReducer;
