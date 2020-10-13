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

import './stoneWallWidePage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import StoneWallWideItem from '../../../SmallParts/StoneWallWideItem/stoneWallWideItem';
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
    H22,
    H65,
    H70,
    EH20,
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
* StoneWallWidePage component definition and export
*/

export const StoneWallWidePage = (props) => {

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
        if(props.stoneWallWidePage.items.length === 0){
            props.fetchStoneWallWidePage();
        }
        let timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 2);

        const smooth = e => {
            // if(['stone-wall-wide-item-id1',
            //     'stone-wall-wide-item-id2',
            //     'stone-wall-wide-item-id3',
            //     'stone-wall-wide-item-id4',
            //     'stone-wall-wide-item-id5',
            //     'stone-wall-wide-item-id6',
            //     'stone-wall-wide-item-id7'
            //     ].includes(e.target.className)){
                    transitionRef.current()
            // }
        }

        const resize = () => {
            resizeRef.current();
        }

        setImagesState();

        window.addEventListener('resize', resize);
        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('transitionend', smooth);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', resize);
            window.removeEventListener('wheel', handleOnWheel);
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
        if(props.stoneWallWidePage.itemsStyleValues.img1.transition === 0 ||
            props.stoneWallWidePage.itemsStyleValues.img2.transition === 0 ||
            props.stoneWallWidePage.itemsStyleValues.img3.transition === 0 ||
            props.stoneWallWidePage.itemsStyleValues.img4.transition === 0 ||
            props.stoneWallWidePage.itemsStyleValues.img5.transition === 0 ||
            props.stoneWallWidePage.itemsStyleValues.img6.transition === 0 ||
            props.stoneWallWidePage.itemsStyleValues.img7.transition === 0) {           
            props.updateItemsStyleValuesStoneWallWidePage("img1",{
                ...props.stoneWallWidePage.itemsStyleValues.img1,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallWidePage("img2",{
                ...props.stoneWallWidePage.itemsStyleValues.img2,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallWidePage("img3",{
                ...props.stoneWallWidePage.itemsStyleValues.img3,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallWidePage("img4",{
                ...props.stoneWallWidePage.itemsStyleValues.img4,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallWidePage("img5",{
                ...props.stoneWallWidePage.itemsStyleValues.img5,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallWidePage("img6",{
                ...props.stoneWallWidePage.itemsStyleValues.img6,
                transition: 0.45
            });
            props.updateItemsStyleValuesStoneWallWidePage("img7",{
                ...props.stoneWallWidePage.itemsStyleValues.img7,
                transition: 0.45
            });
        }
    }, [props.stoneWallWidePage.itemsStyleValues.img1.transition,props.stoneWallWidePage.itemsStyleValues.img2.transition,
        props.stoneWallWidePage.itemsStyleValues.img3.transition,props.stoneWallWidePage.itemsStyleValues.img4.transition,
        props.stoneWallWidePage.itemsStyleValues.img5.transition,props.stoneWallWidePage.itemsStyleValues.img6.transition,
        props.stoneWallWidePage.itemsStyleValues.img7.transition])

    const smoothTransition = () => {
        props.updateItemsStyleValuesStoneWallWidePage("img1",{
            ...props.stoneWallWidePage.itemsStyleValues.img1,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallWidePage("img2",{
            ...props.stoneWallWidePage.itemsStyleValues.img2,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallWidePage("img3",{
            ...props.stoneWallWidePage.itemsStyleValues.img3,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallWidePage("img4",{
            ...props.stoneWallWidePage.itemsStyleValues.img4,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallWidePage("img5",{
            ...props.stoneWallWidePage.itemsStyleValues.img5,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallWidePage("img6",{
            ...props.stoneWallWidePage.itemsStyleValues.img6,
            transition: 0
        });
        props.updateItemsStyleValuesStoneWallWidePage("img7",{
            ...props.stoneWallWidePage.itemsStyleValues.img7,
            transition: 0
        });
    }

    const handleResize = (e) => {
        setImagesState();
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("stoneWallWidePage");

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

    const setImagesState = () => {
        let stoneWallWideItemsWidth = document.getElementById('stoneWallWidePageItems')?.clientWidth;
        console.log(stoneWallWideItemsWidth)
        if(size.width > 1020){
            props.updateItemsStyleValuesStoneWallWidePage("img1",{
                width: (stoneWallWideItemsWidth - 80)/4,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img2",{
                width: (stoneWallWideItemsWidth - 80)/4*2,
                height: 0,
                translateX: (stoneWallWideItemsWidth - 80)/4 + 40,
                translateY: -(stoneWallWideItemsWidth - 80)/4 - 30,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img3",{
                width: (stoneWallWideItemsWidth - 80)/4,
                height: 0,
                translateX: (stoneWallWideItemsWidth - 80)/4*3 + 80,
                translateY: -(stoneWallWideItemsWidth - 80)/4 - 30,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img4",{
                width: (stoneWallWideItemsWidth - 80)/4,
                height: 0,
                translateX: 0,
                translateY: 10,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img5",{
                width: (stoneWallWideItemsWidth - 80)/4,
                height: 0,
                translateX: (stoneWallWideItemsWidth - 80)/4*3 + 80,
                translateY: 10,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img6",{
                width: (stoneWallWideItemsWidth - 80)/4,
                height: 0,
                translateX: (stoneWallWideItemsWidth - 80)/4 + 40,
                translateY: (stoneWallWideItemsWidth - 80)/4 + 60,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img7",{
                width: (stoneWallWideItemsWidth - 80)/4*2,
                height: 0,
                translateX: (stoneWallWideItemsWidth - 80)/4*2 + 80,
                translateY: (stoneWallWideItemsWidth - 80)/4 + 60,
                transition: 0
            });
        }
        if(size.width <= 1020 && size.width > 700){
            props.updateItemsStyleValuesStoneWallWidePage("img1",{
                width: (stoneWallWideItemsWidth - 40)/2,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img2",{
                width: (stoneWallWideItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: 10,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img3",{
                width: (stoneWallWideItemsWidth - 40)/2,
                height: 0,
                translateX: (stoneWallWideItemsWidth - 40)/2 + 40,
                translateY: -(stoneWallWideItemsWidth - 40)/2 - 30,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img4",{
                width: (stoneWallWideItemsWidth - 40)/2,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWideItemsWidth - 40)/2*2 + 160,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img5",{
                width: (stoneWallWideItemsWidth - 40)/2,
                height: 0,
                translateX: (stoneWallWideItemsWidth - 40)/2 + 40,
                translateY: (stoneWallWideItemsWidth - 40)/2*2 + 160,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img6",{
                width: (stoneWallWideItemsWidth - 40)/2,
                height: 0,
                translateX: (stoneWallWideItemsWidth - 40)/2 + 40,
                translateY: (stoneWallWideItemsWidth - 40)/2*3 + 225,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img7",{
                width: (stoneWallWideItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWideItemsWidth - 40)/2*4 + 265,
                transition: 0
            });
        }
        if(size.width <= 700){
            props.updateItemsStyleValuesStoneWallWidePage("img1",{
                width: stoneWallWideItemsWidth,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img2",{
                width: stoneWallWideItemsWidth,
                height: 0,
                translateX: 0,
                translateY: 10,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img3",{
                width: stoneWallWideItemsWidth,
                height: 0,
                translateX: 0,
                translateY: stoneWallWideItemsWidth + 90,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img4",{
                width: stoneWallWideItemsWidth,
                height: 0,
                translateX: 0,
                translateY: stoneWallWideItemsWidth*2 + 130,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img5",{
                width: stoneWallWideItemsWidth,
                height: 0,
                translateX: 0,
                translateY: stoneWallWideItemsWidth*4 + 250,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img6",{
                width: stoneWallWideItemsWidth,
                height: 0,
                translateX: 0,
                translateY: stoneWallWideItemsWidth*5 + 290,
                transition: 0
            });
            props.updateItemsStyleValuesStoneWallWidePage("img7",{
                width: stoneWallWideItemsWidth,
                height: 0,
                translateX: 0,
                translateY: stoneWallWideItemsWidth*6 + 330,
                transition: 0
            });
        }
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="stoneWallWidePage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="stoneWallWidePage"
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
                        page="stoneWallWidePage"
                    />
                    <Toolbar 
                        style="regularScreen"
                        toolbarMainColor="regular"
                        page="stoneWallWidePage"
                    />
                </>
            )
        }
    }

    const renderStoneWallWidePageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    width: `${props.stoneWallWidePage.itemsStyleValues.img1.width}`,
                    // height: `${100/3}%`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img2.width}`,
                    // top: "0px",
                    // left: `${props.stoneWallWidePage.itemsStyleValues.img1.width + 40}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img2.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img2.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img2.transition}s ease-out`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img3.width}`,
                    // top: "0px",
                    // left: `${props.stoneWallWidePage.itemsStyleValues.img1.width + 40 + props.stoneWallWidePage.itemsStyleValues.img2.width + 40}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img3.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img3.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img3.transition}s ease-out`,
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img4.width}`,
                    // top: "0px",
                    // left: `${props.stoneWallWidePage.itemsStyleValues.img1.width + 40 + props.stoneWallWidePage.itemsStyleValues.img2.width + 40 + props.stoneWallWidePage.itemsStyleValues.img3.width + 40}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img4.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img4.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img4.transition}s ease-out`,
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img5.width}`,
                    // top: `${props.stoneWallWidePage.itemsStyleValues.img1.width + 40}`,
                    // left: "0px",
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img5.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img5.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img5.transition}s ease-out`,
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img6.width}`,
                    // top: `${props.stoneWallWidePage.itemsStyleValues.img1.width + 40}`,
                    // left: `${props.stoneWallWidePage.itemsStyleValues.img5.width + 40}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img6.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img6.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img6.transition}s ease-out`,
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img7.width}`,
                    // top: `${props.stoneWallWidePage.itemsStyleValues.img1.width + 40}`,
                    // left: `${props.stoneWallWidePage.itemsStyleValues.img5.width + 40 + props.stoneWallWidePage.itemsStyleValues.img6.width + 40}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img7.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img7.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img7.transition}s ease-out`,
                };
        }
    }

    const renderStoneWallWidePageItemsStyleHeight = () => {
        if(size.width > 1020){
            return 3*props.stoneWallWidePage.itemsStyleValues.img1.width + 2*40 + 15;
        }

        if(size.width <= 1020 && size.width > 700){
            return 6*props.stoneWallWidePage.itemsStyleValues.img1.width + 8*40 - 5;
        }
        if(size.width <= 700){
            return 7*props.stoneWallWidePage.itemsStyleValues.img1.width + props.stoneWallWidePage.itemsStyleValues.img1.width/2 + 9*40;
        }
    }

    const renderStoneWallWidePageData = () => {
        return(
            <div 
                id="stoneWallWidePageItems"
                className="stone-wall-wide-page-items"
                style={{
                    position: "relative",
                    width: "100%",
                    height: `${renderStoneWallWidePageItemsStyleHeight()}px`
                }}
            >{props.stoneWallWidePage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        // className={`stone-wall-wide-page-item-id${el.id}`}
                        // className={renderClassName(el.id)}
                        style={renderStoneWallWidePageItemStyle(el.id)}
                    >
                        <StoneWallWideItem
                            page="stoneWallWidePage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            // getImagesWidthAndHeight={(obj) => getImagesWidthAndHeight(obj)}
                            setIsHoveringCategory={props.setStoneWallWidePageIsHoveringCategory}
                            clearArchiveData={props.clearArchiveData}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderStoneWallWideContent = () => {
        if(props.stoneWallWidePage.loading && !props.stoneWallWidePage.error){
            return(
                <div 
                    className="stone-wall-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.stoneWallWidePage.loading && !props.stoneWallWidePage.error){
            return(
                <div className="stone-wall-wide-page-wrapper">
                    {renderStoneWallWidePageData()}
                </div>
            )
        }
        if(!props.stoneWallWidePage.loading && props.stoneWallWidePage.error){
            return(
                <div 
                    className="stone-wall-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.stoneWallWidePage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="stone-wall-wide-page" id="stoneWallWidePage">
            {renderToolbars()}
            <div className="stone-wall-wide-page-header">
                <H65 className="h65-white-poppins-centered">Tiam convallis,</H65>
                <H65 className="h65-white-poppins-centered">Felis quis dapibus libero.</H65>
                <EH30/>
                <H22 className="h22-nobel-lustria-centered">Lorem ipsum dolor sit amet, quot nusquam mei cu diceret .</H22>
            </div> 
            {renderStoneWallWideContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            stoneWallWidePage: Selectors.getStoneWallWidePageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
          
        };
    },
    (dispatch) => {
        return {
            fetchStoneWallWidePage: bindActionCreators(Services.fetchStoneWallWidePage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            setStoneWallWidePageIsHoveringCategory: bindActionCreators(Actions.setStoneWallWidePageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            updateItemsStyleValuesStoneWallWidePage: bindActionCreators(Actions.updateItemsStyleValuesStoneWallWidePage, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(StoneWallWidePage);
 