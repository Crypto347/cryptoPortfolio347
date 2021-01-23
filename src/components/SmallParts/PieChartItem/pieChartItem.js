/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useRef
} from 'react';

/**
 * Styles
 */

import './pieChartItem.scss';

/**
 * Components
 */

import ButtonWithText from '../../../library/ButtonWithText/buttonWithText';

/**
 * Utility
 */

import {
    H15,
    H19,
    H35,
    H65
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useInterval
} from '../../../Hooks/useInterval';


/**
 * PieChartItem component definition and export
 */

export const PieChartItem = (props) => {

    /**
     * State
     */

    const [value, setValue] = useState(0);
    const [delay, setDelay] = useState(100);

    /**
     * Methods
     */
   
    useEffect(() => {
    }, []);

    // useInterval(() => {
    //     setValue(value + 1);
    //     console.log(value)
    // }, value === props.percent ? null : delay)

    const renderClassName = (opt, key) => {
        console.log(key)
        if(opt === "pieChart"){
            switch(key){
                case 'pieChartsPageSection1Id1':
                case 'pieChartsPageSection2Id1':
                    return "pie-chart-item-id-1";
                case 'pieChartsPageSection1Id2':
                case 'pieChartsPageSection2Id2':
                    return "pie-chart-item-id-2";
                case 'pieChartsPageSection1Id3':
                case 'pieChartsPageSection2Id3':
                    return "pie-chart-item-id-3";
                case 'pieChartsPageSection1Id4':
                case 'pieChartsPageSection2Id4':
                    return "pie-chart-item-id-4";
            }
        }
    }
    
    
    const calcPercent = (percent) => {
        let dash = 72 * percent / 100;
        let gap = 72 - dash;
console.log(`${dash} ${gap}`)
        return `${dash} ${gap}`
    }
    
    /**
     * Markup
     */

    return(
        <div className="pie-chart-item">
            <svg width="100%" height="100%" viewBox="0 0 42 42">
                <circle 
                    className={renderClassName("pieChart", props.chartKey)}
                    cx="21" 
                    cy="21" 
                    r="11.5" 
                    fill="transparent" 
                    strokeWidth="0.5" 
                    // strokeDasharray="30 60"
                    strokeDasharray={calcPercent(props.percent)}
                    strokeDashoffset="18" // by default strokeDashoffset = 0 and the line starts at 90deg, 
                                        // to move at 0deg we should calc 90 deg of the circumference (2pr => 2 * 3.1415 * 11.5 = 72)
                                        // which equals (72 + 90deg / 360deg = 18)              
                ></circle>
            </svg>
        </div>

        
    );
}

export default PieChartItem;
 