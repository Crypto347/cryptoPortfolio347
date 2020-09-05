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
    menuFullscreenItems: [],
    photoViewerForPictureBoardTextItemOpen: false,
    photoViewerForBigImagesOpen: false,
    photoViewerForBigSliderOpen: false,
    photoViewerForSmallImagesOpen: false,
    photoViewerForSmallSliderOpen: false,
    photoViewerForGalleryOpen: false,
    photoViewerForSmallGalleryOpen: false,
    photoViewerImagesArray: [],
    swiper: {
        slides: [],
        _slides: [],
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        rerender: false
    },
    sidebarState: "init",
    unmountComponent: {
        state: false,
        gotoPage: ''
    },
    menuDotsState: {
        page: "",
        state: "init"
    },
    historyPopFromItem: "scrollToTop",
}

const initMenuItems = (state, action) => {
    return {
        ...state,
        menuItems: action.array,
    };
}

const initMenuFullscreenItems = (state, action) => {
    return {
        ...state,
        menuFullscreenItems: action.array,
    };
}


const photoViewerOpen = (state, action) => {    
    switch(action.option){
        case 'pictureBoardForTextItem':
            return {
                ...state,
                photoViewerForPictureBoardTextItemOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'bigImages':
            return {
                ...state,
                photoViewerForBigImagesOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'bigSlider':
            return {
                ...state,
                photoViewerForBigSliderOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'smallImages':
            return {
                ...state,
                photoViewerForSmallImagesOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'smallSlider':
            return {
                ...state,
                photoViewerForSmallSliderOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'gallery':
            return {
                ...state,
                photoViewerForGalleryOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'smallGallery':
            return {
                ...state,
                photoViewerForSmallGalleryOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'all':
            return {
                ...state,
                photoViewerForPictureBoardTextItemOpen: action.val,
                photoViewerForBigImagesOpen: action.val,
                photoViewerForBigSliderOpen: action.val,
                photoViewerForSmallImagesOpen: action.val,
                photoViewerForSmallSliderOpen: action.val,
                photoViewerForGalleryOpen: action.val,
                photoViewerForSmallGalleryOpen: action.val,
                photoViewerImagesArray: action.array
            }
        default:
            return state;
    }
}

const prevImage = (state, action) => {
    let updatedPhotoViewerImagesArray = [...state.photoViewerImagesArray];
    let lastImage = updatedPhotoViewerImagesArray[updatedPhotoViewerImagesArray.length - 1];
    updatedPhotoViewerImagesArray.pop();
    updatedPhotoViewerImagesArray.unshift(lastImage);

    return {
        ...state,
        photoViewerImagesArray: updatedPhotoViewerImagesArray,
    };
}

const nextImage = (state, action) => {
    let updatedPhotoViewerImagesArray = [...state.photoViewerImagesArray];
    let currentImage = updatedPhotoViewerImagesArray[0];
    updatedPhotoViewerImagesArray.shift();
    updatedPhotoViewerImagesArray.push(currentImage);
    return {
        ...state,
        photoViewerImagesArray: updatedPhotoViewerImagesArray,
    };
}

const setSwiperState = (state, action) => {
    let updatedSwiper = {
        slides: action.slides,
        _slides: action._slides,
        activeIndex: action.activeIndex,
        translate: action.translate,
        transition: action.transition,
        rerender: action.rerender
        
    };
    return {
        ...state,
        swiper: updatedSwiper,
    };
}

const setIsHoveringMenuItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    if(action.val === "on"){
        let toolbarItem = {...updatedMenuItems.find(item => item.id === action.id), isHover: action.val};
        let itemIndex = updatedMenuItems.findIndex(item => item.id === action.id);
        updatedMenuItems.splice(itemIndex, 1, toolbarItem);
    }else{
        updatedMenuItems = updatedMenuItems.map(el => {
            return{
                ...el,
                isHover: action.val
            }
        });

        updatedMenuItems.map((el, i) => {
            updatedMenuItems[i].options.map((el2, i2) => {
                updatedMenuItems[i].options[i2].array.map((el3, i3) => {
                    updatedMenuItems[i].options[i2].array[i3].isHover = "init";
                    updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
                        updatedMenuItems[i].options[i2].array[i3].subOptions[i4].isHover = "init";
                    })
                })
            })
        })
        // console.log(updatedMenuItems)
    }
    return {
        ...state,
        menuItems: updatedMenuItems,
    };
}

const setIsHoveringToolbarOptionItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    
    if(action.val === "on"){
        let optionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]),
            isHover: action.val
        }

        let optionItemIndex = updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .findIndex(item => item.id === action.pathOfIds[1]);
            
        updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .splice(optionItemIndex, 1, optionItem);
    }else{
        let optionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]),
            isHover: action.val
        }

        let optionItemIndex = updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .findIndex(item => item.id === action.pathOfIds[1]);
            
        updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .splice(optionItemIndex, 1, optionItem);

            updatedMenuItems.map((el, i) => {
                updatedMenuItems[i].options.map((el2, i2) => {
                    updatedMenuItems[i].options[i2].array.map((el3, i3) => {
                        // updatedMenuItems[i].options[i2].array[i3].isHover = "init";
                        updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
                            updatedMenuItems[i].options[i2].array[i3].subOptions[i4].isHover = "init";
                        })
                    })
                })
            })
    }
    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const setIsHoveringToolbarSubOptionItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    // console.log(action.pathOfIds)
    if(action.val === "on"){
        let subOptionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .find(item => item.id === action.pathOfIds[2]),
            isHover: action.val
        }
        
        let subOptionItemIndex = updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .findIndex(item => item.id === action.pathOfIds[2]);
            
        updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .splice(subOptionItemIndex, 1, subOptionItem);
    }else{
        let subOptionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .find(item => item.id === action.pathOfIds[2]),
            isHover: action.val
        }

        let subOptionItemIndex = updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .findIndex(item => item.id === action.pathOfIds[2]);
            
        updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .splice(subOptionItemIndex, 1, subOptionItem);
    }
    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const setIsHoveringMenuFullscreenItem = (state, action) => {
    let updatedMenuFullscreenItems = [...state.menuFullscreenItems];
    
    let item = {
        ...updatedMenuFullscreenItems
        .find(item => item.id === action.id),
        isHover: action.val
    }

    let itemIndex = updatedMenuFullscreenItems.findIndex(item => item.id === action.id);
    updatedMenuFullscreenItems.splice(itemIndex, 1, item);

    return {
        ...state,
        menuFullscreenItems: updatedMenuFullscreenItems
    };
}

const setActivityOfToolbarOptionItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    // let previouslyActiveToolbarItemId = updatedMenuItems.find(item => item.active === true).id;
    // let previouslyActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.active === true);
    let hoveredToolbarItemId = updatedMenuItems.find(item => item.isHover === "on").id;
    // if(previouslyActiveToolbarItemId !== hoveredToolbarItemId){
    //     let objPrevActiveToolbarItem = {...updatedMenuItems.find(item => item.id === previouslyActiveToolbarItemId), active: false};
    //     let objPrevActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.id === previouslyActiveToolbarItemId);
    //     updatedMenuItems.splice(objPrevActiveToolbarItemIndex, 1, objPrevActiveToolbarItem);
        

    updatedMenuItems.map((el, i) => {
        updatedMenuItems[i].active = false;
        updatedMenuItems[i].options.map((el2, i2) => {
            updatedMenuItems[i].options[i2].array.map((el3, i3) => {
                updatedMenuItems[i].options[i2].array[i3].active = false;
                updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
                    updatedMenuItems[i].options[i2].array[i3].subOptions[i4].active = false;
                })
            })
        })
    })

    let objNewActiveToolbarItem = {...updatedMenuItems.find(item => item.id === hoveredToolbarItemId), active: true};
    let objNewActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.id === hoveredToolbarItemId);
    updatedMenuItems.splice(objNewActiveToolbarItemIndex, 1, objNewActiveToolbarItem);
        
    // }

    // updatedMenuItems[previouslyActiveToolbarItemIndex].options.map((el, i) => {
    //     updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array = updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array.map((el2, i2) => {
    //         return{
    //             ...el2,
    //             active: false
    //         }
    //     })
    // })
    
    // updatedMenuItems[previouslyActiveToolbarItemIndex].options.map((el, i) => {
    //     updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array.map((el2, i2) => {
    //         updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array[i2].subOptions = updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array[i2].subOptions.map((el3, i3) => {
    //             return{
    //                 ...el3,
    //                 active: false
    //             }
    //         })
    //     })
    // })

    let optionItem = {
        ...updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]),
        active: true
    }

    let optionItemIndex = updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .findIndex(item => item.id === action.pathOfIds[1]);
        
    updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .splice(optionItemIndex, 1, optionItem);

    return {
        ...state,
        menuItems: updatedMenuItems
    };
}


const setActivityOfToolbarSubOptionItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    // let previouslyActiveToolbarItemId = updatedMenuItems.find(item => item.active === true).id;
    // let previouslyActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.active === true);
    let hoveredToolbarItemId = updatedMenuItems.find(item => item.isHover === "on").id;
    // if(previouslyActiveToolbarItemId !== hoveredToolbarItemId){
    //     let objPrevActiveToolbarItem = {...updatedMenuItems.find(item => item.id === previouslyActiveToolbarItemId), active: false};
    //     let objPrevActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.id === previouslyActiveToolbarItemId);
    //     updatedMenuItems.splice(objPrevActiveToolbarItemIndex, 1, objPrevActiveToolbarItem);

 

    let objNewActiveToolbarItem = {...updatedMenuItems.find(item => item.id === hoveredToolbarItemId), active: true};
    let objNewActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.id === hoveredToolbarItemId);
    updatedMenuItems.splice(objNewActiveToolbarItemIndex, 1, objNewActiveToolbarItem);
    // }

    // updatedMenuItems[previouslyActiveToolbarItemIndex].options.map((el, i) => {
    //     updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array = updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array.map((el2, i2) => {
    //         return{
    //             ...el2,
    //             active: false
    //         }
    //     })
    // })
    
    // updatedMenuItems[previouslyActiveToolbarItemIndex].options.map((el, i) => {
    //     updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array.map((el2, i2) => {
    //         updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array[i2].subOptions = updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array[i2].subOptions.map((el3, i3) => {
    //             return{
    //                 ...el3,
    //                 active: false
    //             }
    //         })
    //     })
    // })

    let optionItem = {
        ...updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]),
        active: true
    }
    
    let optionItemIndex = updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .findIndex(item => item.id === action.pathOfIds[1]);
        
    updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .splice(optionItemIndex, 1, optionItem);

    
    let subOptionItem = {
        ...updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]).subOptions
        .find(item => item.id === action.pathOfIds[2]),
        active: true
    }
    
    let subOptionItemIndex = updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]).subOptions
        .findIndex(item => item.id === action.pathOfIds[2]);
        
    updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]).subOptions
        .splice(subOptionItemIndex, 1, subOptionItem);

    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const setActivityOfMenuFullscreenItem = (state, action) => {
    let updatedMenuFullscreenItems = [...state.menuFullscreenItems];
    
    updatedMenuFullscreenItems = updatedMenuFullscreenItems.map((el, i) => {
        return {
            ...el,
            active: false
        }
    })
    
    let item = {
        ...updatedMenuFullscreenItems
        .find(item => item.id === action.id),
        active: action.val
    }

    let itemIndex = updatedMenuFullscreenItems.findIndex(item => item.id === action.id);
    updatedMenuFullscreenItems.splice(itemIndex, 1, item);

    return {
        ...state,
        menuFullscreenItems: updatedMenuFullscreenItems
    };
}

const setIsHoveringMenuFullscreenOptionItem = (state, action) => {
    let updatedMenuFullscreenItems = [...state.menuFullscreenItems];
console.log(action.pathOfIds)
    let optionItem = {
        ...updatedMenuFullscreenItems
        .find(item => item.id === action.pathOfIds[0]).options
        .find(item => item.id === action.pathOfIds[1]).array
        .find(item => item.id === action.pathOfIds[2]),
        isHover: action.val
    }
    
    let optionItemIndex = updatedMenuFullscreenItems
        .find(item => item.id === action.pathOfIds[0]).options
        .find(item => item.id === action.pathOfIds[1]).array
        .findIndex(item => item.id === action.pathOfIds[2]);
        
    updatedMenuFullscreenItems
        .find(item => item.id === action.pathOfIds[0]).options
        .find(item => item.id === action.pathOfIds[1]).array
        .splice(optionItemIndex, 1, optionItem);

    return {
        ...state,
        menuFullscreenItems: updatedMenuFullscreenItems
    };
}

const setSidebarState = (state, action) => {
    return {
        ...state,
        sidebarState: action.val
    };
}

const activateMenuItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];

    if(action.pathOfIds.length === 3){
        let item = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]),
            active: true
        }
        
        let itemIndex = updatedMenuItems
            .findIndex(item => item.id === action.pathOfIds[0]);
            
        updatedMenuItems
            .splice(itemIndex, 1, item);

        let optionItem = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .find(item => item.id === action.pathOfIds[2]),
            active: true
        }
        
        let optionItemIndex = updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .findIndex(item => item.id === action.pathOfIds[2]);
            
        updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .splice(optionItemIndex, 1, optionItem);

    }
 
    if(action.pathOfIds.length === 4){
        let item = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]),
            active: true
        }
        
        let itemIndex = updatedMenuItems
            .findIndex(item => item.id === action.pathOfIds[0]);
            
        updatedMenuItems
            .splice(itemIndex, 1, item);
            
        let subOptionItem = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .find(item => item.id === action.pathOfIds[2]).subOptions
            .find(item => item.id === action.pathOfIds[3]),
            active: true
        }
        
        let subOptionItemIndex = updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .find(item => item.id === action.pathOfIds[2]).subOptions
            .findIndex(item => item.id === action.pathOfIds[3]);
            
        updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .find(item => item.id === action.pathOfIds[2]).subOptions
            .splice(subOptionItemIndex, 1, subOptionItem);
    }
    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const clearActivityOfMenuItems = (state, action) => {
    let updatedMenuItems = [...state.menuItems];

    updatedMenuItems.map((el, i) => {
        updatedMenuItems[i].active = false;
        updatedMenuItems[i].options.map((el2, i2) => {
            updatedMenuItems[i].options[i2].array.map((el3, i3) => {
                updatedMenuItems[i].options[i2].array[i3].active = false;
                updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
                    updatedMenuItems[i].options[i2].array[i3].subOptions[i4].active = false;
                })
            })
        })
    })

    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const setUnmountComponentValues = (state, action) => {
     return {
        ...state,
        unmountComponent: {
            state: action.val,
            gotoPage: action.path
        }
    };
}

const setMenuDotsState = (state, action) => {
    return {
       ...state,
        menuDotsState: {
            page: action.page,
            state: action.val
        }
   };
}

const setHistoryPopFromPortfolioItem = (state, action) => {
    return {
        ...state,
        historyPopFromItem: action.val
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
        case actionTypes.INIT_MENU_FULLSCREEN_ITEMS:
            return initMenuFullscreenItems(state, action); 
        case actionTypes.PHOTO_VIEWER_OPEN:
            return photoViewerOpen(state, action); 
        case actionTypes.PREV_IMAGE:
            return prevImage(state, action); 
        case actionTypes.NEXT_IMAGE:
            return nextImage(state, action); 
        case actionTypes.SET_SWIPER_STATE:
            return setSwiperState(state, action); 
        case actionTypes.SET_IS_HOVERING_MENU_ITEM:
            return setIsHoveringMenuItem(state, action); 
        case actionTypes.SET_IS_HOVERING_TOOLBAR_OPTION_ITEM:
            return setIsHoveringToolbarOptionItem(state, action); 
        case actionTypes.SET_IS_HOVERING_TOOLBAR_SUB_OPTION_ITEM:
            return setIsHoveringToolbarSubOptionItem(state, action); 
        case actionTypes.SET_IS_HOVERING_MENU_FULLSCREEN_ITEM:
            return setIsHoveringMenuFullscreenItem(state, action); 
        case actionTypes.SET_ACTIVITY_OF_TOOLBAR_OPTION_ITEM:
            return setActivityOfToolbarOptionItem(state, action); 
        case actionTypes.SET_ACTIVITY_OF_TOOLBAR_SUB_OPTION_ITEM:
            return setActivityOfToolbarSubOptionItem(state, action); 
        case actionTypes.SET_ACTIVITY_OF_MENU_FULLSCREEN_ITEM:
            return setActivityOfMenuFullscreenItem(state, action); 
        case actionTypes.SET_IS_HOVERING_MENU_FULLSCREEN_OPTION_ITEM:
            return setIsHoveringMenuFullscreenOptionItem(state, action); 
        case actionTypes.SET_SIDEBAR_STATE:
            return setSidebarState(state, action); 
        case actionTypes.ACTIVATE_MENU_ITEM:
            return activateMenuItem(state, action); 
        case actionTypes.CLEAR_ACTIVITY_OF_MENU_ITEMS:
            return clearActivityOfMenuItems(state, action); 
        case actionTypes.SET_UNMOUNT_COMPONENT_VALUES:
            return setUnmountComponentValues(state, action); 
        case actionTypes.SET_MENU_DOTS_STATE:
            return setMenuDotsState(state, action); 
        case actionTypes.SET_HISTORY_POP_FROM_PORTFOLIO_ITEM:
            return setHistoryPopFromPortfolioItem(state, action);
        default: 
            return state;
    }
}

export default cryptoPortfolioReducer;
