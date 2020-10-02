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
    itemsStyleValues: {
        img1: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }, 
        img2: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }, 
        img3: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img4: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img5: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img6: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img7: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img8: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img9: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img10: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        },
        img11: {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        }
    }
}

const fetchStoneWallPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchStoneWallPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchStoneWallPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const updateItemsStyleValuesStoneWallPage = (state, action) => {
    let updatedItemsStyleValues = {...state.itemsStyleValues}
    switch(action.image) {
        case 'img1':
            updatedItemsStyleValues['img1'].width = action.obj.width;
            updatedItemsStyleValues['img1'].height = action.obj.height;
            updatedItemsStyleValues['img1'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img1'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img1'].transition = action.obj.transition;
            break;
        case 'img2':
            updatedItemsStyleValues['img2'].width = action.obj.width;
            updatedItemsStyleValues['img2'].height = action.obj.height;
            updatedItemsStyleValues['img2'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img2'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img2'].transition = action.obj.transition;
            break;
        case 'img3':
            updatedItemsStyleValues['img3'].width = action.obj.width;
            updatedItemsStyleValues['img3'].height = action.obj.height;
            updatedItemsStyleValues['img3'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img3'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img3'].transition = action.obj.transition;
            break;
        case 'img4':
            updatedItemsStyleValues['img4'].width = action.obj.width;
            updatedItemsStyleValues['img4'].height = action.obj.height;
            updatedItemsStyleValues['img4'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img4'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img4'].transition = action.obj.transition;
            break;
        case 'img5':
            updatedItemsStyleValues['img5'].width = action.obj.width;
            updatedItemsStyleValues['img5'].height = action.obj.height;
            updatedItemsStyleValues['img5'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img5'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img5'].transition = action.obj.transition;
            break;
        case 'img6':
            updatedItemsStyleValues['img6'].width = action.obj.width;
            updatedItemsStyleValues['img6'].height = action.obj.height;
            updatedItemsStyleValues['img6'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img6'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img6'].transition = action.obj.transition;
            break;
        case 'img7':
            updatedItemsStyleValues['img7'].width = action.obj.width;
            updatedItemsStyleValues['img7'].height = action.obj.height;
            updatedItemsStyleValues['img7'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img7'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img7'].transition = action.obj.transition;
            break;
        case 'img8':
            updatedItemsStyleValues['img8'].width = action.obj.width;
            updatedItemsStyleValues['img8'].height = action.obj.height;
            updatedItemsStyleValues['img8'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img8'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img8'].transition = action.obj.transition;
            break;
        case 'img9':
            updatedItemsStyleValues['img9'].width = action.obj.width;
            updatedItemsStyleValues['img9'].height = action.obj.height;
            updatedItemsStyleValues['img9'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img9'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img9'].transition = action.obj.transition;
            break;
        case 'img10':
            updatedItemsStyleValues['img10'].width = action.obj.width;
            updatedItemsStyleValues['img10'].height = action.obj.height;
            updatedItemsStyleValues['img10'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img10'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img10'].transition = action.obj.transition;
            break;
        case 'img11':
            updatedItemsStyleValues['img11'].width = action.obj.width;
            updatedItemsStyleValues['img11'].height = action.obj.height;
            updatedItemsStyleValues['img11'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img11'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img11'].transition = action.obj.transition;
            break;
    }
    return {
        ...state,
        itemsStyleValues: updatedItemsStyleValues
    };
}

const stoneWallPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STONE_WALL_PAGE_BEGIN:
            return fetchStoneWallPageBegin (state, action); 
        case actionTypes.FETCH_STONE_WALL_PAGE_SUCCESS:
            return fetchStoneWallPageSuccess (state, action);
        case actionTypes.FETCH_STONE_WALL_PAGE_FAILURE:
            return fetchStoneWallPageFailur(state, action);
        case actionTypes.UPDATED_ITEMS_STYLE_VALUES_STONE_WALL_PAGE:
            return updateItemsStyleValuesStoneWallPage(state, action);
        default: 
            return state;
    }
}

export default stoneWallPageReducer;
