import * as actionTypes from '../constants/actionTypes';

export function initInputForm(opt, obj) {
    return { 
        type: actionTypes.INIT_INPUT_FORM,
        opt: opt,
        obj: obj
    };
};

export function getDirectionContactFormPage() {
    return { 
        type: actionTypes.GET_DIRECTION_CONTACT_FORM_PAGE
    };
};

export function subscribeContactFormPage() {
    return { 
        type: actionTypes.SUBSCRIBE_CONTACT_FORM_PAGE
    };
};

export function submitContactFormPage() {
    return { 
        type: actionTypes.SUBMIT_CONTACT_FORM_PAGE
    };
};

export function fetchGetDirectionContactFormPageBegin() {
    return { 
        type: actionTypes.FETCH_GET_DIRECTION_CONTACT_FORM_PAGE_BEGIN
    };
};

export function fetchGetDirectionContactFormPageSuccess(obj) {
    return { 
        type: actionTypes.FETCH_GET_DIRECTION_CONTACT_FORM_PAGE_SUCCESS,
        obj: obj
    };
};

export function fetchGetDirectionContactFormPageFailur(err) {
    return { 
        type: actionTypes.FETCH_GET_DIRECTION_CONTACT_FORM_PAGE_FAILURE,
        err: err
    };
};

export function fetchSubscribeContactFormPageBegin() {
    return {
        type: actionTypes.FETCH_SUBSCRIBE_CONTACT_FORM_PAGE_BEGIN
    };
};

export function fetchSubscribeContactFormPageSuccess(obj) {
    return { 
        type: actionTypes.FETCH_SUBSCRIBE_CONTACT_FORM_PAGE_SUCCESS,
        obj: obj
    };
};

export function fetchSubscribeContactFormPageFailur(err) {
    return { 
        type: actionTypes.FETCH_SUBSCRIBE_CONTACT_FORM_PAGE_FAILURE,
        err: err
    };
};

export function fetchSubmitContactFormPageBegin() {
    return { 
        type: actionTypes.FETCH_SUBMIT_CONTACT_FORM_PAGE_BEGIN
    };
};

export function fetchSubmitContactFormPageSuccess(obj) {
    return { 
        type: actionTypes.FETCH_SUBMIT_CONTACT_FORM_PAGE_SUCCESS,
        obj: obj
    };
};

export function fetchSubmitContactFormPageFailur(err) {
    return { 
        type: actionTypes.FETCH_SUBMIT_CONTACT_FORM_PAGE_FAILURE,
        err: err
    };
};