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
    const [scrollingUp, setScrollingUp] = useState(false);
    const [loadMoreStep, setLoadMoreStep] = useState(1);
    
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

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

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
        props.fetchTwoColumnsPage(loadMoreStep);
        setLoadMoreStep(loadMoreStep + 1);
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "categoryFromHeader"){
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

    const renderTwoColumnsPageData = () => {
        return(
            <>
                <div className="two-columns-page-categories-from-header">{props.twoColumnsPage.categories.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="two-columns-page-category-from-header"
                            onMouseEnter={() => handleMouseEnter("categoryFromHeader", el.id)} 
                            onMouseLeave={() => handleMouseLeave("categoryFromHeader", el.id)}
                        >
                            <H15 className={renderClassName("categoryFromHeader", el.isHover)}>{el.label}</H15>
                        </div>
                    )
                })}

                </div>
                <div className="two-columns-page-items">{props.twoColumnsPage.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            className="two-columns-page-item"
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
                {renderLoadMoreButton()}
                </div>
            </>
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
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(TwoColumnsPage);
 