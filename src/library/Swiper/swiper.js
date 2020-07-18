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
    bindActionCreators
} from 'redux';

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
* Actions
*/

import * as Actions from '../../actions';

/**
* Selectors
*/

import * as Selectors from '../../reducers/selectors';

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
    H15,
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
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    // const [mouseDown, setMouseDown] = useState(false)
  
    // const []

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
        if(!props.contentArray.loading && props.contentArray.items.length === 3){
            setState({
                ...state,
                _slides: [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]],
                translate: getTranslateValue(props.translateWidth, props.translateHeight),
            })
        }

        if(!props.contentArray.loading && props.contentArray.items.length === 4){
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
            if(e.target.className.includes(`${props.translateWidth ? "swiper-window-width-content" : "swiper-window-height-content"}`)){
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        let interval = null;

        window.addEventListener('transitionend', smooth);
        window.addEventListener('resize', resize);
        window.addEventListener('resize', resize);
        

        let swiper = document.getElementById('swiper-wrapper');
        let mouseDown = false;
        swiper.addEventListener('mousedown', (e) => {
            mouseDown = true;
        });
        swiper.addEventListener('mousemove', (e) => handleMouseMove(e, mouseDown));
        swiper.addEventListener('mouseup', (e) => {
            mouseDown = false;
        });

        return () => {
            window.removeEventListener('transitionend', smooth);
            window.removeEventListener('resize', resize);
            // swiper.removeEventListener('mousedown', (e) => handleMouseUp(e));
            swiper.removeEventListener('mousemove', handleMouseMove);
            // swiper.removeEventListener('mouseup', (e) => handleMouseUp(e));
        };
    }, [])

    useInterval(() => {
        nextSlide();
    }, props.autoPlay ? 3000 : null)


    // const handleMouseDown = (e) => {
    //  console.log(e)
    // }

    const handleMouseMove = (e, mouseDown) => {
        if(mouseDown){
            console.log("mouseDown")
        }
    }

    // const handleMouseUp = (e) => {
    //     props.setMouseDown(false);
    // }

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

        if(props.showNumbersOfSLides === 1){
            //We're at the last slide
            if(activeIndex === slides.length - 1)
            _slides = [slides[slides.length - 2], slides[slides.length - 1], slides[0]];
            //We're back at the first slide. Just reset to how it was on initial render.
            else if (activeIndex === 0) _slides = [slides[slides.length - 1], slides[0], slides[1]]
            // Create an array of the previous last slide, and the next two slides that follow it.
            else _slides = slides.slice(activeIndex - 1, activeIndex + 2);
            setState({
                ...state,
                _slides,
                transition: 0,
                translate: getTranslateValue(props.translateWidth, props.translateHeight)
            })
        }
        if(props.showNumbersOfSLides === 3){
            if(activeIndex === slides.length - 1){
                _slides = [slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1], slides[2]];
            }
            if (activeIndex === 0){
                _slides = [slides[slides.length - 1], slides[0], slides[1], slides[2], slides[3]];
            }
            if(activeIndex === 1){
                _slides = slides.slice(activeIndex - 1, activeIndex + 5);
            }
            if(activeIndex === 2){
                _slides = [slides[1], slides[2], slides[3], slides[slides.length - 1], slides[0]];
            }
            if(activeIndex === 3){
                _slides = [slides[2], slides[3], slides[slides.length - 1], slides[0], slides[1]];
            }
        
            setState({
                ...state,
                _slides,
                transition: 0,
                translate: cardWidth
            })
        }
      
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

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow('on');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('on');
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow('off');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('off');
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "leftArrow"){
            switch(isHovering){
                case 'init':
                    return "swiper-arrow-left-wrapper";
                case 'on':
                    return "swiper-arrow-left-wrapper-hover-on";
                case 'off':
                    return "swiper-arrow-left-wrapper-hover-off"
            }
        }
        if(opt === "rightArrow"){
            switch(isHovering){
                case 'init':
                    return "swiper-arrow-right-wrapper";
                case 'on':
                    return "swiper-arrow-right-wrapper-hover-on";
                case 'off':
                    return "swiper-arrow-right-wrapper-hover-off"
            }
        }      
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
    //   console.log(_slides)
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
                <div className="swiper-arrow-left">
                    <div 
                        // className="swiper-arrow-left-wrapper"
                        className={renderClassName("leftArrow", isHoveringLeftArrow)}
                        onClick={prevSlide}
                        onMouseEnter={() => handleMouseEnter('leftArrow')} 
                        onMouseLeave={() => handleMouseLeave('leftArrow')}
                    >
                        <div className="h17-white-lustria">Previous</div>
                        <div className="swiper-arrow-left-line"/>
                    </div>
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
                <div className="swiper-arrow-right">
                    <div 
                        // className="swiper-arrow-right-wrapper"
                        className={renderClassName("rightArrow", isHoveringRightArrow)}
                        onClick={nextSlide}
                        onMouseEnter={() => handleMouseEnter('rightArrow')} 
                        onMouseLeave={() => handleMouseLeave('rightArrow')}
                    >
                        <div className="h17-white-lustria">Next</div>
                        <div className="swiper-arrow-right-line"/>
                    </div>
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
            <div className="swiper-wrapper"  id="swiper-wrapper">
                {renderSwiper()}
            </div>
            {renderSecondArrow()}
            {/* {console.log(mouseDown)} */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // mouseDown: Selectors.getMouseDownState(state)
        };
    }
)(Swiper);
 