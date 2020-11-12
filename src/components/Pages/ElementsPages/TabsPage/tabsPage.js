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

import './tabsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
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
    EW70
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * TabsPage component definition and export
 */

export const TabsPage = (props) => {

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

        if(props.tabsPage.section1Column1Data.items.length === 0){
            props.fetchTabsPageSection1Column1Data();
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
        let el = document.getElementById("tabsPage");

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
                        page="tabsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="tabsPage"
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
                        page="tabsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="tabsPage"
                    />
                </>
            )
        }
    }

    const renderTabsPageSection1Data = (arr, opt) => {
        return(
            <div className="tabs-page-section1-items">{arr.map((el, i) => {
                return(
                    <div key={i}>
                        
                    </div>
                )
            })}</div>
        )
    }

    const renderTabsPageSection2Data = () => {
        return(
            <div className="tabs-page-section2-items">{props.tabsPage.section2Data.items.map((el, i) => {
                return(
                    <div key={i}>
                       
                    </div>
                )
            })}</div>
        )
    }

    const renderTabsPageSection1Column1DataContent = () => {
        if(props.tabsPage.section1Column1Data.loading && !props.tabsPage.section1Column2Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.tabsPage.section1Column1Data.loading && !props.tabsPage.section1Column1Data.error){
            return(
                renderTabsPageSection1Data(props.tabsPage.section1Column2Data.items,"leftColumn")
            )
        }
        if(!props.tabsPage.section1Column1Data.loading && props.tabsPage.section1Column1Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.tabsPage.section1Column1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderTabsPageSection1Column2DataContent = () => {
        if(props.tabsPage.section1Column2Data.loading && !props.tabsPage.section1Column2Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.tabsPage.section1Column2Data.loading && !props.tabsPage.section1Column2Data.error){
            return(
                renderTabsPageSection1Data()
            )
        }
        if(!props.tabsPage.section1Column2Data.loading && props.tabsPage.section1Column2Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.tabsPage.section1Column2Data.error}`}</H15>
                </div>
            )
        }
    }

    const renderTabsPageSection2DataContent = () => {
        if(props.tabsPage.section2Data.loading && !props.tabsPage.section2Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.tabsPage.section2Data.loading && !props.tabsPage.section2Data.error){
            return(
                <div className="tabs-page-section2-data-wrapper">
                    {renderTabsPageSection2Data()}
                </div>
               
            )
        }
        if(!props.tabsPage.section2Data.loading && props.tabsPage.section2Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.tabsPage.section2Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="tabs-page" id="tabsPage">
            {renderToolbars()}
            <div className="tabs-page-wrapper">
                <div className="tabs-page-header">
                    <H45 className="h45-nero-lustria">Tabs</H45>
                </div>
                <div className="grey-line"/>
                <div className="tabs-page-section-1-data-wrapper">
                    {renderTabsPageSection1Column1DataContent()}
                    {renderTabsPageSection1Column1DataContent()}
                </div>
                {renderTabsPageSection2DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            tabsPage: Selectors.getTabsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchTabsPageSection1Column1Data: bindActionCreators(Services.fetchTabsPageSection1Column1Data, dispatch),
            fetchAccordionsPageSection2Data: bindActionCreators(Services.fetchAccordionsPageSection2Data, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setIsHoverSection2ItemAccordionsPage: bindActionCreators(Actions.setIsHoverSection2ItemAccordionsPage, dispatch),
            setActivitySection1ItemAccordionsPage: bindActionCreators(Actions.setActivitySection1ItemAccordionsPage, dispatch),
            setActivitySection2ItemAccordionsPage: bindActionCreators(Actions.setActivitySection2ItemAccordionsPage, dispatch),
        };
    }
)(TabsPage);
 