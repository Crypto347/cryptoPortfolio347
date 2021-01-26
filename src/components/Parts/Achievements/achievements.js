/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
 * Styles
 */

import './achievements.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import AchievementItem from '../../SmallParts/AchievementItem/achievementItem';

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
    H19,
    EH80
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Achievements component definition and export
 */

export const Achievements = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [showComponent, setShowComponent] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component

        if(props.achievementsData.items.length === 0){
            props.fetchAchievementsData();
        }
       
        // Event Listeners
        
        window.addEventListener('scroll', handleScroll);

        // Cleaning the unmounted component
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("achievements")

        // Render the component only when it appears on the screen

        if(scrollHeight >= el.offsetTop - window.innerHeight/2 - 400){
            setShowComponent(true);
        }

        // Render the component only when it appears on a vertically oriented screen

        if(size.width - size.height < 0){
            if(scrollHeight >= el.offsetTop - size.height/2 - 900){
                setShowComponent(true);
            }
        }
    }

    const renderAchievementsData = () => {
        if(!props.achievementsData.loading && !props.achievementsData.error){
            return(
                <div className="achievements-data-items">{props.achievementsData.items.map((el,i) => {
                    return(
                        <AchievementItem
                            key={i}
                            number={el.number}
                            achievement={el.achievement}
                        />
                    )
                })}</div>
            )
        }
    }

    const renderAchievements = () => {
        if(props.achievementsData.loading && !props.achievementsData.error){
            return(
                <div className="achievements-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.achievementsData.loading && !props.achievementsData.error){
            return(
                <>
                   {showComponent ? renderAchievementsData() : null}
                </>
            )
        }
        if(!props.achievementsData.loading && props.achievementsData.error){
            return(
                <div className="achievements-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.achievementsData.error}`}</H19>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div 
            className="achievements"
            id="achievements"
        >
            <EH80/>
            {renderAchievements()}
            <EH80/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            achievementsData: Selectors.getAchievementsDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchAchievementsData: bindActionCreators(Services.fetchAchievementsData, dispatch)
        };
    }
)(Achievements);
 