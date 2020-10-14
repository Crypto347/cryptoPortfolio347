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
    categories: [],
    itemsStyleValues: {
        img1: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }, 
        img2: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }, 
        img3: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img4: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img5: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img6: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }, 
        img7: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }, 
        img8: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img9: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img10: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img11: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img12: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img13: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img14: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }, 
        img15: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }, 
        img16: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img17: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img18: {
            width: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }
    }
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

const updateItemsStyleValuesTwoColumnsPage = (state, action) => {
    let updatedItemsStyleValues = {...state.itemsStyleValues}
    switch(action.image) {
        case 'img1':
            updatedItemsStyleValues['img1'].width = action.obj.width;
            updatedItemsStyleValues['img1'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img1'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img1'].transition = action.obj.transition;
            break;
        case 'img2':
            updatedItemsStyleValues['img2'].width = action.obj.width;
            updatedItemsStyleValues['img2'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img2'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img2'].transition = action.obj.transition;
            break;
        case 'img3':
            updatedItemsStyleValues['img3'].width = action.obj.width;
            updatedItemsStyleValues['img3'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img3'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img3'].transition = action.obj.transition;
            break;
        case 'img4':
            updatedItemsStyleValues['img4'].width = action.obj.width;
            updatedItemsStyleValues['img4'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img4'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img4'].transition = action.obj.transition;
            break;
        case 'img5':
            updatedItemsStyleValues['img5'].width = action.obj.width;
            updatedItemsStyleValues['img5'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img5'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img5'].transition = action.obj.transition;
            break;
        case 'img6':
            updatedItemsStyleValues['img6'].width = action.obj.width;
            updatedItemsStyleValues['img6'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img6'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img6'].transition = action.obj.transition;
            break;
        case 'img7':
            updatedItemsStyleValues['img7'].width = action.obj.width;
            updatedItemsStyleValues['img7'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img7'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img7'].transition = action.obj.transition;
            break;
        case 'img8':
            updatedItemsStyleValues['img8'].width = action.obj.width;
            updatedItemsStyleValues['img8'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img8'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img8'].transition = action.obj.transition;
            break;
        case 'img9':
            updatedItemsStyleValues['img9'].width = action.obj.width;
            updatedItemsStyleValues['img9'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img9'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img9'].transition = action.obj.transition;
            break;
        case 'img10':
            updatedItemsStyleValues['img10'].width = action.obj.width;
            updatedItemsStyleValues['img10'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img10'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img10'].transition = action.obj.transition;
            break;
        case 'img11':
            updatedItemsStyleValues['img11'].width = action.obj.width;
            updatedItemsStyleValues['img11'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img11'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img11'].transition = action.obj.transition;
            break;
        case 'img12':
            updatedItemsStyleValues['img12'].width = action.obj.width;
            updatedItemsStyleValues['img12'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img12'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img12'].transition = action.obj.transition;
            break;
        case 'img13':
            updatedItemsStyleValues['img13'].width = action.obj.width;
            updatedItemsStyleValues['img13'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img13'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img13'].transition = action.obj.transition;
            break;
        case 'img14':
            updatedItemsStyleValues['img14'].width = action.obj.width;
            updatedItemsStyleValues['img14'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img14'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img14'].transition = action.obj.transition;
            break;
        case 'img15':
            updatedItemsStyleValues['img15'].width = action.obj.width;
            updatedItemsStyleValues['img15'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img15'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img15'].transition = action.obj.transition;
            break;
        case 'img16':
            updatedItemsStyleValues['img16'].width = action.obj.width;
            updatedItemsStyleValues['img16'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img16'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img16'].transition = action.obj.transition;
            break;
        case 'img17':
            updatedItemsStyleValues['img17'].width = action.obj.width;
            updatedItemsStyleValues['img17'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img17'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img17'].transition = action.obj.transition;
            break;
        case 'img18':
            updatedItemsStyleValues['img18'].width = action.obj.width;
            updatedItemsStyleValues['img18'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img18'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img18'].transition = action.obj.transition;
            break;
    }
    return {
        ...state,
        itemsStyleValues: updatedItemsStyleValues
    };
}


const setActivityOfTwoColumnsPageCategoriesFromHeader = (state, action) => {
    let updatedCategories = [...state.categories];
    updatedCategories = updatedCategories.map(el => {
        return {
            ...el,
            active: false
        }
    })
    let categoryObj = {...updatedCategories.find(item => item.key === action.key), active: true};
    let categoryIndex = updatedCategories.findIndex(item => item.key === action.key);
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
        case actionTypes.UPDATED_ITEMS_STYLE_VALUES_TWO_COLUMNS_PAGE:
            return updateItemsStyleValuesTwoColumnsPage(state, action);
        case actionTypes.SET_ACTIVITY_OF_TWO_COLUMNS_PAGE_CATEGORIES_FROM_HEADER:
            return setActivityOfTwoColumnsPageCategoriesFromHeader(state, action);
        default: 
            return state;
    }
}

export default twoColumnsPageReducer;
