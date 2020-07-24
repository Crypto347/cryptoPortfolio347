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
    EH4,
    EH2
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
        // return(
        //     <div className="statistics-items">{props.ourProcessDate.items.map((el,i) => {
        //         return(
        //             <div key={i}>
        //                 <img src={renderImg(el.img)}/>
        //                 <EH2/>
        //                 <H25 className="h25-black-teko">{el.header}</H25>
        //             </div>
        //         )
        //     })}</div>
        // )
    }
    /**
    * Markup
    */

    return(
        <div className="statistics">
            <H65 className="h65-black-teko">Love Design.</H65>
            <H65 className="h65-black-lustria">With Your Soul</H65>
            {renderStatisticsData()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // testimonials: Selectors.getTestimonialsState(state),
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
 