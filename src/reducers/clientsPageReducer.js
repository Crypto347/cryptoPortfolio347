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
        swiper1: {
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
            }
        },
        swiper2: {
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
            }
        }
   },
    section2Data: {
        swiper1: {
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
            }
        },
        swiper2: {
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
            }
        }
    }
}

const fetchClientsPageSection1Swiper1DataBegin = (state, action) => {
    let updateSection1Swiper1Data = {
        ...state.section1Data.swiper1,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            swiper1: updateSection1Swiper1Data
        } 
    };
}

const fetchClientsPageSection1Swiper1DataSuccess = (state, action) => {
    let updateSection1Swiper1Data = {
        ...state.section1Data.swiper1,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            swiper1: updateSection1Swiper1Data
        } 
    };
}

const fetchClientsPageSection1Swiper1DataFailur = (state, action) => {
    let updateSection1Swiper1Data = {
        ...state.section1Data.swiper1,
        loading: false,
        error: action.err,
        items: []
    };

    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            swiper1: updateSection1Swiper1Data
        } 
    };
}

const fetchClientsPageSection1Swiper2DataBegin = (state, action) => {
    let updateSection1Swiper2Data = {
        ...state.section1Data.swiper2,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            swiper2: updateSection1Swiper2Data
        } 
    };
}

const fetchClientsPageSection1Swiper2DataSuccess = (state, action) => {
    let updateSection1Swiper2Data = {
        ...state.section1Data.swiper2,
        loading: false,
        items: action.array
    };
   
    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            swiper2: updateSection1Swiper2Data
        } 
    };
}

const fetchClientsPageSection1Swiper2DataFailur = (state, action) => {
    let updateSection1Swiper2Data = {
        ...state.section1Data.swiper2,
        loading: false,
        error: action.err,
        items: [],
    };
   
    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            swiper2: updateSection1Swiper2Data
        } 
    };
}

const fetchClientsPageSection2Swiper1DataBegin = (state, action) => {
    let updateSection2Swiper1Data = {
        ...state.section2Data.swiper1,
        loading: true,
        error: null
    };

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            swiper1: updateSection2Swiper1Data
        } 
    };
}

const fetchClientsPageSection2Swiper1DataSuccess = (state, action) => {
    let updateSection2Swiper1Data = {
        ...state.section2Data.swiper1,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            swiper1: updateSection2Swiper1Data
        } 
    };
}

const fetchClientsPageSection2Swiper1DataFailur = (state, action) => {
    let updateSection2Swiper1Data = {
        ...state.section2Data.swiper1,
        loading: false,
        error: action.err,
        items: [],
    };

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            swiper1: updateSection2Swiper1Data
        } 
    };
}

const fetchClientsPageSection2Swiper2DataBegin = (state, action) => {
    let updateSection2Swiper2Data = {
        ...state.section2Data.swiper2,
        loading: true,
        error: null
    };

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            swiper2: updateSection2Swiper2Data
        } 
    };
}

const fetchClientsPageSection2Swiper2DataSuccess = (state, action) => {
    let updateSection2Swiper2Data = {
        ...state.section2Data.swiper2,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            swiper2: updateSection2Swiper2Data
        } 
    };
}

const fetchClientsPageSection2Swiper2DataFailur = (state, action) => {
    let updateSection2Swiper2Data = {
        ...state.section2Data.swiper2,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            swiper2: updateSection2Swiper2Data
        } 
    };
}

// const setSwiperStateForTestimonialsPageSection1 = (state, action) => {
//     let updatedSwiper = {
//         slides: action.slides,
//         _slides: action._slides,
//         activeIndex: action.activeIndex,
//         translate: action.translate,
//         transition: action.transition,
//         rerender: action.rerender
//     };
//     // console.log("1",action._slides)
//     return {
//         ...state,
//         section1Data: {
//             ...state.section1Data,
//             swiper: updatedSwiper
//         }
//     };
// }

// const setSwiperStateForTestimonialsPageSection2 = (state, action) => {
//     let updatedSwiper = {
//         slides: action.slides,
//         _slides: action._slides,
//         activeIndex: action.activeIndex,
//         translate: action.translate,
//         transition: action.transition,
//         rerender: action.rerender
//     };
//     // console.log("2",updatedSwiper)
//     return {
//         ...state,
//         section2Data: {
//             ...state.section2Data,
//             swiper: updatedSwiper
//         }
//     };
// }

// const setSwiperStateForTestimonialsPageSection3 = (state, action) => {
//     let updatedSwiper = {
//         slides: action.slides,
//         _slides: action._slides,
//         activeIndex: action.activeIndex,
//         translate: action.translate,
//         transition: action.transition,
//         rerender: action.rerender
//     };

//     return {
//         ...state,
//         section3Data: {
//             ...state.section3Data,
//             swiper: updatedSwiper
//         }
//     };
// }

// const setTestimonialsPageSection1IsHoveringSwiperDot = (state, action) => {
//     let updatedSwiperSlides = [...state.section1Data.swiper.slides];

//     let slide = {...updatedSwiperSlides.find(item => item.id === action.id), isHover: action.val}
//     let slideIndex = updatedSwiperSlides.findIndex(item => item.id === action.id);

//     updatedSwiperSlides.splice(slideIndex, 1, slide);

//     return {
//         ...state,
//         section1Data: {
//             ...state.section1Data,
//             swiper: {
//                 ...state.section1Data.swiper,
//                 slides: updatedSwiperSlides,
//             }
//         }
//     };
// }

const clientsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_1_DATA_BEGIN:
            return fetchClientsPageSection1Swiper1DataBegin (state, action); 
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_1_DATA_SUCCESS:
            return fetchClientsPageSection1Swiper1DataSuccess (state, action);
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_1_DATA_FAILURE:
            return fetchClientsPageSection1Swiper1DataFailur(state, action);
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_2_DATA_BEGIN:
            return fetchClientsPageSection1Swiper2DataBegin (state, action); 
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_2_DATA_SUCCESS:
            return fetchClientsPageSection1Swiper2DataSuccess (state, action);
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_2_DATA_FAILURE:
            return fetchClientsPageSection1Swiper2DataFailur(state, action);
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_1_DATA_BEGIN:
            return fetchClientsPageSection2Swiper1DataBegin (state, action); 
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_1_DATA_SUCCESS:
            return fetchClientsPageSection2Swiper1DataSuccess (state, action);
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_1_DATA_FAILURE:
            return fetchClientsPageSection2Swiper1DataFailur(state, action);
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_2_DATA_BEGIN:
            return fetchClientsPageSection2Swiper2DataBegin (state, action); 
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_2_DATA_SUCCESS:
            return fetchClientsPageSection2Swiper2DataSuccess (state, action);
        case actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_2_DATA_FAILURE:
            return fetchClientsPageSection2Swiper2DataFailur(state, action);
        // case actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_1:
        //     return setSwiperStateForTestimonialsPageSection1(state, action); 
        // case actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_2:
        //     return setSwiperStateForTestimonialsPageSection2(state, action); 
        // case actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_3:
        //     return setSwiperStateForTestimonialsPageSection3(state, action);
        // case actionTypes.SET_TESTIMONIALS_PAGE_SECTION_1_IS_HOVERING_SWIPER_DOT:
        //     return setTestimonialsPageSection1IsHoveringSwiperDot(state, action);
        default: 
            return state;
    }
}

export default clientsPageReducer;
