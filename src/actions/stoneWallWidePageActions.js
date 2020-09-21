import * as actionTypes from '../constants/actionTypes';

export function fetchStoneWallWidePageBegin() {
    return { 
        type: actionTypes.FETCH_STONE_WALL_WIDE_PAGE_BEGIN
    };
};

export function fetchStoneWallWidePageSuccess(array) {
    return { 
        type: actionTypes.FETCH_STONE_WALL_WIDE_PAGE_SUCCESS,
        array: array
    };
};

export function fetchStoneWallWidePageFailur(err) {
    return { 
        type: actionTypes.FETCH_STONE_WALL_WIDE_PAGE_FAILURE,
        err: err
    };
};
