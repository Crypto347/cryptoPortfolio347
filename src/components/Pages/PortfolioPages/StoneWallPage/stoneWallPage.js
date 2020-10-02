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

import './stoneWallPage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import StoneWallItem from '../../../SmallParts/StoneWallItem/stoneWallItem';
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
* StoneWallPage component definition and export
*/

export const StoneWallPage = (props) => {

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
        if(props.stoneWallPage.items.length === 0){
            props.fetchStoneWallPage();
        }
        let timeout = setTimeout(() => {
            if(!props.stoneWallPage.loading && !props.stoneWallPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                console.log("PPP",itemOffsetTop)
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        const smooth = e => {
            if(['stone-wall-item-id1',
                'stone-wall-item-id2',
                'stone-wall-item-id3',
                'stone-wall-item-id4',
                'stone-wall-item-id5',
                'stone-wall-item-id6',
                'stone-wall-item-id7',
                'stone-wall-item-id8',
                'stone-wall-item-id9',
                'stone-wall-item-id10',
                'stone-wall-item-id11'
                ].includes(e.target.className)){
                    console.log("fagr")
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
        if(props.stoneWallPage.itemsStyleValues.img1.transition === 0 ||
            props.stoneWallPage.itemsStyleValues.img2.transition === 0 ||
            props.stoneWallPage.itemsStyleValues.img3.transition === 0 ||
            props.stoneWallPage.itemsStyleValues.img4.transition === 0 ||
            props.stoneWallPage.itemsStyleValues.img5.transition === 0) {           
            props.updateItemsStyleValuesStoneWallPage("img1",{
                ...props.stoneWallPage.itemsStyleValues.img1,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallPage("img2",{
                ...props.stoneWallPage.itemsStyleValues.img2,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallPage("img3",{
                ...props.stoneWallPage.itemsStyleValues.img3,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallPage("img4",{
                ...props.stoneWallPage.itemsStyleValues.img4,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallPage("img5",{
                ...props.stoneWallPage.itemsStyleValues.img5,
                transition: 0.45
            });
        }
    }, [props.stoneWallPage.itemsStyleValues.img1.transition,props.stoneWallPage.itemsStyleValues.img2.transition,
        props.stoneWallPage.itemsStyleValues.img3.transition,props.stoneWallPage.itemsStyleValues.img4.transition,
        props.stoneWallPage.itemsStyleValues.img5.transition])

    const smoothTransition = () => {
        props.updateItemsStyleValuesStoneWallPage("img1",{
            ...props.stoneWallPage.itemsStyleValues.img1,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallPage("img2",{
            ...props.stoneWallPage.itemsStyleValues.img2,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallPage("img3",{
            ...props.stoneWallPage.itemsStyleValues.img3,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallPage("img4",{
            ...props.stoneWallPage.itemsStyleValues.img4,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallPage("img5",{
            ...props.stoneWallPage.itemsStyleValues.img5,
            transition: 0
        });
    }
    

    const handleResize = (e) => {
        setImagesState("onResize");
    }

    const setImagesState = (opt) => {
        if(size.width > 1200){
            props.updateItemsStyleValuesStoneWallPage("img1",{
                width: 346.66,
                height: 346.66,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img2",{
                width: 346.66,
                height: 723.33,
                translateX: 0,
                translateY: 30,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img3",{
                width: 723.33,
                height: 723.33,
                translateX: 376.66,
                translateY: -346.66,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img4",{
                width: 346.663,
                height: 346.66,
                translateX: 376.66,
                translateY: 406.66,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img5",{
                width: 346.66,
                height: 346.66,
                translateX: 752.66,
                translateY: 406.66,
                transition: 0
            });
        }
        if(size.width <= 1200 && size.width > 1040){
            props.updateItemsStyleValuesStoneWallPage("img1",{
                width: 296.66,
                height: 296.66,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img2",{
                width: 296.66,
                height: 623.33,
                translateX: 0,
                translateY: 30,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img3",{
                width: 623.33,
                height: 623.33,
                translateX: 326.66,
                translateY: -296.66,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img4",{
                width: 296.66,
                height: 296.66,
                translateX: 326.66,
                translateY: 356.66,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img5",{
                width: 296.66,
                height: 296.66,
                translateX: 653.32,
                translateY: 356.66,
                transition: 0
            });
        }
        if(size.width <= 1040 && size.width > 840){
            props.updateItemsStyleValuesStoneWallPage("img1",{
                width: 368,
                height: 368,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img2",{
                width: 368,
                height: 768,
                translateX: 0,
                translateY: 828,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img3",{
                width: 768,
                height: 768,
                translateX: 0,
                translateY: 30,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img4",{
                width: 368,
                height: 368,
                translateX: 398,
                translateY: -368,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img5",{
                width: 368,
                height: 368,
                translateX: 398,
                translateY: 828,
                transition: 0
            });
        } 
        if(size.width <= 840 && size.width > 680){
            props.updateItemsStyleValuesStoneWallPage("img1",{
                width: 285,
                height: 285,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img2",{
                width: 285,
                height: 600,
                translateX: 0,
                translateY: 660,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img3",{
                width: 600,
                height: 600,
                translateX: 0,
                translateY: 30,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img4",{
                width: 285,
                height: 285,
                translateX: 315,
                translateY: -285,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img5",{
                width: 285,
                height: 285,
                translateX: 315,
                translateY: 660,
                transition: 0
            });
        }
        if(size.width <= 680 && size.width > 500){
            props.updateItemsStyleValuesStoneWallPage("img1",{
                width: 420,
                height: 420,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img2",{
                width: 420,
                height: 868.55,
                translateX: 0,
                translateY: 480,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img3",{
                width: 420,
                height: 420,
                translateX: 0,
                translateY: 30,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img4",{
                width: 420,
                height: 420,
                translateX: 0,
                translateY: 1378.55,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img5",{
                width: 420,
                height: 420,
                translateX: 0,
                translateY: 1828.55,
                transition: 0
            });
        }
        if(size.width <= 500){
            props.updateItemsStyleValuesStoneWallPage("img1",{
                width: 300,
                height: 300,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img2",{
                width: 300,
                height: 620.39,
                translateX: 0,
                translateY: 360,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img3",{
                width: 300,
                height: 300,
                translateX: 0,
                translateY: 30,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img4",{
                width: 300,
                height: 300,
                translateX: 0,
                translateY: 1010.39,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallPage("img5",{
                width: 300,
                height: 300,
                translateX: 0,
                translateY: 1340.39,
                transition: 0
            });
        }
        // if(size.width <= 900){
        //     props.updateItemsStyleValuesStoneWallPage("img1",{
        //         width: stoneWallPageItemsWidth,
        //         height: 0,
        //         translateX: 0,
        //         translateY: 0,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesStoneWallPage("img2",{
        //         width: stoneWallPageItemsWidth,
        //         height: 0,
        //         translateX: 0,
        //         translateY: 20,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesStoneWallPage("img3",{
        //         width: stoneWallPageItemsWidth,
        //         height: 0,
        //         translateX: 0,
        //         translateY: stoneWallPageItemsWidth/2 + 70,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesStoneWallPage("img4",{
        //         width: stoneWallPageItemsWidth,
        //         height: 0,
        //         translateX: 0,
        //         translateY: stoneWallPageItemsWidth + stoneWallPageItemsWidth/2 + 120,
        //         transition: 0
        //     });
        //     props.updateItemsStyleValuesStoneWallPage("img5",{
        //         width: stoneWallPageItemsWidth,
        //         height: 0,
        //         translateX: 0,
        //         translateY: stoneWallPageItemsWidth*2 + stoneWallPageItemsWidth/2 + 170,
        //         transition: 0
        //     });
        // }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("stoneWallPage");
    
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
                        page="stoneWallPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="stoneWallPage"
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
                        page="stoneWallPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="stoneWallPage"
                    />
                </>
            )
        }
    }

    const renderStoneWallPageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    width: `${props.stoneWallPage.itemsStyleValues.img1.width}px`,
                    height: `${props.stoneWallPage.itemsStyleValues.img1.height}px`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.stoneWallPage.itemsStyleValues.img2.width}`,
                    height: `${props.stoneWallPage.itemsStyleValues.img2.height}px`,
                    // top: "0px",
                    // left: `${props.stoneWallPage.itemsStyleValues.img1.width + 40}`,
                    transform: `translate(${props.stoneWallPage.itemsStyleValues.img2.translateX}px, ${props.stoneWallPage.itemsStyleValues.img2.translateY}px)`,
                    transition: `transform ${props.stoneWallPage.itemsStyleValues.img2.transition}s ease-out`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.stoneWallPage.itemsStyleValues.img3.width}`,
                    height: `${props.stoneWallPage.itemsStyleValues.img3.height}px`,
                    // top: "0px",
                    // left: `${props.stoneWallPage.itemsStyleValues.img1.width + 40 + props.stoneWallPage.itemsStyleValues.img2.width + 40}`,
                    transform: `translate(${props.stoneWallPage.itemsStyleValues.img3.translateX}px, ${props.stoneWallPage.itemsStyleValues.img3.translateY}px)`,
                    transition: `transform ${props.stoneWallPage.itemsStyleValues.img3.transition}s ease-out`,
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.stoneWallPage.itemsStyleValues.img4.width}`,
                    height: `${props.stoneWallPage.itemsStyleValues.img4.height}px`,
                    // top: "0px",
                    // left: `${props.stoneWallPage.itemsStyleValues.img1.width + 40 + props.stoneWallPage.itemsStyleValues.img2.width + 40 + props.stoneWallPage.itemsStyleValues.img3.width + 40}`,
                    transform: `translate(${props.stoneWallPage.itemsStyleValues.img4.translateX}px, ${props.stoneWallPage.itemsStyleValues.img4.translateY}px)`,
                    transition: `transform ${props.stoneWallPage.itemsStyleValues.img4.transition}s ease-out`,
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.stoneWallPage.itemsStyleValues.img5.width}`,
                    height: `${props.stoneWallPage.itemsStyleValues.img5.height}px`,
                    // top: `${props.stoneWallPage.itemsStyleValues.img1.width + 40}`,
                    // left: "0px",
                    transform: `translate(${props.stoneWallPage.itemsStyleValues.img5.translateX}px, ${props.stoneWallPage.itemsStyleValues.img5.translateY}px)`,
                    transition: `transform ${props.stoneWallPage.itemsStyleValues.img5.transition}s ease-out`,
                };
        }
    }

    const getImagesWidthAndHeight = (obj) => {
        props.updateItemsStyleValuesStoneWallPage({
            img1: {
                ...props.stoneWallPage.itemsStyleValues.img1,
                height: obj.img1.height
            }, 
            img2: {
                ...props.stoneWallPage.itemsStyleValues.img2,
                height: obj.img2.height
            }, 
            img3: {
                ...props.stoneWallPage.itemsStyleValues.img3,
                height: obj.img3.height
            },
            img4: {
                ...props.stoneWallPage.itemsStyleValues.img4,
                height: obj.img4.height
            },
            img5: {
                ...props.stoneWallPage.itemsStyleValues.img5,
                height: obj.img5.height
            }
        })
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
                id="stoneWallPageItems"
                // className="stone-wall-page-items"
                style={{
                    position: "relative",
                    width: `${renderStoneWallItemsStyleWidth()}px`,
                    height: `${renderStoneWallItemsStyleHeight()}px`
                }}
            >{props.stoneWallPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        // className={`stone-wall-page-item-id${el.id}`}
                        // className={renderClassName(el.id)}
                        style={renderStoneWallPageItemStyle(el.id)}
                    >
                        <StoneWallItem
                            page="stoneWallPage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            getImagesWidthAndHeight={(obj) => getImagesWidthAndHeight(obj)}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderStoneWallContent = () => {
        if(props.stoneWallPage.loading && !props.stoneWallPage.error){
            return(
                <div 
                    className="stone-wall-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.stoneWallPage.loading && !props.stoneWallPage.error){
            return(
                <div className="stone-wall-page-wrapper">
                    <div className="stone-wall-page-header">
                        <H65 className="h65-nero-poppins">Stone Wall</H65>
                    </div> 
                    {renderStoneWallPageData()}
                </div>
            )
        }
        if(!props.stoneWallPage.loading && props.stoneWallPage.error){
            return(
                <div 
                    className="stone-wall-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.stoneWallPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="stone-wall-page" id="stoneWallPage">
            {renderToolbars()}
            {renderStoneWallContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            stoneWallPage: Selectors.getStoneWallPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchStoneWallPage: bindActionCreators(Services.fetchStoneWallPage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            setStandardPageIsHoveringCategory: bindActionCreators(Actions.setStandardPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            updateItemsStyleValuesStoneWallPage: bindActionCreators(Actions.updateItemsStyleValuesStoneWallPage, dispatch),
        };
    }
)(StoneWallPage);
 