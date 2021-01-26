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

import Loading from '../../SmallParts/Loading/loading';
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
    H15,
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
        
        if(props.testimonials.items.length === 0){
            props.fetchTestimonials();
        }
    }, []);

    /**
     * Markup
     */

    const renderTestimonialsDataContent = () => {
        if(props.testimonials.loading && !props.testimonials.error){
            return(
                <div 
                    className="testimonials-loading-error" 
                    style={{height: `${size.height/2}px`,}}
                >
                    <Loading color="white"/>
                </div>
            )
        }
        if(!props.testimonials.loading && !props.testimonials.error){
            return(
                <div className="testimonials-data">
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
            )
        }
        if(!props.testimonials.loading && props.testimonials.error){
            return(
                <div 
                    className="testimonials-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.testimonials.error}`}</H15>
                </div>
            )
        }
    } 
    
    return(
        <div className="testimonials">
            {renderTestimonialsDataContent()}
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
 