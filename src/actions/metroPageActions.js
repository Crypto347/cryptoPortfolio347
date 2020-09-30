import * as actionTypes from '../constants/actionTypes';

export function fetchMetroPageBegin() {
    return { 
        type: actionTypes.FETCH_METRO_PAGE_BEGIN
    };
};

export function fetchMetroPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_METRO_PAGE_SUCCESS,
        array: array
    };
};

export function fetchMetroPageFailur(err) {
    return { 
        type: actionTypes.FETCH_METRO_PAGE_FAILURE,
        err: err
    };
};

export function setMetroPageIsHoveringCategory(val, pathOfIds) {
    return { 
        type: actionTypes.SET_METRO_PAGE_IS_HOVERING_CATEGORY,
        val: val,
        pathOfIds: pathOfIds
    };
};

export function updateItemsStyleValues(image, obj) {
    return { 
        type: actionTypes.UPDATED_ITEMS_STYLE_VALUES,
        image: image,
        obj: obj
    };
};
