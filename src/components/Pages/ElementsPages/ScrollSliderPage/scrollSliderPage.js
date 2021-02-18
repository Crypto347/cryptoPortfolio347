/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useRef
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
import ScrollSlider from '../../../../library/ScrollSlider/scrollSlider';
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

    const resizeRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [mouseOnSlider, setMouseOnSlider] = useState(false);
    const initCoordinateRange = [
        {
            key: "scrollSliderId1",
            updated: false,
            rendered: false
        }
    ]
    
    /**
     * Methods
     */

    useEffect(() => {
        let timeout;

        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.scrollSliderPage.items.length === 0){
            props.fetchScrollSliderPageData();
        }

        // Scroll to the top of the screen

        if(!props.scrollSliderPage.sliderContainersCoordinateRange[0].rendered){
            timeout = setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }

        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);
        return () => {
            // Cleaning the unmounted component
            
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, [props.scrollSliderPage.sliderContainersCoordinateRange[0].updated]);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        // props.forgetCoordinateRangeOfScrollSliderForScrollSliderPage(initCoordinateRange);
    }
    
    const handleMouseMove = (e) => {

        let slider1CoordinateRange = props.scrollSliderPage.sliderContainersCoordinateRange.find(item => item.key === "scrollSliderId1");

        // console.log("ff",mouseOnSlider1)

        /**
         * Split the image holder into equal parts equal to the number of elements in imagesArray,
         * and remember the coordinates of each part. Then check if the cursor coordinates are 
         * inside the part and then render the corresponding image.
         */

        let pageX = e.pageX;
        let pageY = e.pageY;

        // Check if inside the image holder
        if(slider1CoordinateRange.leftCoordinate < pageX && pageX < slider1CoordinateRange.rightCoordinate &&
            slider1CoordinateRange.topCoordinate < pageY && pageY < slider1CoordinateRange.bottomCoordinate
        ){
            setMouseOnSlider(true);
            // console.log("jjj")
            // let selectedDivDividedByImagesNumber = Math.round(props.imgCoordinateRange.width / props.imagesArray.length);
            // let coordinatesArray = Utility.getArrayOfEmptyVal(props.imagesArray.length);
            // coordinatesArray = coordinatesArray.map((el, i) => props.imgCoordinateRange.leftCoordinate + i * selectedDivDividedByImagesNumber);
            // coordinatesArray.map((el, i) => {
            //     if(i !== coordinatesArray.length - 1){
            //         // Check if inside the calculated corresponding part

            //         if(coordinatesArray[i] < pageX && pageX < coordinatesArray[i + 1]){
            //             setImgToLoad(props.imagesArray[i]);
            //         }
            //     }else{
            //         // Check if inside the calculated corresponding part

            //         if(coordinatesArray[i] < pageX && pageX < props.imgCoordinateRange.rightCoordinate){
            //             setImgToLoad(props.imagesArray[i]);
            //         }
            //     }
               
            // })
        }else{
            setMouseOnSlider(false);
        }
    }

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

    // const handleMouseEnter = (opt) => {
    //     switch(opt){
    //         case 'scrollSliderPageDataItems': 
    //             setMouseOnSlider(true);
    //             break; 
    //     }
    // }

    // const handleMouseLeave = (opt) => {
    //     switch(opt){
    //         case 'scrollSliderPageDataItems': 
    //             setMouseOnSlider(false);
    //             break; 
    //     }
    // }

    const renderScrollSliderPageData = (arr) => {
        return(
            <div 
                className="scroll-slider-page-data-items"
                id="scrollSliderPageDataItems"
                // onMouseEnter={() => handleMouseEnter(`scrollSliderPageDataItems`)} 
                // onMouseLeave={() => handleMouseLeave(`scrollSliderPageDataItems`)} 
            >
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
                    {/* {renderScrollSliderPageData(arr)} */}
                    <ScrollSlider
                        page="scrollSliderComponent"
                        sliderKey="scrollSliderId1"
                        sliderContent={arr}
                        sliderContainersCoordinateRange={props.scrollSliderPage.sliderContainersCoordinateRange}
                        orientation="row"
                        rememberCoordinateRange={props.rememberCoordinateRangeOfScrollSliderForScrollSliderPage}
                        mouseOnSlider={mouseOnSlider}
                    />
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
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            rememberCoordinateRangeOfScrollSliderForScrollSliderPage: bindActionCreators(Actions.rememberCoordinateRangeOfScrollSliderForScrollSliderPage, dispatch),
            forgetCoordinateRangeOfScrollSliderForScrollSliderPage: bindActionCreators(Actions.forgetCoordinateRangeOfScrollSliderForScrollSliderPage, dispatch),
        };
    }
)(ScrollSliderPage);
 