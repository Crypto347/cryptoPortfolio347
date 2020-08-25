/**
* Operators
*/

import { 
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
            let path = state$.value.home.unmountComponent.gotoPage === "" ? "/crypto-portfolio" : `/crypto-portfolio/${state$.value.home.unmountComponent.gotoPage}`
console.log(path)
            dependencies$.history.push(path)
            return empty();
        })
    )

export default gotoNewPageEpic;
