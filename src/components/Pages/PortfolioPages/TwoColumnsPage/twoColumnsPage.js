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

import * as Utility from '../../../../utility';

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
    const [categoryFromHeader, setCategoryFromHeader] = useState("showAll");
    
    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.twoColumnsPage.items.length === 0){
            props.fetchTwoColumnsPage(props.twoColumnsPage.loadMoreStep);
            props.setLoadMoreStep(props.twoColumnsPage.loadMoreStep + 1);
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

        if(props.twoColumnsPage.categories.length !== 0){
            let categeryKey = props.twoColumnsPage.categories.find(item => item.active === true).key;
            categoryFromHeaderOnClickHandler(categeryKey);
        }else{
            setImagesState("onInit");
        }
        
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
    }, [props.twoColumnsPage.itemsStyleValues.img1?.rendered]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        updateTransitionValue();
    }, [
        props.twoColumnsPage.itemsStyleValues.img1?.transition,props.twoColumnsPage.itemsStyleValues.img2?.transition,
        props.twoColumnsPage.itemsStyleValues.img3?.transition,props.twoColumnsPage.itemsStyleValues.img4?.transition,
        props.twoColumnsPage.itemsStyleValues.img5?.transition,props.twoColumnsPage.itemsStyleValues.img6?.transition,
        props.twoColumnsPage.itemsStyleValues.img7?.transition,props.twoColumnsPage.itemsStyleValues.img8?.transition,
        props.twoColumnsPage.itemsStyleValues.img9?.transition,props.twoColumnsPage.itemsStyleValues.img10?.transition,
        props.twoColumnsPage.itemsStyleValues.img11?.transition,props.twoColumnsPage.itemsStyleValues.img12?.transition,
        props.twoColumnsPage.itemsStyleValues.img13?.transition,props.twoColumnsPage.itemsStyleValues.img14?.transition,
        props.twoColumnsPage.itemsStyleValues.img15?.transition,props.twoColumnsPage.itemsStyleValues.img16?.transition,
        props.twoColumnsPage.itemsStyleValues.img17?.transition,props.twoColumnsPage.itemsStyleValues.img18?.transition
    ]);

    const updateTransitionValue = () => {
        if(props.twoColumnsPage.itemsStyleValues.img1?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img1",{
                ...props.twoColumnsPage.itemsStyleValues.img1,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img2?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img2",{
                ...props.twoColumnsPage.itemsStyleValues.img2,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img3?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img3",{
                ...props.twoColumnsPage.itemsStyleValues.img3,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img4?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img4",{
                ...props.twoColumnsPage.itemsStyleValues.img4,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img5?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img5",{
                ...props.twoColumnsPage.itemsStyleValues.img5,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img6?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img6",{
                ...props.twoColumnsPage.itemsStyleValues.img6,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img7?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img7",{
                ...props.twoColumnsPage.itemsStyleValues.img7,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img8?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img8",{
                ...props.twoColumnsPage.itemsStyleValues.img8,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img9?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img9",{
                ...props.twoColumnsPage.itemsStyleValues.img9,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img10?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img10",{
                ...props.twoColumnsPage.itemsStyleValues.img10,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img11?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img11",{
                ...props.twoColumnsPage.itemsStyleValues.img11,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img12?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img12",{
                ...props.twoColumnsPage.itemsStyleValues.img12,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img13?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img13",{
                ...props.twoColumnsPage.itemsStyleValues.img13,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img14?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img14",{
                ...props.twoColumnsPage.itemsStyleValues.img14,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img15?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img15",{
                ...props.twoColumnsPage.itemsStyleValues.img15,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img16?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img16",{
                ...props.twoColumnsPage.itemsStyleValues.img16,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img17?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img17",{
                ...props.twoColumnsPage.itemsStyleValues.img17,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img18?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img18",{
                ...props.twoColumnsPage.itemsStyleValues.img18,
                transition: 0.45
            });
        }
    }

    const smoothTransition = () => {
        if(props.twoColumnsPage.itemsStyleValues.img1){
            props.updateItemsStyleValuesTwoColumnsPage("img1",{
                ...props.twoColumnsPage.itemsStyleValues.img1,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img2){
            props.updateItemsStyleValuesTwoColumnsPage("img2",{
                ...props.twoColumnsPage.itemsStyleValues.img2,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img3){
            props.updateItemsStyleValuesTwoColumnsPage("img3",{
                ...props.twoColumnsPage.itemsStyleValues.img3,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img4){
            props.updateItemsStyleValuesTwoColumnsPage("img4",{
                ...props.twoColumnsPage.itemsStyleValues.img4,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img5){
            props.updateItemsStyleValuesTwoColumnsPage("img5",{
                ...props.twoColumnsPage.itemsStyleValues.img5,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img6){
            props.updateItemsStyleValuesTwoColumnsPage("img6",{
                ...props.twoColumnsPage.itemsStyleValues.img6,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img7){
            props.updateItemsStyleValuesTwoColumnsPage("img7",{
                ...props.twoColumnsPage.itemsStyleValues.img7,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img8){
            props.updateItemsStyleValuesTwoColumnsPage("img8",{
                ...props.twoColumnsPage.itemsStyleValues.img8,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img9){
            props.updateItemsStyleValuesTwoColumnsPage("img9",{
                ...props.twoColumnsPage.itemsStyleValues.img9,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img10){
            props.updateItemsStyleValuesTwoColumnsPage("img10",{
                ...props.twoColumnsPage.itemsStyleValues.img10,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img11){
            props.updateItemsStyleValuesTwoColumnsPage("img11",{
                ...props.twoColumnsPage.itemsStyleValues.img11,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img12){
            props.updateItemsStyleValuesTwoColumnsPage("img12",{
                ...props.twoColumnsPage.itemsStyleValues.img12,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img13){
            props.updateItemsStyleValuesTwoColumnsPage("img13",{
                ...props.twoColumnsPage.itemsStyleValues.img13,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img14){
            props.updateItemsStyleValuesTwoColumnsPage("img14",{
                ...props.twoColumnsPage.itemsStyleValues.img14,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img15){
            props.updateItemsStyleValuesTwoColumnsPage("img15",{
                ...props.twoColumnsPage.itemsStyleValues.img15,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img16){
            props.updateItemsStyleValuesTwoColumnsPage("img16",{
                ...props.twoColumnsPage.itemsStyleValues.img16,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img17){
            props.updateItemsStyleValuesTwoColumnsPage("img17",{
                ...props.twoColumnsPage.itemsStyleValues.img17,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img18){
            props.updateItemsStyleValuesTwoColumnsPage("img18",{
                ...props.twoColumnsPage.itemsStyleValues.img18,
                transition: 0
            });
        }
    }

    const handleResize = (e) => {
        categoryFromHeaderOnClickHandler(categoryFromHeader);
        // setImagesState("onResize");
    }

    const setImagesState = (opt, elementToUpdate, action, arrayOfDisappearAndAppearElements) => {
        if(opt === "categoryFromHeaderOnClick"){
            let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements(arrayOfDisappearAndAppearElements, size.width);
            let translateCoordinatesObj = updatedTranslateCoordinates.find(item => item.id === elementToUpdate);
            let itemsStylesObj = props.twoColumnsPage.itemsStyleValues[`img${elementToUpdate}`];
            switch(elementToUpdate){
                case 1:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img1",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img1",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img2",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img2",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img3",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img3",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img4",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img4",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img5",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img5",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img6",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img6",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img7",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img7",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img8",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img8",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img9",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img9",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img10",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img10",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img11",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img11",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img12",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img12",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img13",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img13",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img14",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img14",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img15",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img15",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img16",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img16",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img17",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img17",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
                        props.updateItemsStyleValuesTwoColumnsPage("img18",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img18",{
                            width: Utility.setWidthOfImageTwoColumnsPage(size.width),
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
            if(props.twoColumnsPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img1",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img1.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "atTheBeginning"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img2",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img2.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "atTheBeginning"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img3",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img3.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "atTheBeginningSecondRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img4",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img4.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "atTheBeginningSecondRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img5",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img5.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img6",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img6.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img7",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img7.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img8?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img8",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img8.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img9?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img9",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img9.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img10?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img10",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img10.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img11?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img11",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img11.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img12?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img12",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img12.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img13?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img13",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img13.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img14?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img14",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img14.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img15?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img15",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img15.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img16?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img16",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img16.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "evenRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img17?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img17",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img17.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img18?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img18",{
                    width: Utility.setWidthOfImageTwoColumnsPage(size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img18.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", props.twoColumnsPage.items.length),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", props.twoColumnsPage.items.length, "oddRow"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
            }
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

    const renderToolbars = () => {
        if(size.width < 1200){
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
        props.fetchTwoColumnsPage(props.twoColumnsPage.loadMoreStep, 
                                    categoryFromHeader, 
                                    size.width, 
                                    props.twoColumnsPage.items.length, 
                                    props.twoColumnsPage.itemsStyleValues);
        props.setLoadMoreStep(props.twoColumnsPage.loadMoreStep + 1);
        renderStoneWallItemsStyleHeight();
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
        let checkIfDisappear = props.twoColumnsPage.arrayOfDisappearAndAppearElements.find(item => item.id === id)?.disappear;
        switch(id){
            case 1:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img1?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img1?.scale}) 
                               translate(${props.twoColumnsPage.itemsStyleValues.img1?.translateX}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img1?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img1?.zIndex}`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img2?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img3?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img3?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img2?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img2?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img2?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img2?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img2?.zIndex}`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img3?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img3?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img3?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img3?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img3?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img3?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img3?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img3?.zIndex}`
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img4?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img4?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img4?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img4?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img4?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img4?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img4?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img4?.zIndex}`
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img5?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img5?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img5?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img5?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img5?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img5?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img5?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img5?.zIndex}`
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img6?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img6?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img6?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img6?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img6?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img6?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img6?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img6?.zIndex}`
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img7?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img7?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img7?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img7?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img7?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img7?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img7?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img7?.zIndex}`
                };
            case 8:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img8?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img8?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img8?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img8?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img8?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img8?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img8?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img8?.zIndex}`
                };
            case 9:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img9?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img9?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img9?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img9?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img9?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img9?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img9?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img9?.zIndex}`
                };
            case 10:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img10?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img10?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img10?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img10?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img10?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img10?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img10?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img10?.zIndex}`
                };
            case 11:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img11?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img11?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img11?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img11?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img11?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img11?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img11?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img11?.zIndex}`
                };
            case 12:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img12?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img12?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img12?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img12?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img12?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img12?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img12?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img12?.zIndex}`
                    // top: "0px",
                    // left: `${props.twoColumnsPage.itemsStyleValues.img1.width + 40}`,
                    // transform: `translate(${props.twoColumnsPage.itemsStyleValues.img2.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img2.translateY}px)`,
                    // transition: `transform ${props.twoColumnsPage.itemsStyleValues.img2.transition}s ease-out`,
                };
            case 13:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img13?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img13?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img13?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img13?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img13?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img13?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img13?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img13?.zIndex}`
                };
            case 14:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img14?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img14?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img14?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img14?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img14?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img14?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img14?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img14?.zIndex}`
                };
            case 15:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img15?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img15?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img15?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img15?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img15?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img15?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img15?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img15?.zIndex}`
                };
            case 16:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img16?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img16?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img16?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img16?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img16?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img16?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img16?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img16?.zIndex}`
                };
            case 17:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img17?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img17?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img17?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img17?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img17?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img17?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img17?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img17?.zIndex}`
                };
            case 18:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img18?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img18?.translateX === 0 ? '50%' : `${props.twoColumnsPage.itemsStyleValues.img18?.translateX * 1.5}px`} 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img18?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img18?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img18?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img18?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img18?.zIndex}`
                };
        }
    }

    const categoryFromHeaderOnClickHandler = (key) => {
        props.setActivityOfTwoColumnsPageCategoriesFromHeader(key);
        setCategoryFromHeader(key);
        renderStoneWallItemsStyleHeight();
        if(key !== "showAll"){
            let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(props.twoColumnsPage.items, key);
            props.disappearenceAndAppearanceOfElementsDueToTheCategoryTwoColumnsPage(arrayOfAppearAndDisapperElements)
            props.twoColumnsPage.items.map(el => {
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

    const renderStoneWallItemsStyleWidth = () => {
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
        // if(size.width <= 680 && size.width > 500){
        //     return 420;
        // }
        // if(size.width <= 500){
        //     return 300;
        // }
    }

    const renderStoneWallItemsStyleHeight = () => {
        let numOfAppearElements;

        let objToArray = [];
        numOfAppearElements = props.twoColumnsPage.itemsStyleValues;
        objToArray = Utility.getArrayOfEmptyVal(Object.keys(props.twoColumnsPage.itemsStyleValues).length);
        objToArray = objToArray.map((el,i) => {
            return {
                imageId: `img${i + 1}`,
                obj: {
                    ...props.twoColumnsPage.itemsStyleValues[`img${i + 1}`]
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
        return (+numOfAppearElements/2).toFixed()* Utility.setWidthOfImageTwoColumnsPage(size.width) + +(numOfAppearElements/2).toFixed() * 30;
       
       
        // if(size.width <= 1200 && size.width > 1040){
        //     return 1019.99;
        // }
        // if(size.width <= 1040 && size.width > 840){
        //     return 2034;
        // }
        // if(size.width <= 840 && size.width > 680){
        //     return 1615;
        // }
        // if(size.width <= 680 && size.width > 500){
        //     return 2738.55;
        // }
        // if(size.width <= 500){
        //     return 2010.39;
        // }
    }

    const renderTwoColumnsPageData = () => {
        return(
            <div className="two-columns-page-data-wrapper">
                <div 
                    className="two-columns-page-categories-from-header"
                    style={{
                        width: `${renderStoneWallItemsStyleWidth()}px`
                    }}
                >{props.twoColumnsPage.categories.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="two-columns-page-category-from-header"
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
                    // className="two-columns-page-items"
                    style={{
                        position: "relative",
                        width: `${renderStoneWallItemsStyleWidth()}px`,
                        height: `${renderStoneWallItemsStyleHeight("onInit")}px`
                    }}
                >{props.twoColumnsPage.items.map((el, i) => {
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
                </div>
            </div>
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
                    {renderLoadMoreButton()}
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
            setLoadMoreStep: bindActionCreators(Actions.setLoadMoreStep, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            updateItemsStyleValuesTwoColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesTwoColumnsPage, dispatch),
            setActivityOfTwoColumnsPageCategoriesFromHeader: bindActionCreators(Actions.setActivityOfTwoColumnsPageCategoriesFromHeader, dispatch),
            disappearenceAndAppearanceOfElementsDueToTheCategoryTwoColumnsPage: bindActionCreators(Actions.disappearenceAndAppearanceOfElementsDueToTheCategoryTwoColumnsPage, dispatch),
        };
    }
)(TwoColumnsPage);
 