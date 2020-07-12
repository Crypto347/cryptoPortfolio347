import * as actionTypes from '../constants/actionTypes';

export function initMenuItems(array) {
    return { 
        type: actionTypes.INIT_MENU_ITEMS,
        array: array
    };
};

export function photoViewerOpen(val, array) {
    return { 
        type: actionTypes.PHOTO_VIEWER_OPEN,
        val: val,
        array: array
    };
};

