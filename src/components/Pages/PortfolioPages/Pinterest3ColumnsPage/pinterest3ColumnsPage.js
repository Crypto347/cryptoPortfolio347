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

import './pinterest3ColumnsPage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Pinterest3ColumnsItem from '../../../SmallParts/Pinterest3ColumnsItem/pinterest3ColumnsItem';
import Footer from '../../../Parts/Footer/footer';

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
    H65,
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
* Pinterest3ColumnsPage component definition and export
*/

export const Pinterest3ColumnsPage = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();
    const transitionRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.pinterest3ColumnsPage.items.length === 0){
            props.fetchPinterest3ColumnsPage();
        }
        let timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 2);

        const smooth = e => {
            if(['pinterest-3-columns-item-id1',
                'pinterest-3-columns-item-id2',
                'pinterest-3-columns-item-id3',
                'pinterest-3-columns-item-id4',
                'pinterest-3-columns-item-id5',
                'pinterest-3-columns-item-id6',
                'pinterest-3-columns-item-id7',
                'pinterest-3-columns-item-id8',
                'pinterest-3-columns-item-id9',
                'pinterest-3-columns-item-id10',
                'pinterest-3-columns-item-id11',
                'pinterest-3-columns-item-id12',
                'pinterest-3-columns-item-id13',
                'pinterest-3-columns-item-id14',
                'pinterest-3-columns-item-id15'
                ].includes(e.target.className)){
                    transitionRef.current()
            }
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
        }
    }, []);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        if(props.pinterest3ColumnsPage.itemsStyleValues.img1.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img2.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img3.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img4.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img5.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img6.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img7.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img8.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img9.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img10.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img11.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img12.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img13.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img14.transition === 0 ||
            props.pinterest3ColumnsPage.itemsStyleValues.img15.transition === 0) {           
            props.updateItemsStyleValuesPinterest3ColumnsPage("img1",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img1,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img2",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img2,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img3",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img3,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img4",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img4,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img5",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img5,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img6",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img6,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img7",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img7,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img8",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img8,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img9",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img9,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img10",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img10,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img11",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img11,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img12",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img12,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img13",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img13,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img14",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img14,
                transition: 0.45
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img15",{
                ...props.pinterest3ColumnsPage.itemsStyleValues.img15,
                transition: 0.45
            });
        }
    }, [props.pinterest3ColumnsPage.itemsStyleValues.img1.transition,props.pinterest3ColumnsPage.itemsStyleValues.img2.transition,
        props.pinterest3ColumnsPage.itemsStyleValues.img3.transition,props.pinterest3ColumnsPage.itemsStyleValues.img4.transition,
        props.pinterest3ColumnsPage.itemsStyleValues.img5.transition,props.pinterest3ColumnsPage.itemsStyleValues.img6.transition,
        props.pinterest3ColumnsPage.itemsStyleValues.img7.transition,props.pinterest3ColumnsPage.itemsStyleValues.img8.transition,
        props.pinterest3ColumnsPage.itemsStyleValues.img9.transition,props.pinterest3ColumnsPage.itemsStyleValues.img10.transition,
        props.pinterest3ColumnsPage.itemsStyleValues.img11.transition,props.pinterest3ColumnsPage.itemsStyleValues.img12.transition,
        props.pinterest3ColumnsPage.itemsStyleValues.img13.transition,props.pinterest3ColumnsPage.itemsStyleValues.img14.transition,
        props.pinterest3ColumnsPage.itemsStyleValues.img15.transition])

    const smoothTransition = () => {
        props.updateItemsStyleValuesPinterest3ColumnsPage("img1",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img1,
            transition: 0
        });
        props.updateItemsStyleValuespinterest3ColumnsPage("img2",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img2,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img3",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img3,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img4",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img4,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img5",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img5,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img6",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img6,
            transition: 0
        });
        props.updateItemsStyleValuespinterest3ColumnsPage("img7",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img7,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img8",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img8,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img9",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img9,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img10",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img10,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img11",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img11,
            transition: 0
        });
        props.updateItemsStyleValuespinterest3ColumnsPage("img12",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img12,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img13",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img13,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img14",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img14,
            transition: 0
        });
        props.updateItemsStyleValuesPinterest3ColumnsPage("img15",{
            ...props.pinterest3ColumnsPage.itemsStyleValues.img15,
            transition: 0
        });
    }
    

    const handleResize = (e) => {
        setImagesState("onResize");
    }

    const setImagesState = (opt) => {
        if(size.width > 1200){
            props.updateItemsStyleValuesPinterest3ColumnsPage("img1",{
                width: 346.66,
                height: 346.66,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img2",{
                width: 346.66,
                height: 723.33,
                translateX: 0,
                translateY: 30,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img3",{
                width: 723.33,
                height: 723.33,
                translateX: 376.66,
                translateY: -346.66,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img4",{
                width: 346.663,
                height: 346.66,
                translateX: 376.66,
                translateY: 406.66,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img5",{
                width: 346.66,
                height: 346.66,
                translateX: 752.66,
                translateY: 406.66,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img6",{
                width: 346.66,
                height: 346.66,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img7",{
                width: 346.66,
                height: 723.33,
                translateX: 0,
                translateY: 30,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img8",{
                width: 723.33,
                height: 723.33,
                translateX: 376.66,
                translateY: -346.66,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img9",{
                width: 346.663,
                height: 346.66,
                translateX: 376.66,
                translateY: 406.66,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img10",{
                width: 346.66,
                height: 346.66,
                translateX: 752.66,
                translateY: 406.66,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img11",{
                width: 346.66,
                height: 346.66,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img12",{
                width: 346.66,
                height: 723.33,
                translateX: 0,
                translateY: 30,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img13",{
                width: 723.33,
                height: 723.33,
                translateX: 376.66,
                translateY: -346.66,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img14",{
                width: 346.663,
                height: 346.66,
                translateX: 376.66,
                translateY: 406.66,
                transition: 0
            });
            props.updateItemsStyleValuesPinterest3ColumnsPage("img15",{
                width: 346.66,
                height: 346.66,
                translateX: 752.66,
                translateY: 406.66,
                transition: 0
            });
        }
        // if(size.width <= 1200 && size.width > 1040){
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img1",{
        //         width: 296.66,
        //         height: 296.66,
        //         translateX: 0,
        //         translateY: 0,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img2",{
        //         width: 296.66,
        //         height: 623.33,
        //         translateX: 0,
        //         translateY: 30,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img3",{
        //         width: 623.33,
        //         height: 623.33,
        //         translateX: 326.66,
        //         translateY: -296.66,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img4",{
        //         width: 296.66,
        //         height: 296.66,
        //         translateX: 326.66,
        //         translateY: 356.66,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img5",{
        //         width: 296.66,
        //         height: 296.66,
        //         translateX: 653.32,
        //         translateY: 356.66,
        //         transition: 0
        //     });
        // }
        // if(size.width <= 1040 && size.width > 840){
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img1",{
        //         width: 368,
        //         height: 368,
        //         translateX: 0,
        //         translateY: 0,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img2",{
        //         width: 368,
        //         height: 768,
        //         translateX: 0,
        //         translateY: 828,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img3",{
        //         width: 768,
        //         height: 768,
        //         translateX: 0,
        //         translateY: 30,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img4",{
        //         width: 368,
        //         height: 368,
        //         translateX: 398,
        //         translateY: -368,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img5",{
        //         width: 368,
        //         height: 368,
        //         translateX: 398,
        //         translateY: 828,
        //         transition: 0
        //     });
        // } 
        // if(size.width <= 840 && size.width > 680){
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img1",{
        //         width: 285,
        //         height: 285,
        //         translateX: 0,
        //         translateY: 0,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img2",{
        //         width: 285,
        //         height: 600,
        //         translateX: 0,
        //         translateY: 660,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img3",{
        //         width: 600,
        //         height: 600,
        //         translateX: 0,
        //         translateY: 30,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img4",{
        //         width: 285,
        //         height: 285,
        //         translateX: 315,
        //         translateY: -285,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img5",{
        //         width: 285,
        //         height: 285,
        //         translateX: 315,
        //         translateY: 660,
        //         transition: 0
        //     });
        // }
        // if(size.width <= 680 && size.width > 500){
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img1",{
        //         width: 420,
        //         height: 420,
        //         translateX: 0,
        //         translateY: 0,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img2",{
        //         width: 420,
        //         height: 868.55,
        //         translateX: 0,
        //         translateY: 480,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img3",{
        //         width: 420,
        //         height: 420,
        //         translateX: 0,
        //         translateY: 30,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img4",{
        //         width: 420,
        //         height: 420,
        //         translateX: 0,
        //         translateY: 1378.55,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img5",{
        //         width: 420,
        //         height: 420,
        //         translateX: 0,
        //         translateY: 1828.55,
        //         transition: 0
        //     });
        // }
        // if(size.width <= 500){
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img1",{
        //         width: 300,
        //         height: 300,
        //         translateX: 0,
        //         translateY: 0,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img2",{
        //         width: 300,
        //         height: 620.39,
        //         translateX: 0,
        //         translateY: 360,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img3",{
        //         width: 300,
        //         height: 300,
        //         translateX: 0,
        //         translateY: 30,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img4",{
        //         width: 300,
        //         height: 300,
        //         translateX: 0,
        //         translateY: 1010.39,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesPinterest3ColumnsPage("img5",{
        //         width: 300,
        //         height: 300,
        //         translateX: 0,
        //         translateY: 1340.39,
        //         transition: 0
        //     });
        // }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("pinterest3ColumnsPage");
    
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
                        page="pinterest3ColumnsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="pinterest3ColumnsPage"
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
                        page="pinterest3ColumnsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="pinterest3ColumnsPage"
                    />
                </>
            )
        }
    }

    const renderStoneWallPageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    width: `${props.pinterest3ColumnsPage.itemsStyleValues.img1.width}px`,
                    height: `${props.pinterest3ColumnsPage.itemsStyleValues.img1.height}px`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.pinterest3ColumnsPage.itemsStyleValues.img2.width}`,
                    height: `${props.pinterest3ColumnsPage.itemsStyleValues.img2.height}px`,
                    // top: "0px",
                    // left: `${props.pinterest3ColumnsPage.itemsStyleValues.img1.width + 40}`,
                    transform: `translate(${props.pinterest3ColumnsPage.itemsStyleValues.img2.translateX}px, ${props.pinterest3ColumnsPage.itemsStyleValues.img2.translateY}px)`,
                    transition: `transform ${props.pinterest3ColumnsPage.itemsStyleValues.img2.transition}s ease-out`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.pinterest3ColumnsPage.itemsStyleValues.img3.width}`,
                    height: `${props.pinterest3ColumnsPage.itemsStyleValues.img3.height}px`,
                    // top: "0px",
                    // left: `${props.pinterest3ColumnsPage.itemsStyleValues.img1.width + 40 + props.pinterest3ColumnsPage.itemsStyleValues.img2.width + 40}`,
                    transform: `translate(${props.pinterest3ColumnsPage.itemsStyleValues.img3.translateX}px, ${props.pinterest3ColumnsPage.itemsStyleValues.img3.translateY}px)`,
                    transition: `transform ${props.pinterest3ColumnsPage.itemsStyleValues.img3.transition}s ease-out`,
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.pinterest3ColumnsPage.itemsStyleValues.img4.width}`,
                    height: `${props.pinterest3ColumnsPage.itemsStyleValues.img4.height}px`,
                    // top: "0px",
                    // left: `${props.pinterest3ColumnsPage.itemsStyleValues.img1.width + 40 + props.pinterest3ColumnsPage.itemsStyleValues.img2.width + 40 + props.pinterest3ColumnsPage.itemsStyleValues.img3.width + 40}`,
                    transform: `translate(${props.pinterest3ColumnsPage.itemsStyleValues.img4.translateX}px, ${props.pinterest3ColumnsPage.itemsStyleValues.img4.translateY}px)`,
                    transition: `transform ${props.pinterest3ColumnsPage.itemsStyleValues.img4.transition}s ease-out`,
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.pinterest3ColumnsPage.itemsStyleValues.img5.width}`,
                    height: `${props.pinterest3ColumnsPage.itemsStyleValues.img5.height}px`,
                    // top: `${props.pinterest3ColumnsPage.itemsStyleValues.img1.width + 40}`,
                    // left: "0px",
                    transform: `translate(${props.pinterest3ColumnsPage.itemsStyleValues.img5.translateX}px, ${props.pinterest3ColumnsPage.itemsStyleValues.img5.translateY}px)`,
                    transition: `transform ${props.pinterest3ColumnsPage.itemsStyleValues.img5.transition}s ease-out`,
                };
        }
    }

    const renderStoneWallItemsStyleWidth = () => {
        if(size.width > 1200){
            return 1099.99;
        }
        if(size.width <= 1200 && size.width > 1040){
            return 949.99;
        }
        if(size.width <= 1040 && size.width > 840){
            return 766;
        }
        if(size.width <= 840 && size.width > 680){
            return 600;
        }
        if(size.width <= 680 && size.width > 500){
            return 420;
        }
        if(size.width <= 500){
            return 300;
        }
    }

    const renderStoneWallItemsStyleHeight = () => {
        if(size.width > 1200){
            return 1169.99;
        }
        if(size.width <= 1200 && size.width > 1040){
            return 1019.99;
        }
        if(size.width <= 1040 && size.width > 840){
            return 2034;
        }
        if(size.width <= 840 && size.width > 680){
            return 1615;
        }
        if(size.width <= 680 && size.width > 500){
            return 2738.55;
        }
        if(size.width <= 500){
            return 2010.39;
        }
    }

    const renderStoneWallPageData = () => {
        return(
            <div 
                id="pinterest3ColumnsPageItems"
                // className="stone-wall-page-items"
                style={{
                    position: "relative",
                    width: `${renderStoneWallItemsStyleWidth()}px`,
                    height: `${renderStoneWallItemsStyleHeight()}px`
                }}
            >{props.pinterest3ColumnsPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        // className={`stone-wall-page-item-id${el.id}`}
                        // className={renderClassName(el.id)}
                        style={renderStoneWallPageItemStyle(el.id)}
                    >
                        <Pinterest3ColumnsItem
                            page="pinterest3ColumnsPage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            setIsHoveringCategory={props.setPinterest3ColumnsPageIsHoveringCategory}
                            clearArchiveData={props.clearArchiveData}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderStoneWallContent = () => {
        if(props.pinterest3ColumnsPage.loading && !props.pinterest3ColumnsPage.error){
            return(
                <div 
                    className="stone-wall-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.pinterest3ColumnsPage.loading && !props.pinterest3ColumnsPage.error){
            return(
                <div className="stone-wall-page-wrapper">
                    <div className="stone-wall-page-header">
                        <H65 className="h65-nero-poppins">Pinterest 3 columns</H65>
                    </div> 
                    {renderStoneWallPageData()}
                </div>
            )
        }
        if(!props.pinterest3ColumnsPage.loading && props.pinterest3ColumnsPage.error){
            return(
                <div 
                    className="stone-wall-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.pinterest3ColumnsPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="stone-wall-page" id="pinterest3ColumnsPage">
            {renderToolbars()}
            {renderStoneWallContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            pinterest3ColumnsPage: Selectors.getPinterest3ColumnsPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchPinterest3ColumnsPage: bindActionCreators(Services.fetchPinterest3ColumnsPage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            setPinterest3ColumnsPageIsHoveringCategory: bindActionCreators(Actions.setPinterest3ColumnsPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            updateItemsStyleValuesPinterest3ColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesPinterest3ColumnsPage, dispatch),
        };
    }
)(Pinterest3ColumnsPage);
 