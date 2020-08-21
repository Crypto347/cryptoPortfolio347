import * as actionTypes from '../constants/actionTypes';

export function fetchPortfolioGalleryPageBegin() {
    return { 
        type: actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_BEGIN
    };
};

export function fetchPortfolioGalleryPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_SUCCESS,
        array: array
    };
};

export function fetchPortfolioGalleryPageFailur(err) {
    return { 
        type: actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_FAILURE,
        err: err
    };
};
