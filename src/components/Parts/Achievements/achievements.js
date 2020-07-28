/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './achievements.scss';

/**
* Components
*/

import StatisticItem from '../../SmallParts/StatisticsItem/statisticsItem';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Services
*/

import * as Services from "../../../service";

/**
* Utility
*/

import {
    H65,
    H25,
    EH90,
    EH25,
    EH10,
    EW3
} from '../../UtilityComponents';

/**
* Images
*/

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';



/**
* Constants
*/


/**
* Achievements component definition and export
*/

export const Achievements = (props) => {

    /**
    * State
    */

    const [showComponent, setShowComponent] = useState(true)

    /**
    * Methods
    */

    useEffect(() => {
        props.fetchAchievementsData();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    

    const handleScroll = () => {
        // let scrollHeight = document.body.scrollTop;
        // let el = document.getElementById("achievements");
        // if(scrollHeight >=el.offsetTop - window.innerHeight/2 - 400){
        //     setShowComponent(true);
        // }
    }

    const renderAchievementsData = () => {
        console.log(props.achievementsData.items)
        if(!props.achievementsData.loading && !props.achievementsData.error){
            return(
                <div>{props.achievementsData.items.map((el,i) => {
                    return(
                        <div 
                            key={i}
                            className="achievement-data-item"
                        >
                            <div className="achievement-data-item-number">{el.number}</div>
    
                        </div>
                    )
                })}</div>
            )
        }
    }

    /**
    * Markup
    */

    return(
        <>
            <EH90/>
            <div 
               className="achievement"
                id="achievements"
            >
                {showComponent ? renderAchievementsData() : null}
            </div>
            <EH90/>
        </>
    );
}

export default connect(
    (state) => {
        return {
            achievementsData: Selectors.getAchievementsDataState(state),
            // ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchAchievementsData: bindActionCreators(Services.fetchAchievementsData, dispatch),
          
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Achievements);
 