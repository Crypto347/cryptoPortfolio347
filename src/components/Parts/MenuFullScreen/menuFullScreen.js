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

import './menuFullScreen.scss';

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

import Sketch from '../../../images/ourProcess/main-home-gif-1.gif';
import Process from '../../../images/ourProcess/home-2-icon-2.png';
import Development from '../../../images/ourProcess/main-home-gif-2.gif';
import Design from '../../../images/ourProcess/home-2-icon-4.png';
import Evaluation from '../../../images/ourProcess/main-home-gif-3.gif';
import DefaultImage from '../../../images/error.jpg';

/**
* MenuFullScreen component definition and export
*/

export const MenuFullScreen = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        // props.fetchOurProcessData();
    }, []);

    // const renderImg = (opt) => {
    //     switch(opt){
    //         case 'sketch':
    //             return Sketch;
    //         case 'process':
    //             return Process;
    //         case 'development':
    //             return Development;
    //         case 'design':
    //             return Design;
    //         case 'evaluation':
    //             return Evaluation;
    //         default: 
    //             return DefaultImage;
    //     }
    // }

    // const renderOurProcessItems = () => {
    //     return(
    //         <div className="our-process-items">{props.ourProcessDate.items.map((el,i) => {
    //             return(
    //                 <div key={i}>
    //                     <img src={renderImg(el.img)}/>
    //                     <EH25/>
    //                     <H25 className="h25-black-teko">{el.header}</H25>
    //                 </div>
    //             )
    //         })}</div>
    //     )
    // }

    // const renderOurProcess = () => {
    //     if(props.ourProcessDate.loading && !props.ourProcessDate.error){
    //         return(
    //             <div className="our-process-loading-error">
    //                 <Loading color="black"/>
    //             </div>
    //         )
    //     }
    //     if(!props.ourProcessDate.loading && !props.ourProcessDate.error){
    //         return(
    //             <>
    //                 {renderOurProcessItems()}
    //             </>
    //         )
    //     }
    //     if(!props.ourProcessDate.loading && props.ourProcessDate.error){
    //         return(
    //             <div className="picture-board-loading-error">
    //                 <H19 className="h19-nobel-lora">{`${props.ourProcessDate.error}`}</H19>
    //             </div>
    //         )
    //     }
    // }

    /**
    * Markup
    */

    return(
        <div className="menu-fullscreen">
            <div className="menu-fullscreen-logo-close-wrapper">
                <div className="menu-fullscreen-logo">
                    C.
                </div>
                <div className="menu-fullscreen-close-button">
                    <div className="menu-fullscreen-close-button-first-line">
                        <div className="menu-fullscreen-close-button-left-half-line"/>
                        <div className="menu-fullscreen-close-button-right-half-line"/>
                    </div>
                    <div className="menu-fullscreen-close-button-second-line">
                        <div className="menu-fullscreen-close-button-left-half-line"/>
                        <div className="menu-fullscreen-close-button-right-half-line"/>
                    </div>
                    <div className="menu-fullscreen-close-button-third-line">
                        <div className="menu-fullscreen-close-button-left-half-line"/>
                        <div className="menu-fullscreen-close-button-right-half-line"/>
                    </div>
                </div>
            </div>
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
)(MenuFullScreen);
 