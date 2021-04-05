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

import Loading from '../../SmallParts/Loading/loading';
import BlogComment from '../../SmallParts/BlogComment/blogComment';

/**
 * Utility
 */

import {
    H15,
    H22
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

    const inputChangeHandler = (e, inputFieldId, opt, inputForm) => {
        // Uppercase first letter of the input form name

        let updatedInputForm = inputForm.charAt(0).toUpperCase() + inputForm.slice(1);

        // Set input value and check validation

        props.setInputFiledValueAndCheckValidation(props.contactFormPage[opt][inputForm], e, inputFieldId, `${opt}${updatedInputForm}`);
    }

    const clearInputValue = (fieldId) => {
        document.getElementById(fieldId).value = '';
    }

    const renderContactFormContent = () => {
        if(props.contactFormPage.section1.inputForm.inputsArray){
            return(
                <div className="contact-form-page-section-1-data">
                    <div className="contact-form-page-section-1-data-inputs-wrapper">
                        {props.contactFormPage.section1.inputForm.inputsArray.map((el, i)=>{
                            return(
                                <div 
                                    key={i} 
                                    className="contact-form-page-section-1-form"
                                    style={{
                                        width: `calc(50% - ${i%2 === 0 ? 20 : 0}px)`,
                                        marginRight: `${i%2 === 0 ? 20 : 0}px`
                                    }}
                                >
                                    <Input
                                        className="contact-form-page-section-1-input"
                                        invalidClassName="invalid-contact-form-page-section-1-input"
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
                                </div>
                            )
                        })}
                    </div>
                    <EH30/>
                    <Button
                        className="call-to-action-get-direction-black"
                        text="get direction."
                        onClick={() => onClickHandler('section1InputForm')}
                    />
                    <EH20/>
                    {loadingOnButtonClick("getDirection")}
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="blog-reply-form">
            {/* {renderContactFormContent()} */}
        </div>
    );
}

export default BlogReplyForm;
 