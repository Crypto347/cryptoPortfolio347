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

import './galleryWithSpacePage.scss';

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
* GalleryWithSpacePage component definition and export
*/

export const GalleryWithSpacePage = (props) => {

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
        if(props.galleryWithSpacePage.items.length === 0){
            props.fetchGalleryWithSpacePage();
        }
        let timeout = setTimeout(() => {
            if(!props.galleryWithSpacePage.loading && !props.galleryWithSpacePage.error && props.historyPopFromItem !== "scrollToTop"){
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
        let el = document.getElementById("galleryWithSpacePage");

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
                        page="galleryWithSpacePage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="galleryWithSpacePage"
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
                        page="galleryWithSpacePage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="galleryWithSpacePage"
                    />
                </>
            )
        }
    }
    
    const renderGalleryWithSpacePageData = () => {
        return(
            <div className="gallery-with-space-page-items">{props.galleryWithSpacePage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        className="gallery-with-space-page-item"
                    >
                        <OverlayImage
                            page="galleryWithSpacePage"
                            obj={el}
                            // id={el.id}
                            setIsHoveringCategory={props.setgalleryWithSpacePageIsHoveringCategory}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            // clearArchiveData={props.clearArchiveData}
                            // archiveCategory={props.archive.category}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderGalleryWithSpacePageContent = () => {
        if(props.galleryWithSpacePage.loading && !props.galleryWithSpacePage.error){
            return(
                <div 
                    className="gallery-with-space-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.galleryWithSpacePage.loading && !props.galleryWithSpacePage.error){
            return(
                <div className="gallery-with-space-page-wrapper">
                    <div className="gallery-with-space-page-header">
                        <H45 className="h45-nero-lustria">Gallery With Space</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderGalleryWithSpacePageData()}
                </div>
            )
        }
        if(!props.galleryWithSpacePage.loading && props.galleryWithSpacePage.error){
            return(
                <div 
                    className="gallery-with-space-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.galleryWithSpacePage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="gallery-with-space-page" id="galleryWithSpacePage">
            {renderToolbars()}
            {renderGalleryWithSpacePageContent()}
            <Footer/>
            {showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            galleryWithSpacePage: Selectors.getGalleryWithSpacePageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
        };
    },
    (dispatch) => {
        return {
            fetchGalleryWithSpacePage: bindActionCreators(Services.fetchGalleryWithSpacePage, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(GalleryWithSpacePage);
 