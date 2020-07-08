/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Utility
*/

import * as Utility from "../utility";
import uuid from "uuid";

/**
* Initial State
*/

export const initialState = {
    pictureBoard: {
        items: [],
        loading: false,
        error: null
    }
}

const fetchPictureBoardBegin = (state, action) => {
    let updatedPictureBoard = {
        ...state.pictureBoard, 
        loading: true, 
        error: null
    }

    return {
        ...state,
        pictureBoard: updatedPictureBoard
    };
}

const fetchPictureBoardSuccess = (state, action) => {   
    let updatedPictureBoard = {
        ...state.pictureBoard, 
        items: action.array,
        loading: false
    } 
    return {
        ...state,
        pictureBoard: updatedPictureBoard
    };
}

const fetchPictureBoardFailur = (state, action) => {
    let updatedPictureBoard = {
        ...state.pictureBoard, 
        items: [],
        loading: false, 
        error: action.err
    }
    return {
        ...state,
        pictureBoard: updatedPictureBoard
    };
}


const section2Reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PICTURE_BOARD_BEGIN:
            return fetchPictureBoardBegin (state, action); 
        case actionTypes.FETCH_PICTURE_BOARD_SUCCESS:
            return fetchPictureBoardSuccess (state, action);
        case actionTypes.FETCH_PICTURE_BOARD_FAILURE:
            return fetchPictureBoardFailur(state, action);
        default: 
            return state;
    }
}

export default section2Reducer;
