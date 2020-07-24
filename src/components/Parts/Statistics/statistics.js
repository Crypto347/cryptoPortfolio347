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

import './statistics.scss';

/**
* Components
*/

import Swiper from '../../../library/Swiper/swiper';

/**
* Actions
*/

// import * as Actions from '../../../actions';

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
    H45,
    EH4,
    EH2
} from '../../UtilityComponents';

/**
* Images
*/

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';



/**
* Constants
*/


/**
* Statistics component definition and export
*/

export const Statistics = (props) => {

    /**
    * State
    */

//    const size = useWindowSize();

    /**
    * Methods
    */

    useEffect(() => {
        // props.fetchTestimonials();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    /**
    * Markup
    */

    return(
        <div className="statistics">
      
            
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // testimonials: Selectors.getTestimonialsState(state),
            // ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchTestimonials: bindActionCreators(Services.fetchTestimonials, dispatch),
          
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Statistics);
 