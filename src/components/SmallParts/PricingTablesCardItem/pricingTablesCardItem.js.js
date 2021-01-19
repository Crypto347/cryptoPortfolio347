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

import './pricingTablesCardItem.scss';

/**
 * Components
 */

import ButtonWithText from '../../../library/ButtonWithText/buttonWithText';

/**
 * Utility
 */

import {
    H15,
    H19,
    H35,
    H65
} from '../../UtilityComponents';


/**
 * PricingTablesCardItem component definition and export
 */

export const PricingTablesCardItem = (props) => {

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

    const onMouseDownHandler = (e) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;
        
        if(e.button !== 1){
            // Scroll to the top of the page on left mouse click

            window.scrollTo(0, 0);
        }else{
            // Open the template page on scroll wheel click  

            props.setUnmountComponentValues(false, props.currentPagePathName);

            // Fire up unmountComponent epic
            
            props.unmountComponent(null, null,  props.page, e.button);
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
                    onMouseDown={(e) => onMouseDownHandler(e)}
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
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        >
                            <H15 className="h15-black-poppins">{props.data.buttonText}</H15>
                        </div>
                    </div>
                );
            case 'buttonOutline': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-outline"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
            case 'buttonSolid': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-solid"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
            case 'buttonSmall': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-small"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
            case 'buttonMedium': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-medium"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
            case 'buttonLarge': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-large"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
        }
    }

    const renderCurrency = (currency) => {
        switch(currency){
            case 'AZE':
                return "₼"
            case 'USD':
                return "$";
            case 'EUR':
                return "€";
            default:
                return "₼";
        }
    }

    /**
     * Markup
     */

    return(
        <div className="pricing-tables-page-card-item">
            <H35 className="h35-black-poppins">{props.data.header}</H35>
            <div className="pricing-tables-page-card-item-price-wrapper">
                <H35 className="h35-black-poppins">{renderCurrency(props.data.price.currency)}</H35>
                <H65 className="h65-black-poppins">{props.data.price.value}</H65>
                <H19 className="h19-black-poppins">/</H19>
                <H19 className="h19-black-poppins">{props.data.price.option}</H19>
            </div>
            <H19 className="h19-black-poppins">{props.data.price.option}</H19>
            <ButtonWithText
                buttonText={props.data.buttonText}
                setUnmountComponentValues={props.setUnmountComponentValues}
                unmountComponent={props.unmountComponent}
                currentPagePathName={props.currentPagePathName}
            />
        </div>
    );
}

export default PricingTablesCardItem;
 