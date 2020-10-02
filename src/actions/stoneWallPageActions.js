import * as actionTypes from '../constants/actionTypes';

export function fetchStoneWallPageBegin() {
    return { 
        type: actionTypes.FETCH_STONE_WALL_PAGE_BEGIN
    };
};

export function fetchStoneWallPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_STONE_WALL_PAGE_SUCCESS,
        array: array
    };
};

export function fetchStoneWallPageFailur(err) {
    return { 
        type: actionTypes.FETCH_STONE_WALL_PAGE_FAILURE,
        err: err
    };
};

export function updateItemsStyleValuesStoneWallPage(image, obj) {
    return { 
        type: actionTypes.UPDATED_ITEMS_STYLE_VALUES_STONE_WALL_PAGE,
        image: image,
        obj: obj
    };
};