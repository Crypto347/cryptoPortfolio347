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
* Actions
*/

import * as Actions from '../../../actions';

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
    H70,
    EH25,
    EH40
} from '../../UtilityComponents';

/**
* Constants
*/

import {
    menuFullscreenItemsArray
} from '../../../constants/menuFullscreenItems';

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
        props.initMenuFullscreenItems(menuFullscreenItemsArray);
    }, []);
    
    const renderClassName = (opt, isHovering, active) => {
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-hide";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
        if(opt === "text"){
            if(active){
                return "menu-fullscreen-item-text-active";
            }
            switch(isHovering){
                case 'init':
                    return "menu-fullscreen-item-text";
                case 'on':
                    return "menu-fullscreen-item-text-hover-on";
                case 'off':
                    return "menu-fullscreen-item-text-hover-off";
            }
        }
    }

    const renderMenuFullscreenItems = () => {
        return(
            <div className="menu-fullscreen-items">{props.menuFullscreenItems.map((el,i) => {
                return(
                    <div 
                        key={i} 
                        className={`menu-fullscreen-item${el.id}`}
                        onClick={() => props.setActivityOfMenuFullscreenItem("on", el.id)}
                    >
                        {el.active ? 
                        <div className="arrow-wrapper-active">
                            <div className="arrow-horizontal-line"/>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div> : null}
                        {!el.active ? 
                        <div className={renderClassName("arrow", el.isHover)}>
                            <div className="arrow-horizontal-line"/>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div> : null}
                        <div 
                            className={renderClassName("text", el.isHover, el.active)}
                            onMouseEnter={() => props.setIsHoveringMenuFullscreenItem("on", el.id)} 
                            onMouseLeave={() => props.setIsHoveringMenuFullscreenItem("off", el.id)}
                        >
                            <H70 className="h70-white-poppins">{el.text}</H70>
                        </div>
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="menu-fullscreen">
            <div className="menu-fullscreen-logo-close-wrapper">
                <div className={props.state === "on"? "menu-fullscreen-logo-appear" : "menu-fullscreen-logo"}>
                    C.
                </div>
                <div 
                    className="menu-fullscreen-close-button"
                    onClick={() => props.setMenuDotsState("off", props.page)}
                >
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
            {renderMenuFullscreenItems()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            menuFullscreenItems: Selectors.getMenuFullScreenItemsState(state)
        };
    },
    (dispatch) => {
        return {
            initMenuFullscreenItems: bindActionCreators(Actions.initMenuFullscreenItems, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setIsHoveringMenuFullscreenItem: bindActionCreators(Actions.setIsHoveringMenuFullscreenItem, dispatch),
            setActivityOfMenuFullscreenItem: bindActionCreators(Actions.setActivityOfMenuFullscreenItem, dispatch),
        };
    }
)(MenuFullScreen);
 