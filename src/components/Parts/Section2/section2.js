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

import './section2.scss';

/**
* Components
*/

import PictureBoard from '../../Parts/PictureBoard/pictureBoard';
import OurProcess from '../../Parts/OurProcess/ourProcess';

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
   H130,
   H25,
   EH3,
   EH4
} from '../../UtilityComponents';

/**
* Images
*/



/**
* Constants
*/


/**
* Section2 component definition and export
*/

export const Section2 = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        props.fetchPictureBoard();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const renderClassName = (pictureBoardLoading, pictureBoardError, ourProcessLoading, ourProcessError) => {
       
        let opt;
        if(!pictureBoardLoading && !pictureBoardError && !ourProcessLoading && !ourProcessError){
            opt = "noLoadingNoError";
        }
        if(pictureBoardLoading && !pictureBoardError && !ourProcessLoading && !ourProcessError || 
            !pictureBoardLoading && pictureBoardError && !ourProcessLoading && !ourProcessError){
            opt = "pictureBoardLoadingError";
        }
        if(ourProcessLoading && !ourProcessError && !pictureBoardLoading && !pictureBoardError || 
            !ourProcessLoading && ourProcessError && !pictureBoardLoading && !pictureBoardError){
            opt = "ourProcessLoadingError";
        }

        if(pictureBoardLoading && !pictureBoardError && ourProcessLoading && !ourProcessError || 
            !pictureBoardLoading && pictureBoardError && !ourProcessLoading && ourProcessError ||
            pictureBoardLoading && !pictureBoardError && !ourProcessLoading && ourProcessError || 
            !pictureBoardLoading && pictureBoardError && ourProcessLoading && !ourProcessError){
            opt = "pictureBoardAndOurProcessLoadingError";
        }

        switch(opt){
            case 'noLoadingNoError':
                return "section-2";
            case 'pictureBoardLoadingError':
                return "section-2-picture-board-loading-error";
            case 'ourProcessLoadingError':
                return "section-2-our-process-loading-error";
            case 'pictureBoardAndOurProcessLoadingError':
                return "section-2-picture-board-and-our-process-loading-error";
        }
    }

    /**
    * Markup
    */

    return(
        <div className={renderClassName(props.pictureBoard.loading, props.pictureBoard.error, props.ourProcessDate.loading, props.ourProcessDate.error)}>
            <div className="section-2-wrapper">
                <H130 className="h130-white-teko">Work.</H130>
                <EH3/>
                <H25 className="h25-white-lustria">Lorem ipsum dolor sit amet, consectetur ad.</H25>
                <EH3/>
                <EH3/>
                <PictureBoard/>
                <EH4/>
                <OurProcess/>
            </div>
            
        </div>
    );
}

export default connect(
    (state) => {
        return {
            pictureBoard: Selectors.getPictureBoardItemsState(state),
            ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchPictureBoard: bindActionCreators(Services.fetchPictureBoard, dispatch),
          
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Section2);
 