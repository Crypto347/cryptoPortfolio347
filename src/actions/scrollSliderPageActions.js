import * as actionTypes from '../constants/actionTypes';

export function fetchScrollSliderPageDataBegin() {
    return { 
        type: actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_BEGIN
    };
};

export function fetchScrollSliderPageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchScrollSliderPageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_FAILURE,
        err: err
    };
};
