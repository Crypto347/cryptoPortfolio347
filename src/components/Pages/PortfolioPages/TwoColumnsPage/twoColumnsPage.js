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
    const [categoryFromHeader, setCategoryFromHeader] = useState("showAll");
    
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
    }, [props.twoColumnsPage.itemsStyleValues.img1?.rendered]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        // if(props.twoColumnsPage.itemsStyleValues.img1.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img2.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img3.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img4.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img5.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img6.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img7.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img8.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img9.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img10.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img11.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img12.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img13.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img14.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img15.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img16.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img17.transition === 0 ||
        //     props.twoColumnsPage.itemsStyleValues.img18.transition === 0) {           
        //     props.updateItemsStyleValuesTwoColumnsPage("img1",{
        //         ...props.twoColumnsPage.itemsStyleValues.img1,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img2",{
        //         ...props.twoColumnsPage.itemsStyleValues.img2,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img3",{
        //         ...props.twoColumnsPage.itemsStyleValues.img3,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img4",{
        //         ...props.twoColumnsPage.itemsStyleValues.img4,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img5",{
        //         ...props.twoColumnsPage.itemsStyleValues.img5,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img6",{
        //         ...props.twoColumnsPage.itemsStyleValues.img6,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img7",{
        //         ...props.twoColumnsPage.itemsStyleValues.img7,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img8",{
        //         ...props.twoColumnsPage.itemsStyleValues.img8,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img9",{
        //         ...props.twoColumnsPage.itemsStyleValues.img9,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img10",{
        //         ...props.twoColumnsPage.itemsStyleValues.img10,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img11",{
        //         ...props.twoColumnsPage.itemsStyleValues.img11,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img12",{
        //         ...props.twoColumnsPage.itemsStyleValues.img12,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img13",{
        //         ...props.twoColumnsPage.itemsStyleValues.img13,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img14",{
        //         ...props.twoColumnsPage.itemsStyleValues.img14,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img15",{
        //         ...props.twoColumnsPage.itemsStyleValues.img15,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img16",{
        //         ...props.twoColumnsPage.itemsStyleValues.img16,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img17",{
        //         ...props.twoColumnsPage.itemsStyleValues.img17,
        //         transition: 0.45
        //     });
        //     props.updateItemsStyleValuesTwoColumnsPage("img18",{
        //         ...props.twoColumnsPage.itemsStyleValues.img18,
        //         transition: 0.45
        //     });
        // }
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

    const setImagesState = (opt, elementToUpdate, action) => {
        if(opt === "categoryFromHeaderOnClick"){
            switch(elementToUpdate){
                case 1:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img1",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img1",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 2:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img2",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img2",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 3:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img3",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img3",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 4:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img4",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img4",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 5:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img5",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img5",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 6:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img6",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img6",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 7:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img7",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img7",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 8:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img8",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img8",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 9:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img9",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img9",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 10:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img10",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img10",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 11:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img11",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img11",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 12:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img12",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img12",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 13:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img13",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img13",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 14:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img14",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img14",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 15:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img15",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img15",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 16:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img16",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img16",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 17:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img17",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img17",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
                case 18:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img18",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 0,
                            // translateX: 376.66,
                            // translateY: -346.66,
                            transition: 0.45,
                            rendered: true
                        });
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img18",{
                            width: size.width > 945 ? 635 : 400,
                            scale: 1,
                            // translateX: 0,
                            // translateY: 0,
                            transition: 0.45,
                            rendered: true
                        });
                    }
                    break;
            }
        }else{
            if(props.twoColumnsPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img1",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img1.scale,
                    // translateX: 0,
                    // translateY: 0,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
           
            if(props.twoColumnsPage.itemsStyleValues.img?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img2",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img2.scale,
                    // translateX: 0,
                    // translateY: 30,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }

            if(props.twoColumnsPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img3",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img3.scale,
                    // translateX: 376.66,
                    // translateY: -346.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img4",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img4.scale,
                    // translateX: 376.66,
                    // translateY: 406.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img5",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img5.scale,
                    // translateX: 752.66,
                    // translateY: 406.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img6",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img6.scale,
                    // translateX: 0,
                    // translateY: 0,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img7",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img7.scale,
                    // translateX: 0,
                    // translateY: 30,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img8?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img8",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img8.scale,
                    // translateX: 376.66,
                    // translateY: -346.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img9?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img9",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img9.scale,
                    // translateX: 376.66,
                    // translateY: 406.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img10?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img10",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img10.scale,
                    // translateX: 752.66,
                    // translateY: 406.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img11?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img11",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img11.scale,
                    // translateX: 0,
                    // translateY: 0,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img12?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img12",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img12.scale,
                    // translateX: 0,
                    // translateY: 30,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img13?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img13",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img13.scale,
                    // translateX: 376.66,
                    // translateY: -346.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img14?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img14",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img14.scale,
                    // translateX: 376.66,
                    // translateY: 406.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img15?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img15",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img15.scale,
                    // translateX: 752.66,
                    // translateY: 406.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img16?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img16",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img16.scale,
                    // translateX: 0,
                    // translateY: 0,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img17?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img17",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img17.scale,
                    // translateX: 0,
                    // translateY: 30,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    rendered: true
                });
            }
            if(props.twoColumnsPage.itemsStyleValues.img18?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img18",{
                    width: size.width > 945 ? 535 : 400,
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img18.scale,
                    // translateX: 376.66,
                    // translateY: -346.66,
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
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
        props.fetchTwoColumnsPage(loadMoreStep, categoryFromHeader, size.width);
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
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img1?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img1?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img1?.transition}s ease-out`,
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img2?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img2?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img2?.transition}s ease-out`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img3?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img3?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img3?.transition}s ease-out`,
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img4?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img4?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img4?.transition}s ease-out`,
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img5?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img5?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img5?.transition}s ease-out`,
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img6?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img6?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img6?.transition}s ease-out`,
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img7?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img7?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img7?.transition}s ease-out`,
                };
            case 8:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img8?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img8?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img8?.transition}s ease-out`,
                };
            case 9:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img9?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img9?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img9?.transition}s ease-out`,
                };
            case 10:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img10?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img10?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img10?.transition}s ease-out`,
                };
            case 11:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img11?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img11?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img11?.transition}s ease-out`,
                };
            case 12:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img12?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img12?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img12?.transition}s ease-out`,
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
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img13?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img13?.transition}s ease-out`,
                };
            case 14:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img14?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img14?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img14?.transition}s ease-out`,
                };
            case 15:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img15?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img15?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img15?.transition}s ease-out`,
                };
            case 16:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img16?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img16?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img16?.transition}s ease-out`,
                };
            case 17:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img17?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img17?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img17?.transition}s ease-out`,
                };
            case 18:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img18?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img18?.scale})`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img18?.transition}s ease-out`,
                };
        }
    }

    const categoryFromHeanderOnClickHandler = (key) => {
        props.setActivityOfTwoColumnsPageCategoriesFromHeader(key);
        setCategoryFromHeader(key)
        if(key !== "showAll"){
            props.twoColumnsPage.items.map(el => {
                el.categories.map(category => {
                    if(category.key === key){
                        setImagesState("categoryFromHeaderOnClick", el.id, 'appear');
                    }else{
                        setImagesState("categoryFromHeaderOnClick", el.id, 'disappear');
                    }
                })
            })
        }
        else{
            setImagesState("showAllCategories", -1);
        }
       
    }

    const renderStoneWallItemsStyleWidth = () => {
        if(size.width > 945){
            return 1100;
        }
        // if(size.width <= 1200 && size.width > 1040){
        //     return 949.99;
        // }
        // if(size.width <= 1040 && size.width > 840){
        //     return 766;
        // }
        // if(size.width <= 840 && size.width > 680){
        //     return 600;
        // }
        // if(size.width <= 680 && size.width > 500){
        //     return 420;
        // }
        // if(size.width <= 500){
        //     return 300;
        // }
    }

    const renderStoneWallItemsStyleHeight = () => {
        let numOfAppearElements = props.twoColumnsPage.items.length
        console.log("length", numOfAppearElements)
        if(size.width > 945){
            return numOfAppearElements/2 * (size.width > 945 ? 535 : 400) + numOfAppearElements/2 * 30;
        }
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
                            onClick={() => categoryFromHeanderOnClickHandler(el.key)}
                        >
                            <H15 className={renderClassName("categoryFromHeader", el.isHover, el.active)}>{el.label}</H15>
                        </div>
                    )
                })}
                </div>
                <div  
                    style={{
                        position: "relative",
                        width: `${renderStoneWallItemsStyleWidth()}px`,
                        height: `${renderStoneWallItemsStyleHeight()}px`
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
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            updateItemsStyleValuesTwoColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesTwoColumnsPage, dispatch),
            setActivityOfTwoColumnsPageCategoriesFromHeader: bindActionCreators(Actions.setActivityOfTwoColumnsPageCategoriesFromHeader, dispatch),
        };
    }
)(TwoColumnsPage);
 