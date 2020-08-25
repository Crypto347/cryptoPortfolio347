/**
* Operators
*/

import { 
    empty 
} from 'rxjs';

import { 
    mergeMap, 
    delay 
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
            dependencies$.history.push(`/crypto-portfolio/${state$.value.home.unmountComponent.gotoPage}`)
            return empty();
        })
    )

export default gotoNewPageEpic;
