/**
 * Libraries
 s*/

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
 s*/

import './section2.scss';

/**
 * Components
 s*/

import PictureBoard from '../../Parts/PictureBoard/pictureBoard';
import OurProcess from '../../Parts/OurProcess/ourProcess';

/**
 * Services
 s*/

import * as Services from "../../../service";

/**
 * Selectors
 s*/

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 s*/

import {
   H25,
   H130,
   EH40,
   EH80
} from '../../UtilityComponents';

/**
 * Section2 component definition and export
 s*/

export const Section2 = (props) => {

    /**
     * State
     s*/

    /**
     * Methods
     s*/

    useEffect(() => {
        props.fetchPictureBoard();
    }, []);

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
     s*/

    return(
        <div className={renderClassName(props.pictureBoard.loading, props.pictureBoard.error, props.ourProcessDate.loading, props.ourProcessDate.error)}>
            <div className="section-2-wrapper">
                <H130 className="h130-white-teko">Work.</H130>
                <EH40/>
                <H25 className="h25-white-lustria">Lorem ipsum dolor sit amet, consectetur ad.</H25>
                <EH80/>
                <PictureBoard/>
                <EH80/>
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
            fetchPictureBoard: bindActionCreators(Services.fetchPictureBoard, dispatch)
        };
    }
)(Section2);
 