import * as actionTypes from '../constants/actionTypes';

export function fetchStatisticsDataBegin() {
    return { 
        type: actionTypes.FETCH_STATISTICS_DATA_BEGIN
    };
};

export function fetchStatisticsDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_STATISTICS_DATA_SUCCESS,
        array: array
    };
};

export function fetchStatisticsDataFailur(err) {
    return { 
        type: actionTypes.FETCH_STATISTICS_DATA_FAILURE,
        err: err
    };
};

