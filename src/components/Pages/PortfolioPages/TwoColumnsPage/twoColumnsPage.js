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

import './twoColumnsPage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import LoadingVersion2 from '../../../SmallParts/LoadingVersion2/loadingVersion2';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import OverlayImage from '../../../SmallParts/OverlayImage/overlayImage';
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
    H19,
    H45,
    H70,
    EH10,
    EH30,
    EH40,
    EH70,
    EH110
} from '../../../UtilityComponents';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
* TwoColumnsPage component definition and export
*/

export const TwoColumnsPage = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const resizeRef = useRef();
    const transitionRef = useRef();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [loadMoreStep, setLoadMoreStep] = useState(1);
    
    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.twoColumnsPage.items.length === 0){
            props.fetchTwoColumnsPage(loadMoreStep);
            setLoadMoreStep(loadMoreStep + 1);
        }
        let timeout = setTimeout(() => {
            if(!props.twoColumnsPage.loading && !props.twoColumnsPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        const smooth = e => {
            transitionRef.current()
        }

        const resize = () => {
            resizeRef.current();
        }

        setImagesState("onInit");
        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('resize', resize);
        window.addEventListener('transitionend', smooth);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('resize', resize);
            window.removeEventListener('transitionend', smooth);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        if(props.twoColumnsPage.itemsStyleValues.img1.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img2.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img3.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img4.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img5.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img6.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img7.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img8.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img9.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img10.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img11.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img12.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img13.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img14.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img15.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img16.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img17.transition === 0 ||
            props.twoColumnsPage.itemsStyleValues.img18.transition === 0) {           
            props.updateItemsStyleValuesTwoColumnsPage("img1",{
                ...props.twoColumnsPage.itemsStyleValues.img1,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img2",{
                ...props.twoColumnsPage.itemsStyleValues.img2,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img3",{
                ...props.twoColumnsPage.itemsStyleValues.img3,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img4",{
                ...props.twoColumnsPage.itemsStyleValues.img4,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img5",{
                ...props.twoColumnsPage.itemsStyleValues.img5,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img6",{
                ...props.twoColumnsPage.itemsStyleValues.img6,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img7",{
                ...props.twoColumnsPage.itemsStyleValues.img7,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img8",{
                ...props.twoColumnsPage.itemsStyleValues.img8,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img9",{
                ...props.twoColumnsPage.itemsStyleValues.img9,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img10",{
                ...props.twoColumnsPage.itemsStyleValues.img10,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img11",{
                ...props.twoColumnsPage.itemsStyleValues.img11,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img12",{
                ...props.twoColumnsPage.itemsStyleValues.img12,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img13",{
                ...props.twoColumnsPage.itemsStyleValues.img13,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img14",{
                ...props.twoColumnsPage.itemsStyleValues.img14,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img15",{
                ...props.twoColumnsPage.itemsStyleValues.img15,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img16",{
                ...props.twoColumnsPage.itemsStyleValues.img16,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img17",{
                ...props.twoColumnsPage.itemsStyleValues.img17,
                transition: 0.45
            });
            props.updateItemsStyleValuesTwoColumnsPage("img18",{
                ...props.twoColumnsPage.itemsStyleValues.img18,
                transition: 0.45
            });
        }
    }, [props.twoColumnsPage.itemsStyleValues.img1.transition,props.twoColumnsPage.itemsStyleValues.img2.transition,
        props.twoColumnsPage.itemsStyleValues.img3.transition,props.twoColumnsPage.itemsStyleValues.img4.transition,
        props.twoColumnsPage.itemsStyleValues.img5.transition,props.twoColumnsPage.itemsStyleValues.img6.transition,
        props.twoColumnsPage.itemsStyleValues.img7.transition,props.twoColumnsPage.itemsStyleValues.img8.transition,
        props.twoColumnsPage.itemsStyleValues.img9.transition,props.twoColumnsPage.itemsStyleValues.img10.transition,
        props.twoColumnsPage.itemsStyleValues.img11.transition,props.twoColumnsPage.itemsStyleValues.img12.transition,
        props.twoColumnsPage.itemsStyleValues.img13.transition,props.twoColumnsPage.itemsStyleValues.img14.transition,
        props.twoColumnsPage.itemsStyleValues.img15.transition,props.twoColumnsPage.itemsStyleValues.img16.transition,
        props.twoColumnsPage.itemsStyleValues.img17.transition,props.twoColumnsPage.itemsStyleValues.img18.transition]);


    const smoothTransition = () => {
        props.updateItemsStyleValuesTwoColumnsPage("img1",{
            ...props.twoColumnsPage.itemsStyleValues.img1,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img2",{
            ...props.twoColumnsPage.itemsStyleValues.img2,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img3",{
            ...props.twoColumnsPage.itemsStyleValues.img3,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img4",{
            ...props.twoColumnsPage.itemsStyleValues.img4,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img5",{
            ...props.twoColumnsPage.itemsStyleValues.img5,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img6",{
            ...props.twoColumnsPage.itemsStyleValues.img6,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img7",{
            ...props.twoColumnsPage.itemsStyleValues.img7,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img8",{
            ...props.twoColumnsPage.itemsStyleValues.img8,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img9",{
            ...props.twoColumnsPage.itemsStyleValues.img9,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img10",{
            ...props.twoColumnsPage.itemsStyleValues.img10,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img11",{
            ...props.twoColumnsPage.itemsStyleValues.img11,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img12",{
            ...props.twoColumnsPage.itemsStyleValues.img12,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img13",{
            ...props.twoColumnsPage.itemsStyleValues.img13,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img14",{
            ...props.twoColumnsPage.itemsStyleValues.img14,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img15",{
            ...props.twoColumnsPage.itemsStyleValues.img15,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img16",{
            ...props.twoColumnsPage.itemsStyleValues.img16,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img17",{
            ...props.twoColumnsPage.itemsStyleValues.img17,
            transition: 0
        });
        props.updateItemsStyleValuesTwoColumnsPage("img18",{
            ...props.twoColumnsPage.itemsStyleValues.img18,
            transition: 0
        });
    }

    const handleResize = (e) => {
        setImagesState("onResize");
    }

    const setImagesState = (opt) => {
        if(size.width > 945){
            props.updateItemsStyleValuesTwoColumnsPage("img1",{
                width: 50,
                // translateX: 0,
                // translateY: 0,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img2",{
                width: 50,
                // translateX: 0,
                // translateY: 30,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img3",{
                width: 50,
                // translateX: 376.66,
                // translateY: -346.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img4",{
                width: 50,
                // translateX: 376.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img5",{
                width: 50,
                // translateX: 752.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img6",{
                width: 50,
                // translateX: 0,
                // translateY: 0,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img7",{
                width: 50,
                // translateX: 0,
                // translateY: 30,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img8",{
                width: 50,
                // translateX: 376.66,
                // translateY: -346.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img9",{
                width: 50,
                // translateX: 376.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img10",{
                width: 50,
                // translateX: 752.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img11",{
                width: 50,
                // translateX: 0,
                // translateY: 0,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img12",{
                width: 50,
                // translateX: 0,
                // translateY: 30,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img13",{
                width: 50,
                // translateX: 376.66,
                // translateY: -346.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img14",{
                width: 50,
                // translateX: 376.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img15",{
                width: 50,
                // translateX: 752.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img16",{
                width: 50,
                // translateX: 0,
                // translateY: 0,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img17",{
                width: 50,
                // translateX: 0,
                // translateY: 30,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img18",{
                width: 50,
                // translateX: 376.66,
                // translateY: -346.66,
                // transition: 0
            });
        }
        if(size.width < 945){
            props.updateItemsStyleValuesTwoColumnsPage("img1",{
                width: 100,
                // translateX: 0,
                // translateY: 0,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img2",{
                width: 100,
                // translateX: 0,
                // translateY: 30,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img3",{
                width: 100,
                // translateX: 376.66,
                // translateY: -346.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img4",{
                width: 100,
                // translateX: 376.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img5",{
                width: 100,
                // translateX: 752.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img6",{
                width: 100,
                // translateX: 0,
                // translateY: 0,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img7",{
                width: 100,
                // translateX: 0,
                // translateY: 30,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img8",{
                width: 100,
                // translateX: 376.66,
                // translateY: -346.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img9",{
                width: 100,
                // translateX: 376.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img10",{
                width: 100,
                // translateX: 752.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img11",{
                width: 100,
                // translateX: 0,
                // translateY: 0,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img12",{
                width: 100,
                // translateX: 0,
                // translateY: 30,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img13",{
                width: 100,
                // translateX: 376.66,
                // translateY: -346.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img14",{
                width: 100,
                // translateX: 376.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img15",{
                width: 100,
                // translateX: 752.66,
                // translateY: 406.66,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img16",{
                width: 100,
                // translateX: 0,
                // translateY: 0,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img17",{
                width: 100,
                // translateX: 0,
                // translateY: 30,
                // transition: 0
            });
            props.updateItemsStyleValuesTwoColumnsPage("img18",{
                width: 100,
                // translateX: 376.66,
                // translateY: -346.66,
                // transition: 0
            });
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("twoColumnsPage");

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
                        page="twoColumnsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="twoColumnsPage"
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
                        page="twoColumnsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="twoColumnsPage"
                    />
                </>
            )
        }
    }

    const loadMoreOnClick = () => {
        props.fetchTwoColumnsPage(loadMoreStep);
        setLoadMoreStep(loadMoreStep + 1);
    }

    const renderClassName = (opt, isHovering, active) => {
        if(opt === "categoryFromHeader"){
            if(active) return "h15-nobel-poppins";
            switch(isHovering){
                case 'init':
                    return "h15-black-poppins-animated";
                case 'on':
                    return "h15-black-poppins-nobel-hover-on";
                case 'off':
                    return "h15-black-poppins-nobel-hover-off"
            }
        }
    }
    
    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'categoryFromHeader':
                props.setTwoColumnsPageIsHoveringCategoryFromHeader("on", id)
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'categoryFromHeader':
                props.setTwoColumnsPageIsHoveringCategoryFromHeader("off", id)
                break;
        }
    }
    
    const renderStoneWallPageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img1.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img1.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img1.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img1.transition}s ease-out`,
                };
            case 2:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img2.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img2.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img2.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img2.transition}s ease-out`,
                };
            case 3:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img3.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img3.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img3.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img3.transition}s ease-out`,
                };
            case 4:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img4.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img4.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img4.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img4.transition}s ease-out`,
                };
            case 5:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img5.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img5.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img5.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img5.transition}s ease-out`,
                };
            case 6:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img6.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img6.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img6.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img6.transition}s ease-out`,
                };
            case 7:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img7.width}% - 30px)`,
                    paddingRight: "30px",
                    // top: "0px",
                    // left: `${props.twoColumnsPage.itemsStyleValues.img1.width + 40}`,
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img7.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img7.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img7.transition}s ease-out`,
                };
            case 8:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img8.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img8.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img8.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img8.transition}s ease-out`,
                };
            case 9:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img9.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img9.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img9.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img9.transition}s ease-out`,
                };
            case 10:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img10.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img10.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img10.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img10.transition}s ease-out`,
                };
            case 11:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img11.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img11.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img11.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img11.transition}s ease-out`,
                };
            case 12:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img12.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img12.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img12.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img12.transition}s ease-out`,
                    // top: "0px",
                    // left: `${props.twoColumnsPage.itemsStyleValues.img1.width + 40}`,
                    // transform: `translate(${props.twoColumnsPage.itemsStyleValues.img2.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img2.translateY}px)`,
                    // transition: `transform ${props.twoColumnsPage.itemsStyleValues.img2.transition}s ease-out`,
                };
            case 13:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img13.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img13.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img13.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img13.transition}s ease-out`,
                };
            case 14:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img14.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img14.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img14.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img14.transition}s ease-out`,
                };
            case 15:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img15.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img15.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img15.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img15.transition}s ease-out`,
                };
            case 16:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img16.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img16.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img16.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img16.transition}s ease-out`,
                };
            case 17:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img17.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img17.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img17.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img17.transition}s ease-out`,
                };
            case 18:
                return {
                    width: `calc(${props.twoColumnsPage.itemsStyleValues.img18.width}% - 30px)`,
                    paddingRight: "30px",
                    transform: `translate(${props.twoColumnsPage.itemsStyleValues.img18.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img18.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img18.transition}s ease-out`,
                };
        }
    }

    const renderTwoColumnsPageData = () => {
        return(
            <>
                <div className="two-columns-page-categories-from-header">{props.twoColumnsPage.categories.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="two-columns-page-category-from-header"
                            onMouseEnter={() => handleMouseEnter("categoryFromHeader", el.id)} 
                            onMouseLeave={() => handleMouseLeave("categoryFromHeader", el.id)}
                        >
                            <H15 className={renderClassName("categoryFromHeader", el.isHover, el.active)}>{el.label}</H15>
                        </div>
                    )
                })}

                </div>
                <div className="two-columns-page-items">{props.twoColumnsPage.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            // className="two-columns-page-item"
                            style={renderStoneWallPageItemStyle(el.id)}
                        >
                            <OverlayImage
                                page="twoColumnsPage"
                                obj={el}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                            />
                        </div>
                    )
                })}
                {renderLoadMoreButton()}
                </div>
            </>
        )
    }

    const renderLoadMoreButton = () => {
        if(props.twoColumnsPage.loadingMoreData && !props.twoColumnsPage.errorMoreData){
            return(
                <div 
                    className="two-columns-page-button-load-more-loading-error"
                >
                    <LoadingVersion2 color="rgb(37, 37, 37)"/>
                </div>
            )
        }
        if(!props.twoColumnsPage.loadingMoreData && !props.twoColumnsPage.errorMoreData){
            return(
                <div className="two-columns-page-button-load-more">
                    <Button
                        className="archive-load-more"
                        text="load more."
                        onClick={loadMoreOnClick}
                        disabled={props.twoColumnsPage.disableLoadMoreButton}
                    />
                </div> 
            )
        }
        if(!props.twoColumnsPage.loadingMoreData && props.twoColumnsPage.errorMoreData){
            return(
                <div 
                    className="two-columns-page-button-load-more-loading-error" 
                >
                    <H19 className="h19-nobel-lora">{`${props.archive.error}`}</H19>
                </div>
            )
        }
    }

    const renderTwoColumnsPageContent = () => {
        if(props.twoColumnsPage.loading && !props.twoColumnsPage.error){
            return(
                <div 
                    className="two-columns-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.twoColumnsPage.loading && !props.twoColumnsPage.error){
            return(
                <div className="two-columns-page-wrapper">
                    <div className="two-columns-page-header">
                        <H45 className="h45-nero-lustria">Two Columns</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderTwoColumnsPageData()}
                </div>
            )
        }
        if(!props.twoColumnsPage.loading && props.twoColumnsPage.error){
            return(
                <div 
                    className="two-columns-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.twoColumnsPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="two-columns-page" id="twoColumnsPage">
            {renderToolbars()}
            {renderTwoColumnsPageContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            twoColumnsPage: Selectors.getTwoColumnsPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state)
        };
    },
    (dispatch) => {
        return {
            fetchTwoColumnsPage: bindActionCreators(Services.fetchTwoColumnsPage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setTwoColumnsPageIsHoveringCategoryFromHeader: bindActionCreators(Actions.setTwoColumnsPageIsHoveringCategoryFromHeader, dispatch),
            setStandardPageIsHoveringCategory: bindActionCreators(Actions.setStandardPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            updateItemsStyleValuesTwoColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesTwoColumnsPage, dispatch),
        };
    }
)(TwoColumnsPage);
 