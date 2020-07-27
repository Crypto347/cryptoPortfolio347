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

import './section4.scss';

/**
* Components
*/

import Statistics from '../Statistics/statistics';
import Achievements from '../Achievements/achievements';

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

// import {
//    H130,
//    H25,
//    EH40,
//    EH90
// } from '../../UtilityComponents';

/**
* Images
*/



/**
* Constants
*/


/**
* Section4 component definition and export
*/

export const Section4 = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        // props.fetchPictureBoard();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

   

    /**
    * Markup
    */

    return(
        <div className="section-4">
            <Statistics/>
            <Achievements/>
            
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // pictureBoard: Selectors.getPictureBoardItemsState(state),
            // ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchPictureBoard: bindActionCreators(Services.fetchPictureBoard, dispatch),
          
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Section4);
 