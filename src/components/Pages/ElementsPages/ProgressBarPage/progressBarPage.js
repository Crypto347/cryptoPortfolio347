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

import './progressBarPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Tabs from '../../../SmallParts/Tabs/tabs';
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
    H45,
    EW70,
    EH70
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * ProgressBarPage component definition and export
 */

export const ProgressBarPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.progressBarPage.section1Column1Data.items.length === 0){
            props.fetchProgressBarPageSection1Column1Data();
        }

        if(props.progressBarPage.section1Column2Data.items.length === 0){
            props.fetchProgressBarPageSection1Column2Data();
        }

        if(props.progressBarPage.section2Data.items.length === 0){
            props.fetchProgressBarPageSection2Data();
        }

        // Scroll to the top of the screen

        window.scrollTo(0, 0);

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
        let el = document.getElementById("progressBarPage");

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
                        page="progressBarPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="progressBarPage"
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
                        page="progressBarPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="progressBarPage"
                    />
                </>
            )
        }
    }

    const renderProgressBarPageSection1Column1DataContent = () => {
        if(props.progressBarPage.section1Column1Data.loading && !props.progressBarPage.section1Column1Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.progressBarPage.section1Column1Data.loading && !props.progressBarPage.section1Column1Data.error){
            // return(
            //     <Tabs
            //         array={props.tabsPage.section1Column1Data.items}
            //         page="tabsPage"
            //         tabsKey="section1Column1"
            //         setActiveTab={props.setActiveTabOfSection1Column1TabsPage}
            //         setIsHoverTab={props.setIsHoverTabOfSection1Column1TabsPage}
            //         rememberCoordinateRange={props.rememberCoordinateRangeForTabsPage}
            //         tabsCoordinateRange={tabsCoordinateRange}
            //         tabsUnderlineStyleValues={props.tabsPage.tabsUnderlinesStyleValues.section1Column1}
            //         updateTabsUnderlinesStyleValues={props.updateTabsUnderlinesStyleValuesForTabsPage}
            //     />
            // )
        }
        if(!props.progressBarPage.section1Column1Data.loading && props.progressBarPage.section1Column1Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.tabsPage.section1Column1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderProgressBarPageSection1Column2DataContent = () => {
        if(props.progressBarPage.section1Column2Data.loading && !props.progressBarPage.section1Column2Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.progressBarPage.section1Column2Data.loading && !props.progressBarPage.section1Column2Data.error){
            // return(
            //     <Tabs
            //         array={props.tabsPage.section1Column2Data.items}
            //         page="tabsPage"
            //         tabsKey="section1Column2"
            //         setActiveTab={props.setActiveTabOfSection1Column2TabsPage}
            //         setIsHoverTab={props.setIsHoverTabOfSection1Column2TabsPage}
            //         rememberCoordinateRange={props.rememberCoordinateRangeForTabsPage}
            //         tabsCoordinateRange={tabsCoordinateRange}
            //         tabsUnderlineStyleValues={props.tabsPage.tabsUnderlinesStyleValues.section1Column2}
            //         updateTabsUnderlinesStyleValues={props.updateTabsUnderlinesStyleValuesForTabsPage}
            //     />
            // )
        }
        if(!props.progressBarPage.section1Column2Data.loading && props.progressBarPage.section1Column2Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.progressBarPage.section1Column2Data.error}`}</H15>
                </div>
            )
        }
    }

    const renderProgressBarPageSection2DataContent = () => {
        if(props.progressBarPage.section2Data.loading && !props.progressBarPage.section2Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.progressBarPage.section2Data.loading && !props.progressBarPage.section2Data.error){
            // return(
            //     <Tabs
            //         array={props.tabsPage.section2Data.items}
            //         page="tabsPage"
            //         tabsKey="section2"
            //         setActiveTab={props.setActiveTabOfSection2TabsPage}
            //         setIsHoverTab={props.setIsHoverTabOfSection2TabsPage}
            //         rememberCoordinateRange={props.rememberCoordinateRangeForTabsPage}
            //         tabsCoordinateRange={tabsCoordinateRange}
            //         tabsUnderlineStyleValues={props.tabsPage.tabsUnderlinesStyleValues.section2}
            //         updateTabsUnderlinesStyleValues={props.updateTabsUnderlinesStyleValuesForTabsPage}
            //     />
            // )
        }
        if(!props.progressBarPage.section2Data.loading && props.progressBarPage.section2Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.progressBarPage.section2Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="progress-bar-page" id="progressBarPage">
            {renderToolbars()}
            <div className="progress-bar-page-wrapper">
                <div className="progress-bar-page-header">
                    <H45 className="h45-nero-lustria">Tabs</H45>
                </div>
                <div className="grey-line"/>
                <div className="progress-bar-page-section-1-data-wrapper">
                    {renderProgressBarPageSection1Column1DataContent()}
                    {/* <EW70/>
                    <EH70/> */}
                    {renderProgressBarPageSection1Column2DataContent()}
                </div>
                <div className="progress-bar-page-section-2-data-wrapper">
                    {renderProgressBarPageSection2DataContent()}
                </div>
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            progressBarPage: Selectors.getProgressBarPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchProgressBarPageSection1Column1Data: bindActionCreators(Services.fetchProgressBarPageSection1Column1Data, dispatch),
            fetchProgressBarPageSection1Column2Data: bindActionCreators(Services.fetchProgressBarPageSection1Column2Data, dispatch),
            fetchProgressBarPageSection2Data: bindActionCreators(Services.fetchProgressBarPageSection2Data, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setIsHoverTabOfSection1Column1TabsPage: bindActionCreators(Actions.setIsHoverTabOfSection1Column1TabsPage, dispatch),
            setIsHoverTabOfSection1Column2TabsPage: bindActionCreators(Actions.setIsHoverTabOfSection1Column2TabsPage, dispatch),
            setIsHoverTabOfSection2TabsPage: bindActionCreators(Actions.setIsHoverTabOfSection2TabsPage, dispatch),
            setActiveTabOfSection1Column1TabsPage: bindActionCreators(Actions.setActiveTabOfSection1Column1TabsPage, dispatch),
            setActiveTabOfSection1Column2TabsPage: bindActionCreators(Actions.setActiveTabOfSection1Column2TabsPage, dispatch),
            setActiveTabOfSection2TabsPage: bindActionCreators(Actions.setActiveTabOfSection2TabsPage, dispatch),
            rememberCoordinateRangeForTabsPage: bindActionCreators(Actions.rememberCoordinateRangeForTabsPage, dispatch),
            initUnderlinesStyleStateForTabsPage: bindActionCreators(Actions.initUnderlinesStyleStateForTabsPage, dispatch),
            updateTabsUnderlinesStyleValuesForTabsPage: bindActionCreators(Actions.updateTabsUnderlinesStyleValuesForTabsPage, dispatch),
        };
    }
)(ProgressBarPage);
 