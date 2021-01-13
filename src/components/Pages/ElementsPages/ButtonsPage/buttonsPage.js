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

import './buttonsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import AccordionItem from '../../../SmallParts/AccordionItem/accordionItem';
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
 * ButtonsPage component definition and export
 */

export const ButtonsPage = (props) => {

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

        if(props.buttonsPage.section1Data.items.length === 0){
            props.fetchButtonsPageSection1Data();
        }
        if(props.buttonsPage.section2Data.items.length === 0){
            props.fetchButtonsPageSection2Data();
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
        let el = document.getElementById("buttonsPage");

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
                        page="buttonsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="buttonsPage"
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
                        page="buttonsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="buttonsPage"
                    />
                </>
            )
        }
    }

    const renderButtonsPageSection1Data = () => {
        return(
            <div className="accordions-page-section1-items">{props.buttonsPage.section1Data.items.map((el, i) => {
                // return(
                //     <div key={i}>
                //         <AccordionItem 
                //             style="simple"
                //             obj={el}
                //             activateAccordionItem={props.setActivitySection1ItemAccordionsPage}
                //             iconType="plusIcon"
                //             option={opt}
                //         />
                //     </div>
                // )
            })}</div>
        )
    }

    const renderButtonsPageSection2Data = () => {
        return(
            <div className="accordions-page-section2-items">{props.buttonsPage.section2Data.items.map((el, i) => {
                // return(
                //     <div key={i}>
                //         <AccordionItem
                //             style="hoverBlackAndWhite"
                //             hoverEffect
                //             obj={el}
                //             setIsHoverAccordionItem={props.setIsHoverSection2ItemAccordionsPage}
                //             activateAccordionItem={props.setActivitySection2ItemAccordionsPage}
                //             iconType="plusIcon"
                //         />
                //     </div>
                // )
            })}</div>
        )
    }

    const renderButtonsPageSection1DataContent = () => {
        if(props.buttonsPage.section1Data.loading && !props.buttonsPage.section1Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.buttonsPage.section1Data.loading && !props.buttonsPage.section1Data.error){
            return(
                <div className="accordions-page-section1-data-wrapper">
                    {renderButtonsPageSection1Data()}
                </div>
            )
        }
        if(!props.buttonsPage.section1Data.loading && props.buttonsPage.section1Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.buttonsPage.section1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderButtonsPageSection2DataContent = () => {
        if(props.buttonsPage.section2Data.loading && !props.buttonsPage.section2Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.buttonsPage.section2Data.loading && !props.buttonsPage.section2Data.error){
            return(
                <div className="accordions-page-section2-data-wrapper">
                    {renderButtonsPageSection2Data()}
                </div>
               
            )
        }
        if(!props.buttonsPage.section2Data.loading && props.buttonsPage.section2Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.buttonsPage.section2Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="accordions-page" id="buttonsPage">
            {renderToolbars()}
            <div className="accordions-page-wrapper">
                <div className="accordions-page-header">
                    <H45 className="h45-nero-lustria">Buttons</H45>
                </div>
                <div className="grey-line"/>
                {renderButtonsPageSection1DataContent()}
                {renderButtonsPageSection2DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            buttonsPage: Selectors.getButtonsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchButtonsPageSection1Data: bindActionCreators(Services.fetchButtonsPageSection1Data, dispatch),
            fetchButtonsPageSection2Data: bindActionCreators(Services.fetchButtonsPageSection2Data, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setIsHoverSection2ItemAccordionsPage: bindActionCreators(Actions.setIsHoverSection2ItemAccordionsPage, dispatch),
            setActivitySection1ItemAccordionsPage: bindActionCreators(Actions.setActivitySection1ItemAccordionsPage, dispatch),
            setActivitySection2ItemAccordionsPage: bindActionCreators(Actions.setActivitySection2ItemAccordionsPage, dispatch),
        };
    }
)(ButtonsPage);
 