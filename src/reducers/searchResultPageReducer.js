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
    searchInputForm: {},
    searchInputFormResponse: {
        item: {},
        loading: false,
        error: null
    },
}

const fetchSearchThroughWebsiteResutDataBegin = (state, action) => {
    return {
        ...state,
        searchInputFormResponse: {
            ...state.searchInputFormResponse,
            loading: true,
            error: null
        }
    };
}

const fetchSearchThroughWebsiteResutDataSuccess = (state, action) => {
    return {
        ...state,
        searchInputFormResponse: {
            ...state.searchInputFormResponse,
            loading: false,
            item: action.obj
        }
    };
}

const fetchSearchThroughWebsiteResutDataFailur = (state, action) => {
    return {
        ...state,
        searchInputFormResponse: {
            ...state.searchInputFormResponse,
            loading: false,
            error: action.err,
            item: {}
        }
    };
}

const initSearchInputFormThroughWebsite = (state, action) => {
    return {
        ...state,
        searchInputForm: action.obj
    }
} 

const setInputFiledValueAndCheckValidationThroughWebsite = (state, action) => {
    let updatedInputFieldObj = {...action.obj, inputsArray: [...action.obj.inputsArray]};
    let inputField = updatedInputFieldObj.inputsArray.find(x => x.id === action.inputFieldId);
    let inputFieldIndex = updatedInputFieldObj.inputsArray.findIndex(x => x.id === action.inputFieldId);
    inputField = {
        ...inputField, 
        value: action.event.target.value,
        validation: Utility.checkValidity(action.event.target.value, inputField.validation),
        touched: true
    };

    inputField = {
        ...inputField, 
        errorMessage: Utility.errorMessages(inputField.inputFieldName, inputField.validation),
        validField: Utility.checkValidityOfField(inputField.validation),
    }
   
    updatedInputFieldObj.inputsArray.splice(inputFieldIndex, 1, inputField)

    let checkIfFormIsValid = updatedInputFieldObj.inputsArray.map(el => el.validField === true);
    updatedInputFieldObj = {...updatedInputFieldObj, formIsValid: checkIfFormIsValid.every(x => x === true)};

    switch(action.formName) {
        case 'searchInputForm':
            return {
                ...state,
                searchInputForm: updatedInputFieldObj            
            };
        default:
            return {...state}
    }
}

const searchThroughWebsite = (state, action) => {
    let updatedSearchInputForm = {...state.searchInputForm, inputsArray: [...state.searchInputForm.inputsArray]};

    if(state.searchInputForm.formIsValid && state.searchInputForm.inputsArray){
        // info = {
        //     id: uuid(),
        //     pathOfIds: props.pathOfIdsToComment,
        //     comment: `${props.inputFormFieldsArray.inputsArray.find(x => x.controlName === "comment").value}`,
        //     fullName: `${props.inputFormFieldsArray.inputsArray.find(x => x.controlName === "fullName").value}`,
        //     email: `${props.inputFormFieldsArray.inputsArray.find(x => x.controlName === "email").value}`,
        //     date: Utility.getCurrentDateAndTime(),
        //     website: `${props.inputFormFieldsArray.inputsArray.find(x => x.controlName === "website").value}`,
        // }
        // updatedSingleStory.comments.push(comment);
        // updatedSearchInputForm.inputsArray = updatedSearchInputForm.inputsArray.map(el => {return {...el, value: ''}});
        
        updatedSearchInputForm.formIsValid = false;
        updatedSearchInputForm.inputsArray = updatedSearchInputForm.inputsArray.map(el => {
            return {
                ...el, 
                value: '', 
                validField: el.validation.length !== 0 ? false : true, 
                touched: false,
                validation: el.validation.map(el2 => {
                    return{
                        ...el2,
                        valid: false
                    }
                })
            }
        });
    }else{
        updatedSearchInputForm.inputsArray = updatedSearchInputForm.inputsArray.map((el, i) => {
            if(Utility.checkValidityOfField(el.validation)){
                return {
                    ...el, 
                    touched: false,
                    errorMessage: []
                }
            }else{
                return {
                    ...el, 
                    touched: true,
                    errorMessage: ["Fill the field"]
                }
            }
        })
    }
    return {
        ...state,
        searchInputForm: updatedSearchInputForm
    }; 
}

const searchResultPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SEARCH_THROUGH_WEBSITE_DATA_BEGIN:
            return fetchSearchThroughWebsiteResutDataBegin (state, action);
        case actionTypes.FETCH_SEARCH_THROUGH_WEBSITE_DATA_SUCCESS:
            return fetchSearchThroughWebsiteResutDataSuccess (state, action);
        case actionTypes.FETCH_SEARCH_THROUGH_WEBSITE_DATA_FAILURE:
            return fetchSearchThroughWebsiteResutDataFailur (state, action);
        case actionTypes.INIT_SEARCH_INPUT_FORM_THROUGH_WEBSITE:
            return initSearchInputFormThroughWebsite (state, action);
        case actionTypes.SET_INPUT_FIELD_VALUE_AND_CHECK_VALIDATION_THROUGH_WEBSITE:
            return setInputFiledValueAndCheckValidationThroughWebsite (state, action);
        case actionTypes.SEARCH_THROUGH_WEBSITE:
            return searchThroughWebsite (state, action);
        default: 
            return state;
    }
}

export default searchResultPageReducer;
 