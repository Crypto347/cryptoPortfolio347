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

import './pictureBoard.scss';

/**
* Components
*/

import PictureBoardTextItem from '../../SmallParts/PictureBoardTextItem/pictureBoardTextItem';
import PictureBoardImageItem from '../../SmallParts/PictureBoardImageItem/pictureBoardImageItem';

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
* PictureBoard component definition and export
*/

export const PictureBoard = (props) => {

    /**
    * State
    */

    // const [menuDots, setMenuDots] = useState([1,2,3,4,5,6,7,8,9]);
    // const [isHovering, setIsHovering] = useState(null);

    /**
    * Methods
    */

    useEffect(() => {
        
        // props.fetchSection1Data();
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
                if(el.option === "text"){
                    return(
                        // <div className="picture-board-item" key={i}>
                            <PictureBoardTextItem 
                                key={i}
                                id={el.id}
                                option={el.option}
                                header={el.header}
                                text={el.text}
                                imagesArray={el.pictures}
                                // path={el.path}
                            />
                        // </div>
                    )
                }else{
                    return(
                        // <div className="picture-board-item" key={i}>
                            <PictureBoardImageItem  
                                key={i}
                                id={el.id}
                                option={el.option}
                                imagesArray={el.pictures}
                                // coordX={}
                                // header={el.header}
                                // text={el.text}
                                // path={el.path}
                            />
                        // </div>
                    )
                }
            })}</div>
        )
    }


    /**
    * Markup
    */

    return(
        <div className="picture-board" id="pictureBoard">
            {renderPictureBoardItems()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            pictureBoard: Selectors.getPictureBoardItemsState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(PictureBoard);
 