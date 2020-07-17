/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    connect
} from 'react-redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
   faChevronUp,
   faChevronDown
} from '@fortawesome/free-solid-svg-icons';

/**
* Styles
*/

import './swiper.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Hooks
*/

import {
    useInterval
} from '../../Hooks/useInterval';


/**
* Utility
*/

import {
    H25,
    EH2
} from '../../components/UtilityComponents';

/**
* Images
*/

// import StoryImage1 from '../../../images/photo-1527358043728-909898958b29.jpg';
// import StoryImage2 from '../../../images/rocking-chairs-white-chairs-rockers.jpg';
// import StoryImage3 from '../../../images/coffee-latte-art-coffee-shop.jpg';
// import StoryImage4 from '../../../images/coffee-cup-latte-cappuccino.jpg';
// import StoryImage5 from '../../../images/coffee-cup-beverage-food-photo.jpg';
// import StoryImage6 from '../../../images/white-bowl-beside-glass-cup.jpg';
// import DefaultImage from '../../../images/error.jpg';

/**
* Swiper component definition and export
*/

export const Swiper = (props) => {

    const getHeight = () => window.innerHeight;
    const getWidth = () => window.innerWidth;
    
    const [slides, setSlides] = useState([])

    const [showUpArrow, setShowUpArrow] = useState(false);
    const [showDownArrow, setShowDownArrow] = useState(false);

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        _slides: []
    });

    const {activeIndex, translate, transition, _slides} = state;

    const transitionRef = useRef();
    const resizeRef = useRef();

    /**
    * Methods
    */

    useEffect(() => {
        let slidesArray = [...props.contentArray.items];
        setSlides(slidesArray);
        // console.log(slidesArray)
        if(!props.contentArray.loading){
            setState({
                ...state,
                _slides: [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]],
                translate: getTranslateValue(props.translateWidth, props.translateHeight),
            })
        }

        return () => {
            setState({
                activeIndex: 0,
                translate: getTranslateValue(props.translateWidth, props.translateHeight),
                transition: 0.45,
                _slides: []
            });
            setSlides([]);
        };
    }, [props.contentArray.loading, slides.length]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    })

    useEffect(() => {
        if(transition === 0) {
            setState({
                ...state,
                transition: 0.45
            })
        }
    }, [transition])

    useEffect(() => {
        const smooth = e => {
            if(e.target.className.includes('slider-content')){
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        let interval = null;

        window.addEventListener('transitionend', smooth);
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('transitionend', smooth);
            window.removeEventListener('resize', resize);
        };
    }, [])

    useInterval(() => {
        nextSlide();
    }, props.autoPlay ? 3000 : null)

    const getTranslateValue = (width, height) => {
        if(width){
            if(width === "windowWidth"){
                return getWidth();
            }else{
                return width;
            }
        }
        if(height){
            if(height === "windowHeight"){
                return getHeight();
            }else{
                return height;
            }
        }
    }
    
    const handleResize = () => {
        setState({
            ...state,
            translate: getTranslateValue(props.translateWidth, props.translateHeight),
            transition: 0
        })
    }

    const smoothTransition = () => {
        let _slides = [];
            //We're at the last slide
            if(activeIndex === slides.length - 1)
            _slides = [slides[slides.length - 2], slides[slides.length - 1], slides[0]];
            //We're back at the first slide. Just reset to how it was on initial render.
            else if (activeIndex === 0) _slides = [slides[slides.length - 1], slides[0], slides[1]]
            // Create an array of the previous last slide, and the next two slides that follow it.
            else _slides = slides.slice(activeIndex - 1, activeIndex + 2)
// console.log(_slides)
            setState({
                ...state,
                _slides,
                transition: 0,
                translate: getTranslateValue(props.translateWidth, props.translateHeight)
            })
          
        
    }

    const prevSlide = () => {
        setState({
            ...state,
            translate: 0,
            activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1
        })
    }

    const nextSlide = () => {
        setState({
            ...state,
            translate: translate + getTranslateValue(props.translateWidth, props.translateHeight),
            activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1
        })
    }

    const handleMouseEnter = () => {
        setShowUpArrow(true);
        setShowDownArrow(true)
    }

    const handleMouseLeave = () => {
        setShowUpArrow(false);
        setShowDownArrow(false);
    }

    const loadImage = (img) => {
        switch(img) {
            case 'image1': 
                return StoryImage1;
            case 'image2': 
                return StoryImage2;
            case 'image3': 
                return StoryImage3;
            case 'image4': 
                return StoryImage4;
            case 'image5': 
                return StoryImage5;
            case 'image6': 
                return StoryImage6;
            default:
                return ""; 
        }
    }

    const renderSwiper = () => {
      console.log(_slides)
      if(!props.contentArray.loading){
        if(props.translateWidth){
            return(
                <div 
                    className="swiper-window-width-content" 
                    id="swiper-content"
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `translateX(-${translate}px)`,
                        transition: `transform ${transition}s ease-out`,
                        width: `${getTranslateValue(props.translateWidth, props.translateHeight) * 3}px`
                    }}
                >{_slides.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            className="slide"
                            style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                        >
                           <H25 className="h25-white-lustria">{el.feedback}</H25>
                           <EH2/>
                           <H25 className="h25-white-teko">{el.author}</H25>
                        </div>
                    )
                })}</div>
            )
        }
        if(props.translateHeight){
            return(
                <div 
                    className="swiper-window-height-content" 
                    id="swiper-content"
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `translateY(-${translate}px)`,
                        transition: `transform ${transition}s ease-out`,
                        height: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`
                    }}
                >{_slides.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            className="slide"
                            style={{height: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                        >
                            <img src={loadImage(el)}/>
                        </div>
                    )
                })}</div>
            )
        }
      }
       
       
    }

    const renderFirstArrow = () => {
        if(props.translateWidth){
            return(
                <div 
                    className="swiper-arrow-left"
                    onClick={prevSlide}
                    onMouseEnter={handleMouseEnter} 
                >
                    {/* <div >

                    </div> */}
                </div>
            )
        }
        if(props.translateHeight){
            return(
                <div 
                className="swiper-arrow-up"
                onClick={prevSlide}
                onMouseEnter={handleMouseEnter} 
                >
                    <FontAwesomeIcon 
                        icon={faChevronUp} 
                        size="sm" 
                        color="white" 
                        className="icon"
                    />
                </div>
            )
        }
    }

    const renderSecondArrow = () => {
        if(props.translateWidth){
            return(
                <div 
                    className="swiper-arrow-right"
                    onClick={nextSlide}
                    onMouseEnter={handleMouseEnter} 
                >
                  
                </div>
            )
        }
        if(props.translateHeight){
            return(
                <div 
                    className="swiper-arrow-down"
                    onClick={nextSlide}
                    onMouseEnter={handleMouseEnter} 
                >
                    <FontAwesomeIcon 
                        icon={faChevronDown} 
                        size="sm" 
                        color="white" 
                        className="icon"
                    /> 
                </div>
            )
        }
       
    }


    /**
    * Markup
    */

    return(
        <div className="swiper" id="swiper">
            {renderFirstArrow()}
            <div className="swiper-wrapper">
                {renderSwiper()}
            </div>
            {renderSecondArrow()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // gallery: Selectors.getGalleryState(state)
        };
    }
)(Swiper);
 