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
 