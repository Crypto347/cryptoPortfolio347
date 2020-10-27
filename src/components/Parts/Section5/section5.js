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

import './section5.scss';

/**
 * Components
 */

import Video from '../Video/video';

/**
 * Section5 component definition and export
 */

export const Section5 = () => {

    /**
     * Methods
     */

    useEffect(() => {
        
    }, []);

    /**
     * Markup
     */

    return(
        <div className="section-5">
            <Video/>
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
)(Section5);
 