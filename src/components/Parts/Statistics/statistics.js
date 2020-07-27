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

import './statistics.scss';

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
* Statistics component definition and export
*/

export const Statistics = (props) => {

    /**
    * State
    */

    const [showComponent, setShowComponent] = useState(false)

    /**
    * Methods
    */

    useEffect(() => {
        props.fetchStatisticsData();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("statistics");
        console.log(scrollHeight, el.offsetTop - window.innerHeight/2 - 400)
        if(scrollHeight >= el.offsetTop - window.innerHeight/2 - 400){
            setShowComponent(true);
        }
    }

    const renderStatisticsData = () => {
        return(
            <div>{props.statisticsData.items.map((el,i) => {
                return(
                    <StatisticItem 
                        key={i}
                        label={el.label}
                        percent={el.percent}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div 
            className="statistics-outer-wrapper" 
            id="statistics"
        >
            <EH90/>
            {showComponent ? 
            <div className="statistics-inner-wrapper">
                <div className="statistics-wrapper">
                    <H65 className="h65-black-teko">Love Design.</H65>
                    <H65 className="h65-black-lustria">With Your Soul</H65>
                </div>
                <EW3/>
                <EH25/>
                <EH25/>
                {renderStatisticsData()}
            </div> : null }
            <EH90/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            statisticsData: Selectors.getStatisticsDataState(state),
            // ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchStatisticsData: bindActionCreators(Services.fetchStatisticsData, dispatch),
          
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Statistics);
 