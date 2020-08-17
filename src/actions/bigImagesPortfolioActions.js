import * as actionTypes from '../constants/actionTypes';

export function fetchBigImagesPortfolioBegin() {
    return { 
        type: actionTypes.FETCH_BIG_IMAGES_PORTFOLIO_BEGIN
    };
};

export function fetchBigImagesPortfolioSuccess(obj) {
    return { 
        type: actionTypes.FETCH_BIG_IMAGES_PORTFOLIO_SUCCESS,
        obj: obj
    };
};

export function fetchBigImagesPortfolioFailur(err) {
    return { 
        type: actionTypes.FETCH_BIG_IMAGES_PORTFOLIO_FAILURE,
        err: err
    };
};

export function setBigImagesIsHoveringTag(val, id) {
    return { 
        type: actionTypes.SET_BIG_IMAGES_IS_HOVERING_TAG,
        val: val,
        id: id
    };
};
