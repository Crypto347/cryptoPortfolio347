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

    useEffect(()=>{
            document.getElementById("html").style.scrollBehavior = "smooth";
        return () => {
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
                window.scrollTo(0,0)
                return;
            case 1:
                window.open(path, "_blank");
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
            onMouseDown={(e) => arrowOnClick(e, location.pathname)}
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

export default withRouter(BackToTop);
 