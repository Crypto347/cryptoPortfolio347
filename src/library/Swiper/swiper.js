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
* Styles
*/

import './swiper.scss';

/**
* Components
*/

import Loading from '../../components/SmallParts/Loading/loading';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
* Selectors
*/

import * as Selectors from '../../reducers/selectors';


/**
* Utility
*/

import {
    H19,
    H25,
    EH25
} from '../../components/UtilityComponents';


/**
* Hooks
*/

import {
    useInterval
} from '../../Hooks/useInterval';

/**
* Images
*/

//Id1

import Id1BigSlider1 from '../../images/bigSlider/id1/ash-from-modern-afflatus-KPDDc1DeP4Y-unsplash.jpg';
import Id1BigSlider2 from '../../images/bigSlider/id1/estee-janssens-zni0zgb3bkQ-unsplash.jpg';
import Id1BigSlider3 from '../../images/bigSlider/id1/filip-mroz-uKV0xYsRdsg-unsplash.jpg';
import Id1BigSlider4 from '../../images/bigSlider/id1/laura-chouette-t6hNUc8vspA-unsplash.jpg';
import Id1BigSlider5 from '../../images/bigSlider/id1/nadine-shaabana-soX8qpVwOm4-unsplash.jpg';

/**
* Icons
*/

import { 
    faChevronUp,
    faChevronDown
 } from '@fortawesome/free-solid-svg-icons';

/**
* Swiper component definition and export
*/

