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

import './pictureBoardTextItem.scss';

/**
* Utility
*/

import {
    H15,
    H40,
    EH0
} from '../../UtilityComponents';

/**
* Icons
*/

import { 
    faEye
} from '@fortawesome/free-solid-svg-icons';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

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

    const iconOnClick = (array) => {
        props.photoViewerOpen('pictureBoardForTextItem', true, array);
    }

    /**
    * Markup
    */

    return(
        <div 
            className="picture-board-text-item"
            onClick={() => iconOnClick(props.imagesArray)}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <H15 className="h15-lustria-animation">{props.header}</H15>
                <EH0/>
                <H40 className={isHovering ? "h40-white-teko" : "h40-nero-teko"}>{props.text}</H40>
            </div>
            <div className="picture-board-text-item-icon">
                <FontAwesomeIcon 
                    icon={faEye} 
                    size="1x" 
                    color={isHovering ? "white" : "rgb(37, 37, 37)"}
                />
            </div>
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
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(PictureBoardTextItem);
