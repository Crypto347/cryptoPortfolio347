/**
* Operators
*/

import { 
    of,
    empty 
} from 'rxjs';

import { 
    mergeMap
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

export const gotoNewPageEpic = (action$, state$, dependencies$) => 
    action$.pipe(
        ofType(actionTypes.GO_TO_NEW_PAGE),
        mergeMap(action => {
            if(action.repeatedKey === state$.value.archive.category){
                return of(
                    Actions.setUnmountComponentValues(false, action.repeatedPath)
                )
            }else{
                dependencies$.history.push(`/crypto-portfolio/${state$.value.home.unmountComponent.gotoPage}`);
                return empty();
            }
        })
    )

export default gotoNewPageEpic;
