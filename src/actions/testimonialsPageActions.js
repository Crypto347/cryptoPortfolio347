import * as actionTypes from '../constants/actionTypes';

export function fetchTestimonialsPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchTestimonialsPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchTestimonialsPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchTestimonialsPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchTestimonialsPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchTestimonialsPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};

export function fetchTestimonialsPageSection3DataBegin() {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_BEGIN
    };
};

export function fetchTestimonialsPageSection3DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_SUCCESS,
        array: array
    };
};

export function fetchTestimonialsPageSection3DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_FAILURE,
        err: err
    };
};

export function setSwiperStateForTestimonialsPageSection1(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_1,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function setSwiperStateForTestimonialsPageSection2(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_2,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function setSwiperStateForTestimonialsPageSection3(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_3,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function rememberCoordinateRangeForTestimonialsPage(key, coordinateRange) {
    return { 
        type: actionTypes.REMEMBER_COORDINATE_RANGE_FOR_TESTIMONIALS_PAGE,
        key: key,
        coordinateRange: coordinateRange
    };
};

export function forgetCoordinateRangeForTestimonialsPage(arr) {
    return { 
        type: actionTypes.FORGET_COORDINATE_RANGE_FOR_TESTIMONIALS_PAGE,
        arr: arr
    };
};
