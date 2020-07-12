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
    menuItems: [],
    photoViewerForPictureBoardTextItem: {
        open: true,
        arrayOfImages: []
    }
}

const initMenuItems = (state, action) => {
    return {
        ...state,
        menuItems: action.array,
    };
}

const photoViewerOpen = (state, action) => {
    let updatedPhotoViewerForPictureBoardTextItem = {
        ...state.photoViewerForPictureBoardTextItem,
        open: action.val,
        arrayOfImages: action.array
    }
    
    return {
        ...state,
        photoViewerForPictureBoardTextItem: updatedPhotoViewerForPictureBoardTextItem,
    };
}

// const setInputFiledValueAndCheckValidation = (state, action) => {
//     let updatedInputFieldObj = {...action.obj, inputsArray: [...action.obj.inputsArray]};
//     let inputField = updatedInputFieldObj.inputsArray.find(x => x.id === action.inputFieldId);
//     let inputFieldIndex = updatedInputFieldObj.inputsArray.findIndex(x => x.id === action.inputFieldId);
//     inputField = {
//         ...inputField, 
//         value: action.event.target.value,
//         validation: Utility.checkValidity(action.event.target.value, inputField.validation),
//         touched: true
//     };

//     inputField = {
//         ...inputField, 
//         errorMessage: Utility.errorMessages(inputField.inputFieldName, inputField.validation),
//         validField: Utility.checkValidityOfField(inputField.validation),
//     }
   
//     updatedInputFieldObj.inputsArray.splice(inputFieldIndex, 1, inputField)

//     let checkIfFormIsValid = updatedInputFieldObj.inputsArray.map(el => el.validField === true);
//     updatedInputFieldObj = {...updatedInputFieldObj, formIsValid: checkIfFormIsValid.every(x => x === true)};

//     switch(action.formName) {
//         case 'leaveACommentInputForm':
//             return {
//                 ...state,
//                 leaveACommentInputForm: updatedInputFieldObj
//             };
//         case 'getInTouchInputForm':
//             return {
//                 ...state,
//                 getInTouchInputForm: updatedInputFieldObj
//             };
//     }
// }


// const postComment = (state, action) => {
//     let updatedSingleStory = {...state.singleStory};
//     let updatedLeaveACommentInputForm = {...state.leaveACommentInputForm, inputsArray: [...state.leaveACommentInputForm.inputsArray]};
//     if(state.leaveACommentInputForm.formIsValid && state.leaveACommentInputForm.inputsArray){
//         let comment = {
//             id: uuid(),
//             image: "Name1",
//             fullName: `${state.leaveACommentInputForm.inputsArray.find(x => x.controlName === "firstName").value}`,
//             date: Utility.getCurrentDateAndTime(),
//             comment: state.leaveACommentInputForm.inputsArray.find(x => x.controlName === "comment").value,
//         }
//         updatedSingleStory.comments.push(comment);
//         updatedLeaveACommentInputForm.inputsArray = updatedLeaveACommentInputForm.inputsArray.map(el => {return {...el, value: ''}});
        
//         updatedLeaveACommentInputForm.formIsValid = false;
//         updatedLeaveACommentInputForm.inputsArray = updatedLeaveACommentInputForm.inputsArray.map(el => {return {...el, value: '', validField: false, touched: false}});
//     }else{
//         updatedLeaveACommentInputForm.inputsArray = updatedLeaveACommentInputForm.inputsArray.map((el, i) => {
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
//         singleStory: updatedSingleStory,
//         leaveACommentInputForm: updatedLeaveACommentInputForm
//     }; 
// }

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






const cryptoPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INIT_MENU_ITEMS:
            return initMenuItems(state, action); 
        case actionTypes.PHOTO_VIEWER_OPEN:
            return photoViewerOpen(state, action); 
        default: 
            return state;
    }
}

export default cryptoPortfolioReducer;
