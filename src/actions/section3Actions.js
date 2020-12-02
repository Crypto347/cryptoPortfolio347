import * as actionTypes from '../constants/actionTypes';

export function fetchTestimonialsBegin() {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_BEGIN
    };
};

export function fetchTestimonialsSuccess(array) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_SUCCESS,
        array: array
    };
};

export function fetchTestimonialsFailur(err) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_FAILURE,
        err: err
    };
};

export function fetchTeamInformationBegin() {
    return { 
        type: actionTypes.FETCH_TEAM_INFORMATION_BEGIN
    };
};

export function fetchTeamInformationSuccess(array) {
    return { 
        type: actionTypes.FETCH_TEAM_INFORMATION_SUCCESS,
        array: array
    };
};

export function fetchTeamInformationFailur(err) {
    return { 
        type: actionTypes.FETCH_TEAM_INFORMATION_FAILURE,
        err: err
    };
};

export function setSwiperStateForHomePage(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_HOME_PAGE,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function rememberCoordinateRangeOfSwiperForHomePage(key, coordinateRange) {
    return { 
        type: actionTypes.REMEMBER_COORDINATE_RANGE_OF_SWIPER_FOR_HOME_PAGE,
        key: key,
        coordinateRange: coordinateRange
    };
};

export function forgetCoordinateRangeOfSwiperForHomePage(arr) {
    return { 
        type: actionTypes.FORGET_COORDINATE_RANGE_OF_SWIPER_FOR_HOME_PAGE,
        arr: arr
    };
};
