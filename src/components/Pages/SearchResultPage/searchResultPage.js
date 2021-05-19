/**
 * Libraries
 */

import React, {
    useState,
    useEffect
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

import './searchResultPage.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import Toolbar from '../../Parts/Toolbar/toolbar';
import BannerImage from '../../SmallParts/BannerImage/bannerImage';
import OverlayImage from '../../SmallParts/OverlayImage/overlayImage';
import SimpleOverlayImage from '../../SmallParts/SimpleOverlayImage/simpleOverlayImage';
import SlideFromImageLeft from '../../SmallParts/SlideFromImageLeft/slideFromImageLeft';
import StandardPortfolioItem from '../../SmallParts/StandardPortfolioItem/standardPortfolioItem';
import Footer from '../../Parts/Footer/footer';
import BackToTop from '../../SmallParts/BackToTop/backToTop';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Services
 */

import * as Services from "../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import { 
    H15,
    H45
} from '../../UtilityComponents';

import * as Utility from '../../../utility';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

/**
 * SearchResultPage component definition and export
 */

export const SearchResultPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Scroll to the top of the screen

        window.scrollTo(0, 0);

        setComponentData();

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("bannerPage");

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
                        page="bannerPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="bannerPage"
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
                        page="bannerPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="bannerPage"
                    />
                </>
            )
        }
    }

    const setComponentData = () => {
        if(!Utility.isObjEmpty(props.searchResultPage.searchInputFormResponse.item)){
            setShowComponent(true);
        }else{
            setShowComponent(false);
        }
    }

    const renderResult = (arr) => {
        return(
            <div className="search-result-page-result-wrapper">{arr.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="search-result-page-section-1-item"
                    >jkl
                    </div>
                )
            })}</div>
        )
    }

    const rendeSearchResultDataContent = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="search-result-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <>{renderResult(data.item.searchResult)}</>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="search-result-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${data.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="search-result-page" id="searchResultPage">
            {renderToolbars()}
            <div className="search-result-page-wrapper">
                <div className="search-result-page-header">
                    <H45 className="h45-nero-lustria">Search results for: {showComponent ? props.searchResultPage.searchInputFormResponse.item?.searchInfo.searchValue : ""}</H45>
                </div>
                <div className="grey-line"/>
                {showComponent ? rendeSearchResultDataContent(props.searchResultPage.searchInputFormResponse) : null}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            searchResultPage: Selectors.getSearchResultPageState(state),
        };
    },
    (dispatch) => {
        return {
            fetchBannerPageSection1Data: bindActionCreators(Services.fetchBannerPageSection1Data, dispatch),
            fetchBannerPageSection1DataSuccess: bindActionCreators(Actions.fetchBannerPageSection1DataSuccess, dispatch),
            fetchBannerPageSection2Data: bindActionCreators(Services.fetchBannerPageSection2Data, dispatch),
            fetchBannerPageSection2DataSuccess: bindActionCreators(Actions.fetchBannerPageSection2DataSuccess, dispatch),
            fetchBannerPageSection3Data: bindActionCreators(Services.fetchBannerPageSection3Data, dispatch),
            fetchBannerPageSection3DataSuccess: bindActionCreators(Actions.fetchBannerPageSection3DataSuccess, dispatch),
            fetchBannerPageSection4Data: bindActionCreators(Services.fetchBannerPageSection4Data, dispatch),
            fetchBannerPageSection4DataSuccess: bindActionCreators(Actions.fetchBannerPageSection4DataSuccess, dispatch),
            fetchBannerPageSection5Data: bindActionCreators(Services.fetchBannerPageSection5Data, dispatch),
            fetchBannerPageSection5DataSuccess: bindActionCreators(Actions.fetchBannerPageSection5DataSuccess, dispatch),
            fetchBannerPageSection6Data: bindActionCreators(Services.fetchBannerPageSection6Data, dispatch),
            fetchBannerPageSection6DataSuccess: bindActionCreators(Actions.fetchBannerPageSection6DataSuccess, dispatch),
            fetchBannerPageSection7Data: bindActionCreators(Services.fetchBannerPageSection7Data, dispatch),
            fetchBannerPageSection7DataSuccess: bindActionCreators(Actions.fetchBannerPageSection7DataSuccess, dispatch),
            fetchBannerPageSection8Data: bindActionCreators(Services.fetchBannerPageSection8Data, dispatch),
            fetchBannerPageSection8DataSuccess: bindActionCreators(Actions.fetchBannerPageSection8DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setBannerPageSection4IsHoveringCategory: bindActionCreators(Actions.setBannerPageSection4IsHoveringCategory, dispatch),
            setBannerPageSection6IsHoveringCategory: bindActionCreators(Actions.setBannerPageSection6IsHoveringCategory, dispatch),
            setBannerPageSection7IsHoveringCategory: bindActionCreators(Actions.setBannerPageSection7IsHoveringCategory, dispatch),        };
    }
)(SearchResultPage);
 