export const Swiper = (props) => {

    const getHeight = () => window.innerHeight;
    const getWidth = () => window.innerWidth;
    
    // const [slides, setSlides] = useState([])
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    // const [mouseDown, setMouseDown] = useState(false)
  
    // const []

    // const [state, setState] = useState({
    //     activeIndex: 0,
    //     translate: 0,
    //     transition: 0.45,
    //     _slides: []
    // });

    // const {activeIndex, translate, transition, _slides} = state;

    const transitionRef = useRef();
    const resizeRef = useRef();

    /**
    * Methods
    */

    useEffect(() => {
        let slidesArray = [...props.contentArray];
        let _slides;
        let swiperWrapper;
        let swiperContent;
        let translateVal;
        let _updatedSlides;
        if(!props.content.loading && props.showNumbersOfSlides === 1){
            swiperWrapper = document.getElementById('swiper-wrapper');   
            swiperContent = document.getElementById('swiper-content');
          
            
            _slides = [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]];
            // setState({
            //     ...state,
            //     _slides: [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]],
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
            // })

            if(props.swiperData.rerender) {
                props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, props.swiperData.transition, true);

                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
                _updatedSlides = updateSlides(props.swiperData.slides, props.swiperData.activeIndex);
            }else{
                props.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false);
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
            }
            slide(swiperWrapper, swiperContent, translateVal, _updatedSlides);
        
        }

        if(!props.content.loading && props.showNumbersOfSlides === 3){
            _slides = [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]]
            // setState({
            //     ...state,
            //     _slides: [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]],
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
            // })
            prop.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, props.swiperData.rerender);
        }

        return () => {
           
            props.setSwiperState([], [], 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false);
            if(swiperContent){
                swiperContent.removeEventListener('mousedown', handleMouseDown);
                document.removeEventListener('mouseup', handleMouseUp)
            }
           
            // setState({
            //     activeIndex: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
            //     transition: 0.45,
            //     _slides: []
            // });
            // setSlides([]);
        };
    }, [props.content.loading, props.swiperData.slides.length, props.swiperData.activeIndex]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    })

    useEffect(() => {
        if(props.swiperData.transition === 0) {
            // setState({
            //     ...state,
            //     transition: 0.45
            // })
           
            props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, 0.45, props.swiperData.rerender);
        }
    }, [props.swiperData.transition])

    useEffect(() => {

        const smooth = e => {
            if(e.target.className.includes(`${props.translateWidth ? "swiper-window-width-content" : "swiper-window-height-content"}`)){
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current();
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
    }, props.autoPlay ? 7000 : null)

    const slide = (swiperWrapper, swiperContent, translateVal, _slides) => {
        let posX1 = 0;
        let posX2 = 0;
        let posInitial;
        let posFinal;
        let threshold = 50; //draging delta
        let direction;

        swiperContent.addEventListener('mousedown', (e) => handleMouseDown(e, dragStart, swiperContent));
        document.addEventListener('mouseup', () => handleMouseUp(swiperContent));

        function dragStart (e) {
            e = e || window.event;
            e.preventDefault();
            posInitial = swiperContent.offsetLeft;
            if (e.type == 'touchstart') {
              posX1 = e.touches[0].clientX;
            } else {
              posX1 = e.clientX;
              document.onmouseup = dragEnd;
              document.onmousemove = dragAction;
            }
        }

        function dragAction (e) {
            e = e || window.event;
            if (e.type == 'touchmove') {
              posX2 = posX1 - e.touches[0].clientX;
              posX1 = e.touches[0].clientX;
            } else {
              posX2 = posX1 - e.clientX;
              posX1 = e.clientX;
            }
            direction = e.movementX;
            swiperContent.style.transition = (swiperContent.offsetLeft - posX2) + "px";
        }
        
        function dragEnd (e) {
            if(direction > 0){
                prevSlide(_slides);
            }else{
                nextSlide(_slides, translateVal);
            }
            // if (posFinal - posInitial < -threshold) {
            //     nextSlide(props.swiperData.activeIndex);
            // } else if (posFinal - posInitial > threshold) {
            //     prevSlide(props.swiperData.activeIndex);
            // } else {
                // swiperContent.style.left = (posInitial) + "px";
            // }
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    const handleMouseDown = (e, dragStart, swiperContent) => {
        dragStart(e)
        swiperContent.classList.add('active');
    }

    const handleMouseUp = (swiperContent) => {
        swiperContent.classList.remove('active');
    }

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
        // setState({
        //     ...state,
        //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
        //     transition: 0
        // })
        props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, true);
    }

    const smoothTransition = () => {
        let _slides = [];
        let slides = [...props.swiperData.slides];
        let activeIndex = props.swiperData.activeIndex;
        if(props.showNumbersOfSlides === 1){
            _slides = updateSlides(slides, activeIndex);
            // setState({
            //     ...state,
            //     _slides,
            //     transition: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight)
            // })
            props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender);
        }
        if(props.showNumbersOfSlides === 3){
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
            console.log("7")
            setState({
                ...state,
                _slides,
                transition: 0,
                translate: getTranslateValue(props.translateWidth, props.translateHeight)
            })
        }
      
    }

    const updateSlides = (slides, activeIndex) => {
        let _slides = [];
        //We're at the last slides
        if(activeIndex === slides.length - 1)
        _slides = [props.swiperData.slides[slides.length - 2], slides[slides.length - 1], slides[0]];
        //We're back at the first slide. Just reset to how it was on initial render.
        else if (activeIndex === 0) _slides = [slides[slides.length - 1], slides[0], slides[1]]
        // Create an array of the previous last slide, and the next two slides that follow it.
        else _slides = slides.slice(activeIndex - 1, activeIndex + 2);

        return _slides;
    }

    const prevSlide = (_slides) => {
        // setState({
        //     ...state,
        //     translate: 0,
        //     activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1
        // })
        let activeIndex = props.swiperData.activeIndex === 0 ? props.swiperData.slides.length - 1 : props.swiperData.activeIndex - 1;
        let translate = 0;
        let _updatedSlides = _slides ? _slides : props.swiperData._slides;
        props.setSwiperState(props.swiperData.slides, _updatedSlides, activeIndex, translate, props.swiperData.transition, true);
    }

    const nextSlide = (_slides, translateVal) => {
        // setState({
        //     ...state,
        //     translate: translate + getTranslateValue(props.translateWidth, props.translateHeight),
        //     activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1
        // })
        let activeIndex = props.swiperData.activeIndex === props.swiperData.slides.length - 1 ? 0 : props.swiperData.activeIndex + 1
        let translate = translateVal ? translateVal + getTranslateValue(props.translateWidth, props.translateHeight) : props.swiperData.translate + getTranslateValue(props.translateWidth, props.translateHeight);
        let _updatedSlides = _slides ? _slides : props.swiperData._slides;
        props.setSwiperState(props.swiperData.slides, _updatedSlides, activeIndex, translate, props.swiperData.transition, true);
       
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
        if(opt === "testimonials"){
            return "swiper-testimonials"
        }
        if(opt === "bigSlider"){
            return "swiper-big-slider"
        }
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
            case 'id1BigSlider1': 
                return Id1BigSlider1;
            case 'id1BigSlider2': 
                return Id1BigSlider2;
            case 'id1BigSlider3': 
                return Id1BigSlider3;
            case 'id1BigSlider4': 
                return Id1BigSlider4;
            case 'id1BigSlider5': 
                return Id1BigSlider5;
            default:
                return ""; 
        }
    }

    const renderSwiper = () => {
        if(props.content.loading && !props.content.error){
            return(
                <div className="content-array-loading-error">
                    <Loading color="white"/>
                </div>
            )
        }
        if(!props.content.loading && !props.content.error){
            return(
                <>
                    {swiper()}
                </>
            )
        }
        if(!props.content.loading && props.content.error){
            return(
                <div className="content-array-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.content.error}`}</H19>
                </div>
            )
        }
    } 

    const swiper = () => {
      if(!props.content.loading){
        if(props.translateWidth){
            return(
                <div 
                    className="swiper-window-width-content" 
                    id="swiper-content"
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `translateX(-${props.swiperData.translate}px)`,
                        transition: `transform ${props.swiperData.transition}s ease-out`,
                        width: `${getTranslateValue(props.translateWidth, props.translateHeight) * props.contentArray.length}px`
                    }}
                >{props.swiperData._slides.map((el, i) => {
                    if(props.component === "testimonials"){
                        return(
                            <div 
                                key={i} 
                                className="slide"
                                id="slide"
                                style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                            >
                               <H25 className="h25-white-lustria">{el.feedback}</H25>
                               <EH25/>
                                <div className="author-name-wrapper">
                                    <div className="slide-dash"/>
                                    <H25 className="h25-white-teko">{el.author}</H25>
                                </div>
                            </div>
                        )
                    }
                    if(props.component === "bigSlider"){
                        return(
                            <div 
                                key={i} 
                                className="slide"
                                id="slide"
                                style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                            >
                                <div className="slide-image">
                                    <img src={loadImage(el.imageName)}/>
                                </div>
                            </div>
                        )
                    }
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
                        onClick={() => prevSlide(null, null)}
                        onMouseEnter={() => handleMouseEnter('leftArrow')} 
                        onMouseLeave={() => handleMouseLeave('leftArrow')}
                        id="prev"
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
                    onClick={() => prevSlide(null, null)}
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
                        onClick={() => nextSlide(null, null)}
                        onMouseEnter={() => handleMouseEnter('rightArrow')} 
                        onMouseLeave={() => handleMouseLeave('rightArrow')}
                        id="next"
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
                    onClick={() => nextSlide(null, null)}
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
        <div 
            className={renderClassName(props.component)} 
            id="swiper"
        >
            {renderFirstArrow()}
            <div className="swiper-wrapper" id="swiper-wrapper">
                {renderSwiper()}
            </div>
            {renderSecondArrow()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            swiperData: Selectors.getSwiperDataState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch),
            setSwiperState: bindActionCreators(Actions.setSwiperState, dispatch),
            // nextImage: bindActionCreators(Actions.nextImage, dispatch),
            // photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
        };
    }
)(Swiper);
 