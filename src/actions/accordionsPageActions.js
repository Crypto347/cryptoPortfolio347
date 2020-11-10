import * as actionTypes from '../constants/actionTypes';

export function fetchAccordionsPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchAccordionsPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchAccordionsPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};
