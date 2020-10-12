import * as actionTypes from '../constants/actionTypes';

export function fetchTwoColumnsPageBegin() {
    return { 
        type: actionTypes.FETCH_TWO_COLUMNS_PAGE_BEGIN
    };
};

export function fetchTwoColumnsPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_TWO_COLUMNS_PAGE_SUCCESS,
        array: array
    };
};

export function fetchTwoColumnsPageFailur(err) {
    return { 
        type: actionTypes.FETCH_TWO_COLUMNS_PAGE_FAILURE,
        err: err
    };
};

export function loadMoreTwoColumnsPageBegin() {
    return { 
        type: actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_BEGIN
    };
};

export function loadMoreTwoColumnsPageSuccess(array) {
    return { 
        type: actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_SUCCESS,
        array: array
    };
};

export function loadMoreTwoColumnsPageFailur(err) {
    return { 
        type: actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_FAILURE,
        err: err
    };
};

export function loadMoreDisableButtonStateForTwoColumnsPage(val) {
    return { 
        type: actionTypes.LOAD_MORE_DISABLE_BUTTON_STATE_FOR_TWO_COLUMNS_PAGE,
        val: val
    };
};


