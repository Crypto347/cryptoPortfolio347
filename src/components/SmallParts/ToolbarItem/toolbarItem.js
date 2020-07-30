/**
* Libraries
*/

import React, {
    useState
} from 'react';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './toolbarItem.scss';

/**
* ToolbarItem component definition and export
*/

export const ToolbarItem = (props) => {
    
    /**
    * State
    */

    const [isHovering, setIsHovering] = useState(false);
    
    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div 
            className={`toolbar-item-${props.toolbarMainColor}`}
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave}
        >
            {props.text}
            {props.showOptionsRegular && props.hoverToolbarItem ? 
            <div className="toolbar-item-options">

            </div> : null}
        </div>
    );
}
 export default ToolbarItem;
 