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

import './threeColumnsPage.scss';

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
    H45
} from '../../../UtilityComponents';

import * as Utility from '../../../../utility';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * ThreeColumnsPage component definition and export
 */

export const ThreeColumnsPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const resizeRef = useRef();
    const transitionRef = useRef();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [categoryFromHeader, setCategoryFromHeader] = useState("showAll");
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.threeColumnsPage.items.length === 0){
            props.fetchThreeColumnsPage(props.threeColumnsPage.loadMoreStep);
            props.setLoadMoreStepThreeColumnsPage(props.threeColumnsPage.loadMoreStep + 1);
        }

        // Return to the part of the screen where the link to the selected item is located

        let timeout = setTimeout(() => {
            if(!props.threeColumnsPage.loading && !props.threeColumnsPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        if(props.threeColumnsPage.categories.length !== 0){
            
            /**
             * Set appear and disappear images width, height, transition
             * and translate coordinates according to the category selected from the header
             */

            let categeryKey = props.threeColumnsPage.categories.find(item => item.active === true).key;
            categoryFromHeaderOnClickHandler(categeryKey);
        }else{
            // Set all images width, height, transition and translate coordinates 

            setImagesState("onInit");
        }

        // Event Listeners

        const smooth = e => {
            transitionRef.current()
        }

        const resize = () => {
            resizeRef.current();
        }  

        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('resize', resize);
        window.addEventListener('transitionend', smooth);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('resize', resize);
            window.removeEventListener('transitionend', smooth);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, [props.threeColumnsPage.itemsStyleValues.img1?.rendered]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        updateTransitionValue();
    }, [
        props.threeColumnsPage.itemsStyleValues.img1?.transition,props.threeColumnsPage.itemsStyleValues.img2?.transition,
        props.threeColumnsPage.itemsStyleValues.img3?.transition,props.threeColumnsPage.itemsStyleValues.img4?.transition,
        props.threeColumnsPage.itemsStyleValues.img5?.transition,props.threeColumnsPage.itemsStyleValues.img6?.transition,
        props.threeColumnsPage.itemsStyleValues.img7?.transition,props.threeColumnsPage.itemsStyleValues.img8?.transition,
        props.threeColumnsPage.itemsStyleValues.img9?.transition,props.threeColumnsPage.itemsStyleValues.img10?.transition,
        props.threeColumnsPage.itemsStyleValues.img11?.transition,props.threeColumnsPage.itemsStyleValues.img12?.transition,
        props.threeColumnsPage.itemsStyleValues.img13?.transition,props.threeColumnsPage.itemsStyleValues.img14?.transition,
        props.threeColumnsPage.itemsStyleValues.img15?.transition,props.threeColumnsPage.itemsStyleValues.img16?.transition,
        props.threeColumnsPage.itemsStyleValues.img17?.transition,props.threeColumnsPage.itemsStyleValues.img18?.transition
    ]);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("threeColumnsPage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
        }
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 50){
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

    const updateTransitionValue = () => {
        // Set the transition property to the initial value if its value is 0

        if(props.threeColumnsPage.itemsStyleValues.img1?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img1",{
                ...props.threeColumnsPage.itemsStyleValues.img1,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img2?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img2",{
                ...props.threeColumnsPage.itemsStyleValues.img2,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img3?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img3",{
                ...props.threeColumnsPage.itemsStyleValues.img3,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img4?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img4",{
                ...props.threeColumnsPage.itemsStyleValues.img4,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img5?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img5",{
                ...props.threeColumnsPage.itemsStyleValues.img5,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img6?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img6",{
                ...props.threeColumnsPage.itemsStyleValues.img6,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img7?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img7",{
                ...props.threeColumnsPage.itemsStyleValues.img7,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img8?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img8",{
                ...props.threeColumnsPage.itemsStyleValues.img8,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img9?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img9",{
                ...props.threeColumnsPage.itemsStyleValues.img9,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img10?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img10",{
                ...props.threeColumnsPage.itemsStyleValues.img10,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img11?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img11",{
                ...props.threeColumnsPage.itemsStyleValues.img11,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img12?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img12",{
                ...props.threeColumnsPage.itemsStyleValues.img12,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img13?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img13",{
                ...props.threeColumnsPage.itemsStyleValues.img13,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img14?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img14",{
                ...props.threeColumnsPage.itemsStyleValues.img14,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img15?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img15",{
                ...props.threeColumnsPage.itemsStyleValues.img15,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img16?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img16",{
                ...props.threeColumnsPage.itemsStyleValues.img16,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img17?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img17",{
                ...props.threeColumnsPage.itemsStyleValues.img17,
                transition: 0.45
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img18?.transition === 0){
            props.updateItemsStyleValuesThreeColumnsPage("img18",{
                ...props.threeColumnsPage.itemsStyleValues.img18,
                transition: 0.45
            });
        }
    }

    const smoothTransition = () => {
        if(props.threeColumnsPage.itemsStyleValues.img1){
            props.updateItemsStyleValuesThreeColumnsPage("img1",{
                ...props.threeColumnsPage.itemsStyleValues.img1,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img2){
            props.updateItemsStyleValuesThreeColumnsPage("img2",{
                ...props.threeColumnsPage.itemsStyleValues.img2,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img3){
            props.updateItemsStyleValuesThreeColumnsPage("img3",{
                ...props.threeColumnsPage.itemsStyleValues.img3,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img4){
            props.updateItemsStyleValuesThreeColumnsPage("img4",{
                ...props.threeColumnsPage.itemsStyleValues.img4,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img5){
            props.updateItemsStyleValuesThreeColumnsPage("img5",{
                ...props.threeColumnsPage.itemsStyleValues.img5,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img6){
            props.updateItemsStyleValuesThreeColumnsPage("img6",{
                ...props.threeColumnsPage.itemsStyleValues.img6,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img7){
            props.updateItemsStyleValuesThreeColumnsPage("img7",{
                ...props.threeColumnsPage.itemsStyleValues.img7,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img8){
            props.updateItemsStyleValuesThreeColumnsPage("img8",{
                ...props.threeColumnsPage.itemsStyleValues.img8,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img9){
            props.updateItemsStyleValuesThreeColumnsPage("img9",{
                ...props.threeColumnsPage.itemsStyleValues.img9,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img10){
            props.updateItemsStyleValuesThreeColumnsPage("img10",{
                ...props.threeColumnsPage.itemsStyleValues.img10,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img11){
            props.updateItemsStyleValuesThreeColumnsPage("img11",{
                ...props.threeColumnsPage.itemsStyleValues.img11,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img12){
            props.updateItemsStyleValuesThreeColumnsPage("img12",{
                ...props.threeColumnsPage.itemsStyleValues.img12,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img13){
            props.updateItemsStyleValuesThreeColumnsPage("img13",{
                ...props.threeColumnsPage.itemsStyleValues.img13,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img14){
            props.updateItemsStyleValuesThreeColumnsPage("img14",{
                ...props.threeColumnsPage.itemsStyleValues.img14,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img15){
            props.updateItemsStyleValuesThreeColumnsPage("img15",{
                ...props.threeColumnsPage.itemsStyleValues.img15,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img16){
            props.updateItemsStyleValuesThreeColumnsPage("img16",{
                ...props.threeColumnsPage.itemsStyleValues.img16,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img17){
            props.updateItemsStyleValuesThreeColumnsPage("img17",{
                ...props.threeColumnsPage.itemsStyleValues.img17,
                transition: 0
            });
        }
        if(props.threeColumnsPage.itemsStyleValues.img18){
            props.updateItemsStyleValuesThreeColumnsPage("img18",{
                ...props.threeColumnsPage.itemsStyleValues.img18,
                transition: 0
            });
        }
    }

    const handleResize = (e) => {
        categoryFromHeaderOnClickHandler(categoryFromHeader);
    }

    const setImagesState = (opt, elementToUpdate, action, arrayOfDisappearAndAppearElements) => {
        if(opt === "categoryFromHeaderOnClick"){
            // Set images state according to the selected category

            let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements(arrayOfDisappearAndAppearElements, size.width);
            let translateCoordinatesObj = updatedTranslateCoordinates.find(item => item.id === elementToUpdate);
            let itemsStylesObj = props.threeColumnsPage.itemsStyleValues[`img${elementToUpdate}`];
            switch(elementToUpdate){
                case 1:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img1",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img1",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 2:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img2",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img2",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 3:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img3",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img3",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 4:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img4",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img4",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 5:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img5",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img5",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 6:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img6",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img6",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 7:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img7",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img7",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 8:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img8",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img8",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 9:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img9",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img9",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 10:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img10",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img10",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 11:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img11",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img11",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 12:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img12",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img12",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 13:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img13",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img13",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 14:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img14",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img14",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 15:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img15",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img15",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 16:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img16",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img16",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 17:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img17",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img17",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
                case 18:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img18",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesThreeColumnsPage("img18",{
                            width: Utility.setWidthOfImage(size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                    }
                    return;
            }
        }else{
            // Set all images state

            if(props.threeColumnsPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img1",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img1.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "atTheBeginning"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img2",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img2.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "atTheBeginning"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img3",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img3.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "atTheBeginningSecondRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img4",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img4.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "atTheBeginningSecondRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img5",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img5.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img6",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img6.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img7",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img7.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img8?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img8",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img8.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img9?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img9",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img9.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img10?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img10",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img10.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img11?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img11",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img11.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img12?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img12",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img12.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img13?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img13",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img13.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img14?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img14",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img14.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img15?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img15",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img15.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img16?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img16",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img16.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img17?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img17",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img17.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.threeColumnsPage.itemsStyleValues.img18?.rendered){
                props.updateItemsStyleValuesThreeColumnsPage("img18",{
                    width: Utility.setWidthOfImage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.threeColumnsPage.itemsStyleValues.img18.scale,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "X", props.threeColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", size.width, "Y", props.threeColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
        }
    }

    const renderToolbars = () => {
        if(size.width < 1200){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="threeColumnsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="threeColumnsPage"
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
                        page="threeColumnsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="threeColumnsPage"
                    />
                </>
            )
        }
    }

    const loadMoreOnClick = () => {
        // Fetch more data for the component

        props.fetchThreeColumnsPage(props.threeColumnsPage.loadMoreStep, 
                                    categoryFromHeader, 
                                    size.width, 
                                    props.threeColumnsPage.items.length, 
                                    props.threeColumnsPage.itemsStyleValues);
        props.setLoadMoreStepThreeColumnsPage(props.threeColumnsPage.loadMoreStep + 1);

        // Set height for the threeColumnsPage items div

        renderThreeColumnsPageStyleHeight();
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
                props.setThreeColumnsPageIsHoveringCategoryFromHeader("on", id)
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'categoryFromHeader':
                props.setThreeColumnsPageIsHoveringCategoryFromHeader("off", id)
                break;
        }
    }
    
    const renderThreeCloumnsPageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img1?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img1?.scale}) 
                               translate(${props.threeColumnsPage.itemsStyleValues.img1?.translateX}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img1?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img1?.zIndex}`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img2?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img3?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img3?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img2?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img2?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img2?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img2?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img2?.zIndex}`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img3?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img3?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img3?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img3?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img3?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img3?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img3?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img3?.zIndex}`
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img4?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img4?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img4?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img4?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img4?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img4?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img4?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img4?.zIndex}`
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img5?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img5?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img5?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img5?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img5?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img5?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img5?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img5?.zIndex}`
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img6?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img6?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img6?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img6?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img6?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img6?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img6?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img6?.zIndex}`
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img7?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img7?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img7?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img7?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img7?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img7?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img7?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img7?.zIndex}`
                };
            case 8:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img8?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img8?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img8?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img8?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img8?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img8?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img8?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img8?.zIndex}`
                };
            case 9:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img9?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img9?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img9?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img9?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img9?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img9?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img9?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img9?.zIndex}`
                };
            case 10:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img10?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img10?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img10?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img10?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img10?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img10?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img10?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img10?.zIndex}`
                };
            case 11:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img11?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img11?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img11?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img11?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img11?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img11?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img11?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img11?.zIndex}`
                };
            case 12:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img12?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img12?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img12?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img12?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img12?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img12?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img12?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img12?.zIndex}`
                };
            case 13:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img13?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img13?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img13?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img13?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img13?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img13?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img13?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img13?.zIndex}`
                };
            case 14:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img14?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img14?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img14?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img14?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img14?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img14?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img14?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img14?.zIndex}`
                };
            case 15:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img15?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img15?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img15?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img15?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img15?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img15?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img15?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img15?.zIndex}`
                };
            case 16:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img16?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img16?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img16?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img16?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img16?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img16?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img16?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img16?.zIndex}`
                };
            case 17:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img17?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img17?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img17?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img17?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img17?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img17?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img17?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img17?.zIndex}`
                };
            case 18:
                return {
                    position: "absolute",
                    width: `${props.threeColumnsPage.itemsStyleValues.img18?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.threeColumnsPage.itemsStyleValues.img18?.translateX === 0 ? '50%' : `${props.threeColumnsPage.itemsStyleValues.img18?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.threeColumnsPage.itemsStyleValues.img18?.scale})
                                translate(${props.threeColumnsPage.itemsStyleValues.img18?.translateX}px, ${props.threeColumnsPage.itemsStyleValues.img18?.translateY}px)`,
                    transition: `transform ${props.threeColumnsPage.itemsStyleValues.img18?.transition}s ease-out`,
                    zIndex: `${props.threeColumnsPage.itemsStyleValues.img18?.zIndex}`
                };
        }
    }

    const categoryFromHeaderOnClickHandler = (key) => {
        // Set selected category from the header

        props.setActivityOfThreeColumnsPageCategoriesFromHeader(key);
        setCategoryFromHeader(key);

        // Set height for the threeColumnsPage items div

        renderThreeColumnsPageStyleHeight();

        // Set images state according to the selected category

        if(key !== "showAll"){
            let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(props.threeColumnsPage.items, key);
            props.disappearenceAndAppearanceOfElementsDueToTheCategoryThreeColumnsPage(arrayOfAppearAndDisapperElements)
            props.threeColumnsPage.items.map(el => {
                let checkIfElementHasSelectedCategory = el.categories.some(item => item.key === key);
                if(checkIfElementHasSelectedCategory){
                    setImagesState("categoryFromHeaderOnClick", el.id, 'appear', arrayOfAppearAndDisapperElements);
                }else{
                    setImagesState("categoryFromHeaderOnClick", el.id, 'disappear', arrayOfAppearAndDisapperElements);
                }
            })
        }
        else{
            setImagesState("showAllCategories", -1);
        }
       
    }

    const renderThreeColumnsPageStyleWidth = () => {
        if(size.width > 1200){
            return 1100;
        }
        if(size.width <= 1200 && size.width > 905){
            return 840;
        }
        if(size.width <= 905 && size.width > 710){
            return 630;
        }
        if(size.width <= 710){
            return 430;
        }
    }

    const renderThreeColumnsPageStyleHeight = () => {
        let numOfAppearElements;
        let objToArray = [];
        
        numOfAppearElements = props.threeColumnsPage.itemsStyleValues;
        objToArray = Utility.getArrayOfEmptyVal(Object.keys(props.threeColumnsPage.itemsStyleValues).length);
        objToArray = objToArray.map((el,i) => {
            return {
                imageId: `img${i + 1}`,
                obj: {
                    ...props.threeColumnsPage.itemsStyleValues[`img${i + 1}`]
                }
            }
        })
        objToArray = objToArray.map(el => {
            if(el.obj.scale === 1){
                return true;
            }else{
                return false;
            }
        })
        numOfAppearElements = objToArray.filter(item => item === true).length;
        return (+numOfAppearElements/2).toFixed()* Utility.setWidthOfImage(size.width) + +(numOfAppearElements/2).toFixed() * 30;
    }

    const renderThreeColumnsPageData = () => {
        return(
            <div className="three-columns-page-data-wrapper">
                <div 
                    className="three-columns-page-categories-from-header"
                    style={{
                        width: `${renderThreeColumnsPageStyleWidth()}px`
                    }}
                >{props.threeColumnsPage.categories.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="three-columns-page-category-from-header"
                            onMouseEnter={() => handleMouseEnter("categoryFromHeader", el.id)} 
                            onMouseLeave={() => handleMouseLeave("categoryFromHeader", el.id)}
                            onClick={() => categoryFromHeaderOnClickHandler(el.key)}
                        >
                            <H15 className={renderClassName("categoryFromHeader", el.isHover, el.active)}>{el.label}</H15>
                        </div>
                    )
                })}
                </div>
                <div  
                    id="threeColumnsPageItems"
                    style={{
                        position: "relative",
                        width: `${renderThreeColumnsPageStyleWidth()}px`,
                        height: `${renderThreeColumnsPageStyleHeight("onInit")}px`
                    }}
                >{props.threeColumnsPage.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            style={renderThreeCloumnsPageItemStyle(el.id)}
                        >
                            <OverlayImage
                                page="threeColumnsPage"
                                obj={el}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                            />
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }

    const renderLoadMoreButton = () => {
        if(props.threeColumnsPage.loadingMoreData && !props.threeColumnsPage.errorMoreData){
            return(
                <div 
                    className="three-columns-page-button-load-more-loading-error"
                >
                    <LoadingVersion2 color="rgb(37, 37, 37)"/>
                </div>
            )
        }
        if(!props.threeColumnsPage.loadingMoreData && !props.threeColumnsPage.errorMoreData){
            return(
                <div className="three-columns-page-button-load-more">
                    <Button
                        className="archive-load-more"
                        text="load more."
                        onClick={loadMoreOnClick}
                        disabled={props.threeColumnsPage.disableLoadMoreButton}
                    />
                </div> 
            )
        }
        if(!props.threeColumnsPage.loadingMoreData && props.threeColumnsPage.errorMoreData){
            return(
                <div 
                    className="three-columns-page-button-load-more-loading-error" 
                >
                    <H19 className="h19-nobel-lora">{`${props.threeColumnsPage.errorMoreData}`}</H19>
                </div>
            )
        }
    }

    const renderThreeColumnsPageContent = () => {
        if(props.threeColumnsPage.loading && !props.threeColumnsPage.error){
            return(
                <div 
                    className="three-columns-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.threeColumnsPage.loading && !props.threeColumnsPage.error){
            return(
                <div className="three-columns-page-wrapper">
                    <div className="three-columns-page-header">
                        <H45 className="h45-nero-lustria">Three Columns</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderThreeColumnsPageData()}
                    {categoryFromHeader === "showAll" ? renderLoadMoreButton() : null}
                </div>
            )
        }
        if(!props.threeColumnsPage.loading && props.threeColumnsPage.error){
            return(
                <div 
                    className="three-columns-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.threeColumnsPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="three-columns-page" id="threeColumnsPage">
            {renderToolbars()}
            {renderThreeColumnsPageContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            threeColumnsPage: Selectors.getThreeColumnsPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state)
        };
    },
    (dispatch) => {
        return {
            fetchThreeColumnsPage: bindActionCreators(Services.fetchThreeColumnsPage, dispatch),
            setThreeColumnsPageIsHoveringCategoryFromHeader: bindActionCreators(Actions.setThreeColumnsPageIsHoveringCategoryFromHeader, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setLoadMoreStepThreeColumnsPage: bindActionCreators(Actions.setLoadMoreStepThreeColumnsPage, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            updateItemsStyleValuesThreeColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesThreeColumnsPage, dispatch),
            setActivityOfThreeColumnsPageCategoriesFromHeader: bindActionCreators(Actions.setActivityOfThreeColumnsPageCategoriesFromHeader, dispatch),
            disappearenceAndAppearanceOfElementsDueToTheCategoryThreeColumnsPage: bindActionCreators(Actions.disappearenceAndAppearanceOfElementsDueToTheCategoryThreeColumnsPage, dispatch),
        };
    }
)(ThreeColumnsPage);
 