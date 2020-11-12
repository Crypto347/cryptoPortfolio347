import * as actionTypes from '../constants/actionTypes';

export function fetchTabsPageSection1Column1DataBegin() {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_BEGIN
    };
};

export function fetchTabsPageSection1Column1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchTabsPageSection1Column1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_FAILURE,
        err: err
    };
};

export function fetchTabsPageSection1Column2DataBegin() {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_BEGIN
    };
};

export function fetchTabsPageSection1Column2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchTabsPageSection1Column2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_FAILURE,
        err: err
    };
};

export function fetchTabsPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchTabsPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchTabsPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};


// export function setIsHoverSection2ItemAccordionsPage(val, id) {
//     return { 
//         type: actionTypes.SET_IS_HOVER_SECTION_2_ITEM_ACCORDIONS_PAGE,
//         val: val,
//         id: id
//     };
// };

// export function setActivitySection1ItemAccordionsPage(val, id, opt) {
//     return { 
//         type: actionTypes.SET_ACTIVITY_SECTION_1_ITEM_ACCORDION_PAGE,
//         val: val,
//         id: id,
//         opt: opt
//     };
// };

// export function setActivitySection2ItemAccordionsPage(val, id) {
//     return { 
//         type: actionTypes.SET_ACTIVITY_SECTION_2_ITEM_ACCORDION_PAGE,
//         val: val,
//         id: id
//     };
// };
