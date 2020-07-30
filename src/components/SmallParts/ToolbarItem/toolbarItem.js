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
            className="toolbar-item-wrapper"
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave}
           >
            <div className={`toolbar-item-${props.toolbarMainColor}`}>
                {props.text}
        
            </div>
            {props.showOptionsRegular && props.hoverToolbarItem ? 
            <div 
            className="toolbar-item-options"
            onMouseLeave={props.onMouseLeave}
            >

            </div> : null}
        </div>
    );
}
 export default ToolbarItem;
 