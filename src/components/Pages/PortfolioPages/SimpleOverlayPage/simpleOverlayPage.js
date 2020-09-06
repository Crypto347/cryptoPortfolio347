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

import './simpleOverlayPage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import SimpleOverlayImage from '../../../SmallParts/SimpleOverlayImage/simpleOverlayImage';
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
* SimpleOverlayPage component definition and export
*/

export const SimpleOverlayPage = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.simpleOverlayPage.items.length === 0){
            props.fetchSimpleOverlayPage();
        }
        let timeout = setTimeout(() => {
            if(!props.simpleOverlayPage.loading && !props.simpleOverlayPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                console.log("PPP",itemOffsetTop)
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("simpleOverlayPage");
    
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

    const renderSimpleOverlayPageData = () => {
        return(
            <div className="simple-overlay-page-items">{props.simpleOverlayPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        className="simple-overlay-page-item"
                    >
                        <SimpleOverlayImage
                            imageKey={el.coverImage.key}
                            alt={el.coverImage.alt}
                            header={el.header}
                            isHover={el.coverImage.isHover}
                            path={el.path}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            page="simpleOverlayPage"
                            id={el.id}
                            // option={el.option}
                            // imagesArray={el.pictures}
                    
                        
                            // clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                            // rememberCoordinateRange={props.rememberCoordinateRangeForSwitchImagePage}
                            // imgCoordinateRange={imgCoordinateRange}
                        
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderSimpleOverlayPageContent = () => {
        if(props.simpleOverlayPage.loading && !props.simpleOverlayPage.error){
            return(
                <div 
                    className="simple-overlay-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.simpleOverlayPage.loading && !props.simpleOverlayPage.error){
            return(
                <div className="simple-overlay-page-wrapper">
                    <div className="simple-overlay-page-header">
                        <H45 className="h45-nero-lustria">Simple Overlay</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderSimpleOverlayPageData()}
                </div>
            )
        }
        if(!props.simpleOverlayPage.loading && props.simpleOverlayPage.error){
            return(
                <div 
                    className="simple-overlay-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 simpleOverlayPage="h19-nobel-lora">{`${props.simpleOverlayPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="simple-overlay-page" id="simpleOverlayPage">
            {renderToolbars()}
            {renderSimpleOverlayPageContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            simpleOverlayPage: Selectors.getSimpleOverlayPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchSimpleOverlayPage: bindActionCreators(Services.fetchSimpleOverlayPage, dispatch),
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
)(SimpleOverlayPage);
 