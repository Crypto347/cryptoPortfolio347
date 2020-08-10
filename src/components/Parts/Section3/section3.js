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

import './section3.scss';

/**
* Components
*/

import Testimonials from '../Testimonials/testimonials';
import TeamInformation from '../TeamInformation/teamInformation';

/**
* Section3 component definition and export
*/

export const Section3 = () => {

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
        <div className="section-3">
            <Testimonials/>
            <TeamInformation/>
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
)(Section3);
 