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

import './overlayWithInfoPage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import OverlayImage from '../../../SmallParts/OverlayImage/overlayImage';
import SwitchImage from '../../../SmallParts/SwitchImage/switchImage';
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
* OverlayWithInfoPage component definition and export
*/

export const OverlayWithInfoPage = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.overlayWithInfoPage.items.length === 0){
            props.fetchOverlayWithInfoPage();
        }
        let timeout = setTimeout(() => {
            if(!props.overlayWithInfoPage.loading && !props.overlayWithInfoPage.error && props.historyPopFromItem !== "scrollToTop"){
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
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("overlayWithInfoPage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            setShowBackToTop(true);
        }else{
            setShowBackToTop(false);
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
                        page="overlayWithInfoPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="overlayWithInfoPage"
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
                        page="overlayWithInfoPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="overlayWithInfoPage"
                    />
                </>
            )
        }
    }
    
    const renderOverlayWithInfoPageData = () => {
        return(
            <div className="overlay-with-info-page-items">{props.overlayWithInfoPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        className="overlay-with-info-page-item"
                    >
                        <OverlayImage
                            page="overlayWithInfoPage"
                            obj={el}
                            setIsHoveringCategory={props.setOverlayWithInfoPageIsHoveringCategory}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            clearArchiveData={props.clearArchiveData}
                            // archiveCategory={props.archive.category}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderOverlayWithInfoPageContent = () => {
        if(props.overlayWithInfoPage.loading && !props.overlayWithInfoPage.error){
            return(
                <div 
                    className="overlay-with-info-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.overlayWithInfoPage.loading && !props.overlayWithInfoPage.error){
            return(
                <div className="overlay-with-info-page-wrapper">
                    <div className="overlay-with-info-page-header">
                        <H45 className="h45-nero-lustria">Overlay With Info</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderOverlayWithInfoPageData()}
                </div>
            )
        }
        if(!props.overlayWithInfoPage.loading && props.overlayWithInfoPage.error){
            return(
                <div 
                    className="overlay-with-info-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.overlayWithInfoPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="overlay-with-info-page" id="overlayWithInfoPage">
            {renderToolbars()}
            {renderOverlayWithInfoPageContent()}
            <Footer/>
            {showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            overlayWithInfoPage: Selectors.getOverlayWithInfoPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
        };
    },
    (dispatch) => {
        return {
            fetchOverlayWithInfoPage: bindActionCreators(Services.fetchOverlayWithInfoPage, dispatch),
            setOverlayWithInfoPageIsHoveringCategory: bindActionCreators(Actions.setOverlayWithInfoPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(OverlayWithInfoPage);
 