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

import './accordionsPage.scss';

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
    H19,
    H45,
    EW30
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * AccordionsPage component definition and export
 */

export const AccordionsPage = (props) => {

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

        if(props.accordionsPage.section1Data.items.length === 0){
            props.fetchAccordionsPageSection1Data();
            props.fetchAccordionsPageSection2Data();
        }

        // Scroll to the top of the screen

        window.scrollTo(0, 0);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("accordionsPage");

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
                        page="accordionsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="accordionsPage"
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
                        page="accordionsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="accordionsPage"
                    />
                </>
            )
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'section2': 
                props.setIsHoverSection2ItemAccordionsPage("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'section2': 
                props.setIsHoverSection2ItemAccordionsPage("off", id);
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "itemBackground"){
            switch(isHovering){
                case 'init':
                    return "accordions-page-section2-item";
                case 'on':
                    return "accordions-page-section2-item-hover-on";
                case 'off':
                    return "accordions-page-section2-item-hover-off"
            }
        }
        if(opt === "section2Header"){
            switch(isHovering){
                case 'init':
                    return "h19-nero-poppins ";
                case 'on':
                    return "h19-black-poppins-white-hover-on";
                case 'off':
                    return "h19-black-poppins-white-hover-off"
            }
        }
        if(opt === "section2PlusIcon"){
            switch(isHovering){
                case 'init':
                    return "accordions-page-item-plus";
                case 'on':
                    return "accordions-page-item-plus-hover-on";
                case 'off':
                    return "accordions-page-item-plus-hover-off"
            }
        }
    }
    
    const renderPlusIcon = (opt, isHover) => {
        return(
            <div className={renderClassName(opt, isHover)}>
                <div className="plus-horizontal-line"/>
                <div className="plus-vertical-line"/>
            </div>
        )
    }

    const renderAccordionsPageSection1Data = () => {
        return(
            <div className="accordions-page-section1-items">{props.accordionsPage.section1Data.items.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="accordions-page-section1-item"
                    >
                        <H19 className="h19-black-poppins">{el.header}</H19>
                        {renderPlusIcon()}
                    </div>
                )
            })}</div>
        )
    }

    const renderAccordionsPageSection2Data = () => {
        return(
            <div className="accordions-page-section2-items">{props.accordionsPage.section2Data.items.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className={renderClassName("itemBackground", el.isHover)}
                        onMouseEnter={() => handleMouseEnter('section2', el.id)} 
                        onMouseLeave={() => handleMouseLeave('section2', el.id)}
                    >
                        <H19 className={renderClassName("section2Header", el.isHover)}>{el.header}</H19>
                        {renderPlusIcon("section2PlusIcon", el.isHover)}
                    </div>
                )
            })}</div>
        )
    }

    const renderAccordionsPageSection1DataContent = () => {
        if(props.accordionsPage.section1Data.loading && !props.accordionsPage.section1Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.accordionsPage.section1Data.loading && !props.accordionsPage.section1Data.error){
            return(
                <div className="accordions-page-section1-data-wrapper">
                    {renderAccordionsPageSection1Data()}
                    <EW30/>
                    {renderAccordionsPageSection1Data()}
                </div>
            )
        }
        if(!props.accordionsPage.section1Data.loading && props.accordionsPage.section1Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.accordionsPage.section1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderAccordionsPageSection2DataContent = () => {
        if(props.accordionsPage.section2Data.loading && !props.accordionsPage.section2Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.accordionsPage.section2Data.loading && !props.accordionsPage.section2Data.error){
            return(
                <div className="accordions-page-section2-data-wrapper">
                    {renderAccordionsPageSection2Data()}
                </div>
               
            )
        }
        if(!props.accordionsPage.section2Data.loading && props.accordionsPage.section2Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.accordionsPage.section2Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="accordions-page" id="accordionsPage">
            {renderToolbars()}
            <div className="accordions-page-wrapper">
                <div className="accordions-page-header">
                    <H45 className="h45-nero-lustria">Accordions</H45>
                </div>
                <div className="grey-line"/>
                {renderAccordionsPageSection1DataContent()}
                {renderAccordionsPageSection2DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            accordionsPage: Selectors.getAccordionsPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchAccordionsPageSection1Data: bindActionCreators(Services.fetchAccordionsPageSection1Data, dispatch),
            fetchAccordionsPageSection2Data: bindActionCreators(Services.fetchAccordionsPageSection2Data, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setIsHoverSection2ItemAccordionsPage: bindActionCreators(Actions.setIsHoverSection2ItemAccordionsPage, dispatch),
        };
    }
)(AccordionsPage);
 