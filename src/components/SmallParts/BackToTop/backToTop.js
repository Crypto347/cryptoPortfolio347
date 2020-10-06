/**
* Libraries
*/

import React, {
    useState
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './backToTop.scss';

/**
* Utility
*/

import {
    H17,
    H40,
    EH20
} from '../../UtilityComponents';

/**
* BackToTop component definition and export
*/

export const BackToTop = (props) => {

    const [isHovering, setIsHovering] = useState("init");

    /**
    * Methods
    */

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

    const arrowOnClick = (path, e) => {
        switch(e.button){
            case 0: 
                console.log(e.button)
                props.history.push(props.match.url + path)
                return;
            case 1:
                window.open(props.match.url + path, "_blank");
                return;
            case 2:
                return;
        }
    }

    /**
    * Markup
    */

    return(
        <div 
            className="back-to-top"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className={renderClassName("text", isHovering)}>
                <H17 className="h17-nobel-lustria">Back to top</H17>
            </div>
            <div className={renderClassName("line", isHovering)}/>
        </div>
    );
}

export default BackToTop;
 