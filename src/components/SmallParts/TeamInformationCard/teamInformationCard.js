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
    EH40,
    EH25
} from '../../UtilityComponents';

/**
* TeamInformationCard component definition and export
*/

export const TeamInformationCard = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();

    const [isHovering, setIsHovering] = useState("init");
    const [cardHeight, setCardHeight] = useState(0);

    /**
    * Methods
    */

    const handleMouseEnter = () => {
        setIsHovering("on");
        handleResize();
    }

    const handleMouseLeave = () => {
        setIsHovering("off");
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

    const iconOnClick = (name, instaName) => {
        switch(name){
            case 'Marcos Paulo':
                return window.open(`https://www.instagram.com/${instaName}`);
            case 'Christina Kinslee':
                return window.open(`https://www.instagram.com/${instaName}`);
            case 'Charlotte Lynn':
                return window.open(`https://www.instagram.com/${instaName}`);
            case 'James Wilson':
                return window.open(`https://www.instagram.com/${instaName}`);
            case 'Zoe Fernandez':
                return window.open(`https://www.instagram.com/${instaName}`);
            default:
                return window.open(`https://www.instagram.com/`);
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "teamInfoCard"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "team-information-card-info-hover-on";
                case 'off':
                    return "team-information-card-info-hover-off"
            }
        }
        if(opt === "teamCardImage"){
            switch(isHovering){
                case 'init':
                    return "team-information-card-image-wrapper";
                case 'on':
                    return "team-information-card-image-wrapper-hover-on";
                case 'off':
                    return "team-information-card-image-wrapper-hover-off"
            }
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
                <div className={renderClassName("teamCardImage", isHovering)}>
                    <img 
                        id="img"
                        src={loadPhoto(props.photo)}
                    />
                </div>
                {isHovering ? 
                <div 
                    className={renderClassName("teamInfoCard", isHovering)}
                    style={{height: `${cardHeight}px`}}
                >
                    <H25 className="h25-white-teko">{props.name}</H25>
                    <H15 className="h15-white-lustria">{props.position}</H15>
                    <EH25/>
                    <FontAwesomeIcon 
                        icon={faInstagram} 
                        size="1x" 
                        className="team-information-card-icon"
                        onClick={() => iconOnClick(props.name, props.instaName)}
                    />
                    <EH40/>
                </div> 
                :  null}
            </div>
           
        </div>
    );
}

export default TeamInformationCard;
 