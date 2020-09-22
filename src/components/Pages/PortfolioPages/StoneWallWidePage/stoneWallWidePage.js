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

import injectStyle from '../../../../Hooks/injectStyle';

/**
* StoneWallWidePage component definition and export
*/

export const StoneWallWidePage = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [prevScreenWidthVal, setPrevScreenWidthVal] = useState(0);
    const [classNameImg1, setClassNameImg1] = useState('stone-wall-wide-page-item-id1');
    const [classNameImg2, setClassNameImg2] = useState('stone-wall-wide-page-item-id2');
    const [classNameImg3, setClassNameImg3] = useState('stone-wall-wide-page-item-id3');
    const [classNameImg4, setClassNameImg4] = useState('stone-wall-wide-page-item-id4');
    const [classNameImg5, setClassNameImg5] = useState('stone-wall-wide-page-item-id5');
    const [classNameImg6, setClassNameImg6] = useState('stone-wall-wide-page-item-id6');
    const [classNameImg7, setClassNameImg7] = useState('stone-wall-wide-page-item-id7');
    // const [imgSize1, setImgSize1] = useState({
    //     width: (size.width - 80)/3,
    //     height: (size.width - 80)/3,
    // })
    const [imagesSize, setImagesSize] = useState({
        img1: {
            width: 0,
            height:0,
        }, 
        img2: {
            width: 0,
            height: 0,
        }, 
        img3: {
            width: 0,
            height: 0,
        },
        img4: {
            width: 0,
            height: 0,
        },
        img5: {
            width: 0,
            height: 0,
        },
        img6: {
            width: 0,
            height: 0,
        },
        img7: {
            width: 0,
            height: 0,
        }
    });
    // const stoneWallWidePageItemId2NarrowScreen = keyframes`
    //         from{
    //             top: 653.33px;
    //             left: 326.66px;
    //         }
    //         to{
    //             top: 1196px;
    //             left: 398px;
    //         }
    // `;

    const [style, setStyle] = useState({
        WebkitAnimation: `stoneWallWidePageItemId2NarrowScreen .5s linear`
    })
    const keyframesStyle = `
        @keyframes stoneWallWidePageItemId2NarrowScreen {
            from{
                top: 0px,
                left: ${imagesSize.img1.width + 40}
            }
            to{
                top:  30,
                left: 10px,
            }
        }
    `;
    injectStyle(keyframesStyle);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.stoneWallWidePage.items.length === 0){
            props.fetchStoneWallWidePage();
        }
        let timeout = setTimeout(() => {
            if(!props.stoneWallWidePage.loading && !props.stoneWallWidePage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        const resize = () => {
            resizeRef.current();
        }

        let stoneWallWidePageItemsWidth = document.getElementById('stoneWallWidePageItems').clientWidth;
        
        setImagesSize({
            img1: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: 0,
            }, 
            img2: {
                width: (stoneWallWidePageItemsWidth - 80)/4*2,
                height: 0,
            }, 
            img3: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: 0,
            },
            img4: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: 0,
            },
            img5: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: 0,
            },
            img6: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: 0,
            },
            img7: {
                width: (stoneWallWidePageItemsWidth - 80)/4*2,
                height: 0,
            }
        })
 
        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('resize', resize);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('resize', resize);
            props.setMenuDotsState("init", "");
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = (e) => {
        let stoneWallWidePageItemsWidth = document.getElementById('stoneWallWidePageItems').clientWidth;
        
        setImagesSize({
            img1: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: (stoneWallWidePageItemsWidth)/4,
            }, 
            img2: {
                width: (stoneWallWidePageItemsWidth - 80)/4*2,
                height: (stoneWallWidePageItemsWidth - 80)/4*2,
            }, 
            img3: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: (stoneWallWidePageItemsWidth - 80)/4,
            },
            img4: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: (stoneWallWidePageItemsWidth)/3,
            },
            img5: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: (stoneWallWidePageItemsWidth - 80)/4,
            },
            img6: {
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: (stoneWallWidePageItemsWidth - 80)/4,
            },
            img7: {
                width: (stoneWallWidePageItemsWidth - 80)/4*2,
                height: (stoneWallWidePageItemsWidth)/3,
            }
        })
        setPrevScreenWidthVal(size.width);
        if(size.width > 1040){
            return ;
        }
        if(size.width < 1040 && size.width > 1024 && prevScreenWidthVal > size.width){
            console.log("kjlhl")
            setClassNameImg1("stone-wall-page-item-id1");
            setClassNameImg2("stone-wall-page-item-id2");
            setClassNameImg3("stone-wall-page-item-id3");
            setClassNameImg4("stone-wall-page-item-id4");
            setClassNameImg5("stone-wall-page-item-id5");
            setClassNameImg6("stone-wall-page-item-id6");
            setClassNameImg7("stone-wall-page-item-id7");
        
        }
        if(size.width < 1025 && size.width > 840){
            // setClassNameImg2("stone-wall-page-item-id2-animation-narrow-screen");
            // setClassNameImg3("stone-wall-page-item-id3-animation-narrow-screen");
            // setClassNameImg4("stone-wall-page-item-id4-animation-narrow-screen");
            // setClassNameImg5("stone-wall-page-item-id5-animation-narrow-screen");
        }
        if(size.width < 840 && size.width > 670 && prevScreenWidthVal > size.width){
            // setClassNameImg2("stone-wall-page-item-id2");
            // setClassNameImg3("stone-wall-page-item-id3");
            // setClassNameImg4("stone-wall-page-item-id4");
            // setClassNameImg5("stone-wall-page-item-id5");
        }
        if(size.width < 840 && size.width > 670 && prevScreenWidthVal < size.width){
            // setClassNameImg2("stone-wall-page-item-id2-animation-expand2-screen");
            // setClassNameImg3("stone-wall-page-item-id3-animation-expand2-screen");
            // setClassNameImg4("stone-wall-page-item-id4-animation-expand2-screen");
            // setClassNameImg5("stone-wall-page-item-id5-animation-expand2-screen");
        }
        if(size.width < 670 && size.width > 480 && prevScreenWidthVal > size.width){
            // setClassNameImg2("stone-wall-page-item-id2-animation-narrow2-screen");
            // setClassNameImg3("stone-wall-page-item-id3-animation-narrow2-screen");
            // setClassNameImg4("stone-wall-page-item-id4-animation-narrow2-screen");
            // setClassNameImg5("stone-wall-page-item-id5-animation-narrow2-screen");
        }
        if(size.width < 480){
            // setClassNameImg2("stone-wall-page-item-id2");
            // setClassNameImg3("stone-wall-page-item-id3");
            // setClassNameImg4("stone-wall-page-item-id4");
            // setClassNameImg5("stone-wall-page-item-id5");
        }
        if(size.width < 1025 && size.width > 770 && prevScreenWidthVal < size.width){
            // console.log("long1")

            // setClassNameImg3("stone-wall-page-item-id3-animation-expand-screen");
        }

        // if(size.width < 770 && size.width > 680 && size.width < prevScreenWidthVal){
        //     console.log("short2");
        // }
        // if(size.width < 770 && size.width > 680 && size.width > prevScreenWidthVal){
        //     console.log("long2");
        // }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("stoneWallWidePage");
    
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

    const renderStyle = (id, ) => {
        if(size.width < 1040) return;
        
        switch(id){
            case 1:
                return {
                    width: `${imagesSize.img1.width}`,
                    // height: `${100/3}%`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${imagesSize.img2.width}`,
                    top: "0px",
                    left: `${imagesSize.img1.width + 40}`
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${imagesSize.img3.width}`,
                    top: "0px",
                    left: `${imagesSize.img1.width + 40 + imagesSize.img2.width + 40}`
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${imagesSize.img4.width}`,
                    top: `${imagesSize.img1.height + 40}`,
                    left: "0px"
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${imagesSize.img5.width}`,
                    top: `${imagesSize.img1.height + 40}`,
                    left: `${imagesSize.img4.width + 40 + imagesSize.img2.width + 40}`
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${imagesSize.img6.width}`,
                    top: `${imagesSize.img2.height + 40}`,
                    left: `${imagesSize.img4.width + 40}`
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${imagesSize.img7.width}`,
                    top: `${imagesSize.img2.height + 40}`,
                    left: `${imagesSize.img4.width + 40 + imagesSize.img5.width + 40}`
                };
        }
    }

    const renderClassName = (id) => {
        if(size.width > 1040) return null;
        switch(id){
            case 1:
                return classNameImg1;
            case 2:
                return classNameImg2;
            case 3:
                return classNameImg3;
            case 4:
                return classNameImg4;
            case 5:
                return classNameImg5;
            case 6:
                return classNameImg6;
            case 7:
                return classNameImg7;
        }
    }
    
    const getImagesWidthAndHeight = (obj) => {
        setImagesSize({
            img1: {
                ...imagesSize.img1,
                height: obj.img1.height
            }, 
            img2: {
                ...imagesSize.img2,
                height: obj.img2.height
            }, 
            img3: {
                ...imagesSize.img3,
                height: obj.img3.height
            },
            img4: {
                ...imagesSize.img4,
                height: obj.img4.height
            },
            img5: {
                ...imagesSize.img5,
                height: obj.img5.height
            },
            img6: {
                ...imagesSize.img6,
                height: obj.img6.height
            },
            img7: {
                ...imagesSize.img7,
                height: obj.img7.height,
            }
        })
    }

    const renderStoneWallWidePageData = () => {
        return(
            <div 
                id="stoneWallWidePageItems"
                className="stone-wall-wide-page-items"
                style={{
                    position: "relative",
                    width: "100%",
                    height: `${imagesSize.img1.height + 40 + imagesSize.img4.height}`,
                    border: "2px solid red"
                }}
            >{props.stoneWallWidePage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        // className={`stone-wall-wide-page-item-id${el.id}`}
                        className={renderClassName(el.id)}
                        style={renderStyle(el.id)}
                    >
                        <StoneWallWideItem
                            page="stoneWallWidePage"
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
                <H65 className="h65-white-poppins">Tiam convallis,</H65>
                <H65 className="h65-white-poppins">Felis quis dapibus libero.</H65>
                <EH30/>
                <H22 className="h22-nobel-lustria">Lorem ipsum dolor sit amet, quot nusquam mei cu diceret .</H22>
            </div> 
            {renderStoneWallWideContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            stoneWallWidePage: Selectors.getStoneWallWidePageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchStoneWallWidePage: bindActionCreators(Services.fetchStoneWallWidePage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            setStandardPageIsHoveringCategory: bindActionCreators(Actions.setStandardPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(StoneWallWidePage);
 