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

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
    
} from '@fortawesome/fontawesome-free-brands';

/**
* Styles
*/

import './toolbar.scss';

/**
* Components
*/

import ToolbarItem from '../../SmallParts/ToolbarItem/toolbarItem';
import Backdrop from '../../../library/Backdrop/backdrop';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/


/**
* Constants
*/

import {
    menuItemsArray
} from '../../../constants/menuItems';

/**
* Toolbar component definition and export
*/

export const Toolbar = (props) => {

    /**
    * State
    */

    const [menuIsShown, setMenuIsShown] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        props.initMenuItems(menuItemsArray);
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // const handleScroll = () => {
    //     setMenuIsShown(false);
    // }

    // const toolbarOnClick = (path, id) => {
    //     props.history.push(props.match.url + (path === "" ? path : `/${path}`));
    //     props.activateMenuItem(id);
    // }

    // const toggleMenuButton = () => {
    //     setMenuIsShown(!menuIsShown);
    // }

    const renderToolbarItems = () => {
        return(
            <div className="toolbar-items">{props.menuItems.map((el,i) => {
                return(
                    <ToolbarItem 
                        key={i}
                        text={el.text}
                        active={el.active}
                    />
                    // <ToolbarItem 
                    //     key={el.id}
                    //     text={el.text}
                    //     active={el.active}
                    //     menuIsShown={menuIsShown}
                    //     onClick={() => toolbarOnClick(el.path, el.id)}
                    // />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="toolbar">
            <div className="toolbar-logo">crypto.</div>
            <div className="toolbar-wrapper">
                {renderToolbarItems()}
                <div className="toolbar-menu">
                    <div className="toolbar-menu-dot"/>
                    <div className="toolbar-menu-dot"/>
                    <div className="toolbar-menu-dot"/>
                    <div className="toolbar-menu-dot"/>
                    <div className="toolbar-menu-dot"/>
                    <div className="toolbar-menu-dot"/>
                    <div className="toolbar-menu-dot"/>
                    <div className="toolbar-menu-dot"/>
                    <div className="toolbar-menu-dot"/>
                </div>
            </div>
            
        </div>
    );
}

export default connect(
    (state) => {
        return {
            menuItems: Selectors.getMenuItemsState(state)
        };
    },
    (dispatch) => {
        return {
            initMenuItems: bindActionCreators(Actions.initMenuItems, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(withRouter(Toolbar));
 