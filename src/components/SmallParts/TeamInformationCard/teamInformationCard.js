/**
* Libraries
*/

import React, {
    useState
} from 'react';

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

import './teamInformationCard.scss';

/**
* Images
*/

import Photo1 from '../../../images/teamPhotos/marcos-paulo-prado-Ur_QOF3mLyA-unsplash.jpg';
import Photo2 from '../../../images/teamPhotos/christina-wocintechchat-com-CtL3eP9ENyA-unsplash.jpg';
import Photo3 from '../../../images/teamPhotos/vinicius-wiesehofer-LS1e59caoNM-unsplash.jpg';
import Photo4 from '../../../images/teamPhotos/photo-1540569014015-19a7be504e3a.jpg';
import Photo5 from '../../../images/teamPhotos/zoe-fernandez--zqoE7jnQgw-unsplash.jpg';

/**
* Utility
*/

import {
    H40,
    H25,
    EH1
} from '../../UtilityComponents';

/**
* TeamInformationCard component definition and export
*/

export const TeamInformationCard = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    // const handleMouseEnter = () => {
    //     setIsHovering(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovering(false);
    // }

    // const arrowOnClick = (path) => {
    //     props.history.push(props.match.url + (path === "" ? path : `/${path}`))
    // }

    const loadPhoto = (img) => {
        switch(img){
            case 'Photo1':
                return Photo1; 
            case 'Photo2':
                return Photo2; 
            case 'Photo3':
                return Photo3; 
            case 'Photo4':
                return Photo4;
            case 'Photo5':
                return Photo5;
            default:
                return "";
        }
    }

    /**
    * Markup
    */

    return(
        <div className="team-information-card">
            <div className="team-information-card-image">
                <img src={loadPhoto(props.photo)}/>
            </div>
        </div>
    );
}

export default TeamInformationCard;
 