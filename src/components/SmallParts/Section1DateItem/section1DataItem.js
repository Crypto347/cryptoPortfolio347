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

import './section1DataItem.scss';

/**
* Section1DataItem component definition and export
*/

export const Section1DataItem = (props) => {

    /**
    * Markup
    */

    return(
        <div className="section-1-data-item">
            <div className="section-1-data-item-header">{props.header}</div>
            <div className="section-1-data-item-text">{props.text}</div>
            <div></div>
        </div>
    );
}

export default Section1DataItem;
 