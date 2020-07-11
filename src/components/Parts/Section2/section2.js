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

import PictureBoard from '../../Parts/PictureBoard/pictureBoard';
import OurProcess from '../../Parts/OurProcess/ourProcess';

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
   H130,
   H25,
   EH3,
   EH4
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
        props.fetchPictureBoard();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    /**
    * Markup
    */

    return(
        <div className="section-2">
            <div className="section-2-wrapper">
                <H130 className="h130-white-teko">Work.</H130>
                <EH3/>
                <H25 className="h25-white">Lorem ipsum dolor sit amet, consectetur ad.</H25>
                <EH3/>
                <EH3/>
                <PictureBoard/>
                <EH4/>
                <OurProcess/>
            </div>
            
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
            fetchPictureBoard: bindActionCreators(Services.fetchPictureBoard, dispatch),
          
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Section2);
 