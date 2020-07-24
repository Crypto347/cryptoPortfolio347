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
    statisticsData: {
        items: [],
        loading: false,
        error: null
    },
    // teamInformation: {
    //     items: [],
    //     loading: false,
    //     error: null
    // }
}

const fetchStatisticsDataBegin = (state, action) => {
    let updatedStatisticsData = {
        ...state.statisticsData, 
        loading: true, 
        error: null
    }

    return {
        ...state,
        statisticsData: updatedStatisticsData
    };
}

const fetchStatisticsDataSuccess = (state, action) => {   
    let updatedStatisticsData = {
        ...state.statisticsData, 
        items: action.array,
        loading: false,
    } 
    return {
        ...state,
        statisticsData: updatedStatisticsData
    };
}

const fetchStatisticsDataFailur = (state, action) => {
    let updatedStatisticsData = {
        ...state.statisticsData, 
        items: [],
        loading: false, 
        error: action.err
    }
    return {
        ...state,
        statisticsData: updatedStatisticsData
    };
}

// const fetchTeamInformationBegin = (state, action) => {
//     let updateTeamInformationoard = {
//         ...state.teamInformation, 
//         loading: true, 
//         error: null
//     }

//     return {
//         ...state,
//         teamInformation: updateTeamInformationoard
//     };
// }

// const fetchTeamInformationSuccess = (state, action) => {   
//     let updateTeamInformationoard = {
//         ...state.teamInformation, 
//         items: action.array,
//         loading: false
//     } 
//     return {
//         ...state,
//         teamInformation: updateTeamInformationoard
//     };
// }

// const fetchTeamInformationFailur = (state, action) => {
//     let updateTeamInformationoard = {
//         items: [],
//         loading: false, 
//         error: action.err
//     }
//     return {
//         ...state,
//         teamInformation: updateTeamInformationoard
//     };
// }

const section2Reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STATISTICS_DATA_BEGIN:
            return fetchStatisticsDataBegin (state, action); 
        case actionTypes.FETCH_STATISTICS_DATA_SUCCESS:
            return fetchStatisticsDataSuccess (state, action);
        case actionTypes.FETCH_STATISTICS_DATA_FAILURE:
            return fetchStatisticsDataFailur(state, action);
        // case actionTypes.FETCH_TEAM_INFORMATION_BEGIN:
        //     return fetchTeamInformationBegin (state, action); 
        // case actionTypes.FETCH_TEAM_INFORMATION_SUCCESS:
        //     return fetchTeamInformationSuccess (state, action);
        // case actionTypes.FETCH_TEAM_INFORMATION_FAILURE:
        //     return fetchTeamInformationFailur(state, action);
        default: 
            return state;
    }
}

export default section2Reducer;
