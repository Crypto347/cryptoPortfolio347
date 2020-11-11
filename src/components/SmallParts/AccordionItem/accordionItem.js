/**
 * Libraries
 */

import React, {
    useState, 
    useEffect,
    useRef
} from 'react';

/**
 * Styles
 */

import './accordionItem.scss';

/**
 * Components
 */

import Icon from '../Icon/icon';

/**
 * Utility
 */

import { 
    H19,
} from '../../UtilityComponents';

/**
 * AccordionItem component definition and export
 */

export const AccordionItem = (props) => {

    /**
     * State
     */
 
    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    const handleMouseEnter = (style, id) => {
        switch(style){
            case 'hoverBlackAndWhite': 
                props.setIsHoverAccordionItem("on", id);
                break;
        }
    }

    const handleMouseLeave = (style, id) => {
        switch(style){
            case 'hoverBlackAndWhite': 
                props.setIsHoverAccordionItem("off", id);
                break;
        }
    }
    
    const renderClassName = (style, opt, isHovering) => {
        if(style === "simple"){
            if(opt === "background"){
                return "accordion-item-simple";
            }
            if(opt === "header"){
                return "h19-nero-poppins";
            }
        }
        if(style === "hoverBlackAndWhite"){
            if(opt === "background"){
                switch(isHovering){
                    case 'init':
                        return "accordion-item-black-and-white";
                    case 'on':
                        return "accordion-item-black-and-white-hover-on";
                    case 'off':
                        return "accordion-item-black-and-white-hover-off"
                }
            }
            if(opt === "header"){
                switch(isHovering){
                    case 'init':
                        return "h19-nero-poppins";
                    case 'on':
                        return "h19-black-poppins-white-hover-on";
                    case 'off':
                        return "h19-black-poppins-white-hover-off"
                }
            }
        }
    }

    /**
     * Markup
     */

    return(
        <div 
            className={renderClassName(props.style, "background", props.obj.isHover)}
            onMouseEnter={props.hoverEffect ? () => handleMouseEnter(props.style, props.obj.id) : null} 
            onMouseLeave={props.hoverEffect ? () => handleMouseLeave(props.style, props.obj.id) : null}
        >
            <H19 className={renderClassName(props.style, "header", props.obj.isHover)}>{props.obj.header}</H19>
            <Icon
                iconType={props.iconType}
                isHover={props.obj.isHover}
                hoverEffect={props.hoverEffect}
            />
        </div>
    );
}

export default AccordionItem;
