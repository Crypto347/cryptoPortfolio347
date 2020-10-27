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
