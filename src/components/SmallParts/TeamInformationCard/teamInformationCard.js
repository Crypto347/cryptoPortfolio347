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

/**
 * Styles
 */

import './teamInformationCard.scss';

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
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * Icons
 */

import { 
    faInstagram
} from '@fortawesome/fontawesome-free-brands';

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

    useEffect(()=>{
        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);

        // Cleaning the unmounted component
        return () =>  window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    })

    const handleResize = () => {
        // Set the height of the curtain on window resize
        
        let cardHeight = document.getElementById(props.imgKey).clientHeight;
        setCardHeight(cardHeight);
    }

    const handleMouseEnter = () => {
        setIsHovering("on");
        handleResize();
    }

    const handleMouseLeave = () => {
        setIsHovering("off");
    }

    const loadPhoto = (img) => {
        switch(img){
            case 'Photo1':
                return Images.PHOTO_1; 
            case 'Photo2':
                return Images.PHOTO_2; 
            case 'Photo3':
                return Images.PHOTO_3; 
            case 'Photo4':
                return Images.PHOTO_4;
            case 'Photo5':
                return Images.PHOTO_5;
            case 'Photo6':
                return Images.PHOTO_6; 
            case 'Photo7':
                return Images.PHOTO_7; 
            case 'Photo8':
                return Images.PHOTO_8; 
            case 'Photo9':
                return Images.PHOTO_9;
            case 'Photo10':
                return Images.PHOTO_10;
            case 'Photo11':
                return Images.PHOTO_11; 
            case 'Photo12':
                return Images.PHOTO_12; 
            case 'Photo13':
                return Images.PHOTO_13; 
            case 'Photo14':
                return Images.PHOTO_14;
            case 'Photo15':
                return Images.PHOTO_15;
            case 'Photo16':
                return Images.PHOTO_16; 
            case 'Photo17':
                return Images.PHOTO_17; 
            case 'Photo18':
                return Images.PHOTO_18; 
            case 'Photo19':
                return Images.PHOTO_19;
            case 'Photo20':
                return Images.PHOTO_20;
            case 'Photo21':
                return Images.PHOTO_21;
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
                    return "team-information-card-image";
                case 'on':
                    return "team-information-card-image-hover-on";
                case 'off':
                    return "team-information-card-image-hover-off"
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
            <div className={renderClassName("teamCardImage", isHovering)}>
                <img 
                    id={props.imgKey}
                    src={loadPhoto(props.photo)}
                    alt={props.alt}
                />
            </div>
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
        </div>
    );
}

export default TeamInformationCard;
 