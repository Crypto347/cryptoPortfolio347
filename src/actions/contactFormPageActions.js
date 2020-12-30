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
