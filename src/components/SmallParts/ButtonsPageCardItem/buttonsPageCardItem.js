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

import './buttonsPageCardItem.scss';

/**
 * Components
 */

import Button from '../../../library/Button/button';

/**
 * Utility
 */

import {
    H15,
    H17,
    H35,
} from '../../UtilityComponents';

/**
 * ButtonsPageCardItem component definition and export
 */

export const ButtonsPageCardItem = (props) => {

    /**
     * State
     */

    const [isHovering, setIsHovering] = useState("init");

    /**
     * Methods
     */
   
    useEffect(() => {
    }, []);

    const handleMouseEnter = () => {
        setIsHovering("on");
    }

    const handleMouseLeave = () => {
        setIsHovering("off");
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "buttons-page-card-item-button-type-arrow-wrapper";
                case 'on':
                    return "buttons-page-card-item-button-type-arrow-wrapper-lengthen";
                case 'off':
                    return "buttons-page-card-item-button-type-arrow-wrapper-shorten"
            }
        }
        if(opt === "arrowWithTextPartArrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
        if(opt === "arrowWithTextPartText"){
            switch(isHovering){
                case 'init':
                    return "text";
                case 'on':
                    return "text-hover-on";
                case 'off':
                    return "text-hover-off";
            }
        }
    }

    const renderButtons = (buttonType) => {
        switch(buttonType){
            case 'arrow': 
                return(
                <div
                    className={renderClassName("arrow", isHovering)}
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="arrow-horizontal-line"/>
                    <div className="arrow-wrapper2">
                        <div className="arrow-top-line"></div>
                        <div className="arrow-bottom-line"></div>
                    </div>
                </div>
                );
            case 'arrowWithText': 
                return(
                    <div className="buttons-page-card-item-button-type-arrow-with-text-wrapper">
                        <div className={renderClassName("arrowWithTextPartArrow", isHovering)}>
                            <div className="arrow-horizontal-line"/>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div>
                        <div 
                            className={renderClassName("arrowWithTextPartText", isHovering)}
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}
                        >
                            <H15 className="h15-black-poppins">view detail</H15>
                        </div>
                    </div>
                );
            case 'buttonOutline': 
                return(
                    <div className="buttons-page-card-item-button-type-outline">
                        <Button
                            className="buttons-page-outline"
                            text="get direction."
                            // onMouseDown={(e) => onMouseDownHandler(e, props.location.pathname)}
                        />
                    </div>
                );
            case 'buttonSolid': 
                return(
                    <div className="buttons-page-card-item-button-type-solid">
                        <Button
                            className="buttons-page-solid"
                            text="get direction."
                            // onMouseDown={(e) => onMouseDownHandler(e, props.location.pathname)}
                        />
                    </div>
                );
            case 'buttonSmall': 
                return(
                    <div>
                        
                    </div>
                );
            case 'buttonMedium': 
                return(
                    <div>
                        
                    </div>
                );
            case 'buttonLarge': 
                return(
                    <div>
                        
                    </div>
                );
        }
    }

    /**
     * Markup
     */

    return(
        <div 
            className="buttons-page-card-item"
            onMouseEnter={() => handleMouseEnter(isHovering)} 
            onMouseLeave={() => handleMouseLeave(isHovering)}
        >
            <H35 className="h35-black-poppins">{props.data.header}</H35>
            <H17 className="h17-nobel-lustria">{props.data.text}</H17>
            {renderButtons(props.data.buttonType)}
        </div>
    );
}

export default ButtonsPageCardItem;
 