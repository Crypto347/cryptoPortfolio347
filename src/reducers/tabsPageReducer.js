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
    section1Column1Data: {
        items: [],
        loading: false,
        error: null
    },
    section1Column2Data: {
        items: [],
        loading: false,
        error: null
    },
    section2Data: {
        items: [],
        loading: false,
        error: null
    }
}

const fetchTabsPageSection1Column1DataBegin = (state, action) => {
    let updateSection1Column1Data = {
        ...state.section1Column1Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Column1Data: updateSection1Column1Data
    };
}

const fetchTabsPageSection1Column1DataSuccess = (state, action) => {
    let updateSection1Column1Data = {
        ...state.section1Column1Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Column1Data: updateSection1Column1Data
    };
}

const fetchTabsPageSection1Column1DataFailur = (state, action) => {
    let updateSection1Data = {
        ...state.section1Column1Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section1Column1Data: updateSection1Data
    };
}

const fetchTabsPageSection1Column2DataBegin = (state, action) => {
    let updateSection1Column2Data = {
        ...state.section1Column2Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Column2Data: updateSection1Column2Data
    };
}

const fetchTabsPageSection1Column2DataSuccess = (state, action) => {
    let updateSection1Column2Data = {
        ...state.section1Column2Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Column2Data: updateSection1Column2Data
    };
}

const fetchTabsPageSection1Column2DataFailur = (state, action) => {
    let updateSection1Column2Data = {
        ...state.section1Column2Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section1Column2Data: updateSection1Column2Data
    };
}

const fetchTabsPageSection2DataBegin = (state, action) => {
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

const fetchTabsPageSection2DataSuccess = (state, action) => {
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

const fetchTabsPageSection2DataFailur = (state, action) => {
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

// const setIsHoverSection2ItemAccordionsPage = (state, action) => {
//     let updatedItems = [...state.section2Data.items];

//     let item = {
//         ...updatedItems
//         .find(item => item.id === action.id), isHover: action.val};

//     let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
//     updatedItems.splice(itemIndex, 1, item);

//     return {
//         ...state,
//         section2Data: {
//             ...state.section2Data,
//             items: updatedItems
//         }
//     };
// }

    // const setActivitySection1ItemAccordionsPage = (state, action) => {
    //     let updatedItems;
    //     let item;
    //     let itemIndex;
    //     switch(action.opt){
    //         case 'leftColumn':
    //             updatedItems = [...state.section1Data.itemsLeftColumn];

    //             updatedItems = updatedItems.map(el => {
    //                 return {
    //                     ...el,
    //                     active: "init"
    //                 }
    //             })
            
    //             item = {
    //                 ...updatedItems
    //                 .find(item => item.id === action.id), active: action.val};
            
    //             itemIndex = updatedItems.findIndex(item => item.id === action.id);
                    
    //             updatedItems.splice(itemIndex, 1, item);
            
    //             return {
    //                 ...state,
    //                 section1Data: {
    //                     ...state.section1Data,
    //                     itemsLeftColumn: updatedItems
    //                 }
    //             };
    //         case 'rightColumn':
    //             updatedItems = [...state.section1Data.itemsRightColumn];

    //             updatedItems = updatedItems.map(el => {
    //                 return {
    //                     ...el,
    //                     active: "init"
    //                 }
    //             })
            
    //             item = {
    //                 ...updatedItems
    //                 .find(item => item.id === action.id), active: action.val};
            
    //             itemIndex = updatedItems.findIndex(item => item.id === action.id);
                    
    //             updatedItems.splice(itemIndex, 1, item);
            
    //             return {
    //                 ...state,
    //                 section1Data: {
    //                     ...state.section1Data,
    //                     itemsRightColumn: updatedItems
    //                 }
    //             };
    //         default:
    //             return state;
    //     }

    // }

    // const setActivitySection2ItemAccordionsPage = (state, action) => {
    //     let updatedItems = [...state.section2Data.items];

    //     updatedItems = updatedItems.map(el => {
    //         return {
    //             ...el,
    //             active: "init"
    //         }
    //     })

    //     let item = {
    //         ...updatedItems
    //         .find(item => item.id === action.id), active: action.val};

    //     let itemIndex = updatedItems.findIndex(item => item.id === action.id);
            
    //     updatedItems.splice(itemIndex, 1, item);

    //     return {
    //         ...state,
    //         section2Data: {
    //             ...state.section2Data,
    //             items: updatedItems
    //         }
    //     };
    // }

const tabsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_BEGIN:
            return fetchTabsPageSection1Column1DataBegin (state, action); 
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_SUCCESS:
            return fetchTabsPageSection1Column1DataSuccess (state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_FAILURE:
            return fetchTabsPageSection1Column1DataFailur(state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_BEGIN:
            return fetchTabsPageSection1Column2DataBegin (state, action); 
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_SUCCESS:
            return fetchTabsPageSection1Column2DataSuccess (state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_FAILURE:
            return fetchTabsPageSection1Column2DataFailur(state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_BEGIN:
            return fetchTabsPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchTabsPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_FAILURE:
            return fetchTabsPageSection2DataFailur(state, action);
        // case actionTypes.SET_IS_HOVER_SECTION_2_ITEM_ACCORDIONS_PAGE:
        //     return setIsHoverSection2ItemAccordionsPage(state, action);
        // case actionTypes.SET_ACTIVITY_SECTION_1_ITEM_ACCORDION_PAGE:
        //     return setActivitySection1ItemAccordionsPage(state, action);
        // case actionTypes.SET_ACTIVITY_SECTION_2_ITEM_ACCORDION_PAGE:
        //     return setActivitySection2ItemAccordionsPage(state, action);
        default: 
            return state;
    }
}

export default tabsPageReducer;
