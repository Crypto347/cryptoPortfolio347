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
 * Utility
 */

import {
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
                    <div>
                        
                    </div>
                );
            case 'buttonOutline': 
                return(
                    <div>
                        
                    </div>
                );
            case 'buttonSolid': 
                return(
                    <div>
                        
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
 