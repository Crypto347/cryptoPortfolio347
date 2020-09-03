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

import './portfolioGallery.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import MenuFullScreen from '../../../Parts/MenuFullScreen/menuFullScreen';
import SwitchImage from '../../../SmallParts/SwitchImage/switchImage';
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
    H22,
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
* PortfolioGallery component definition and export
*/

export const PortfolioGallery = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    // const itemRef = useRef(null);
    const resizeRef = useRef();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [portfolioGalleryItemRef, setPortfolioGalleryItemRef] = useState(null);
    // const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");
  
    const initCoordinateRange = [
        {
            id: 1,
            updated: false
        },
        {
            id: 2,
            updated: false
        },
        {
            id: 3,
            updated: false
        },
        {
            id: 4,
            updated: false
        },
        {
            id: 5,
            updated: false
        },
        {
            id: 6,
            updated: false
        },
        {
            id: 7,
            updated: false
        },
        {
            id: 8,
            updated: false
        },
        {
            id: 9,
            updated: false
        },
        {
            id: 10,
            updated: false
        },
        {
            id: 11,
            updated: false
        },
        {
            id: 12,
            updated: false
        },
        {
            id: 13,
            updated: false
        },
        {
            id: 14,
            updated: false
        },
        {
            id: 15,
            updated: false
        },
        {
            id: 16,
            updated: false
        },
        {
            id: 17,
            updated: false
        },
        {
            id: 18,
            updated: false
        }
    ]

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(!props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error && props.historyPopFromItem !== "scrollToTop"){
            let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
            window.scrollTo(0, itemOffsetTop - 30);
        }else{
            window.scrollTo(0, 0);
        }

        props.fetchPortfolioGalleryPage();
        const resize = () => {
            resizeRef.current();
        }
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
            props.setMenuDotsState("init", "")
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        props.forgetCoordinateRangeForPortfolioGalleryPage(initCoordinateRange);
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'portfolioCategory': 
                props.setPortfolioGalleryPageIsHoveringCategory("on", pathOfIds);
                break;
            case 'arrow': 
                props.setPortfolioGalleryPageIsHoveringArrow("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'portfolioCategory': 
                props.setPortfolioGalleryPageIsHoveringCategory("off", pathOfIds);
                break;
            case 'arrow': 
                props.setPortfolioGalleryPageIsHoveringArrow("off", id);
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "portfolioCategory"){
            switch(isHovering){
                case 'init':
                    return "h15-nobel-lustria-animated";
                case 'on':
                    return "h15-nobel-lora-nero-hover-on";
                case 'off':
                    return "h15-nobel-lora-nero-hover-off"
            }
        }
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper";
                case 'on':
                    return "arrow-wrapper-lengthen";
                case 'off':
                    return "arrow-wrapper-shorten"
            }
        }
    }

    // const handleOnWheel = (e) => {
    //     let scrollHeight = document.body.scrollTop;
    //     let el = document.getElementById("bigImages");
    
    //     // Check scroll direction

    //     if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
    //         setScrollingUp(false);
    //     }else{
    //         setScrollingUp(true);
    //     }
    // }

    // const checkScrollDirectionIsUp = (e)  => {
    //     if (e.wheelDelta) {
    //       return e.wheelDelta > 0;
    //     }
    //     return e.deltaY < 0;
    // }

    const renderToolbars = () => {
        return(
            <Toolbar 
                style="toolbarVersion2" 
                // scrollingUp={scrollingUp}
                toolbarMainColor="white"
                page="portfolioGallery"
            />
        )
    }


    const onClickHandler = (path) => {
        props.setUnmountComponentValues(true, path);
        props.unmountComponent(null, null, "portfolioGallery");
        props.clearArchiveData();
    }

    const renderCategories = (obj) => {
        return(
            <div className="portfolio-gallery-page-item-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="portfolio-gallery-page-item-category"
                        onClick={() => onClickHandler(el.path)}
                        onMouseEnter={() => handleMouseEnter(`portfolioCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`portfolioCategory`, null, pathOfIds)} 
                    >
                        {i !== 0 ? <div className="portfolio-gallery-page-item-category-slash">/</div> : null}
                        <H15 className={renderClassName("portfolioCategory", el.isHover)}>{el.label}</H15>
                    </div>
                )
            })}</div>
        )
    }

    const renderPortfolioGalleryPageItems = () => {
        return(
            <>
                <EH110/>
                <div className="portfolio-gallery-page-items">{props.portfolioGalleryPage.items.map((el, i) => {
                    let imgCoordinateRange = props.portfolioGalleryPage.itemsCooradinateRange.find(item => item.id === el.id);
                    return(
                        <div 
                            key={i}
                            className="portfolio-gallery-page-item"
                            id={el.key}
                        >
                            <div className="portfolio-gallery-page-item-image">
                                <SwitchImage  
                                    component="portfolioGallery"
                                    id={el.id}
                                    option={el.option}
                                    imagesArray={el.pictures}
                                    alt={el.alt}
                                    path={el.path}
                                    // clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                                    rememberCoordinateRange={props.rememberCoordinateRangeForPortfolioGalleryPage}
                                    imgCoordinateRange={imgCoordinateRange}
                                    setUnmountComponentValues={props.setUnmountComponentValues}
                                    unmountComponent={props.unmountComponent}
                                />
                            </div>
                            <EH30/>
                            {renderCategories(el)}
                            <EH10/>
                            <H19 className="h19-nero-poppins">{el.portfolioType}</H19>
                            <div 
                                className={renderClassName("arrow", el.arrowIsHovering)}
                                onMouseEnter={() => handleMouseEnter("arrow", el.id)} 
                                onMouseLeave={() => handleMouseLeave("arrow", el.id)} 
                                onClick={() => onClickHandler(el.path)}
                            >
                                <div className="arrow-horizontal-line"/>
                                <div className="arrow-wrapper2">
                                    <div className="arrow-top-line"></div>
                                    <div className="arrow-bottom-line"></div>
                                </div>
                            </div>
                            <EH30/>
                        </div>
                    )
                })}</div>
            </>
        )
    }

    const renderPortfolioGalleryPageData = () => {
        if(props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error){
            return(
                <div 
                    className="portfolio-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error){
            return(
                <>
                    {renderPortfolioGalleryPageItems()}
                </>
            )
        }
        if(!props.portfolioGalleryPage.loading && props.portfolioGalleryPage.error){
            return(
                <div 
                    className="portfolio-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.portfolioGalleryPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <>
            <div className="portfolio-gallery">
                {renderToolbars()}
                <div className="portfolio-gallery-wrapper">
                    <div className="portfolio-gallery-header-wrapper">
                        <div className="header-wrapper">
                            <div className="portfolio-gallery-header-bold">Welcome!</div>
                            <div className="portfolio-gallery-header-text1">Take a Look</div>
                        </div>
                        <div className="portfolio-gallery-header-text2">at Our Portfolio.</div>
                    </div>
                    {renderPortfolioGalleryPageData()}
                </div>
                <Footer/>
            </div>
            {props.menuDotsState.state === "on" ? 
            <MenuFullScreen 
                page="portfolioGallery"
                state={props.menuDotsState.state}
            /> : null
            }     
        </> 
    );
}

export default connect(
    (state) => {
        return {
            portfolioGalleryPage: Selectors.getPortfolioGalleryPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchPortfolioGalleryPage: bindActionCreators(Services.fetchPortfolioGalleryPage, dispatch),
            rememberCoordinateRangeForPortfolioGalleryPage: bindActionCreators(Actions.rememberCoordinateRangeForPortfolioGalleryPage, dispatch),
            forgetCoordinateRangeForPortfolioGalleryPage: bindActionCreators(Actions.forgetCoordinateRangeForPortfolioGalleryPage, dispatch),
            setPortfolioGalleryPageIsHoveringCategory: bindActionCreators(Actions.setPortfolioGalleryPageIsHoveringCategory, dispatch),
            setPortfolioGalleryPageIsHoveringArrow: bindActionCreators(Actions.setPortfolioGalleryPageIsHoveringArrow, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(PortfolioGallery);
 