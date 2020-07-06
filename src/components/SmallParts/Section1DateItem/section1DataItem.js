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
* Utility
*/

import {
    H3,
    H4
} from '../../UtilityComponents';

/**
* Section1DataItem component definition and export
*/

export const Section1DataItem = (props) => {

    /**
    * Markup
    */

    return(
        <div className="section-1-data-item">
            <H3>{props.header}</H3>
            <H4 className="h4-opacity">{props.text}</H4>
            <div className="arrow"></div>
        </div>
    );
}

export default Section1DataItem;
 