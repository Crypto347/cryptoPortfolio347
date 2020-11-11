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

import './icon.scss';

/**
 * Utility
 */

import { 
    H17,
    H35,
    EH10,
    EH20
} from '../../UtilityComponents';

/**
 * Icon component definition and export
 */

export const Icon = (props) => {

    /**
     * State
     */
 
    /**
     * Methods
     */

    useEffect(() => {
    }, []);
    
    const renderClassName = (opt, isHovering, isActive) => {
        if(opt === "plusIcon" && !props.hoverEffect){
            return "plus-icon";
        }
        if(opt === "plusIcon" && props.hoverEffect){
            if(isActive === "on"){
                return "plus-icon-hover-on";
            }
            switch(isHovering){
                case 'init':
                    return "plus-icon";
                case 'on':
                    return "plus-icon-hover-on";
                case 'off':
                    return "plus-icon-hover-off"
            }
        }
    }

    /**
     * Markup
     */

    return(
        <div className={renderClassName(props.iconType, props.isHover, props.isActive)}>
            <div className="plus-horizontal-line"/>
            <div className="plus-vertical-line"/>
        </div>
    );
}

export default Icon;
