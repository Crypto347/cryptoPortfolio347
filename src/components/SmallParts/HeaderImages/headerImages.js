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
* Icons
*/

/**
* Styles
*/

import './headerImages.scss';

/**
* Components
*/


/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Image1 from '../../../images/headerImages/annie-spratt-QckxruozjRg-unsplash.jpg';
import Image2 from '../../../images/headerImages/john-schnobrich-2FPjlAyMQTA-unsplash.jpg';
import Image3 from '../../../images/headerImages/photo-2560610_1920.jpg';
import DefaultImage from '../../../images/error.jpg';

/**
* Constants
*/


/**
* HeaderImages component definition and export
*/

export const HeaderImages = (props) => {

    /**
    * State
    */
    const [isHovering, setIsHovering] = useState(null);
    const [img, setImg] = useState('image1');
    const [switchButtons, setSwitchButtons] = useState([
        {id: 1, active: true},
        {id: 2, active: false},
        {id: 3, active: false}
    ])

    /**
    * Methods
    */

    useEffect(() => {
        // props.initMenuItems(menuItemsArray);
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }
 

    const loadImage = (opt) => {
        switch(opt){
            case 'image1':
                return Image1;
            case 'image2':
                return Image2;
            case 'image3':
                return Image3;
            default:
                return DefaultImage;
        }
    }

    const renderClassName = (active) => {
        if(active){
            return "switch-button-activated";
        }
        if(!active&& isHovering === null){
            return "switch-button-deactivated";
        }
        if(!active && isHovering !== null){
            return "switch-button-deactivated-hiden";
        }
    }

    const renderSwitchButtons = () => {
        return(
            <div className="switch-buttons">{switchButtons.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="switch-button-wrapper"
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                         <CSSTransition
                                in={isHovering && !el.active} 
                                timeout={7000}
                                mountOnEnter
                                // unmountOnExit
                                classNames={{
                                    enter: '',
                                    enterActive: `switch-button-deactivated-elongated`,
                                    exit: '',
                                    exitActive: `switch-button-deactivated-shortened`
                                }}
                            > 
                            <div className={el.active ? "switch-button-activated" : "switch-button-deactivated"}/>
                        </CSSTransition>
                        <div className={renderClassName(el.active)}/>
                    </div>
                    // <ToolbarItem 
                    //     key={el.id}
                    //     text={el.text}
                    //     active={el.active}
                    //     menuIsShown={menuIsShown}
                    //     onClick={() => toolbarOnClick(el.path, el.id)}
                    // />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="header-images">
            {renderSwitchButtons()}
            <img src={loadImage(img)}/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // menuItems: Selectors.getMenuItemsState(state)
        };
    },
    (dispatch) => {
        return {
            // initMenuItems: bindActionCreators(Actions.initMenuItems, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(HeaderImages);
 