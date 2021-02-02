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
import PhotoViewer from '../../components/Parts/PhotoViewer/photoViewer';

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
    H45,
    EH25,
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

import * as Images from '../../constants/images';

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

    const testimonialsContent = useRef();
    const bigSliderContent = useRef();
    const smallSliderContent  = useRef();
    const testimonialsPageSection1Content = useRef();
    const testimonialsPageSection2Content = useRef();
    const testimonialsPageSection3Content = useRef();
    // const [currentSwiper, setCurrentSwiper] = useState('');
    const [relode, setRelode] = useState(false)

    const getHeight = () => window.innerHeight;
    const getWidth = () => window.innerWidth;
    
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    // const [mouseDown, setMouseDown] = useState(false)
  
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
            swiperWrapper = document.getElementById(`swiper-wrapper-${props.component}`);   
            swiperContent = document.getElementById(`swiper-content-${props.component}`);
       
            _slides = [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]];
            // setState({
            //     ...state,
            //     _slides: [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]],
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
            // })
            
            if(props.swiperData.rerender) {
                props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, props.swiperData.transition, true);
                // console.log("con1", props.component)
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
                _updatedSlides = updateSlidesFullScreen(props.swiperData.slides, props.swiperData.activeIndex);
            }else{
                props.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false);
                // console.log("con2", props.component)
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
            props.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, props.swiperData.rerender);
            // console.log("con3", props.component)
        }
        
        if(!props.content.loading && props.showNumbersOfSlides === 5){
            swiperWrapper = document.getElementById(`swiper-wrapper-${props.component}`);   
            swiperContent = document.getElementById(`swiper-content-${props.component}`);
            
            _slides = [
                slidesArray[slidesArray.length - 3], 
                slidesArray[slidesArray.length - 2], 
                slidesArray[slidesArray.length - 1], 
                slidesArray[0], 
                slidesArray[1], 
                slidesArray[2], 
                slidesArray[3]
            ];
           
            if(props.swiperData.rerender) {
                props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, props.swiperData.transition, true);
                // console.log("con1", props.component)
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
                _updatedSlides = updateSlidesFor5SlidesPerSwiper(props.swiperData.slides, props.swiperData.activeIndex);
            }else{
                props.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false);
                // console.log("con2", props.component)
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
            }
            slide(swiperWrapper, swiperContent, translateVal, _updatedSlides);
        }

        return () => {
           
            props.setSwiperState([], [], 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false);
            // console.log("con4", props.component)
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
    }, [props.content.loading, 
        props.swiperData.slides.length, 
        props.swiperData.activeIndex]);

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
            // console.log("con5", props.component)
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

        // let swiper = document.getElementById(`${props.component}Swiper`);
        let swiper = document.getElementById(`swiper-content-${props.component}`);
        swiper.addEventListener('transitionend', smooth)
        // window.addEventListener('transitionend', smooth);
        window.addEventListener('resize', resize);
      
        return () => {
            swiper.removeEventListener('transitionend', smooth)
            // window.removeEventListener('transitionend', smooth);
            window.removeEventListener('resize', resize);
        };
    }, [])

    useInterval(() => {
        nextSlide();
        
    },props.autoPlay ? 7000 : null)

    const slide = (swiperWrapper, swiperContent, translateVal, _slides) => {
        let posX1 = 0;
        let posX2 = 0;
        let posInitial;
        let posFinal;
        let threshold = 50; //draging delta
        let direction = 0;

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
            // posFinal = swiperContent.offsetLeft;
            if(['bigSlider', 'smallSlider'].includes(props.component) && direction === 0){
                // console.log(props.component)
                openPhotoViewer(props.component, props.swiperData.activeIndex);
            }else if(direction > 0){
                prevSlide(_slides);
            }else if(direction < 0){
                nextSlide(_slides, translateVal);
            }
            // if (posFinal - posInitial < -threshold) {
            //     nextSlide(_slides, translateVal);
            // } else if (posFinal - posInitial > threshold) {
            //     prevSlide(_slides);
            // } 
            // else {
                // swiperContent.style.left = (posInitial) + "px";
            // }
            direction = 0;
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    const handleMouseDown = (e, dragStart, swiperContent) => {
        dragStart(e);
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
        // console.log("con6", props.component)
        setRelode(!relode)
    }

    const smoothTransition = () => {
        let _slides = [];
        let slides = [...props.swiperData.slides];
        let activeIndex = props.swiperData.activeIndex;
        if(props.showNumbersOfSlides === 1){
            _slides = updateSlidesFullScreen(slides, activeIndex);
            // setState({
            //     ...state,
            //     _slides,
            //     transition: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight)
            // })

            // if(props.component === currentSwiper){
            //     props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender);
            //     console.log("con7", props.component)
            // }
            // else{
                props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender);
            // }
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
            // console.log("7")
            // props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender);
            setState({
                ...state,
                _slides,
                transition: 0,
                translate: getTranslateValue(props.translateWidth, props.translateHeight)
            })
        }
        if(props.showNumbersOfSlides === 5){
            _slides = updateSlidesFor5SlidesPerSwiper(slides, activeIndex);
            
            // console.log("7")
            props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender);
            // setState({
            //     ...state,
            //     _slides,
            //     transition: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight)
            // })
        }
    }

    const updateSlidesFullScreen = (slides, activeIndex) => {
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

    const updateSlidesFor5SlidesPerSwiper = (slides, activeIndex) => {
        let _slides = [];
        if(activeIndex === slides.length - 3){
            let first = slides[slides.length - 6] === undefined ? slides[slides.length - 1] : slides[slides.length - 6];
            _slides = [first, slides[slides.length - 5], slides[slides.length - 4], slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0]];
        }else if(activeIndex === slides.length - 2){
            _slides = [slides[slides.length - 5],slides[slides.length - 4], slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1]];
        }else if(activeIndex === slides.length - 1){
            _slides = [slides[slides.length - 4], slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1], slides[2]];
        }else if(activeIndex === 0){
            _slides = [slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1], slides[2], slides[3]];
        }else if(activeIndex === 1){
            _slides = [slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1], slides[2], slides[3], slides[4]];
        }else if(activeIndex === 2){
            let last = slides[5] === undefined ? slides[slides.length - 1] : slides[5];
            _slides = [slides[slides.length - 1], slides[0], slides[1], slides[2], slides[3], slides[4], last];
        }
        else _slides = slides.slice(activeIndex - 3, activeIndex + 3);
        console.log("_slides",_slides)
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
        // console.log("con8", props.component)
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
        // console.log("con9", props.component)
    }

    const openPhotoViewer = (component, activeIndex) => {
        let slidesForPhotoViewer = [...props.swiperData.slides];
        let removedSlides = [];
        // let currentSlideIndex = slidesForPhotoViewer.findIndex(item => item.id === id);
              
        slidesForPhotoViewer.map((el, i) => {
            if(i < activeIndex){
                removedSlides.push(el);
            }
        })
        slidesForPhotoViewer.splice(0, activeIndex)
      
        if(removedSlides.length !== 0){
            slidesForPhotoViewer.push(removedSlides);
        }

        slidesForPhotoViewer = slidesForPhotoViewer.flat();
        props.photoViewerOpen(component, true, slidesForPhotoViewer);
    }

    const handleMouseEnter = (opt, id, key) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow('on');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('on');
                break;
            case 'swiperDot': 
                props.setIsHoveringSwipereDot('on', id);
                break;
            case 'image':
                props.setIsHoverImage("on", key);
                break;
        }
    }

    const handleMouseLeave = (opt, id, key) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow('off');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('off');
                break;
            case 'swiperDot': 
                props.setIsHoveringSwipereDot('off', id);
                break;
            case 'image':
                props.setIsHoverImage("off", key);
                break;
        }
    }

    const renderClassName = (opt, isHovering, active) => {
        if(['testimonials','testimonialsPageSection3'].includes(opt)){
            return "swiper-testimonials"
        }
        if(opt === "testimonialsPageSection1"){
            return "swiper-testimonials-page-section-1"
        }
        if(opt === "testimonialsPageSection1SwiperDots"){
            return "swiper-testimonials-page-section-1-swiper-dots"
        }
        if(opt === "testimonialsPageSection2"){
            return "swiper-testimonials-page-section-2"
        }
        if(opt === "bigSlider"){
            return "swiper-big-slider"
        }
        if(opt === "smallSlider"){
            return "swiper-small-slider"
        }
        if(['clientsPageSection1Swiper1',
            'clientsPageSection1Swiper2',
            'clientsPageSection2Swiper1',
            'clientsPageSection2Swiper2'
        ].includes(opt)){
            return "swiper-clients-page"
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
        if(opt === "swiperDot"){
            let className;
            if(active === "on") return "swiper-dot-hover-on";
        
            switch(isHovering){
                case 'init':
                    className = "swiper-dot";
                    break;
                case 'on':
                    className = "swiper-dot-hover-on";
                    break ;
                case 'off':
                    className = "swiper-dot-hover-off";
                    break;
            }

            if(active === "off") className = "swiper-dot";

            return className;
        }
    }

    const loadImage = (img) => {
        switch(img) {
            case 'id1BigSlider1': 
                return Images.ID_1_BIG_SLIDER_1;
            case 'id1BigSlider2': 
                return Images.ID_1_BIG_SLIDER_2;
            case 'id1BigSlider3': 
                return Images.ID_1_BIG_SLIDER_3;
            case 'id1BigSlider4': 
                return Images.ID_1_BIG_SLIDER_4;
            case 'id1BigSlider5': 
                return Images.ID_1_BIG_SLIDER_5;
            case 'id2BigSlider1': 
                return Images.ID_2_BIG_SLIDER_1;
            case 'id2BigSlider2': 
                return Images.ID_2_BIG_SLIDER_2;
            case 'id2BigSlider3': 
                return Images.ID_2_BIG_SLIDER_3;
            case 'id2BigSlider4': 
                return Images.ID_2_BIG_SLIDER_4;
            case 'id2BigSlider5': 
                return Images.ID_2_BIG_SLIDER_5;
            case 'id2BigSlider6': 
                return Images.ID_2_BIG_SLIDER_6;
            case 'id3BigSlider1': 
                return Images.ID_3_BIG_SLIDER_1;
            case 'id3BigSlider2': 
                return Images.ID_3_BIG_SLIDER_2;
            case 'id3BigSlider3': 
                return Images.ID_3_BIG_SLIDER_3;
            case 'id3BigSlider4': 
                return Images.ID_3_BIG_SLIDER_4;
            case 'id3BigSlider5': 
                return Images.ID_3_BIG_SLIDER_5;
            case 'id3BigSlider6': 
                return Images.ID_3_BIG_SLIDER_6;
            case 'id3BigSlider7': 
                return Images.ID_3_BIG_SLIDER_7;
            case 'id1SmallSlider1': 
                return Images.ID_1_SMALL_SLIDER_1;
            case 'id1SmallSlider2': 
                return Images.ID_1_SMALL_SLIDER_2;
            case 'id1SmallSlider3': 
                return Images.ID_1_SMALL_SLIDER_3;
            case 'id1SmallSlider4': 
                return Images.ID_1_SMALL_SLIDER_4;
            case 'id1SmallSlider5': 
                return Images.ID_1_SMALL_SLIDER_5;
            case 'id1SmallSlider6': 
                return Images.ID_1_SMALL_SLIDER_6;
            case 'id2SmallSlider1': 
                return Images.ID_2_SMALL_SLIDER_1;
            case 'id2SmallSlider2': 
                return Images.ID_2_SMALL_SLIDER_2;
            case 'id2SmallSlider3': 
                return Images.ID_2_SMALL_SLIDER_3;
            case 'id2SmallSlider4': 
                return Images.ID_2_SMALL_SLIDER_4;
            case 'id2SmallSlider5': 
                return Images.ID_2_SMALL_SLIDER_5;
            case 'id3SmallSlider1': 
                return Images.ID_3_SMALL_SLIDER_1;
            case 'id3SmallSlider2': 
                return Images.ID_3_SMALL_SLIDER_2;
            case 'id3SmallSlider3': 
                return Images.ID_3_SMALL_SLIDER_3;
            case 'id3SmallSlider4': 
                return Images.ID_3_SMALL_SLIDER_4;
            case 'clientsPageSection1Swiper1Id1': 
                return Images.CLIENTS_LOGO_1;
            case 'clientsPageSection1Swiper1Id2': 
                return Images.CLIENTS_LOGO_2;
            case 'clientsPageSection1Swiper1Id3': 
                return Images.CLIENTS_LOGO_3;
            case 'clientsPageSection1Swiper1Id4': 
                return Images.CLIENTS_LOGO_4;
            case 'clientsPageSection1Swiper1Id5': 
                return Images.CLIENTS_LOGO_5;
            case 'clientsPageSection1Swiper2Id1': 
                return Images.CLIENTS_LOGO_6;
            case 'clientsPageSection1Swiper2Id2': 
                return Images.CLIENTS_LOGO_7;
            case 'clientsPageSection1Swiper2Id3': 
                return Images.CLIENTS_LOGO_8;
            case 'clientsPageSection1Swiper2Id4': 
                return Images.CLIENTS_LOGO_9;
            case 'clientsPageSection1Swiper2Id5': 
                return Images.CLIENTS_LOGO_10;
            case 'clientsPageSection2Swiper1Id4': 
                return Images.CLIENTS_LOGO_1_LIGHT;
            case 'clientsPageSection2Swiper1Id5': 
                return Images.CLIENTS_LOGO_2_LIGHT;
            case 'clientsPageSection2Swiper1Id1': 
                return Images.CLIENTS_LOGO_3_LIGHT;
            case 'clientsPageSection2Swiper1Id2': 
                return Images.CLIENTS_LOGO_4_LIGHT;
            case 'clientsPageSection2Swiper1Id3': 
                return Images.CLIENTS_LOGO_5_LIGHT;
            case 'clientsPageSection2Swiper2Id4': 
                return Images.CLIENTS_LOGO_6_LIGHT;
            case 'clientsPageSection2Swiper2Id5': 
                return Images.CLIENTS_LOGO_7_LIGHT;
            case 'clientsPageSection2Swiper2Id1': 
                return Images.CLIENTS_LOGO_8_LIGHT;
            case 'clientsPageSection2Swiper2Id2': 
                return Images.CLIENTS_LOGO_9_LIGHT;
            case 'clientsPageSection2Swiper2Id3': 
                return Images.CLIENTS_LOGO_10_LIGHT;
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

    const setRef = (opt) => {
        switch(opt){
            case 'testimonialsContent':
                return testimonialsContent;
            case 'bigSliderContent':
                return bigSliderContent;
            case 'smallSliderContent':
                return smallSliderContent;
            case 'testimonialsPageSection1Content':
                return testimonialsPageSection1Content;
            case 'testimonialsPageSection2Content':
                return testimonialsPageSection2Content;
            case 'testimonialsPageSection3Content':
                return testimonialsPageSection3Content;
        }
    }

    const swiper = () => {
        if(!props.content.loading){
            if(props.translateWidth){
                return(
                    <div 
                        className="swiper-window-width-content" 
                        id={`swiper-content-${props.component}`}
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `translateX(-${props.swiperData.translate}px)`,
                            transition: `transform ${props.swiperData.transition}s ease-out`,
                            width: `${getTranslateValue(props.translateWidth, props.translateHeight) * (props.showNumbersOfSlides + 2)}px`
                        }}
                    >{props.swiperData._slides.map((el, i) => {
                        if(['testimonialsPageSection1'].includes(props.component)){
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                              
                                    <EH25/>
                                    <H25 className="h25-white-lustria">{el.feedback}</H25>
                                    <EH25/>
                                    <div className="author-name-wrapper">
                                        <div className="slide-dash"/>
                                        <H25 className="h25-white-teko">{el.author}</H25>
                                    </div>
                                </div>
                            )
                        }
                        if(['testimonialsPageSection2'].includes(props.component)){
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                                <H45 className="h45-nero-lustria">{el.header}</H45>
                                <EH25/>
                                <H25 className="h25-nobel-lustria">{el.feedback}</H25>
                                <EH25/>
                                    <div className="author-name-wrapper">
                                        <div className="slide-dash"/>
                                        <H25 className="h25-nero2-teko">{el.author}</H25>
                                    </div>
                                </div>
                            )
                        }
                        if(['testimonials','testimonialsPageSection3'].includes(props.component)){
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
                        if(['bigSlider'].includes(props.component)){
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                                    <div 
                                        className="slide-image"
                                        // style={{height:"auto"}}
                                        // onClick={() => openPhotoViewer(el.id)}
                                    >
                                        <img src={loadImage(el.key)}/>
                                    </div>
                                </div>
                            )
                        }
                        if(props.component === "smallSlider"){
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                                    <div 
                                        className="slide-image"
                                        // onClick={() => openPhotoViewer(el.id)}
                                    >
                                        <img src={loadImage(el.key)}/>
                                    </div>
                                </div>
                            )
                        }
                        if(['clientsPageSection1Swiper1', 
                            'clientsPageSection1Swiper2',
                            'clientsPageSection2Swiper1',
                            'clientsPageSection2Swiper2'
                        ].includes(props.component)){
                            // console.log()
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                                    <div 
                                        className="slide-image"
                                        onMouseEnter={() => handleMouseEnter("image", null, el.key)} 
                                        onMouseLeave={() => handleMouseLeave("image", null, el.key)}
                                        // style={{height:"auto"}}
                                        // onClick={() => openPhotoViewer(el.id)}
                                    >
                                        <img src={loadImage(el.key)}/>
                                        {/* <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="90.82500000000002 12.661247253417969 318.34999999999997 124.67750549316406" 
                                            style={{background: "rgba(0, 0, 0, 0)"}} 
                                            preserveAspectRatio="xMidYMid"
                                        >
                                            <defs>
                                                <filter id="editing-hole" x="-100%" y="-100%" width="300%" height="300%">
                                                    <feFlood flood-color="#000000" result="black"/>
                                                    <feMorphology operator="dilate" radius="2" in="SourceGraphic" result="erode"/>
                                                    <feGaussianBlur in="erode" stdDeviation="4" result="blur"/>
                                                    <feOffset in="blur" dx="2" dy="2" result="offset"/>
                                                    <feComposite operator="atop" in="offset" in2="black" result="merge"/>
                                                    <feComposite operator="in" in="merge" in2="SourceGraphic" result="inner-shadow"/>
                                                </filter>
                                            </defs>
                                            <g filter="url(#editing-hole)">
                                                <g transform="translate(140.30999755859375, 105.93999862670898)">
                                                    <path d="M12.50-34.38L12.50-12.81L12.50-12.81Q12.50-8.63 14.75-6.03L14.75-6.03L14.75-6.03Q17.53-2.81 22.03-2.81L22.03-2.81L22.03-2.81Q26.53-2.81 29.31-6.03L29.31-6.03L29.31-6.03Q31.56-8.63 31.56-12.81L31.56-12.81L31.56-34.38L31.56-34.38Q31.56-38.56 29.31-41.16L29.31-41.16L29.31-41.16Q26.53-44.38 22.03-44.38L22.03-44.38L22.03-44.38Q17.53-44.38 14.75-41.16L14.75-41.16L14.75-41.16Q12.50-38.56 12.50-34.38L12.50-34.38ZM6.25-15L6.25-15L6.25-32.19L6.25-32.19Q6.25-38.97 10.47-43.28L10.47-43.28L10.47-43.28Q14.91-47.81 22.03-47.81L22.03-47.81L22.03-47.81Q29.16-47.81 33.59-43.28L33.59-43.28L33.59-43.28Q37.81-39 37.81-32.19L37.81-32.19L37.81-15L37.81-15Q37.81-8.22 33.59-3.91L33.59-3.91L33.59-3.91Q29.16 0.63 22.03 0.63L22.03 0.63L22.03 0.63Q14.91 0.63 10.47-3.91L10.47-3.91L10.47-3.91Q6.25-8.22 6.25-15ZM49.06 1.25L48.75 1.25L48.75-22.50L48.75-22.50Q48.75-27.66 52.63-31.47L52.63-31.47L52.63-31.47Q56.25-35 61.72-35L61.72-35L65.94-35L65.94-34.69L64.44-31.56L61.72-31.56L61.72-31.56Q58.91-31.56 56.95-29.89L56.95-29.89L56.95-29.89Q55-28.22 55-24.63L55-24.63L55-1.56L49.06 1.25ZM77.50-24.63L77.50-9.75L77.50-9.75Q77.50-6.16 79.45-4.48L79.45-4.48L79.45-4.48Q81.41-2.81 84.22-2.81L84.22-2.81L84.22-2.81Q87.03-2.81 88.98-4.48L88.98-4.48L88.98-4.48Q90.94-6.16 90.94-9.75L90.94-9.75L90.94-24.63L90.94-24.63Q90.94-28.22 88.98-29.89L88.98-29.89L88.98-29.89Q87.03-31.56 84.22-31.56L84.22-31.56L84.22-31.56Q81.41-31.56 79.45-29.89L79.45-29.89L79.45-29.89Q77.50-28.22 77.50-24.63L77.50-24.63ZM71.25-11.88L71.25-11.88L71.25-22.50L71.25-22.50Q71.25-27.66 75.13-31.47L75.13-31.47L75.13-31.47Q78.75-35 84.22-35L84.22-35L84.22-35Q89.69-35 93.31-31.47L93.31-31.47L93.31-31.47Q97.19-27.69 97.19-22.50L97.19-22.50L97.19 0.94L97.19 0.94Q97.19 6.09 93.31 9.91L93.31 9.91L93.31 9.91Q89.69 13.44 84.22 13.44L84.22 13.44L74.59 13.44L74.59 13.13L76.09 10L84.22 10L84.22 10Q87.03 10 89 8.31L89 8.31L89 8.31Q90.94 6.69 90.94 3.06L90.94 3.06L90.94-2.03L90.94-2.03Q88.56 0.63 84.22 0.63L84.22 0.63L84.22 0.63Q78.81 0.63 75.13-2.91L75.13-2.91L75.13-2.91Q71.25-6.66 71.25-11.88ZM115.31-24.34L115.31-3.44L124.22-3.44L124.22-3.44Q128.94-3.44 131.72-6.41L131.72-6.41L131.72-6.41Q133.75-8.56 133.75-14.28L133.75-14.28L133.75-14.28Q133.75-18.91 131.59-21.47L131.59-21.47L131.59-21.47Q129.19-24.34 124.22-24.34L124.22-24.34L115.31-24.34ZM115.31-43.75L115.31-27.78L124.22-27.78L124.22-27.78Q127.34-27.78 129.25-29.81L129.25-29.81L129.25-29.81Q130.94-31.63 130.94-35.69L130.94-35.69L130.94-35.69Q130.94-40.38 128.91-42.16L128.91-42.16L128.91-42.16Q127.09-43.75 124.22-43.75L124.22-43.75L115.31-43.75ZM124.22 0L109.06 0L109.06-45.63L112.38-47.19L124.22-47.19L124.22-47.19Q129.50-47.19 133-44.31L133-44.31L133-44.31Q137.16-40.94 137.16-35.66L137.16-35.66L137.16-35.66Q137.16-30.28 132.41-26.72L132.41-26.72L132.41-26.72Q133.94-26.06 135.44-24.75L135.44-24.75L135.44-24.75Q140-20.59 140-14.44L140-14.44L140-14.44Q140-8.25 136-4.28L136-4.28L136-4.28Q131.72 0 124.22 0L124.22 0ZM178.06 0L151.88 0L151.88-45.63L157.81-48.44L158.13-48.44L158.13-3.44L179.53-3.44L179.53-3.13L178.06 0ZM197.34 0L182.19 0L182.19-45.63L185.50-47.19L197.34-47.19L197.34-47.19Q204.47-47.19 208.91-42.66L208.91-42.66L208.91-42.66Q213.13-38.38 213.13-31.56L213.13-31.56L213.13-15.63L213.13-15.63Q213.13-8.84 208.91-4.53L208.91-4.53L208.91-4.53Q204.47 0 197.34 0L197.34 0ZM188.44-43.75L188.44-3.44L197.34-3.44L197.34-3.44Q201.63-3.44 204.63-6.66L204.63-6.66L204.63-6.66Q206.88-9.06 206.88-13.44L206.88-13.44L206.88-33.75L206.88-33.75Q206.88-37.91 204.63-40.53L204.63-40.53L204.63-40.53Q201.84-43.75 197.34-43.75L197.34-43.75L188.44-43.75Z" 
                                                    fill="#9b9b9b"/>
                                                </g>
                                            </g>
                                        </svg> */}
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
            if(props.component === "smallSlider"){
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
                            <div className="swiper-arrow-left-line"/>
                        </div>
                    </div>
                )
            }
            if(['testimonials',
                'bigSlider',
                'testimonialsPageSection2',
                'testimonialsPageSection3'
            ].includes(props.component)){
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
            if(props.component === "smallSlider"){
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
                            <div className="swiper-arrow-right-line"/>
                        </div>
                    </div>
                )
            }
            if(['testimonials','bigSlider','testimonialsPageSection2','testimonialsPageSection3'].includes(props.component)){
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

    const dotOnClickHandler = (id) => {
        let translate = props.swiperData.translate + getTranslateValue(props.translateWidth, props.translateHeight);
        let prevActiveIndex = props.swiperData.activeIndex;
        let nextActiveIndex = id - 1;
        if(prevActiveIndex === nextActiveIndex) return;

        let _updatedSlides = updateSlidesFullScreen(props.swiperData.slides, nextActiveIndex);
        let currentObj = props.swiperData.slides.find(item => item.id === prevActiveIndex + 1);
        let nextObj = props.swiperData.slides.find(item => item.id === id);
        _updatedSlides[1] = currentObj
    
        if(nextActiveIndex - prevActiveIndex > 0){
            _updatedSlides[2] = nextObj
            props.setSwiperState(props.swiperData.slides, _updatedSlides, nextActiveIndex, translate,  props.swiperData.transition, true);
            
        }else{
            _updatedSlides[0] = nextObj
            props.setSwiperState(props.swiperData.slides, _updatedSlides, nextActiveIndex, 0, props.swiperData.transition, true);
        }
    }

    const renderSwiperDots = () => {
        return(
            <div className={renderClassName(`${props.component}SwiperDots`)} >
                {props.swiperData.slides.map((el, i) => {
                    let active = props.swiperData.activeIndex + 1 === el.id ? "on" : "off";
                    // console.log(props.swiperData.activeIndex)
                    return(
                        <div 
                            key={i}
                            className="swiper-dot-wrapper"
                            onMouseEnter={() => handleMouseEnter('swiperDot', el.id)} 
                            onMouseLeave={() => handleMouseLeave('swiperDot', el.id)}
                            onClick={() => dotOnClickHandler(el.id)}
                        >
                            <div className={renderClassName('swiperDot', el.isHover, active)}/>
                        </div>
                    )
                })}
            </div>
        )
    }

    /**
     * Markup
     */

    return(
        <>
            <div 
                className={renderClassName(props.component)} 
                id={`${props.component}Swiper`}
                ref={setRef(`${props.component}Content`)}
            >
                {renderFirstArrow()}
                <div className="swiper-wrapper" id={`swiper-wrapper-${props.component}`}>
                    {renderSwiper()}
                </div>
                {renderSecondArrow()}
            </div>
            {props.showDots ? renderSwiperDots() : null}
            {props.photoViewerForBigSliderOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="bigSlider"
            /> : null}
            {props.photoViewerForSmallSliderOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="smallSlider"
            /> : null}
        </>
    );
}

export default connect(
    (state) => {
        return {
            photoViewerForBigSliderOpen: Selectors.getPhotoViewerForBigSliderOpenState(state),
            photoViewerForSmallSliderOpen: Selectors.getPhotoViewerForSmallSliderOpenState(state),
        };
    },
    (dispatch) => {
        return {
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
        };
    }
)(Swiper);
 