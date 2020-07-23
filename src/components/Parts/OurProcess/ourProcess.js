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

import Loading from '../../SmallParts/Loading/loading';

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
   H45,
   H25,
   H19,
   EH3,
   EH2,
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

    const renderImg = (opt) => {
        switch(opt){
            case 'sketch':
                return Sketch;
            case 'process':
                return Process;
            case 'development':
                return Development;
            case 'design':
                return Design;
            case 'evaluation':
                return Evaluation;
            default: 
                return DefaultImage;
        }
    }

    const renderOurProcessItems = () => {
        return(
            <div className="our-process-items">{props.ourProcessDate.items.map((el,i) => {
                return(
                    <div key={i}>
                        <img src={renderImg(el.img)}/>
                        <EH2/>
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
            <EH3/>
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
            fetchOurProcessData: bindActionCreators(Services.fetchOurProcessData, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(OurProcess);
 