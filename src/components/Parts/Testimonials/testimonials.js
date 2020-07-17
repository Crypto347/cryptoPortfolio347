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

import './testimonials.scss';

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
* Testimonials component definition and export
*/

export const Testimonials = (props) => {

    /**
    * State
    */

   const size = useWindowSize();

    /**
    * Methods
    */

    useEffect(() => {
        props.fetchTestimonials();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    /**
    * Markup
    */

    return(
        <div className="testimonials">
            <EH4/>
            <H45 className="h45-white-lustria">Testimonials</H45>
            <EH2/>
            <Swiper 
                contentArray={props.testimonials}
                translateWidth={size.width - 130}
            />
            <EH4/>
            
        </div>
    );
}

export default connect(
    (state) => {
        return {
            testimonials: Selectors.getTestimonialsState(state),
            // ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchTestimonials: bindActionCreators(Services.fetchTestimonials, dispatch),
          
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Testimonials);
 