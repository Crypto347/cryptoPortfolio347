/**
 * Libraries
 */

import React, {
    useEffect,
    useState
} from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './blogComment.scss';

/**
 * Utility
 */

import {
    H13,
    H15,
    H17,
    EW10,
    EH20,
    EH30,
    EH50
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * BlogComment component definition and export
 */

export const BlogComment = (props) => {

    const [isHovering, setIsHovering] = useState("init");

    /**
     * Methods
     */

    useEffect(()=>{
        // Set smooth scrollbar behavior

        document.getElementById("html").style.scrollBehavior = "smooth";
        return () => {
            // Clear smooth scrollbar behavior
            document.getElementById("html").style.scrollBehavior = null;
        }
    },[])

    const handleMouseEnter = () => {
       setIsHovering("on");
    }

    const handleMouseLeave = () => {
        setIsHovering("off");
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "text"){
            switch(isHovering){
                case 'init':
                    return "back-to-top-text";
                case 'on':
                    return "back-to-top-text-hover-on";
                case 'off':
                    return "back-to-top-text-hover-off"
            }
        }
        if(opt === "line"){
            switch(isHovering){
                case 'init':
                    return "back-to-top-line";
                case 'on':
                    return "back-to-top-line-hover-on";
                case 'off':
                    return "back-to-top-line-hover-off"
            }
        }
    }

    const arrowOnClick = (e, path) => {
        switch(e.button){
            case 0: 
                // Scroll to top on left mouse click
                window.scrollTo(0,0);
                return;
            case 1:
                // Open the current page in a new window on scroll wheel click
                window.open(path, "_blank");
                return;
            case 2:
                // Do nothing on right mouse click 
                return;
        }
    }

    /**
     * Markup
     */

    return(
        <div 
            className="blog-comment"
            // onMouseDown={(e) => arrowOnClick(e, location.pathname)}
            // onMouseEnter={handleMouseEnter} 
            // onMouseLeave={handleMouseLeave}
        >
            <div className="grey-line-comment"/>
            <EH50/>
            <div className="blog-comment-wrapper">
                <div className="blog-comment-author-image">
                    <img src={Images.PHOTO_19}/>
                </div>
                <div className="blog-comment-info-text-wrapper">
                    <div className="blog-comment-info-wrapper">
                        <H17 className="h17-black-poppins">{props.data.authorName}</H17>
                        <EW10/>
                        <H13 className="h13-nobel-lustria">{props.data.date}</H13>
                        <div className="blog-comment-button"></div>
                    </div>
                    <EH20/>
                    <H15 className="h15-black-lustria">{props.data.text}</H15>
                </div>
            </div>
            <EH30/>
        </div>
    );
}

export default BlogComment;
 