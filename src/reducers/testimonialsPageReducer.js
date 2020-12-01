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
    section1Data: {
        items: [],
        loading: false,
        error: null,
        swiper: {
            slides: [],
            _slides: [],
            activeIndex: 0,
            translate: 0,
            transition: 0.45,
            rerender: false
        },
        itemsCooradinateRange:
            {
                id: 1,
                updated: false
            }
    },
    section2Data: {
        items: [],
        loading: false,
        error: null,
        swiper: {
            slides: [],
            _slides: [],
            activeIndex: 0,
            translate: 0,
            transition: 0.45,
            rerender: false
        },
        itemsCooradinateRange: 
            {
                id: 1,
                updated: false
            }
    },
    section3Data: {
        items: [],
        loading: false,
        error: null,
        swiper: {
            slides: [],
            _slides: [],
            activeIndex: 0,
            translate: 0,
            transition: 0.45,
            rerender: false
        },
        itemsCooradinateRange:
            {
                id: 1,
                updated: false
            }
    },
}

const fetchTestimonialsPageSection1DataBegin = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchTestimonialsPageSection1DataSuccess = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchTestimonialsPageSection1DataFailur = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchTestimonialsPageSection2DataBegin = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchTestimonialsPageSection2DataSuccess = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchTestimonialsPageSection2DataFailur = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchTestimonialsPageSection3DataBegin = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const fetchTestimonialsPageSection3DataSuccess = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const fetchTestimonialsPageSection3DataFailur = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const setSwiperStateForTestimonialsPageSection1 = (state, action) => {
    let updatedSwiper = {
        slides: action.slides,
        _slides: action._slides,
        activeIndex: action.activeIndex,
        translate: action.translate,
        transition: action.transition,
        rerender: action.rerender
        
    };
    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            swiper: updatedSwiper
        }
    };
}

const setSwiperStateForTestimonialsPageSection2 = (state, action) => {
    let updatedSwiper = {
        slides: action.slides,
        _slides: action._slides,
        activeIndex: action.activeIndex,
        translate: action.translate,
        transition: action.transition,
        rerender: action.rerender
        
    };
    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            swiper: updatedSwiper
        }
    };
}

const setSwiperStateForTestimonialsPageSection3 = (state, action) => {
    let updatedSwiper = {
        slides: action.slides,
        _slides: action._slides,
        activeIndex: action.activeIndex,
        translate: action.translate,
        transition: action.transition,
        rerender: action.rerender
        
    };
    return {
        ...state,
        section3Data: {
            ...state.section3Data,
            swiper: updatedSwiper
        }
    };
}

const rememberCoordinateRangeForTestimonialsPage = (state, action) => {
    console.log(action.coordinateRange)
    switch(action.key){
        case 'testimonialsPageSection1':
            return {
                ...state,
                section1Data: {
                    ...state.section1Data,
                    itemsCooradinateRange: action.coordinateRange
                }
            };
        case 'testimonialsPageSection2':
            return {
                ...state,
                section2Data: {
                    ...state.section2Data,
                    itemsCooradinateRange: action.coordinateRange
                }
            };
        case 'testimonialsPageSection3':
            return {
                ...state,
                section3Data: {
                    ...state.section3Data,
                    itemsCooradinateRange: action.coordinateRange
                }
            };
        default: 
            return state;
    }
}

const forgetCoordinateRangeForTestimonialsPage = (state, action) => {
    return {
        ...state,
        itemsCooradinateRange: action.arr
    };
}

const testimonialsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_BEGIN:
            return fetchTestimonialsPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchTestimonialsPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_FAILURE:
            return fetchTestimonialsPageSection1DataFailur(state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_BEGIN:
            return fetchTestimonialsPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchTestimonialsPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_FAILURE:
            return fetchTestimonialsPageSection2DataFailur(state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_BEGIN:
            return fetchTestimonialsPageSection3DataBegin (state, action); 
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_SUCCESS:
            return fetchTestimonialsPageSection3DataSuccess (state, action);
        case actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_FAILURE:
            return fetchTestimonialsPageSection3DataFailur(state, action);
        case actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_1:
            return setSwiperStateForTestimonialsPageSection1(state, action); 
        case actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_2:
            return setSwiperStateForTestimonialsPageSection2(state, action); 
        case actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_3:
            return setSwiperStateForTestimonialsPageSection3(state, action);
        case actionTypes.REMEMBER_COORDINATE_RANGE_FOR_TESTIMONIALS_PAGE:
            return rememberCoordinateRangeForTestimonialsPage(state, action);
        case actionTypes.FORGET_COORDINATE_RANGE_FOR_TESTIMONIALS_PAGE:
            return forgetCoordinateRangeForTestimonialsPage(state, action);
        default: 
            return state;
    }
}

export default testimonialsPageReducer;
