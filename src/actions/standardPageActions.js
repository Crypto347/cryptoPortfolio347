import * as actionTypes from '../constants/actionTypes';

export function fetchStandardPageBegin() {
    return { 
        type: actionTypes.FETCH_STANDARD_PAGE_BEGIN
    };
};

export function fetchStandardPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_STANDARD_PAGE_SUCCESS,
        array: array
    };
};

export function fetchStandardPageFailur(err) {
    return { 
        type: actionTypes.FETCH_STANDARD_PAGE_FAILURE,
        err: err
    };
};
