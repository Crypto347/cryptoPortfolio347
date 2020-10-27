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

import './achievementItem.scss';

/**
 * Hooks
 */

import {
    useInterval
} from '../../../Hooks/useInterval';

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
 