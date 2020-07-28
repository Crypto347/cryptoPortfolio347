/**
* Libraries
*/

import React, {
    useState, 
    useEffect,
    useRef
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import {
    connect
} from 'react-redux';

import {
    withRouter
} from 'react-router-dom';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './achievementItem.scss';

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
* Utility
*/

import {
    H25,
    H15,
    EH10,
    EH20
} from '../../UtilityComponents';

/**
* AchievementItem component definition and export
*/

export const AchievementItem = (props) => {

    /**
    * State
    */

    const [value, setValue] = useState(0);
    const [delay, setDelay] = useState(70);

    /**
    * Methods
    */
   
    useEffect(() => {
        // let timer = setTimeout(() => {
        //     setShowPercent(true);
        // }, 500);

        // return () => clearTimeout(timer);
    }, []);

    useInterval(() => {
        setValue(value + 1);
    }, value === props.number ? null : delay)

    /**
    * Markup
    */

    return(
        <div className="achievement-item">
            <div className="achievement-item-number">
                {value}
                <div className="achievement">{props.achievement}</div>
            </div>
        </div>
    );
}

export default AchievementItem;
 