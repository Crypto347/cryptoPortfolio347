/**
 * Operators
 */

import { 
    of
} from 'rxjs';

import { 
    mergeMap,
    takeUntil
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
 * Constants
 */

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
 * Epic
 */

export const handleResizeEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.HANDLE_RESIZE_EPIC),
        mergeMap((action) => {
            console.log(action.page, action.screen, action.direction)
            return of(
                Actions.handleWindowResiz(action.page, action.screen, action.direction),
            )  
        }),
        takeUntil(action$.ofType(actionTypes.STOP_HANDLE_RESIZE_EPIC))             
    )

export default handleResizeEpic;
