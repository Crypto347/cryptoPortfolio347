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

import './countdownPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import CountdownItem from '../../../SmallParts/CountdownItem/countdownItem';
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
    H45
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * CountdownPage component definition and export
 */

export const CountdownPage = (props) => {

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

        if(props.countdownPage.section1Data.items.length === 0){
            props.fetchCountdownPageSection1Data();
        }
        if(props.countdownPage.section2Data.items.length === 0){
            props.fetchCountdownPageSection2Data();
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
        let el = document.getElementById("countdownPage");

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
                        page="countdownPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="countdownPage"
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
                        page="countdownPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="countdownPage"
                    />
                </>
            )
        }
    }
    
    const renderBackgroundColor = (section) => {
        switch(section) {
            case 'section1':
                return 'rgb(239, 239, 239)';
            case 'section2':
                return 'black';
            case 'section3':
            default:
                return 'white';
        }
    }
    
    const renderLoadingBackgroundColor = (section) => {
        switch(section) {
            case 'section1':
                case 'section3':
                return 'black';
            case 'section2':
            default:
                return 'white';
        }
    }

    const renderCountdownPageSection1Data = (arr) => {
        return(
            <div className="countdown-page-section1-data-items">{arr.items.map((el, i) => {
                return(
                    <CountdownItem
                        page="countdownPage"
                        key={i}
                        data={el}
                        numberColor="black"
                        textColor="nobel"
                    />
                )
            })}</div>
        )
    }

    const renderCountdownPageSection2Data = (arr) => {
        return(
            <div className="countdown-page-section2-data-items">{arr.items.map((el, i) => {
                return(
                    <CountdownItem
                        page="countdownPage"
                        key={i}
                        data={el}
                        numberColor="white"
                        textColor="white"
                    />
                )
            })}</div>
        )
    }

    const renderCountdownPageDataContent = (section, arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="countdown-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <Loading color={renderLoadingBackgroundColor(section)}/>
                </div>
            )
        }
        if(!arr.loading && !arr.error){
            switch(section){
                case 'section1':
                    return(
                        <>
                            {renderCountdownPageSection1Data(arr)}
                        </>
                    );
                case 'section2':
                    return(
                        <>
                            {renderCountdownPageSection2Data(arr)}
                        </>
                    );
            }
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="countdown-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${arr.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="countdown-page" id="countdownPage">
            {renderToolbars()}
            <div className="countdown-page-wrapper">
                <div className="countdown-page-header">
                    <H45 className="h45-nero-lustria">Countdown</H45>
                </div>
                <div className="grey-line"/>
                {renderCountdownPageDataContent("section1", props.countdownPage.section1Data)}
                {renderCountdownPageDataContent("section2", props.countdownPage.section2Data)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            countdownPage: Selectors.getCountdownPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchCountdownPageSection1Data: bindActionCreators(Services.fetchCountdownPageSection1Data, dispatch),
            fetchCountdownPageSection2Data: bindActionCreators(Services.fetchCountdownPageSection2Data, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(CountdownPage);
 