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
    item: {},
    loading: false,
    error: null
}

const fetchArchiveBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchArchiveSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        item: action.obj
    };
}

const fetchArchiveFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        item: {}
    };
}

const setArchiveIsHoveringImage = (state, action) => {
    let updatedImagesArray = [...state.item.archiveData];

    let image = {...updatedImagesArray.find(item => item.id === action.id), isHover: action.val};
    let imageIndex = updatedImagesArray.findIndex(item => item.id === action.id);
    updatedImagesArray.splice(imageIndex, 1, image);

    return {
        ...state,
        item: {
            ...state.item,
            archiveData: updatedImagesArray
        }
    };
}

const archiveReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ARCHIVE_BEGIN:
            return fetchArchiveBegin (state, action); 
        case actionTypes.FETCH_ARCHIVE_SUCCESS:
            return fetchArchiveSuccess (state, action);
        case actionTypes.FETCH_ARCHIVE_FAILURE:
            return fetchArchiveFailur(state, action);
        case actionTypes.SET_ARCHIVE_IS_HOVERING_IMAGE:
            return setArchiveIsHoveringImage(state, action);
        default: 
            return state;
    }
}

export default archiveReducer;
