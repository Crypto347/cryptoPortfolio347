/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './section2.scss';

/**
* Components
*/

// import Section1DateItem from '../../SmallParts/Section1DateItem/section1DataItem';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Services
*/

import * as Services from "../../../service";

/**
* Utility
*/

import {
   EH1
} from '../../UtilityComponents';

/**
* Images
*/



/**
* Constants
*/


/**
* Section2 component definition and export
*/

export const Section2 = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        // props.fetchSection1Data();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    /**
    * Markup
    */

    return(
        <div className="section-2">
            
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // section1DataItems: Selectors.getSection1DateItemsState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Section2);
 