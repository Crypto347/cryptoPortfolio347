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

export const disappearanceAndAppearanceOfElementsDueToTheCategoryEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.DISAPPEARANCE_AND_APPEARANCE_OF_ELEMENTS_DUE_TO_THE_CATEGORY),
        mergeMap((action) => {
            // let updatedTranslateX;
            // let updatedTranslateY;
            // let arrayOfAppearAndDisapperElements = [];
            // arrayOfAppearAndDisapperElements = props.twoColumnsPage.items.map(el => {
            //     let checkIfElementHasSelectedCategory = el.categories.some(item => item.key === categoryFromHeader);
            //     if(checkIfElementHasSelectedCategory){
            //         arrayOfAppearAndDisapperElements.push({
            //             id: el.id,
            //             dissapear: false
            //         })
            //     }else{
            //         arrayOfAppearAndDisapperElements.push({
            //             id: el.id,
            //             dissapear: true
            //         })
            //     }
            // })
               console.log(action.page)
            return of(
                // Actions.initCategories(updatedCategoriesArray),
                // Actions.initCategoryStories(categoryObj),
                // Actions.addGalleryImages(categoryImages, 'Category'),
            )  
        })                
    )

export default disappearanceAndAppearanceOfElementsDueToTheCategoryEpic;
