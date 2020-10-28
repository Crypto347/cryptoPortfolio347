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

import './ourProcess.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';

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
    H19,
    H25,
    H45,
    EH25,
    EH40
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * OurProcess component definition and export
 */

export const OurProcess = (props) => {

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component
        
        props.fetchOurProcessData();
    }, []);

    const renderImg = (opt) => {
        switch(opt){
            case 'sketch':
                return Images.SKETCH;
            case 'process':
                return Images.PROCESS;
            case 'development':
                return Images.DEVELOPMENT;
            case 'design':
                return Images.DESIGN;
            case 'evaluation':
                return Images.EVALUATION;
            default: 
                return "";
        }
    }

    const renderOurProcessItems = () => {
        return(
            <div className="our-process-items">{props.ourProcessDate.items.map((el,i) => {
                return(
                    <div key={i}>
                        <img src={renderImg(el.img)}/>
                        <EH25/>
                        <H25 className="h25-black-teko">{el.header}</H25>
                    </div>
                )
            })}</div>
        )
    }

    const renderOurProcess = () => {
        if(props.ourProcessDate.loading && !props.ourProcessDate.error){
            return(
                <div className="our-process-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.ourProcessDate.loading && !props.ourProcessDate.error){
            return(
                <>
                    {renderOurProcessItems()}
                </>
            )
        }
        if(!props.ourProcessDate.loading && props.ourProcessDate.error){
            return(
                <div className="picture-board-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.ourProcessDate.error}`}</H19>
                </div>
            )
        }
    }

    /**
     * Markup
     */

    return(
        <div className="our-process">
            <H45 className="h45-black-lustria">Our Process</H45>
            <EH40/>
            {renderOurProcess()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchOurProcessData: bindActionCreators(Services.fetchOurProcessData, dispatch)
        };
    }
)(OurProcess);
 