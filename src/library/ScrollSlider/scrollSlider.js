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

import './scrollSlider.scss';

/**
 * Components
 */

import Button from '../..//library/Button/button';

/**
 * Actions
 */

// import * as Actions from '../../../../actions';

/**
 * Services
 */

// import * as Services from "../../../../service";

/**
 * Selectors
 */

// import * as Selectors from '../../../../reducers/selectors';

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
} from '../../components/UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as Images from '../../constants/images';

/**
 * ScrollSlider component definition and export
 */

export const ScrollSlider = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    // const [sliderContainerCoordinatesRangeUpdated, setSliderContainerCoordinatesRangeUpdated] = useState(false);
    
    
    /**
     * Methods
     */

    useEffect(() => {
        let timeout;
        
        // Calculate slider container coordinates 

        // if(!sliderContainerCoordinateRange.updated){
            timeout = setTimeout(() => {
                setSlideContainerCoordinateRange();
            }, 2000);
        // }
        // else{
            // setSlideContainerCoordinateRange();
        // }

        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('wheel', handleOnWheel);
        // window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            // window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        // Update slider container coordinates on window resize
        // console.log("kjh")
        setSlideContainerCoordinateRange();
    }
    
    // const handleMouseMove = (e) => {

    //     /**
    //      * Split the image holder into equal parts equal to the number of elements in imagesArray,
    //      * and remember the coordinates of each part. Then check if the cursor coordinates are 
    //      * inside the part and then render the corresponding image.
    //      */

    //     let pageX = e.pageX;
    //     let pageY = e.pageY;

    //     // Check if inside the image holder
    //     if(props.imgCoordinateRange.leftCoordinate < pageX && pageX < props.imgCoordinateRange.rightCoordinate &&
    //         props.imgCoordinateRange.topCoordinate < pageY && pageY < props.imgCoordinateRange.bottomCoordinate
    //     ){
    //         let selectedDivDividedByImagesNumber = Math.round(props.imgCoordinateRange.width / props.imagesArray.length);
    //         let coordinatesArray = Utility.getArrayOfEmptyVal(props.imagesArray.length);
    //         coordinatesArray = coordinatesArray.map((el, i) => props.imgCoordinateRange.leftCoordinate + i * selectedDivDividedByImagesNumber);
    //         coordinatesArray.map((el, i) => {
    //             if(i !== coordinatesArray.length - 1){
    //                 // Check if inside the calculated corresponding part

    //                 if(coordinatesArray[i] < pageX && pageX < coordinatesArray[i + 1]){
    //                     setImgToLoad(props.imagesArray[i]);
    //                 }
    //             }else{
    //                 // Check if inside the calculated corresponding part

    //                 if(coordinatesArray[i] < pageX && pageX < props.imgCoordinateRange.rightCoordinate){
    //                     setImgToLoad(props.imagesArray[i]);
    //                 }
    //             }
               
    //         })
    //     }
    // }

    const setSlideContainerCoordinateRange = () => {
        //Remember slider container coordinates

        let sliderContainerCoordinateRange = evaluateCoordinates();

        props.rememberCoordinateRange(props.sliderKey, sliderContainerCoordinateRange);
    }

    const evaluateCoordinates = () => {
   
        //Calculate slider container coordinates

        let sliderContainer = document.getElementById(`scrollSlider`);
        let sliderContainerCoordinateRange = props.sliderContainersCoordinateRange.find(item => item.key === props.sliderKey);

        let updatedSliderCoordinateRange = {
            key: props.sliderKey,
            topCoordinate: sliderContainer.offsetTop,
            bottomCoordinate: sliderContainer.offsetTop + sliderContainer.offsetHeight,
            leftCoordinate: sliderContainer.offsetLeft,
            rightCoordinate: sliderContainer.offsetLeft + sliderContainer.offsetWidth,
            width: sliderContainer.offsetWidth,
            updated: !sliderContainerCoordinateRange.updated
        };
        return updatedSliderCoordinateRange;
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("scrollSliderPage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            // props.setShowBackToTopComponent(true);
        }else{
            // props.setShowBackToTopComponent(false);
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

    /**
     * Markup
     */

    return(
        <div 
            className="scroll-slider" 
            id="scrollSlider"
            style={{flexDirection: `${props.orientation}`}}
        >
           {props.sliderContent.map((el, i) => {
                if(el.option === "text"){
                    return(
                        <div 
                            key={i}
                            className="scroll-slider-item-text"
                        >
                            <H65 className="h65-black-poppins-scroll-slider">{el.header1}</H65>
                            <H65 className="h65-black-lustria-scroll-slider">{el.header2}</H65>
                            <EH20/>
                            <H25 className="h25-nobel-lustria">{el.text}</H25>
                            <EH60/>
                            <Button
                                className="buttons-page-medium"
                                text="get direction."
                                onMouseDown={(e) => onMouseDownHandler(e)}
                            />
                            {size.width < 900 ? null : <EH60/>}
                        </div>
                    )
                }else if(el.option === "image"){
                    return(
                        <div 
                            key={i}
                            className="scroll-slider-item-image"
                            style={{
                                margin: `0px ${i === props.sliderContent.length - 1 ? 0 : 10}px 0px 10px`
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
    );
}

export default ScrollSlider;
 