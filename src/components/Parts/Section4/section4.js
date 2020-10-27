/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './section4.scss';

/**
 * Components
 */

import Statistics from '../Statistics/statistics';
import Achievements from '../Achievements/achievements';

/**
 * Section4 component definition and export
 */

export const Section4 = () => {

    /**
     * State
     */

    /**
     * Methods
     */

    useEffect(() => {

    }, []);

    /**
     * Markup
     */

    return(
        <div className="section-4">
            <Statistics/>
            <Achievements/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // pictureBoard: Selectors.getPictureBoardItemsState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchPictureBoard: bindActionCreators(Services.fetchPictureBoard, dispatch)
        };
    }
)(Section4);
 