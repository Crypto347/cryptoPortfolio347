import * as actionTypes from '../constants/actionTypes';

export function fetchClientsPageSection1Swiper1DataBegin() {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_1_DATA_BEGIN
    };
};

export function fetchClientsPageSection1Swiper1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchClientsPageSection1Swiper1DataFailur(err) {
    return {
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_1_DATA_FAILURE,
        err: err
    };
};

export function fetchClientsPageSection1Swiper2DataBegin() {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_2_DATA_BEGIN
    };
};

export function fetchClientsPageSection1Swiper2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchClientsPageSection1Swiper2DataFailur(err) {
    return {
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_2_DATA_FAILURE,
        err: err
    };
};

export function fetchClientsPageSection2Swiper1DataBegin() {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_1_DATA_BEGIN
    };
};

export function fetchClientsPageSection2Swiper1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchClientsPageSection2Swiper1DataFailur(err) {
    return {
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_1_DATA_FAILURE,
        err: err
    };
};

export function fetchClientsPageSection2Swiper2DataBegin() {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_2_DATA_BEGIN
    };
};

export function fetchClientsPageSection2Swiper2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchClientsPageSection2Swiper2DataFailur(err) {
    return {
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_2_DATA_FAILURE,
        err: err
    };
};