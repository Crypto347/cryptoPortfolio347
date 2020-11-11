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
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "plusIcon" && !props.hoverEffect){
            return "plus-icon";
        }
        if(opt === "plusIcon" && props.hoverEffect){
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

    const renderIcon = (opt, isHover) => {
        return(
            <div className={renderClassName(opt, isHover)}>
                <div className="plus-horizontal-line"/>
                <div className="plus-vertical-line"/>
            </div>
        )
    }

    /**
     * Markup
     */

    return(
        <>
            {renderIcon(props.iconType, props.isHover)}
        </>
    );
}

export default Icon;
