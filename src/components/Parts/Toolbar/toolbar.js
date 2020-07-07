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
    const [menuDots, setMenuDots] = useState([1,2,3,4,5,6,7,8,9]);
    const [isHovering, setIsHovering] = useState(null);

    /**
    * Methods
    */

    useEffect(() => {
        props.initMenuItems(menuItemsArray);
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }
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

    const renderMenuDots = () => {
        return(
            <>{menuDots.map((el,i) => {
                if(el === 1 || el === 2 || el === 4){
                    return(
                        <div key={i}>
                            <CSSTransition
                                in={isHovering} 
                                timeout={7000}
                                // mountOnEnter
                                // unmountOnExit
                                classNames={{
                                    enter: '',
                                    enterActive: `toolbar-menu-dot-with-animation-open-${el}`,
                                    exit: '',
                                    exitActive: `toolbar-menu-dot-with-animation-close-${el}`
                                }}
                            > 
                                <div className="toolbar-menu-dot"/>
                            </CSSTransition>
                        </div>
                        // <ToolbarItem 
                        //     key={el.id}
                        //     text={el.text}
                        //     active={el.active}
                        //     menuIsShown={menuIsShown}
                        //     onClick={() => toolbarOnClick(el.path, el.id)}
                        // />
                    )
                }else{
                    return(
                        <div key={i}
                            className="toolbar-menu-dot"
                        />
                    )
                }
            
            })}</>
        )
    }

    /**
    * Markup
    */

    return(
        <div className={props.className ? props.className : "toolbar"}>
            <div className="toolbar-logo">crypto.</div>
            <div className="toolbar-wrapper">
                {renderToolbarItems()}
                <div 
                    className="toolbar-menu"
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    {renderMenuDots()}
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
 