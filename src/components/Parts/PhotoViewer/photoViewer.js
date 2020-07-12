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
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import {
    bindActionCreators
} from 'redux';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './photoViewer.scss';

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
* Services
*/

import * as Services from "../../../service";

/**
* Icons
*/

import { 
    faChevronLeft,
    faChevronRight,
    faExpand
} from '@fortawesome/free-solid-svg-icons';


/**
* Utility
*/

import {
   H19
} from '../../UtilityComponents';

/**
* Images
*/



/**
* Constants
*/


/**
* PhotoViewer component definition and export
*/

export const PhotoViewer = (props) => {

    /**
    * State
    */

    // const [menuIsShown, setMenuIsShown] = useState(false);
    // const [menuDots, setMenuDots] = useState([1,2,3,4,5,6,7,8,9]);
    const [isHoveringExpand, setIsHoveringExpand] = useState(false);
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("off");
    const [isHoveringCloseButton, setIsHoveringCloseButton] = useState("off");

    /**
    * Methods
    */

    useEffect(() => {
        // props.fetchSection1Data();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'expand': 
                setIsHoveringExpand(true);
            break;
            case 'leftArrow': 
                setIsHoveringLeftArrow('on');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('on');
                break;
            case 'closeArrow': 
                setIsHoveringCloseButton('on');
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'expand': 
                setIsHoveringExpand(false);
                break;
            case 'leftArrow': 
                setIsHoveringLeftArrow('off');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('off');
                break;
            case 'closeArrow': 
                setIsHoveringCloseButton('off');
                break;
        }
    }

    const renderImages = () => {
        return(
            <div className="photoViewer-image-items">{props.imagesArray.map((el,i) => {
                return(
                    <div key={i}>
                     
                    </div>
                )
            })}</div>
        )
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "leftArrow"){
            switch(isHovering){
                case 'init':
                    return "photoViewer-navigation-left-arrow";
                case 'on':
                    return "photoViewer-navigation-left-arrow-hover-on";
                case 'off':
                    return "photoViewer-navigation-left-arrow-hover-off"
            }
        }
        if(opt === "rightArrow"){
            switch(isHovering){
                case 'init':
                    return "photoViewer-navigation-right-arrow";
                case 'on':
                    return "photoViewer-navigation-right-arrow-hover-on";
                case 'off':
                    return "photoViewer-navigation-right-arrow-hover-off"
            }
        }
    }


    /**
    * Markup
    */

    return(
        <div className="photoViewer">
            <div className="photoViewer-wrapper">
                <div className="photoViewer-full-screen">
                    <FontAwesomeIcon 
                        icon={faExpand} 
                        size="lg" 
                        color={isHoveringExpand ? "white" : "rgb(155, 155, 155)"}
                        onClick={() => iconOnClick(props.imagesArray)}
                        onMouseEnter={() => handleMouseEnter('expand')} 
                        onMouseLeave={() => handleMouseLeave('expand')}
                    />
                </div>
                 {/* {renderImages()} */}
                <div className="photoViewer-image-items"></div>
                <div className="photoViewer-toolbar">
                    <div className="photoViewer-navigation">
                        <div 
                            className={renderClassName("leftArrow", isHoveringLeftArrow)}
                            onMouseEnter={() => handleMouseEnter('leftArrow')} 
                            onMouseLeave={() => handleMouseLeave('leftArrow')}
                        >
                            <div className="arrow-top-line"/>
                            <div className="arrow-bottom-line"/>
                        </div>
                        <div 
                            className={renderClassName("rightArrow", isHoveringRightArrow)}
                            onMouseEnter={() => handleMouseEnter('rightArrow')} 
                            onMouseLeave={() => handleMouseLeave('rightArrow')}
                        >
                            <div className="arrow-top-line"/>
                            <div className="arrow-bottom-line"/>
                        </div>
                    </div>
                    <H19 className="h19-nobel">{`4 / 8`}</H19>
                    <div 
                        className="photoViewer-close"
                        onMouseEnter={() => handleMouseEnter('closeButton')} 
                        onMouseLeave={() => handleMouseLeave('closeButton')}
                    >
                        
                    </div>
                </div>
            </div>
            {/* {renderSection1DataItems()} */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // section1DataItems: Selectors.getSection1DateItemsState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(PhotoViewer);
 