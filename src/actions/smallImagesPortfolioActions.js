import * as actionTypes from '../constants/actionTypes';

export function fetchSmallImagesPortfolioBegin() {
    return { 
        type: actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_BEGIN
    };
};

export function fetchSmallImagesPortfolioSuccess(obj) {
    return { 
        type: actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_SUCCESS,
        obj: obj
    };
};

export function fetchSmallImagesPortfolioFailur(err) {
    return { 
        type: actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_FAILURE,
        err: err
    };
};
