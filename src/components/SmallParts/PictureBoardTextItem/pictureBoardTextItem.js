/**
* Libraries
*/

import React, {
    useState
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './pictureBoardTextItem.scss';

/**
* Utility
*/

import {
    H3,
    H6,
    EH0
} from '../../UtilityComponents';

/**
* Icons
*/

import { 
    faEye
} from '@fortawesome/free-solid-svg-icons';

/**
* Images
*/

// import StoryImage1 from '../../../images/photo-1527358043728-909898958b29.jpg';
// import StoryImage2 from '../../../images/rocking-chairs-white-chairs-rockers.jpg';
// import StoryImage3 from '../../../images/coffee-latte-art-coffee-shop.jpg';
// import StoryImage4 from '../../../images/coffee-cup-latte-cappuccino.jpg';
// import StoryImage5 from '../../../images/coffee-cup-beverage-food-photo.jpg';
// import StoryImage6 from '../../../images/white-bowl-beside-glass-cup.jpg';
// import DefaultImage from '../../../images/error.jpg';

/**
* Cnstants
*/

// import * as Colors from '../../../constants/colors';

/**
* PictureBoardTextItem component definition and export
*/

export const PictureBoardTextItem = (props) => {

    /**
    * State
    */

    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    // const loadImage = (img) => {
    //     switch(img) {
    //         case 'image1':
    //             return StoryImage1;
    //         case 'image2':
    //             return StoryImage2;
    //         case 'image3':
    //             return StoryImage3;
    //         case 'image4':
    //             return StoryImage4;
    //         case 'image5':
    //             return StoryImage5;
    //         case 'image6':
    //             return StoryImage6;
    //         default:
    //             return DefaultImage;
    //     }
    // }

    // const onClick = (obj) => {
    //     props.history.push(`/crypto-cafe/${props.path}`,{obj, comment: true});
    // }

    /**
    * Markup
    */

    return(
        <div 
            className="picture-board-text-item"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <H6 className="h6-nobel">{props.header}</H6>
                <EH0/>
                <H3 className={isHovering ? "h3-white-teko" : "h3-nero-teko"}>{props.text}</H3>
            </div>
            <div className="picture-board-text-item-icon">
                <FontAwesomeIcon icon={faEye} size="1x" color={isHovering ? "white" : "rgb(37, 37, 37)"}/>
            </div>
        </div>
    );
}

export default PictureBoardTextItem;
