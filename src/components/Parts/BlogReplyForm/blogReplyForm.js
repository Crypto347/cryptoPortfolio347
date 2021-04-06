/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

/**
 * Styles
 */

import './blogReplyForm.scss';

/**
 * Components
 */

import Input from '../../../library/Input/input';
import Button from '../../../library/Button/button';

/**
 * Utility
 */

import {
    H13,
    H15,
    EH10,
    EH20,
    EH30
} from '../../UtilityComponents';

/**
 * Hooks
 */

 import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Constants
 */

 import {
    blogListCommentReplyInputForm,
} from '../../../constants/inputForm';

/**
 * BlogReplyForm component definition and export
 */

export const BlogReplyForm = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init imput forms

        props.initInputForm(blogListCommentReplyInputForm);

    }, []);

    const onClickHandler = (opt) => {
        let info;

        /**
         * Check if the input form is valid, if it is valid 
         * then initialize input fields (state), if it is not valid
         * then show needed error messages
         */
    
        props.getDirectionContactFormPage();

        // Collect all the information you neet to post

        info = {
            id: uuid(),
            fullName: `${props.contactFormPage.section1.inputForm.inputsArray.find(x => x.controlName === "fullName").value}`,
            company: `${props.contactFormPage.section1.inputForm.inputsArray.find(x => x.controlName === "company").value}`,
            email: `${props.contactFormPage.section1.inputForm.inputsArray.find(x => x.controlName === "email").value}`,
            // date: Utility.getCurrentDateAndTime(),
            phone: `${props.contactFormPage.section1.inputForm.inputsArray.find(x => x.controlName === "phone").value}`,
        }

        // Post the information

        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
            // Fetch mock data (not required to run -> npm run server)

            props.fetchGetDirectionContactFormPageSuccess(info);
        }else{
            // Fetch data (required to run -> npm run server)

            props.fetchGetDirectionContactFormPage(info);
        }
        
        // Clear input fields (visually) if the form is valid

        if(props.contactFormPage.section1.inputForm.formIsValid){
            clearInputValue("input1");
            clearInputValue("input2");
            clearInputValue("input3");
            clearInputValue("input4");
        }

        // Clear input field (visually) if the entered value does not match to the rules of that field

        props.contactFormPage.section1.inputForm.inputsArray.map(el => {
            if(!el.validField){
                clearInputValue(el.inputID);
            }
        });
    }

    const inputChangeHandler = (e, inputFieldId) => {
        // Set input value and check validation

        props.setInputFiledValueAndCheckValidation(props.inputFormFieldsArray, e, inputFieldId, `commentReplyInputForm`);
    }

    const clearInputValue = (fieldId) => {
        document.getElementById(fieldId).value = '';
    }

    const renderContactFormContent = (inputForm) => {
        if(inputForm.inputsArray){
            return(
                <>
                    {inputForm.inputsArray.map((el, i)=>{
                        return(
                            <React.Fragment key={i}>
                                {props.inputFieldNameBold ? 
                                <H13 className="h13-black-poppins">{el.inputFieldName}</H13> : 
                                <H15 className="h15-nobel-lustria">{el.inputFieldName}</H15> }
                                <EH10/>
                                <Input
                                    className="blog-comment-reply-input"
                                    invalidClassName="invalid-blog-comment-reply-input"
                                    onChange={(event) => inputChangeHandler(event, el.id, 'section1','inputForm')}
                                    elementType={el.elementType}
                                    rows={el.elementConfig.rows}
                                    validField={el.validField}
                                    touched={el.touched}
                                    erroeMessages={el.errorMessage}
                                    inputID={el.inputID}
                                    textareaID={el.textareaID}
                                    placeholder={el.elementConfig.placeholder}
                                    options={el.elementConfig.options}
                                />
                                <EH20/>
                            </React.Fragment>
                        )
                    })}
                    <EH30/>

                    <Button
                        className="buttons-page-small"
                        text="post comment."
                        // onClick={() => onClickHandler('section1InputForm')}
                    />
                    <EH20/>
                    {/* {loadingOnButtonClick("getDirection")} */}
                </>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="blog-reply-form">
            {renderContactFormContent(props.inputFormFieldsArray)}
        </div>
    );
}

export default BlogReplyForm;
 