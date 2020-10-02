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

import './metroPage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import MetroItem from '../../../SmallParts/MetroItem/metroItem';
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
* MetroPage component definition and export
*/

export const MetroPage = (props) => {

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
        if(props.metroPage.items.length === 0){
            props.fetchMetroPage();
        }
        let timeout = setTimeout(() => {
            if(!props.metroPage.loading && !props.metroPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        const smooth = e => {
            if(['metro-page-item-id1',
                'metro-page-item-id2',
                'metro-page-item-id3',
                'metro-page-item-id4',
                'metro-page-item-id5',
                'metro-page-item-id6',
                'metro-page-item-id7',
                'metro-page-item-id8',
                'metro-page-item-id9',
                'metro-page-item-id10',
                'metro-page-item-id11'
                ].includes(e.target.className)){
                    console.log("fagr")
                        transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current();
        }

        setImagesState();
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
        if(props.metroPage.itemsStyleValues.img1.transition === 0 ||
            props.metroPage.itemsStyleValues.img2.transition === 0 ||
            props.metroPage.itemsStyleValues.img3.transition === 0 ||
            props.metroPage.itemsStyleValues.img4.transition === 0 ||
            props.metroPage.itemsStyleValues.img5.transition === 0 ||
            props.metroPage.itemsStyleValues.img6.transition === 0 ||
            props.metroPage.itemsStyleValues.img7.transition === 0 ||
            props.metroPage.itemsStyleValues.img8.transition === 0 ||
            props.metroPage.itemsStyleValues.img9.transition === 0 ||
            props.metroPage.itemsStyleValues.img10.transition === 0 ||
            props.metroPage.itemsStyleValues.img11.transition === 0
            ) {           
            props.updateItemsStyleValuesMetroPage("img1",{
                ...props.metroPage.itemsStyleValues.img1,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img2",{
                ...props.metroPage.itemsStyleValues.img2,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img3",{
                ...props.metroPage.itemsStyleValues.img3,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img4",{
                ...props.metroPage.itemsStyleValues.img4,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img5",{
                ...props.metroPage.itemsStyleValues.img5,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img6",{
                ...props.metroPage.itemsStyleValues.img6,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img7",{
                ...props.metroPage.itemsStyleValues.img7,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img8",{
                ...props.metroPage.itemsStyleValues.img8,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img9",{
                ...props.metroPage.itemsStyleValues.img9,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img10",{
                ...props.metroPage.itemsStyleValues.img10,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img11",{
                ...props.metroPage.itemsStyleValues.img11,
                transition: 0.45
            });
        }
    }, [props.metroPage.itemsStyleValues.img1.transition,props.metroPage.itemsStyleValues.img2.transition,
        props.metroPage.itemsStyleValues.img3.transition,props.metroPage.itemsStyleValues.img4.transition,
        props.metroPage.itemsStyleValues.img5.transition,props.metroPage.itemsStyleValues.img6.transition,
        props.metroPage.itemsStyleValues.img7.transition,props.metroPage.itemsStyleValues.img8.transition,
        props.metroPage.itemsStyleValues.img9.transition,props.metroPage.itemsStyleValues.img10.transition,
        props.metroPage.itemsStyleValues.img11.transition])

    const smoothTransition = () => {
        props.updateItemsStyleValuesMetroPage("img1",{
            ...props.metroPage.itemsStyleValues.img1,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img2",{
            ...props.metroPage.itemsStyleValues.img2,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img3",{
            ...props.metroPage.itemsStyleValues.img3,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img4",{
            ...props.metroPage.itemsStyleValues.img4,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img5",{
            ...props.metroPage.itemsStyleValues.img5,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img6",{
            ...props.metroPage.itemsStyleValues.img6,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img7",{
            ...props.metroPage.itemsStyleValues.img7,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img8",{
            ...props.metroPage.itemsStyleValues.img8,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img9",{
            ...props.metroPage.itemsStyleValues.img9,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img10",{
            ...props.metroPage.itemsStyleValues.img10,
            transition: 0
        });
        props.updateItemsStyleValuesMetroPage("img11",{
            ...props.metroPage.itemsStyleValues.img11,
            transition: 0
        });
    }

    const handleResize = (e) => {
        setImagesState();
    }

    const setImagesState = () => {
        let metroPageItemsWidth = document.getElementById('metroPageItems')?.clientWidth;
        if(size.width > 1500){
            props.updateItemsStyleValuesMetroPage("img1",{
                width: (metroPageItemsWidth - 120)/5,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img2",{
                width: (metroPageItemsWidth - 120)/5*2,
                height: 0,
                translateX: (metroPageItemsWidth - 120)/5 + 40,
                translateY: -(metroPageItemsWidth - 120)/5 - 30,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img3",{
                width: (metroPageItemsWidth - 120)/5,
                height: 0,
                translateX: (metroPageItemsWidth - 120)/5*3 + 80,
                translateY: -(metroPageItemsWidth - 120)/5 - 30,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img4",{
                width: (metroPageItemsWidth - 120)/5,
                height: 0,
                translateX: (metroPageItemsWidth - 120)/5*4 + 120,
                translateY: -(metroPageItemsWidth - 120)/5 - 30,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img5",{
                width: (metroPageItemsWidth - 120)/5*2,
                height: 0,
                translateX: 0,
                translateY: 10,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img6",{
                width: (metroPageItemsWidth - 120)/5,
                height: 0,
                translateX: (metroPageItemsWidth - 120)/5*2 + 40,
                translateY: 10,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img7",{
                width: (metroPageItemsWidth - 120)/5*2  + 40,
                height: 0,
                translateX: (metroPageItemsWidth - 120)/5*3 + 80,
                translateY: 10,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img8",{
                width: (metroPageItemsWidth - 120)/5,
                height: 0,
                translateX: (metroPageItemsWidth - 120)/5*2 + 40,
                translateY: (metroPageItemsWidth - 120)/5 + 65,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img9",{
                width: (metroPageItemsWidth - 120)/5*2 + 40,
                height: 0,
                translateX: (metroPageItemsWidth - 120)/5*3 + 80,
                translateY: (metroPageItemsWidth - 120)/5 + 65,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img10",{
                width: (metroPageItemsWidth - 120)/5*2,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 120)/5*2 + 115,
                transition: 0
            });
            props.updateItemsStyleValuesMetroPage("img11",{
                width: (metroPageItemsWidth - 120)/5,
                height: 0,
                translateX: (metroPageItemsWidth - 120)/5*2 + 40,
                translateY: (metroPageItemsWidth - 120)/5*2 + 100,
                transition: 0
            });
        }
        if(size.width <= 1500 && size.width > 1430){
            props.updateItemsStyleValuesMetroPage("img1",{
                width: (metroPageItemsWidth - 80)/4,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img2",{
                width: (metroPageItemsWidth - 80)/4*2,
                height: 0,
                translateX: (metroPageItemsWidth - 80)/4 + 40,
                translateY: -(metroPageItemsWidth - 80)/4 - 30,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img3",{
                width: (metroPageItemsWidth - 80)/4,
                height: 0,
                translateX: (metroPageItemsWidth - 80)/4*3 + 80,
                translateY: -(metroPageItemsWidth - 80)/4 - 30,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img4",{
                width: (metroPageItemsWidth - 80)/4,
                height: 0,
                translateX: 0,
                translateY: 20,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img5",{
                width: (metroPageItemsWidth - 80)/4*2,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 80)/4 + 70,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img6",{
                width: (metroPageItemsWidth - 80)/4,
                height: 0,
                translateX: (metroPageItemsWidth - 80)/4*3 + 80,
                translateY: 20,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img7",{
                width: (metroPageItemsWidth - 80)/4*2,
                height: 0,
                translateX: (metroPageItemsWidth - 80)/4 + 40,
                translateY: 20,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img8",{
                width: (metroPageItemsWidth - 80)/4 - 15,
                height: 0,
                translateX: (metroPageItemsWidth - 80)/4*2 + 60,
                translateY: (metroPageItemsWidth - 80)/4*3 + 180,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img9",{
                width: (metroPageItemsWidth - 80)/4*2 + 20,
                height: 0,
                translateX: (metroPageItemsWidth - 80)/4*2 + 60,
                translateY: (metroPageItemsWidth - 80)/4 + 70,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img10",{
                width: (metroPageItemsWidth - 80)/4*2,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 80)/4*3 + 180,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img11",{
                width: (metroPageItemsWidth - 80)/4 - 15,
                height: 0,
                translateX: (metroPageItemsWidth - 80)/4*3 + 94,
                translateY: (metroPageItemsWidth - 80)/4*3 + 180,
                transition: 0
            })
        }
        if(size.width <= 1430 && size.width > 1200){
            props.updateItemsStyleValuesMetroPage("img1",{
                width: (metroPageItemsWidth - 40)/3,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img2",{
                width: (metroPageItemsWidth - 40)/3*2,
                height: 0,
                translateX: (metroPageItemsWidth - 40)/3 + 40,
                translateY: -(metroPageItemsWidth - 40)/3 - 30,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img3",{
                width: (metroPageItemsWidth - 40)/3,
                height: 0,
                translateX: (metroPageItemsWidth - 40)/3*2 + 40,
                translateY: 30,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img4",{
                width: (metroPageItemsWidth - 40)/3,
                height: 0,
                translateX: (metroPageItemsWidth - 40)/3*2 + 40,
                translateY: (metroPageItemsWidth - 40)/3 + 100,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img5",{
                width: (metroPageItemsWidth - 40)/3*2,
                height: 0,
                translateX: 0,
                translateY: 30,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img6",{
                width: (metroPageItemsWidth - 40)/3,
                height: 0,
                translateX: (metroPageItemsWidth - 40)/3*2 + 40,
                translateY: (metroPageItemsWidth - 40)/3*2 + 165,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img7",{
                width: (metroPageItemsWidth - 40)/3*2,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/3*2 + 165,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img8",{
                width: (metroPageItemsWidth - 40)/3,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/3*3 + 225,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img9",{
                width: (metroPageItemsWidth - 40)/3*2,
                height: 0,
                translateX: (metroPageItemsWidth - 40)/3 + 40,
                translateY: (metroPageItemsWidth - 40)/3*3 + 225,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img10",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/3*5 + 345,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img11",{
                width: (metroPageItemsWidth - 40)/3,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/3*4 + 285,
                transition: 0
            })
        }
        if(size.width <= 1200 && size.width > 900){
            props.updateItemsStyleValuesMetroPage("img1",{
                width: (metroPageItemsWidth - 40)/2,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img2",{
                width: (metroPageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: 10,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img3",{
                width: (metroPageItemsWidth - 40)/2,
                height: 0,
                translateX: (metroPageItemsWidth - 40)/2 + 40,
                translateY: -(metroPageItemsWidth - 40)/2 - 30,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img4",{
                width: (metroPageItemsWidth - 40)/2,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/2 + 70,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img5",{
                width: (metroPageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/2*3 + 145,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img6",{
                width: (metroPageItemsWidth - 40)/2,
                height: 0,
                translateX: (metroPageItemsWidth - 40)/2 + 40,
                translateY: (metroPageItemsWidth - 40)/2 + 70,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img7",{
                width: (metroPageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/2*2 + 110,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img8",{
                width: (metroPageItemsWidth - 40)/2,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/2*7 + 408,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img9",{
                width: (metroPageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/2*5 + 327,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img10",{
                width: (metroPageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: (metroPageItemsWidth - 40)/2*8 + 450,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img11",{
                width: (metroPageItemsWidth - 40)/2,
                height: 0,
                translateX: (metroPageItemsWidth - 40)/2 + 40,
                translateY: (metroPageItemsWidth - 40)/2*7 + 408,
                transition: 0
            })
        }
        if(size.width <= 900){
            props.updateItemsStyleValuesMetroPage("img1",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img2",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: 20,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img3",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: metroPageItemsWidth/2 + 70,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img4",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: metroPageItemsWidth + metroPageItemsWidth/2 + 120,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img5",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: metroPageItemsWidth*2 + metroPageItemsWidth/2 + 170,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img6",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: metroPageItemsWidth*3 + metroPageItemsWidth/2 + 290,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img7",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: metroPageItemsWidth*4 + metroPageItemsWidth/2 + 340,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img8",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: metroPageItemsWidth*5 + 370,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img9",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: metroPageItemsWidth*6 + 420,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img10",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: metroPageItemsWidth*7 + 470,
                transition: 0
            })
            props.updateItemsStyleValuesMetroPage("img11",{
                width: metroPageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: metroPageItemsWidth*7 + metroPageItemsWidth/2 + 500,
                transition: 0
            })
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("metroPage");
    
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
                        page="metroPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="metroPage"
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
                        page="metroPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="metroPage"
                    />
                </>
            )
        }
    }

    const renderMetroPageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    width: `${props.metroPage.itemsStyleValues.img1.width}`,
                    // height: `${100/3}%`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img2.width}`,
                    // top: "0px",
                    // left: `${props.metroPage.itemsStyleValues.img1.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img2.translateX}px, ${props.metroPage.itemsStyleValues.img2.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img2.transition}s ease-out`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img3.width}`,
                    // top: "0px",
                    // left: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img2.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img3.translateX}px, ${props.metroPage.itemsStyleValues.img3.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img3.transition}s ease-out`,
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img4.width}`,
                    // top: "0px",
                    // left: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img2.width + 40 + props.metroPage.itemsStyleValues.img3.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img4.translateX}px, ${props.metroPage.itemsStyleValues.img4.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img4.transition}s ease-out`,
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img5.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40}`,
                    // left: "0px",
                    transform: `translate(${props.metroPage.itemsStyleValues.img5.translateX}px, ${props.metroPage.itemsStyleValues.img5.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img5.transition}s ease-out`,
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img6.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img6.translateX}px, ${props.metroPage.itemsStyleValues.img6.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img6.transition}s ease-out`,
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img7.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40 + props.metroPage.itemsStyleValues.img6.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img7.translateX}px, ${props.metroPage.itemsStyleValues.img7.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img7.transition}s ease-out`,
                };
            case 8:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img8.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img6.width + 40}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img8.translateX}px, ${props.metroPage.itemsStyleValues.img8.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img8.transition}s ease-out`,
                };
            case 9:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img9.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img6.width + 40}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40 + props.metroPage.itemsStyleValues.img6.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img9.translateX}px, ${props.metroPage.itemsStyleValues.img9.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img9.transition}s ease-out`,
                };
            case 10:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img10.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img5.width + 80}`,
                    // left: "0px",
                    transform: `translate(${props.metroPage.itemsStyleValues.img10.translateX}px, ${props.metroPage.itemsStyleValues.img10.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img10.transition}s ease-out`,
                };
            case 11:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img11.width}`,
                    // top: `${3 * props.metroPage.itemsStyleValues.img1.width + 120}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img11.translateX}px, ${props.metroPage.itemsStyleValues.img11.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img11.transition}s ease-out`,
                };
        }
    }

    const getImagesWidthAndHeight = (obj) => {
        props.updateItemsStyleValuesMetroPage({
            img1: {
                ...props.metroPage.itemsStyleValues.img1,
                height: obj.img1.height
            }, 
            img2: {
                ...props.metroPage.itemsStyleValues.img2,
                height: obj.img2.height
            }, 
            img3: {
                ...props.metroPage.itemsStyleValues.img3,
                height: obj.img3.height
            },
            img4: {
                ...props.metroPage.itemsStyleValues.img4,
                height: obj.img4.height
            },
            img5: {
                ...props.metroPage.itemsStyleValues.img5,
                height: obj.img5.height
            },
            img6: {
                ...props.metroPage.itemsStyleValues.img6,
                height: obj.img6.height
            },
            img7: {
                ...props.metroPage.itemsStyleValues.img7,
                height: obj.img7.height,
            },
            img8: {
                ...props.metroPage.itemsStyleValues.img8,
                height: obj.img8.height
            },
            img9: {
                ...props.metroPage.itemsStyleValues.img9,
                height: obj.img9.height
            },
            img10: {
                ...props.metroPage.itemsStyleValues.img10,
                height: obj.img10.height
            },
            img11: {
                ...props.metroPage.itemsStyleValues.img11,
                height: obj.img11.height,
            }
        })
    }

    const renderMetroPageItemsStyleHeight = () => {
        if(size.width > 1500){
            return 4*props.metroPage.itemsStyleValues.img1.width + 4*40;
        }
        if(size.width <= 1500 && size.width > 1430){
            return 5*props.metroPage.itemsStyleValues.img1.width + 5*40 - 5;
        }
        if(size.width <= 1430 && size.width > 1200){
            return 8*props.metroPage.itemsStyleValues.img1.width + 4*40 + 20;
        }
        if(size.width <= 1200 && size.width > 900){
            return 10*props.metroPage.itemsStyleValues.img1.width + 12*40 - 4;
        }
        if(size.width <= 900){
            return 9*props.metroPage.itemsStyleValues.img1.width + props.metroPage.itemsStyleValues.img1.width/2 + 13*40 + 10;
        }
    }
    
    const renderMetroPageData = () => {
        return(
            <div 
                id="metroPageItems"
                className="metro-page-items"
                style={{
                    position: "relative",
                    width: "100%",
                    height: `${renderMetroPageItemsStyleHeight()}px`
                }}
            >{props.metroPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        // className={`metro-wide-page-item-id${el.id}`}
                        // className={renderClassName(el.id)}
                        style={renderMetroPageItemStyle(el.id)}
                    >
                        <MetroItem
                            page="metroPage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            getImagesWidthAndHeight={(obj) => getImagesWidthAndHeight(obj)}
                            setIsHoveringCategory={props.setMetroPageIsHoveringCategory}
                            clearArchiveData={props.clearArchiveData}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderMetroContent = () => {
        if(props.metroPage.loading && !props.metroPage.error){
            return(
                <div 
                    className="metro-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.metroPage.loading && !props.metroPage.error){
            return(
                <div className="metro-page-wrapper">
                    {renderMetroPageData()}
                </div>
            )
        }
        if(!props.metroPage.loading && props.metroPage.error){
            return(
                <div 
                    className="metro-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.metroPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="metro-page2" id="metroPage">
            {renderToolbars()}
            <div className="metro-page-header">
                <H65 className="h65-nero-poppins">Metro</H65>
            </div> 
            {renderMetroContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            metroPage: Selectors.getMetroPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchMetroPage: bindActionCreators(Services.fetchMetroPage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            setMetroPageIsHoveringCategory: bindActionCreators(Actions.setMetroPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            updateItemsStyleValuesMetroPage: bindActionCreators(Actions.updateItemsStyleValuesMetroPage, dispatch),
        };
    }
)(MetroPage);
 