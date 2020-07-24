/**
* Libraries
*/

import React, {
    useState, 
    useEffect,
    useRef
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

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
* Icons
*/

import { 
    faInstagram
} from '@fortawesome/fontawesome-free-brands';

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
    H25,
    H15,
    EH3,
    EH2
} from '../../UtilityComponents';

/**
* TeamInformationCard component definition and export
*/

export const TeamInformationCard = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();

    const [isHovering, setIsHovering] = useState(false);
    const [cardHeight, setCardHeight] = useState(0);

    /**
    * Methods
    */

    const handleMouseEnter = () => {
        setIsHovering(true);
        handleResize();
    }

    const handleMouseLeave = () => {
        // setIsHovering(false);
    }

    useEffect(() => {
        resizeRef.current = handleResize;
    })

    useEffect(()=>{
        // let teamInfoCardHeight = document.getElementById("team-information-card").clientHeight;
        // setCardHeight(cardHeight);
        // console.log(teamInfoCardHeight)
        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);

    }, [])

    const handleResize = () => {
        let cardHeight = document.getElementById("img").clientHeight;
        setCardHeight(cardHeight);
    }
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
        <div 
            id="team-information-card"
            className="team-information-card"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="team-information-card-image">
                <img 
                    id="img"
                    src={loadPhoto(props.photo)}
                />
                {isHovering ? 
                <div 
                    className="team-information-card-info" 
                    style={{height: `${cardHeight}px`}}
                >
                    <H25 className="h25-white-teko">{props.name}</H25>
                    <H15 className="h15-white-lustria">{props.position}</H15>
                    <EH2/>
                    <FontAwesomeIcon 
                        icon={faInstagram} 
                        size="1x" 
                        className="team-information-card-icon"
                    />
                    <EH3/>
                </div> 
                :  null}
            </div>
           
        </div>
    );
}

export default TeamInformationCard;
 