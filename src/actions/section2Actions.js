import * as actionTypes from '../constants/actionTypes';

export function fetchPictureBoardBegin() {
    return { 
        type: actionTypes.FETCH_PICTURE_BOARD_BEGIN
    };
};

export function fetchPictureBoardSuccess(array) {
    return { 
        type: actionTypes.FETCH_PICTURE_BOARD_SUCCESS,
        array: array
    };
};

export function fetchPictureBoardFailur(err) {
    return { 
        type: actionTypes.FETCH_PICTURE_BOARD_FAILURE,
        err: err
    };
};
