import * as actionTypes from '../constants/actionTypes';

export function initInputForm(opt, obj) {
    return { 
        type: actionTypes.INIT_INPUT_FORM,
        opt: opt,
        obj: obj
    };
};
