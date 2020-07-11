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

import './ourProcess.scss';

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
* Utility
*/

import {
   EH1
} from '../../UtilityComponents';

/**
* Images
*/



/**
* Constants
*/


/**
* OurProcess component definition and export
*/

export const OurProcess = (props) => {

    /**
    * State
    */

    // const [menuDots, setMenuDots] = useState([1,2,3,4,5,6,7,8,9]);
    // const [isHovering, setIsHovering] = useState(null);

    /**
    * Methods
    */

    useEffect(() => {
        props.fetchOurProcessData();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // const handleMouseEnter = () => {
    //     setIsHovering(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovering(false);
    // }

    const renderPictureBoardItems = () => {
        return(
            <div className="picture-board-items">{props.pictureBoard.items.map((el,i) => {
                return(
                    // <div className="picture-board-item" key={i}>
                        <PictureBoardTextItem 
                            key={i}
                            id={el.id}
                            option={el.option}
                            header={el.header}
                            text={el.text}
                            // path={el.path}
                        />
                    // </div>
                )
            })}</div>
        )
    }


    /**
    * Markup
    */

    return(
        <div className="our-process">
            {/* {renderPictureBoardItems()} */}
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
            fetchOurProcessData: bindActionCreators(Services.fetchOurProcessData, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(OurProcess);
 