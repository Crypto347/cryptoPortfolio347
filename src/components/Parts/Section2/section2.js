/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

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
 * Services
 */

import * as Services from "../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import {
   H25,
   H130,
   EH40,
   EH80
} from '../../UtilityComponents';

/**
 * Section2 component definition and export
 */

export const Section2 = (props) => {

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component

        if(props.pictureBoard.items.length === 0){
            props.fetchPictureBoard();
        }

        if(props.ourProcessDate.items.length === 0){
            props.fetchOurProcessData();
        }

    }, []);

    const renderClassName = (pictureBoardLoading, pictureBoardError, ourProcessLoading, ourProcessError) => {
        // Style for loading and error cases for different parts of the section

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
                <EH40/>
                <H25 className="h25-white-lustria">Lorem ipsum dolor sit amet, consectetur ad.</H25>
                <EH80/>
                <PictureBoard/>
                <EH80/>
                <OurProcess
                    component="homeSection2"
                    header="Our Process"
                    data={props.ourProcessDate}
                />
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
            fetchOurProcessData: bindActionCreators(Services.fetchOurProcessData, dispatch),
        };
    }
)(Section2);
 