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
 * CountdownItem component definition and export
 */

export const CountdownItem = (props) => {

    /**
     * State
     */

    const [isHovering, setIsHovering] = useState("init");

    /**
     * Methods
     */
   
    useEffect(() => {
    }, []);


    /**
     * Markup
     */

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

    const renderCountdown = (arr) => {
        return(
            <div className="countdown-item-wrapper">{props.data.countdownnValue.map((el, i) => {
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

    return(
        <div className="countdown">
            {renderCountdown()}
        </div>
    );
}

export default CountdownItem;
 