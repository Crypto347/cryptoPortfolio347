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

import './scrollSliderPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Button from '../../../../library/Button/button';
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
    H17,
    H25,
    H45,
    H65,
    EW10,
    EH20,
    EH60
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as Images from '../../../../constants/images';

/**
 * ScrollSliderPage component definition and export
 */

export const ScrollSliderPage = (props) => {

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

        if(props.scrollSliderPage.items.length === 0){
            props.fetchScrollSliderPageData();
        }

        // Scroll to the top of the screen

        let timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("scrollSliderPage");

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

    const renderBackgroundColor = (section) => {
        switch(section) {
            case 'section1':
                return 'rgb(239, 239, 239)';
            case 'section2':
            default:
                return 'white';
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
                        page="scrollSliderPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="scrollSliderPage"
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
                        page="scrollSliderPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="scrollSliderPage"
                    />
                </>
            )
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'scrollSliderPageImg1':
                return Images.SCROLL_SLIDER_IMG_1;
            case 'scrollSliderPageImg2':
                return Images.SCROLL_SLIDER_IMG_2;
            case 'scrollSliderPageImg3':
                return Images.SCROLL_SLIDER_IMG_3;
            case 'scrollSliderPageImg4':
                return Images.SCROLL_SLIDER_IMG_4;
            case 'scrollSliderPageImg5':
                return Images.SCROLL_SLIDER_IMG_5;
            case 'scrollSliderPageImg6':
                return Images.SCROLL_SLIDER_IMG_6;
            default:
                return "";
        }
    }

    const renderScrollSliderPageData = (arr) => {
        return(
            <div className="scroll-slider-page-data-items">
                {arr.map((el, i) => {
                    if(el.option === "text"){
                        return(
                            <div 
                                key={i}
                                className="scroll-slider-page-data-item-text"
                            >
                                <H65 className="h65-black-poppins">{el.header1}</H65>
                                <H65 className="h65-black-lustria">{el.header2}</H65>
                                <EH20/>
                                <H25 className="h25-nobel-lustria">{el.text}</H25>
                                <EH60/>
                                <Button
                                    className="buttons-page-medium"
                                    text="get direction."
                                    onMouseDown={(e) => onMouseDownHandler(e)}
                                />
                                <EH60/>
                            </div>
                        )
                    }else if(el.option === "image"){
                        return(
                            <div 
                                key={i}
                                className="scroll-slider-page-data-item-image"
                                style={{
                                    margin: `0px ${i === arr.length - 1 ? 0 : 10}px 0px 10px`
                                }}
                            >
                                <img 
                                    src={loadImg(el.key)}
                                    alt={el.alt}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
    
    const renderScrollSliderPageDataContent = (arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="scroll-slider-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!arr.loading && !arr.error){
            return(
                <>
                    {renderScrollSliderPageData(arr)}
                </>
            )
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="scroll-slider-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${arr.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="scroll-slider-page" id="scrollSliderPage">
            {renderToolbars()}
            <div className="scroll-slider-page-wrapper">
                <div className="scroll-slider-page-header">
                    <H45 className="h45-nero-lustria">Scroll Slider</H45>
                </div>
                <div className="grey-line"/>
                {renderScrollSliderPageDataContent(props.scrollSliderPage.items)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            scrollSliderPage: Selectors.getScrollSliderPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchScrollSliderPageData: bindActionCreators(Services.fetchScrollSliderPageData, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(ScrollSliderPage);
 