/**
* Libraries
*/

import React from 'react';

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
    * Markup
    */

    return(
        <div className="toolbar-item">
            {props.text}
        </div>
    );
}
 export default ToolbarItem;
 