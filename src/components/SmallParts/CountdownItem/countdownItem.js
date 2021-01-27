/**
 * Libraries
 */

import React, {
    useState, 
    useEffect
} from 'react';

/**
 * Styles
 */

import './countdownItem.scss';

/**
 * Components
 */

import ButtonWithText from '../../../library/ButtonWithText/buttonWithText';

/**
 * Utility
 */

import {
    H19,
    H22,
    H70,
    
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
 * CountdownItem component definition and export
 */

export const CountdownItem = (props) => {

    /**
     * State
     */

    /**
     * Methods
     */
   
    useEffect(() => {
    }, []);

    useInterval(() => {
        props.countdownValue(props.data.key, "seconds", props.data.countdownValue[4].val - 1);
    }, 1000);

    useInterval(() => {
        props.countdownValue(props.data.key, "minutes", props.data.countdownValue[3].val - 1);
    }, 60000);

    useInterval(() => {
        props.countdownValue(props.data.key, "hours", props.data.countdownValue[2].val - 1);
    }, 3600000);

    useInterval(() => {
        props.countdownValue(props.data.key, "days", props.data.countdownValue[1].val - 1);
    }, 86400000);

    useInterval(() => {
        props.countdownValue(props.data.key, "month", countdownValueDays - 1);
    }, props.data.countdownValue[0].val === 0 ? null : 55555);

    const renderClassName = (opt, color) => {
        if(opt === "countdownValue"){
            switch(color){
                case 'white':
                    return "h70-white-poppins";
                case 'black':
                default:
                    return "h70-black-poppins";
            }
        }
        if(opt === "countdownName"){
            switch(color){
                case 'white':
                    return "h25-white-lustria";
                case 'nobel':
                default:
                    return "h25-nobel-lustria";
            }
        }
     
    }

    const setValue = (val) => {
        if(val < 10) return `0${val}`;
        else return val;
    }

    const renderCountdown = () => {
        return(
            <div className="countdown-item-wrapper">{props.data.countdownValue.map((el, i) => {
                return(
                    <div
                        key={i}
                        className="countdown-item"
                    >
                        <H70 className={renderClassName("countdownValue", props.numberColor)}>{setValue(el.val)}</H70>
                        <H22 className={renderClassName("countdownName", props.textColor)}>{el.name}</H22>
                   </div>
                )
            })}</div>
        )
    }

    /**
     * Markup
     */

    return(
        <div className="countdown">
            {renderCountdown()}
        </div>
    );
}

export default CountdownItem;
 