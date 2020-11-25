/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './testimonialsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';

/**
 * Actions
 */

import * as Actions from '../../../../actions';

/**
 * Services
 */

import * as Services from "../../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../../reducers/selectors';

/**
 * Utility
 */

import { 
    H15,
    H45
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * TestimonialsPage component definition and export
 */

export const TestimonialsPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.testimonialsPage.section1Data.items.length === 0){
            props.fetchTestimonialsPageSection1Data();
        }

        if(props.testimonialsPage.section2Data.items.length === 0){
            props.fetchTestimonialsPageSection2Data();
        }

        if(props.testimonialsPage.section3Data.items.length === 0){
            props.fetchTestimonialsPageSection3Data();
        }
        
        // Scroll to the top of the screen

        window.scrollTo(0, 0);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("testimonialsPage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
        }
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
            setScrollingUp(false);
        }else{
            setScrollingUp(true);
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="testimonialsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="testimonialsPage"
                    />
                </>
            )
        }else{
            return(
                <>
                    <Toolbar 
                        style="regularScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="testimonialsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="testimonialsPage"
                    />
                </>
            )
        }
    }

    const renderTestimonialsPageSection1DataContent = () => {
        if(props.testimonialsPage.section1Data.loading && !props.testimonialsPage.section1Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.testimonialsPage.section1Data.loading && !props.testimonialsPage.section1Data.error){
            // return(
            // )
        }
        if(!props.testimonialsPage.section1Data.loading && props.testimonialsPage.section1Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.testimonialsPage.section1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderTestimonialsPageSection2DataContent = () => {
        if(props.testimonialsPage.section2Data.loading && !props.testimonialsPage.section2Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.testimonialsPage.section2Data.loading && !props.testimonialsPage.section2Data.error){
            // return(
            // )
        }
        if(!props.testimonialsPage.section2Data.loading && props.testimonialsPage.section2Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.testimonialsPage.section2Data.error}`}</H15>
                </div>
            )
        }
    }

    const renderTestimonialsPageSection3DataContent = () => {
        if(props.testimonialsPage.section3Data.loading && !props.testimonialsPage.section3Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.testimonialsPage.section3Data.loading && !props.testimonialsPage.section3Data.error){
            // return(
            // )
        }
        if(!props.testimonialsPage.section3Data.loading && props.testimonialsPage.section3Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.testimonialsPage.section3Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="testimonials-page" id="testimonialsPage">
            {renderToolbars()}
            <div className="testimonials-page-wrapper">
                <div className="testimonials-page-header">
                    <H45 className="h45-nero-lustria">Testimonials</H45>
                </div>
                <div className="grey-line"/>
                {renderTestimonialsPageSection1DataContent()}
                {renderTestimonialsPageSection2DataContent()}
                {renderTestimonialsPageSection3DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            testimonialsPage: Selectors.getTestimonialsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchTestimonialsPageSection1Data: bindActionCreators(Services.fetchTestimonialsPageSection1Data, dispatch),
            fetchTestimonialsPageSection2Data: bindActionCreators(Services.fetchTestimonialsPageSection2Data, dispatch),
            fetchTestimonialsPageSection3Data: bindActionCreators(Services.fetchTestimonialsPageSection3Data, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(TestimonialsPage);
 