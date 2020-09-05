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

import './switchImagePage.scss';

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
* SwitchImagePage component definition and export
*/

export const SwitchImagePage = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    // const itemRef = useRef(null);
    const resizeRef = useRef();
    const [scrollingUp, setScrollingUp] = useState(false);
  
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
        if(!props.switchImagePage.loading && !props.switchImagePage.error && props.historyPopFromItem !== "scrollToTop"){
            let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
            window.scrollTo(0, itemOffsetTop - 30);
        }else{
            window.scrollTo(0, 0);
        }

        props.fetchSwitchImagePage();
        const resize = () => {
            resizeRef.current();
        }
        window.addEventListener('resize', resize);
        window.addEventListener('wheel', handleOnWheel);
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        props.forgetCoordinateRangeForSwitchImagePage(initCoordinateRange);
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("switchImagePage");
    
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

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'switchImageCategory': 
                props.setSwitchImagePageIsHoveringCategory("on", pathOfIds);
                break;
            case 'arrow': 
                props.setSwitchImagePageIsHoveringArrow("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'switchImageCategory': 
                props.setSwitchImagePageIsHoveringCategory("off", pathOfIds);
                break;
            case 'arrow': 
                props.setSwitchImagePageIsHoveringArrow("off", id);
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "switchImageCategory"){
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

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="bigImages"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="bigImages"
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
                        page="bigImages"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="bigImages"
                    />
                </>
            )
        }
    }
    const onClickHandler = (path) => {
        props.setUnmountComponentValues(true, path);
        props.unmountComponent(null, null, "switchImagePage");
        props.clearArchiveData();
    }

    const renderCategories = (obj) => {
        return(
            <div className="switch-image-page-item-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="switch-image-page-item-category"
                        onClick={() => onClickHandler(el.path)}
                        onMouseEnter={() => handleMouseEnter(`switchImageCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`switchImageCategory`, null, pathOfIds)} 
                    >
                        {i !== 0 ? <div className="switch-image-page-item-category-slash">/</div> : null}
                        <H15 className={renderClassName("switchImageCategory", el.isHover)}>{el.label}</H15>
                    </div>
                )
            })}</div>
        )
    }

    const renderSwitchImagePageData = () => {
        return(
            <div className="switch-image-page-items">{props.switchImagePage.items.map((el, i) => {
                let imgCoordinateRange = props.switchImagePage.itemsCooradinateRange.find(item => item.id === el.id);
                return(
                    <div 
                        key={i}
                        className="switch-image-page-item"
                        id={el.key}
                    >
                        <div className="switch-image-page-item-image">
                            <SwitchImage  
                                component="switchImagePage"
                                id={el.id}
                                option={el.option}
                                imagesArray={el.pictures}
                                alt={el.alt}
                                path={el.path}
                                // clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                                rememberCoordinateRange={props.rememberCoordinateRangeForSwitchImagePage}
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
        )
    }

    const renderSwitchImagePageContent = () => {
        if(props.switchImagePage.loading && !props.switchImagePage.error){
            return(
                <div 
                    className="switch-image-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.switchImagePage.loading && !props.switchImagePage.error){
            return(
                <div className="switch-image-page-wrapper">
                    <div className="switch-image-page-header">
                        <H45 className="h45-nero-lustria">Switch Image</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderSwitchImagePageData()}
                </div>
            )
        }
        if(!props.switchImagePage.loading && props.switchImagePage.error){
            return(
                <div 
                    className="switch-image-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.switchImagePage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <>
            <div className="switch-image-page" id="switchImagePage">
                {renderToolbars()}
                {renderSwitchImagePageContent()}
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
            switchImagePage: Selectors.getSwitchImagePageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchSwitchImagePage: bindActionCreators(Services.fetchSwitchImagePage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            setSwitchImagePageIsHoveringArrow: bindActionCreators(Actions.setSwitchImagePageIsHoveringArrow, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(SwitchImagePage);
 