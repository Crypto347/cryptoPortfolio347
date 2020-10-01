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

import './metroPage2.scss';

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
* MetroPage2 component definition and export
*/

export const MetroPage2 = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [prevScreenWidthVal, setPrevScreenWidthVal] = useState(0);
    const [classNameImg1, setClassNameImg1] = useState('metro-page-item-id1');
    const [classNameImg2, setClassNameImg2] = useState('metro-page-item-id2');
    const [classNameImg3, setClassNameImg3] = useState('metro-page-item-id3');
    const [classNameImg4, setClassNameImg4] = useState('metro-page-item-id4');
    const [classNameImg5, setClassNameImg5] = useState('metro-page-item-id5');
    const [classNameImg6, setClassNameImg6] = useState('metro-page-item-id6');
    const [classNameImg7, setClassNameImg7] = useState('metro-page-item-id7');
    const [classNameImg8, setClassNameImg8] = useState('metro-page-item-id8');
    const [classNameImg9, setClassNameImg9] = useState('metro-page-item-id9');
    const [classNameImg10, setClassNameImg10] = useState('metro-page-item-id10');
    const [classNameImg11, setClassNameImg11] = useState('metro-page-item-id11');

    const [imagesSize, setImagesSize] = useState({
        img1: {
            width: 0,
            height: 0,
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
        },
        img8: {
            width: 0,
            height: 0,
        },
        img9: {
            width: 0,
            height: 0,
        },
        img10: {
            width: 0,
            height: 0,
        },
        img11: {
            width: 0,
            height: 0,
        }
    });

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
                console.log("PPP",itemOffsetTop)
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        const resize = () => {
            resizeRef.current();
        }
 
        let stoneWallWidePageItemsWidth = document.getElementById('metroPageItems')?.clientWidth;

        setImagesSize({
            img1: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            }, 
            img2: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2,
                height: 0,
            }, 
            img3: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            },
            img4: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            },
            img5: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2,
                height: 0,
            },
            img6: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            },
            img7: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2  + 40,
                height: 0,
            },
            img8: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            },
            img9: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2 + 40,
                height: 0,
            },
            img10: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2,
                height: 0,
            },
            img11: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
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
        let stoneWallWidePageItemsWidth = document.getElementById('metroPageItems').clientWidth;
        
        setImagesSize({
            img1: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            }, 
            img2: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2,
                height: 0,
            }, 
            img3: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            },
            img4: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            },
            img5: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2,
                height: 0,
            },
            img6: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            },
            img7: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2  + 40,
                height: 0,
            },
            img8: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            },
            img9: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2  + 40,
                height: 0,
            },
            img10: {
                width: (stoneWallWidePageItemsWidth - 120)/5*2,
                height: 0,
            },
            img11: {
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
            }
        })
        setPrevScreenWidthVal(size.width);
        if(size.width > 1530){
            return null;
        }
        if(size.width > 1500){
            setClassNameImg1("metro-page-item-id1");
            setClassNameImg2("metro-page-item-id2");
            setClassNameImg3("metro-page-item-id3");
            setClassNameImg4("metro-page-item-id4");
            setClassNameImg5("metro-page-item-id5");
            setClassNameImg6("metro-page-item-id6");
            setClassNameImg7("metro-page-item-id7");
            setClassNameImg8("metro-page-item-id8");
            setClassNameImg9("metro-page-item-id9");
            setClassNameImg10("metro-page-item-id10");
            setClassNameImg11("metro-page-item-id11");
        }
        if(size.width > 1495 && prevScreenWidthVal < size.width){
            setClassNameImg1("metro-page-item-id1-animation-expand-screen");
            setClassNameImg2("metro-page-item-id2-animation-expand-screen");
            setClassNameImg3("metro-page-item-id3-animation-expand-screen");
            setClassNameImg4("metro-page-item-id4-animation-expand-screen");
            setClassNameImg5("metro-page-item-id5-animation-expand-screen");
            setClassNameImg6("metro-page-item-id6-animation-expand-screen");
            setClassNameImg7("metro-page-item-id7-animation-expand-screen");
            setClassNameImg8("metro-page-item-id8-animation-expand-screen");
            setClassNameImg9("metro-page-item-id9-animation-expand-screen");
            setClassNameImg10("metro-page-item-id10-animation-expand-screen");
            setClassNameImg11("metro-page-item-id11-animation-expand-screen");
        }
        if(size.width < 1505 && size.width > 1430 && prevScreenWidthVal > size.width && classNameImg1 !== "metro-page-item-id1-small"){
            setClassNameImg1("metro-page-item-id1-animation-narrow-screen");
            setClassNameImg2("metro-page-item-id2-animation-narrow-screen");
            setClassNameImg3("metro-page-item-id3-animation-narrow-screen");
            setClassNameImg4("metro-page-item-id4-animation-narrow-screen");
            setClassNameImg5("metro-page-item-id5-animation-narrow-screen");
            setClassNameImg6("metro-page-item-id6-animation-narrow-screen");
            setClassNameImg7("metro-page-item-id7-animation-narrow-screen");
            setClassNameImg8("metro-page-item-id8-animation-narrow-screen");
            setClassNameImg9("metro-page-item-id9-animation-narrow-screen");
            setClassNameImg10("metro-page-item-id10-animation-narrow-screen");
            setClassNameImg11("metro-page-item-id11-animation-narrow-screen");
        }
        if(size.width < 1430 && size.width > 1230){
            setClassNameImg1("metro-page-item-id1-small");
            setClassNameImg2("metro-page-item-id2");
            setClassNameImg3("metro-page-item-id3");
            setClassNameImg4("metro-page-item-id4");
            setClassNameImg5("metro-page-item-id5");
            setClassNameImg6("metro-page-item-id6");
            setClassNameImg7("metro-page-item-id7");
            setClassNameImg8("metro-page-item-id8");
            setClassNameImg9("metro-page-item-id9");
            setClassNameImg10("metro-page-item-id10");
            setClassNameImg11("metro-page-item-id11");
        }
        if(size.width < 1225 && size.width > 1200 && prevScreenWidthVal < size.width){
            setClassNameImg1("metro-page-item-id1-animation-expand2-screen");
            setClassNameImg2("metro-page-item-id2-animation-expand2-screen");
            setClassNameImg3("metro-page-item-id3-animation-expand2-screen");
            setClassNameImg4("metro-page-item-id4-animation-expand2-screen");
            setClassNameImg5("metro-page-item-id5-animation-expand2-screen");
            setClassNameImg6("metro-page-item-id6-animation-expand2-screen");
            setClassNameImg7("metro-page-item-id7-animation-expand2-screen");
            setClassNameImg8("metro-page-item-id8-animation-expand2-screen");
            setClassNameImg9("metro-page-item-id9-animation-expand2-screen");
            setClassNameImg10("metro-page-item-id10-animation-expand2-screen");
            setClassNameImg11("metro-page-item-id11-animation-expand2-screen");
        }
        if(size.width < 1235 && size.width > 1060 && prevScreenWidthVal > size.width){
            setClassNameImg1("metro-page-item-id1-animation-narrow2-screen");
            setClassNameImg2("metro-page-item-id2-animation-narrow2-screen");
            setClassNameImg3("metro-page-item-id3-animation-narrow2-screen");
            setClassNameImg4("metro-page-item-id4-animation-narrow2-screen");
            setClassNameImg5("metro-page-item-id5-animation-narrow2-screen");
            setClassNameImg6("metro-page-item-id6-animation-narrow2-screen");
            setClassNameImg7("metro-page-item-id7-animation-narrow2-screen");
            setClassNameImg8("metro-page-item-id8-animation-narrow2-screen");
            setClassNameImg9("metro-page-item-id9-animation-narrow2-screen");
            setClassNameImg10("metro-page-item-id10-animation-narrow2-screen");
            setClassNameImg11("metro-page-item-id11-animation-narrow2-screen");
        }
        if(size.width < 1055 && size.width > 1025 && prevScreenWidthVal < size.width){
            setClassNameImg1("metro-page-item-id1-animation-expand3-screen");
            setClassNameImg2("metro-page-item-id2-animation-expand3-screen");
            setClassNameImg3("metro-page-item-id3-animation-expand3-screen");
            setClassNameImg4("metro-page-item-id4-animation-expand3-screen");
            setClassNameImg5("metro-page-item-id5-animation-expand3-screen");
            setClassNameImg6("metro-page-item-id6-animation-expand3-screen");
            setClassNameImg7("metro-page-item-id7-animation-expand3-screen");
            setClassNameImg8("metro-page-item-id8-animation-expand3-screen");
            setClassNameImg9("metro-page-item-id9-animation-expand3-screen");
            setClassNameImg10("metro-page-item-id10-animation-expand3-screen")
            setClassNameImg11("metro-page-item-id11-animation-expand3-screen");
        }
        if(size.width < 1065 && size.width > 480 && prevScreenWidthVal > size.width){
            setClassNameImg1("metro-page-item-id1-animation-narrow3-screen");
            setClassNameImg2("metro-page-item-id2-animation-narrow3-screen");
            setClassNameImg3("metro-page-item-id3-animation-narrow3-screen");
            setClassNameImg4("metro-page-item-id4-animation-narrow3-screen");
            setClassNameImg5("metro-page-item-id5-animation-narrow3-screen");
            setClassNameImg6("metro-page-item-id6-animation-narrow3-screen");
            setClassNameImg7("metro-page-item-id7-animation-narrow3-screen");
            setClassNameImg8("metro-page-item-id8-animation-narrow3-screen");
            setClassNameImg9("metro-page-item-id9-animation-narrow3-screen");
            setClassNameImg10("metro-page-item-id10-animation-narrow3-screen");
            setClassNameImg11("metro-page-item-id11-animation-narrow3-screen");
        }
        // if(size.width < 1025 && size.width > 770 && prevScreenWidthVal < size.width){
            // console.log("long1")

            // setClassNameImg3("metro-page-item-id3-animation-expand-screen");
        // }

        // if(size.width < 770 && size.width > 680 && size.width < prevScreenWidthVal){
        //     console.log("short2");
        // }
        // if(size.width < 770 && size.width > 680 && size.width > prevScreenWidthVal){
        //     console.log("long2");
        // }
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

    const renderStyle = (id, ) => {
        if(size.width < 1530) return null;
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
                    top: "0px",
                    left: `${imagesSize.img1.width + 40 + imagesSize.img2.width + 40 + imagesSize.img3.width + 40}`
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${imagesSize.img5.width}`,
                    top: `${imagesSize.img1.width + 40}`,
                    left: "0px",
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${imagesSize.img6.width}`,
                    top: `${imagesSize.img1.width + 40}`,
                    left: `${imagesSize.img5.width + 40}`
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${imagesSize.img7.width}`,
                    top: `${imagesSize.img1.width + 40}`,
                    left: `${imagesSize.img5.width + 40 + imagesSize.img6.width + 40}`
                };
            case 8:
                return {
                    position: "absolute",
                    width: `${imagesSize.img8.width}`,
                    top: `${imagesSize.img1.width + 40 + imagesSize.img6.width + 40}`,
                    left: `${imagesSize.img5.width + 40}`
                };
            case 9:
                return {
                    position: "absolute",
                    width: `${imagesSize.img9.width}`,
                    top: `${imagesSize.img1.width + 40 + imagesSize.img6.width + 40}`,
                    left: `${imagesSize.img5.width + 40 + imagesSize.img6.width + 40}`
                };
            case 10:
                return {
                    position: "absolute",
                    width: `${imagesSize.img10.width}`,
                    top: `${imagesSize.img1.width + 40 + imagesSize.img5.width + 80}`,
                    left: "0px"
                };
            case 11:
                return {
                    position: "absolute",
                    width: `${imagesSize.img11.width}`,
                    top: `${3 * imagesSize.img1.width + 120}`,
                    left: `${imagesSize.img5.width + 40}`
                };
        }
    }

    const renderClassName = (id) => {
        if(size.width > 1530) return null;
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
            case 8:
                return classNameImg8;
            case 9:
                return classNameImg9;
            case 10:
                return classNameImg10;
            case 11:
                return classNameImg11;
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
            },
            img8: {
                ...imagesSize.img8,
                height: obj.img8.height
            },
            img9: {
                ...imagesSize.img9,
                height: obj.img9.height
            },
            img10: {
                ...imagesSize.img10,
                height: obj.img10.height
            },
            img11: {
                ...imagesSize.img11,
                height: obj.img11.height,
            }
        })
    }
    
    const renderMetroPageData = () => {
        return(
            <div 
                id="metroPageItems"
                className="metro-page-items"
                style={{
                    position: "relative",
                    width: "100%",
                    height: `${5*imagesSize.img1.width + 4*40}`,
                    // border: "2px solid red"
                }}
            >{props.metroPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        // className={`metro-wide-page-item-id${el.id}`}
                        className={renderClassName(el.id)}
                        style={renderStyle(el.id)}
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
        <div className="metro-page" id="metroPage">
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
        };
    }
)(MetroPage2);
 