/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

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

import * as Actions from '../../../actions';

/**
 * Services
 */

import * as Services from "../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import {
    H45,
    EH25,
    EH80,
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

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
        // Fetch data for the component
        
        props.fetchTestimonials();
    }, []);

    /**
     * Markup
     */

    return(
        <div className="testimonials">
            <EH80/>
            <H45 className="h45-white-lustria">Testimonials</H45>
            <EH25/>
            <Swiper 
                component="testimonials"
                contentArray={props.testimonials.items}
                content={props.testimonials}
                translateWidth={size.width - 130}
                showNumbersOfSlides={1}
                setSwiperState={props.setSwiperStateForHomePage}
                swiperData={props.testimonials.swiper}
                rememberCoordinateRange={props.rememberCoordinateRangeOfSwiperForHomePage}
                autoPlay
            />
            <EH80/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            testimonials: Selectors.getTestimonialsState(state)
        };
    },
    (dispatch) => {
        return {
            fetchTestimonials: bindActionCreators(Services.fetchTestimonials, dispatch),
            setSwiperStateForHomePage: bindActionCreators(Actions.setSwiperStateForHomePage, dispatch),
            rememberCoordinateRangeOfSwiperForHomePage: bindActionCreators(Actions.rememberCoordinateRangeOfSwiperForHomePage, dispatch),
            forgetCoordinateRangeOfSwiperForHomePage: bindActionCreators(Actions.forgetCoordinateRangeOfSwiperForHomePage, dispatch),

        };
    }
)(Testimonials);
 