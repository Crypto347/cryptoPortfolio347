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

import './teamPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import TeamInformationCard from '../../../SmallParts/TeamInformationCard/teamInformationCard';
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
    EH135
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * TeamPage component definition and export
 */

export const TeamPage = (props) => {

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

        if(props.teamPage.section1Data.items.length === 0){
            props.fetchTeamPageSection1Data();
        }

        if(props.teamPage.section2Data.items.length === 0){
            props.fetchTeamPageSection2Data();
        }

        if(props.teamPage.section3Data.items.length === 0){
            props.fetchTeamPageSection3Data();
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
        let el = document.getElementById("teamPage");

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
                        page="teamPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="teamPage"
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
                        page="teamPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="teamPage"
                    />
                </>
            )
        }
    }

    const renderTeamPageSection1DataContent = () => {
        if(props.teamPage.section1Data.loading && !props.teamPage.section1Data.error){
            return(
                <div 
                    className="team-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.teamPage.section1Data.loading && !props.teamPage.section1Data.error){
            return(
                <div className="team-page-section-1-data">{props.teamPage.section1Data.items.map((el, i) => {
                    return(
                        <TeamInformationCard
                            photo={el.photo}
                            key={i}
                            name={el.name}
                            position={el.position}
                            instaName={el.instaName}
                            alt={el.alt}
                        />
                    )
                })}
                </div>
            )
        }
        if(!props.teamPage.section1Data.loading && props.teamPage.section1Data.error){
            return(
                <div 
                    className="team-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.teamPage.section1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderTeamPageSection2DataContent = () => {
        if(props.teamPage.section2Data.loading && !props.teamPage.section2Data.error){
            return(
                <div 
                    className="team-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.teamPage.section2Data.loading && !props.teamPage.section2Data.error){
            return(
                <div className="team-page-section-2-data">{props.teamPage.section2Data.items.map((el, i) => {
                    return(
                        <TeamInformationCard
                            photo={el.photo}
                            key={i}
                            name={el.name}
                            position={el.position}
                            instaName={el.instaName}
                            alt={el.alt}
                        />
                    )
                })}
                </div>
            )
        }
        if(!props.teamPage.section2Data.loading && props.teamPage.section2Data.error){
            return(
                <div 
                    className="team-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.teamPage.section2Data.error}`}</H15>
                </div>
            )
        }
    }

    const renderTeamPageSection3DataContent = () => {
        if(props.teamPage.section3Data.loading && !props.teamPage.section3Data.error){
            return(
                <div 
                    className="team-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.teamPage.section3Data.loading && !props.teamPage.section3Data.error){
            return(
                <div className="team-page-section-3-data">{props.teamPage.section3Data.items.map((el, i) => {
                    return(
                        <TeamInformationCard
                            photo={el.photo}
                            key={i}
                            name={el.name}
                            position={el.position}
                            instaName={el.instaName}
                            alt={el.alt}
                        />
                    )
                })}
                </div>
            )
        }
        if(!props.teamPage.section3Data.loading && props.teamPage.section3Data.error){
            return(
                <div 
                    className="team-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.teamPage.section3Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="team-page" id="teamPage">
            {renderToolbars()}
            <div className="team-page-wrapper">
                <div className="team-page-header">
                    <H45 className="h45-nero-lustria">Team</H45>
                </div>
                <div className="grey-line"/>
                <EH135/>
                {renderTeamPageSection1DataContent()}
                <EH135/>
                {renderTeamPageSection2DataContent()}
                <EH135/>
                {renderTeamPageSection3DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            teamPage: Selectors.getTeamPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchTeamPageSection1Data: bindActionCreators(Services.fetchTeamPageSection1Data, dispatch),
            fetchTeamPageSection2Data: bindActionCreators(Services.fetchTeamPageSection2Data, dispatch),
            fetchTeamPageSection3Data: bindActionCreators(Services.fetchTeamPageSection3Data, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
        };
    }
)(TeamPage);
 