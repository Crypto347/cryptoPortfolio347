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
    testimonials: {
        items: [],
        loading: false,
        error: null
    },
    // ourProcess: {
    //     items: [],
    //     loading: false,
    //     error: null
    // }
}

const fetchTestimonialsBegin = (state, action) => {
    let updatedTestimonials = {
        ...state.testimonials, 
        loading: true, 
        error: null
    }

    return {
        ...state,
        testimonials: updatedTestimonials
    };
}

const fetchTestimonialsSuccess = (state, action) => {   
    let updatedTestimonials = {
        ...state.testimonials, 
        items: action.array,
        loading: false
    } 
    return {
        ...state,
        testimonials: updatedTestimonials
    };
}

const fetchTestimonialsFailur = (state, action) => {
    let updatedTestimonials = {
        ...state.testimonials, 
        items: [],
        loading: false, 
        error: action.err
    }
    return {
        ...state,
        testimonials: updatedTestimonials
    };
}

// const fetchOurProcessDataBegin = (state, action) => {
//     let updatedOurProcess = {
//         ...state.pictureBoard, 
//         loading: true, 
//         error: null
//     }

//     return {
//         ...state,
//         ourProcess: updatedOurProcess
//     };
// }

// const fetchOurProcessDataSuccess = (state, action) => {   
//     let updatedOurProcess = {
//         ...state.pictureBoard, 
//         items: action.array,
//         loading: false
//     } 
//     return {
//         ...state,
//         ourProcess: updatedOurProcess
//     };
// }

// const fetchOurProcessDataFailur = (state, action) => {
//     let updatedOurProcess = {
//         ...state.pictureBoard, 
//         items: [],
//         loading: false, 
//         error: action.err
//     }
//     return {
//         ...state,
//         ourProcess: updatedOurProcess
//     };
// }

const section2Reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TESTIMONIALS_BEGIN:
            return fetchTestimonialsBegin (state, action); 
        case actionTypes.FETCH_TESTIMONIALS_SUCCESS:
            return fetchTestimonialsSuccess (state, action);
        case actionTypes.FETCH_TESTIMONIALS_FAILURE:
            return fetchTestimonialsFailur(state, action);
        // case actionTypes.FETCH_OUR_PROCESS_DATA_BEGIN:
        //     return fetchOurProcessDataBegin (state, action); 
        // case actionTypes.FETCH_OUR_PROCESS_DATA_SUCCESS:
        //     return fetchOurProcessDataSuccess (state, action);
        // case actionTypes.FETCH_OUR_PROCESS_DATA_FAILURE:
        //     return fetchOurProcessDataFailur(state, action);
        default: 
            return state;
    }
}

export default section2Reducer;
