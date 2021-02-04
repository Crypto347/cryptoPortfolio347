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

const setSwiperStateForClientsPageSection1Swiper1 = (state, action) => {
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
            swiper1: {
                ...state.section1Data.swiper1,
                swiper: updatedSwiper
            }
        } 
    };
}

const setSwiperStateForClientsPageSection1Swiper2 = (state, action) => {
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
            swiper2: {
                ...state.section1Data.swiper2,
                swiper: updatedSwiper
            }
        } 
    };
}

const setSwiperStateForClientsPageSection2Swiper1 = (state, action) => {
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
            swiper1: {
                ...state.section2Data.swiper1,
                swiper: updatedSwiper
            }
        } 
    };
}

const setSwiperStateForClientsPageSection2Swiper2 = (state, action) => {
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
            swiper2: {
                ...state.section2Data.swiper2,
                swiper: updatedSwiper
            }
        } 
    };
}

const setIsHoverImageForClientsPageSection1Swiper1 = (state, action) => {
    let updatedItems = [...state.section1Data.swiper1.items];
    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            isHover: "off"
        }
    });

    let item = {...updatedItems.find(item => item.key === action.key), isHover: action.val};

    let itemIndex = updatedItems.findIndex(item => item.key === action.key);
        
    updatedItems.splice(itemIndex, 1, item);

    let updatedSwiperSlides = [...state.section1Data.swiper1.swiper.slides];
    let slideItem = {...updatedSwiperSlides.find(item => item.key === action.key), isHover: action.val};

    let slideItemIndex = updatedSwiperSlides.findIndex(item => item.key === action.key);
        
    updatedSwiperSlides.splice(slideItemIndex, 1, slideItem);

    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            swiper1: {
                ...state.section1Data.swiper1,
                items: updatedItems,
                swiper: {
                    ...state.section1Data.swiper1.swiper,
                    slides: updatedSwiperSlides
                }
            }
        } 
    };
}

const setIsHoverImageForClientsPageSection1Swiper2 = (state, action) => {
    let updatedItems = [...state.section1Data.swiper2.items];
    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            isHover: "off"
        }
    });

    let item = {...updatedItems.find(item => item.key === action.key), isHover: action.val};

    let itemIndex = updatedItems.findIndex(item => item.key === action.key);
        
    updatedItems.splice(itemIndex, 1, item);

    let updatedSwiperSlides = [...state.section1Data.swiper2.swiper.slides];
    let slideItem = {...updatedSwiperSlides.find(item => item.key === action.key), isHover: action.val};

    let slideItemIndex = updatedSwiperSlides.findIndex(item => item.key === action.key);
        
    updatedSwiperSlides.splice(slideItemIndex, 1, slideItem);

    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            swiper2: {
                ...state.section1Data.swiper2,
                items: updatedItems,
                swiper: {
                    ...state.section1Data.swiper2.swiper,
                    slides: updatedSwiperSlides
                }
            }
        } 
    };
}

const setIsHoverImageForClientsPageSection2Swiper1 = (state, action) => {
    let updatedItems = [...state.section2Data.swiper1.items];
    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            isHover: "off"
        }
    });

    let item = {...updatedItems.find(item => item.key === action.key), isHover: action.val};

    let itemIndex = updatedItems.findIndex(item => item.key === action.key);
        
    updatedItems.splice(itemIndex, 1, item);

    let updatedSwiperSlides = [...state.section2Data.swiper1.swiper.slides];
    let slideItem = {...updatedSwiperSlides.find(item => item.key === action.key), isHover: action.val};

    let slideItemIndex = updatedSwiperSlides.findIndex(item => item.key === action.key);
        
    updatedSwiperSlides.splice(slideItemIndex, 1, slideItem);

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            swiper1: {
                ...state.section2Data.swiper1,
                items: updatedItems,
                swiper: {
                    ...state.section2Data.swiper1.swiper,
                    slides: updatedSwiperSlides
                }
            }
        } 
    };
}

const setIsHoverImageForClientsPageSection2Swiper2 = (state, action) => {
    let updatedItems = [...state.section2Data.swiper2.items];
    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            isHover: "off"
        }
    });
    
    let item = {...updatedItems.find(item => item.key === action.key), isHover: action.val};

    let itemIndex = updatedItems.findIndex(item => item.key === action.key);
        
    updatedItems.splice(itemIndex, 1, item);

    let updatedSwiperSlides = [...state.section2Data.swiper2.swiper.slides];
    let slideItem = {...updatedSwiperSlides.find(item => item.key === action.key), isHover: action.val};

    let slideItemIndex = updatedSwiperSlides.findIndex(item => item.key === action.key);
        
    updatedSwiperSlides.splice(slideItemIndex, 1, slideItem);

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            swiper2: {
                ...state.section2Data.swiper2,
                items: updatedItems,
                swiper: {
                    ...state.section2Data.swiper2.swiper,
                    slides: updatedSwiperSlides
                }
            }
        } 
    };
}

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
        case actionTypes.SET_SWIPER_STATE_FOR_CLIENTS_PAGE_SECTION_1_SWIPER_1:
            return setSwiperStateForClientsPageSection1Swiper1(state, action); 
        case actionTypes.SET_SWIPER_STATE_FOR_CLIENTS_PAGE_SECTION_1_SWIPER_2:
            return setSwiperStateForClientsPageSection1Swiper2(state, action); 
        case actionTypes.SET_SWIPER_STATE_FOR_CLIENTS_PAGE_SECTION_2_SWIPER_1:
            return setSwiperStateForClientsPageSection2Swiper1(state, action);
        case actionTypes.SET_SWIPER_STATE_FOR_CLIENTS_PAGE_SECTION_2_SWIPER_2:
            return setSwiperStateForClientsPageSection2Swiper2(state, action);
        case actionTypes.SET_IS_HOVER_IMAGE_FOR_CLIENTS_PAGE_SECTION_1_SWIPER_1:
            return setIsHoverImageForClientsPageSection1Swiper1(state, action); 
        case actionTypes.SET_IS_HOVER_IMAGE_FOR_CLIENTS_PAGE_SECTION_1_SWIPER_2:
            return setIsHoverImageForClientsPageSection1Swiper2(state, action); 
        case actionTypes.SET_IS_HOVER_IMAGE_FOR_CLIENTS_PAGE_SECTION_2_SWIPER_1:
            return setIsHoverImageForClientsPageSection2Swiper1(state, action);
        case actionTypes.SET_IS_HOVER_IMAGE_FOR_CLIENTS_PAGE_SECTION_2_SWIPER_2:
            return setIsHoverImageForClientsPageSection2Swiper2(state, action);
        default: 
            return state;
    }
}

export default clientsPageReducer;
