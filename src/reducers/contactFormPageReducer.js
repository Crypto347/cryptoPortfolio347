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
    section1: {
        inputForm: {},
    },
    section2: {
        inputForm: {},
    }, 
    section3: {
        inputForm: {},
    }
}

const initInputForm = (state, action) => {
    switch(action.opt){
        case 'section1InputForm':
            return {
                ...state,
                section1: {
                    ...state.section1,
                    inputForm: action.obj
                }
            }
        case 'section2InputForm':
            return {
                ...state,
                section2: {
                    ...state.section2,
                    inputForm: action.obj
                }
            }
        case 'section3InputForm':
            return {
                ...state,
                section3: {
                    ...state.section3,
                    inputForm: action.obj
                }
            }
        default:
            return {...state}
    }
} 

const setInputFiledValueAndCheckValidation = (state, action) => {
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
        case 'section1InputForm':
            return {
                ...state,
                section1: {
                    ...state.section1,
                    inputForm: updatedInputFieldObj
                }
            };
        case 'section2InputForm':
            return {
                ...state,
                section2: {
                    ...state.section2,
                    inputForm: updatedInputFieldObj
                }
            };
        case 'section3InputForm':
            return {
                ...state,
                section3: {
                    ...state.section3,
                    inputForm: updatedInputFieldObj
                }
            };
        default:
            return {...state}
    }
}

const getDirectionContactFormPage = (state, action) => {
    // let updatedSingleStory = {...state.singleStory};
    let updatedSection1InputForm = {...state.section1.inputForm, inputsArray: [...state.section1.inputForm.inputsArray]};
    let info
    if(state.section1.inputForm.formIsValid && state.section1.inputForm.inputsArray){
        info = {
            id: uuid(),
            fullName: `${state.section1.inputForm.inputsArray.find(x => x.controlName === "fullName").value}`,
            company: `${state.section1.inputForm.inputsArray.find(x => x.controlName === "company").value}`,
            email: `${state.section1.inputForm.inputsArray.find(x => x.controlName === "email").value}`,
            // date: Utility.getCurrentDateAndTime(),
            phone: `${state.section1.inputForm.inputsArray.find(x => x.controlName === "phone").value}`,
        }
        // updatedSingleStory.comments.push(comment);
        // updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map(el => {return {...el, value: ''}});
        
        updatedSection1InputForm.formIsValid = false;
        updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map(el => {
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
        let checkIfFormIsValid = [];
        updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map((el, i) => {
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
            // if(el.validation.length !== 0){
            //     return {
            //         ...el, 
            //         touched: true,
            //         errorMessage: ["Fill the field"]
            //     }
            // }else{
            //     return {
            //         ...el, 
            //         touched: false,
            //         errorMessage: []
            //     }
            // }    
        })
        // updatedSection1InputForm.inputsArray.map(el => {
        //     if(el.errorMessage.length !== 0){
        //         checkIfFormIsValid.push(el.controlName)
        //     }
        // })

        // console.log(checkIfFormIsValid)
        // if(checkIfFormIsValid.length === 0){
        //     updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map(el => {return {...el, value: ''}});
        
        //     updatedSection1InputForm.formIsValid = false;
        //     updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map(el => {return {...el, value: '', validField: false, touched: false}});
        // }
    }
    
    
    return {
        ...state,
        section1: {
            ...state.section1,
            inputForm: updatedSection1InputForm
        }
    }; 
}

// const sendComment = (state, action) => {
//     let updatedCustomerMessages = [...state.customerMessages];
//     let updatedGetInTouchInputForm = {...state.getInTouchInputForm, inputsArray: [...state.getInTouchInputForm.inputsArray]};
//     if(state.getInTouchInputForm.formIsValid && state.getInTouchInputForm.inputsArray){
//         let message = {
//             id: uuid(),
//             name: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "name").value}`,
//             email: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "email").value}`,
//             phone: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "phoneNumber").value}`,
//             location: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "location").value}`,
//             partyOf2: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "partyOf2").value}`,
//             date: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "date").value}`,
//             specialNote: state.getInTouchInputForm.inputsArray.find(x => x.controlName === "specialNote").value,
//         }
//         updatedCustomerMessages.push(message);
//         updatedGetInTouchInputForm.inputsArray = updatedGetInTouchInputForm.inputsArray.map(el => {return {...el, value: ''}});
        
//         updatedGetInTouchInputForm.formIsValid = false;
//         updatedGetInTouchInputForm.inputsArray = updatedGetInTouchInputForm.inputsArray.map(el => {return {...el, value: '', validField: false, touched: false}});
//     }else{
//         updatedGetInTouchInputForm.inputsArray = updatedGetInTouchInputForm.inputsArray.map((el, i) => {
//             return {
//                     ...el, 
//                     touched: true,
//                     errorMessage: ["Fill the field"]
//                 }
                
//         })
//         // console.log(updatedLeaveACommentInputForm)
//     }
    
//     return {
//         ...state,
//         customerMessages: updatedCustomerMessages,
//         getInTouchInputForms: updatedGetInTouchInputForm
//     }; 
// }

const contactFormPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INIT_INPUT_FORM:
            return initInputForm (state, action);
        case actionTypes.SET_INPUT_FIELD_VALUE_AND_CHESCK_VALIDATION:
            return setInputFiledValueAndCheckValidation (state, action);
        case actionTypes.GET_DIRECTION_CONTACT_FORM_PAGE:
            return getDirectionContactFormPage (state, action);
            
        default: 
            return state;
    }
}

export default contactFormPageReducer;
