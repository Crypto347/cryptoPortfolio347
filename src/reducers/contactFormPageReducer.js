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
    section1InputForm: {},
    section2InputForm: {},
    section3InputForm: {},
}

const initInputForm = (state, action) => {
    switch(action.opt){
        case 'section1':
            return {
                ...state,
                section1InputForm: action.obj
            }
        case 'section2':
            return {
                ...state,
                section2InputForm: action.obj
            }
        case 'section3':
            return {
                ...state,
                section3InputForm: action.obj
            }
        default:
            return {...state}
    }
} 


const contactFormPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INIT_INPUT_FORM:
            return initInputForm (state, action);
        default: 
            return state;
    }
}

export default contactFormPageReducer;
