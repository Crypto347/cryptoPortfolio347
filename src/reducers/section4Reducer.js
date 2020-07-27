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
    achievements: {
        items: [],
        loading: false,
        error: null
    }
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

const fetchAchievementsBegin = (state, action) => {
    let updateAchievements = {
        ...state.teamInformation, 
        loading: true, 
        error: null
    }

    return {
        ...state,
        achievements: updateAchievements
    };
}

const fetchAchievementsSuccess = (state, action) => {   
    let updateAchievements = {
        ...state.teamInformation, 
        items: action.array,
        loading: false
    } 
    return {
        ...state,
        achievements: updateAchievements
    };
}

const fetchAchievementsFailur = (state, action) => {
    let updateAchievements = {
        items: [],
        loading: false, 
        error: action.err
    }
    return {
        ...state,
        achievements: updateAchievements
    };
}

const section2Reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STATISTICS_DATA_BEGIN:
            return fetchStatisticsDataBegin (state, action); 
        case actionTypes.FETCH_STATISTICS_DATA_SUCCESS:
            return fetchStatisticsDataSuccess (state, action);
        case actionTypes.FETCH_STATISTICS_DATA_FAILURE:
            return fetchStatisticsDataFailur(state, action);
        case actionTypes.FETCH_ACHIEVEMENTS_DATA_BEGIN:
            return fetchAchievementsBegin (state, action); 
        case actionTypes.FETCH_ACHIEVEMENTS_DATA_SUCCESS:
            return fetchAchievementsSuccess (state, action);
        case actionTypes.FETCH_ACHIEVEMENTS_DATA_FAILURE:
            return fetchAchievementsFailur(state, action);
        default: 
            return state;
    }
}

export default section2Reducer;
