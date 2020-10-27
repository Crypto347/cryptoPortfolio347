/**
 * Operators
 */

import { 
    of
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

export const disappearanceAndAppearanceOfElementsDueToTheCategoryEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.DISAPPEARANCE_AND_APPEARANCE_OF_ELEMENTS_DUE_TO_THE_CATEGORY),
        mergeMap((action) => {
            let arrayOfAppearAndDisapperElements = [];
            state$.value.twoColumnsPage.items.map(el => {
                let checkIfElementHasSelectedCategory = el.categories.some(item => item.key === action.category);
                if(checkIfElementHasSelectedCategory){
                    arrayOfAppearAndDisapperElements.push({
                        id: el.id,
                        disappear: false
                    })
                }else{
                    arrayOfAppearAndDisapperElements.push({
                        id: el.id,
                        disappear: true
                    })
                }
            })
            console.log("checkIfElementHasSelectedCategory",arrayOfAppearAndDisapperElements, state$.value.twoColumnsPage.items)
            return of(
                // Actions.initCategories(updatedCategoriesArray),
                // Actions.initCategoryStories(categoryObj),
                // Actions.addGalleryImages(categoryImages, 'Category'),
            )  
        })                
    )

export default disappearanceAndAppearanceOfElementsDueToTheCategoryEpic;
