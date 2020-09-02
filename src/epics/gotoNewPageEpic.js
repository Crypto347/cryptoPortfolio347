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
            let category = state$.value.archive.category;
            let categoryToPath;
            if(state$.value.archive.category){
                let categoryToArray = category.split("");
               
                let indexOfUpperCaseLetter;
                indexOfUpperCaseLetter = categoryToArray.map((item, i) => {
                    if(item === item.toUpperCase()){
                        return i;
                    }else{
                        return false;
                    }
                })
                indexOfUpperCaseLetter = indexOfUpperCaseLetter.find(item => item !== false);
                
                categoryToArray.splice(indexOfUpperCaseLetter, 1, categoryToArray[indexOfUpperCaseLetter].toLowerCase());
                categoryToArray.splice(indexOfUpperCaseLetter, 0, "-");
                categoryToPath = categoryToArray.join("");
    
            }
            
          
            if(action.repeatedKey === category){
                return of(
                    Actions.setUnmountComponentValues(false, action.repeatedPath)
                )
            }else{
                console.log(action.page)
                dependencies$.history.push(`/crypto-portfolio/${state$.value.home.unmountComponent.gotoPage}`, {page: action.page, category: categoryToPath});
                return empty();
            }
        })
    )

export default gotoNewPageEpic;
