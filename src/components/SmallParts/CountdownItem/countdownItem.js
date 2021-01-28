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
        const [startCountdownMinutes, setStartCountdownMinutes] = useState(false);
        const [startCountdownHours, setStartCountdownHours] = useState(false);
        const [startCountdownDays, setStartCountdownDays] = useState(false);
        const [startCountdownMonth, setStartCountdownMonth] = useState(false);
    /**
     * Methods
     */
   
    useEffect(() => {
    }, []);

    useInterval(() => {
        let sec = props.data.countdownValue.find(item => item.key === "seconds").val;
        let min = props.data.countdownValue.find(item => item.key === "minutes").val;

        props.countdownValue(props.data.key, "seconds", sec);
        if(!startCountdownMinutes && sec === 0){
            setStartCountdownMinutes(true);
            props.countdownValue(props.data.key, "minutes", min);
        }
    }, props.data.countdownValue[0].val === 0 ? null : 1000);

    useInterval(() => {
        let min = props.data.countdownValue.find(item => item.key === "minutes").val;
        let hours = props.data.countdownValue.find(item => item.key === "hours").val;

        props.countdownValue(props.data.key, "minutes", min);

        if(!startCountdownHours && min === 0){
            setStartCountdownHours(true);
            props.countdownValue(props.data.key, "hours", hours);
        }
    }, props.data.countdownValue[0].val === 0 ? null : (startCountdownMinutes ? 60000 : null));

    useInterval(() => {
        let hours = props.data.countdownValue.find(item => item.key === "hours").val;
        let days = props.data.countdownValue.find(item => item.key === "days").val;

        props.countdownValue(props.data.key, "hours", hours);

        if(!startCountdownDays && hours === 0){
            setStartCountdownDays(true);
            props.countdownValue(props.data.key, "days", days);
        }
    }, props.data.countdownValue[0].val === 0 ? null : (startCountdownHours ? 3600000 : null));

    useInterval(() => {
        let hours = props.data.countdownValue.find(item => item.key === "days").val;
        let month = props.data.countdownValue.find(item => item.key === "month").val;

        props.countdownValue(props.data.key, "days", days);

        if(!startCountdownMonth && hours === 0){
            setStartCountdownMonth(true);
            props.countdownValue(props.data.key, "month", month);
        }
    }, props.data.countdownValue[0].val === 0 ? null : (startCountdownDays ? 86400000 : null));

    useInterval(() => {
        let month = props.data.countdownValue.find(item => item.key === "month").val;

        props.countdownValue(props.data.key, "month", month);
    }, props.data.countdownValue[0].val === 0 ? null : (startCountdownMonth ? 55555 : null));

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
                    return "h25-white-lustria-countdown-page";
                case 'nobel':
                default:
                    return "h25-nobel-lustria-countdown-page";
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
 