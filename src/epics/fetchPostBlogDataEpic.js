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

/**
 * Actions
 */

import * as Actions from '../actions';

/**
 * Services
 */

import * as Services from "../service";

/**
 * Utility
 */

import * as Utility from '../utility';

/**
 * Epic
 */

export const fetchPostBlogDataEpic = (action$, state$, dependencies$) => 
    action$.pipe(
        ofType(actionTypes.START_FETCHING_POST_BLOG_DATA),
        mergeMap(action => {
            console.log(dependencies$)
            switch(action.cardType){
                case 'standardPost':
                    return of(
                        Services.fetchStandardPostBlogData(1)
                    );
                    default:
                        return empty();
            }
         
        })
    )

export default fetchPostBlogDataEpic;
