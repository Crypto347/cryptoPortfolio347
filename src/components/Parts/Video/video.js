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

import './video.scss';

/**
* Components
*/

import Loading from '../../SmallParts/Loading/loading';

/**
* Actions
*/

import * as Actions from '../../../actions';

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
   H45,
   H25,
   H19,
   EH40,
   EH25,
} from '../../UtilityComponents';

/**
* Video
*/

import vid1 from '../../../videos/team_work.mp4';
import vidCover from '../../../videos/john-schnobrich-unsplash.jpg';

/**
* Constants
*/


/**
* Video component definition and export
*/

export const Video = (props) => {

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
        <div className="video">
            <div className="video-wrapper">
                <img src={vidCover}/>
                <div className="video-play-button-wrapper">
                    <div className="video-play-button">
                    </div>
                </div>
            </div>
           
            {/* <video controls>
                <source src={vid1} type="video/mp4"/>
            </video> */}
            {/* <>Video by cottonbro from Pexels</> */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchOurProcessData: bindActionCreators(Services.fetchOurProcessData, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Video);
 