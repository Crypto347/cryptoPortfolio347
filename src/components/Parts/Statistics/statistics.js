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

import Swiper from '../../../library/Swiper/swiper';

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
    EH20,
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
    useWindowSize
} from '../../../Hooks/useWindowSize';



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

//    const size = useWindowSize();

    /**
    * Methods
    */

    useEffect(() => {
        props.fetchStatisticsData();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderStatisticsData = () => {
        return(
            <div className="statistics-items">{props.statisticsData.items.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="statistics-item"
                    >
                        <div className="statistics-item-wrapper">
                            <H25 className="h25-black-teko">{el.label}</H25>
                            <H25 className="h25-black-teko">{`${el.percent}%`}</H25>
                        </div>
                        <div className="statistics-item-percent-line"/>
                        <EH10/>
                        <EH20/>
                    </div>
                )
            })}</div>
        )
    }
    /**
    * Markup
    */

    return(
        <>
            <EH90/>
            <div className="statistics">
                <div className="statistics-wrapper">
                    <H65 className="h65-black-teko">Love Design.</H65>
                    <H65 className="h65-black-lustria">With Your Soul</H65>
                </div>
                <EW3/>
                {renderStatisticsData()}
            </div>
            <EH90/>
        </>
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
 