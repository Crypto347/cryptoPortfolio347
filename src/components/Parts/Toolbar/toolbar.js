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
    const [showOptionsRegular, setShowOptionsRegular] = useState(false);
    const [showOptionsAnimated, setShowOptionsAnimated] = useState(false);
    const [toolbarItemData, setToolbarItemData] = useState({});
    const [showOptionsLessThan3Regular, setShowOptionsLessThan3Regular] = useState(false)

    /**
    * Methods
    */

    useEffect(() => {
        props.initMenuItems(menuItemsArray);
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleMouseEnterMenuIcon = (opt) => {
        setIsHovering(true);
    }

    const handleMouseLeaveMenuIcon = (opt) => {
        setIsHovering(false);
    }

    const handleMouseEnterToolbarItem = (opt, data, id) => {
        props.setIsHoveringMenuItem(true, id);
        switch(opt){
            case 'regular':
                if(data.options.length > 2){
                    setShowOptionsRegular(true);
                    setToolbarItemData(data);
                }else{
                    setShowOptionsLessThan3Regular(true);
                }
              
                return;
            case 'animated': 
                setShowOptionsAnimated(true);
                setToolbarItemData(data);
                return;
        }
    }

    const handleMouseLeaveToolbarItem = (opt, data) => {
        props.setIsHoveringMenuItem(false);
        switch(opt){
            case 'regular':
                if(data.options.length > 2){
                    setShowOptionsRegular(false);
                    setToolbarItemData({});
                }else{
                    setShowOptionsLessThan3Regular(false);
                }
                return;
            case 'animated': 
                setShowOptionsAnimated(false);
                setToolbarItemData({});
                return;
        }
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
                            hoverToolbarItem={el.isHover}
                            toolbarMainColor={props.toolbarMainColor}
                            onMouseEnter={() => handleMouseEnterToolbarItem('regular', el, el.id)} 
                            onMouseLeave={() => handleMouseLeaveToolbarItem('regular', el)}
                            showOptionsRegular={showOptionsLessThan3Regular}
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

    const renderToolbar = (option) => {
        if(option === "regularScreen"){
            return(
                <>
                    <div className="toolbar-regular-screen">
                        <div className="toolbar-logo">crypto.</div>
                        <div className="toolbar-wrapper">
                            {renderToolbarItems()}
                            <div 
                                className="toolbar-menu"
                                onMouseEnter={handleMouseEnterMenuIcon} 
                                onMouseLeave={handleMouseLeaveMenuIcon}
                            >
                                {renderMenuDots()}
                            </div>
                        </div>
                    </div>
                    {/* <div onMouseLeave={() => handleMouseLeaveToolbarItem('regular', toolbarItemData)}> */}
                        {showOptionsRegular ? 
                        <div 
                        className="toolbar-regular-screen-options-full-width"
                        onMouseEnter={() => handleMouseEnterToolbarItem('regular', toolbarItemData, toolbarItemData.id)} 
                        onMouseLeave={() => handleMouseLeaveToolbarItem('regular', toolbarItemData)}
                        >
                            {renderToolbarOptions()}
                        </div> : null}
                    {/* </div> */}
                </>
            )
        }
        if(option === "regularScreenAnimated"){
            return(
                <CSSTransition
                    in={props.scrollingUp} 
                    timeout={5000}
                    // mountOnEnter
                    // unmountOnExit
                    classNames={{
                        enter: ``,
                        enterActive: `toolbar-regular-screen-animated-open`,
                        exit: ``,
                        exitActive: `toolbar-regular-screen-animated-close`,
                    }}
                >  
                    <div className={props.scrollingUp ? "toolbar-regular-screen-animated-mounted" : "toolbar-regular-screen-animated-unmounted"}>
                        <div className="toolbar-logo">crypto.</div>
                        <div className="toolbar-wrapper">
                            {renderToolbarItems()}
                            <div 
                                className="toolbar-menu"
                                onMouseEnter={handleMouseEnterMenuIcon} 
                                onMouseLeave={handleMouseLeaveMenuIcon}
                            >
                                {renderMenuDots()}
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            )
        }
        if(option === "smallScreen"){
            return(
                <div className="toolbar-small-screen">
                    <div className="toolbar-menu">
                        <div className="toolbar-menu-line"/>
                        <div className="toolbar-menu-line"/>
                        <div className="toolbar-menu-line"/>
                    </div>
                    <div className="toolbar-logo">crypto.</div>
                    <div/>
                </div>
            )
        }
        if(option === "smallScreenAnimated"){
            return(
                <CSSTransition
                    in={props.scrollingUp} 
                    timeout={5000}
                    // mountOnEnter
                    // unmountOnExit
                    classNames={{
                        enter: ``,
                        enterActive: `toolbar-small-screen-animated-open`,
                        exit: ``,
                        exitActive: `toolbar-small-screen-animated-close`,
                    }}
                >  
                    <div className={props.scrollingUp ? "toolbar-small-screen-animated-mounted" : "toolbar-small-screen-animated-unmounted"}>
                        <div className="toolbar-menu">
                            <div className="toolbar-menu-line"/>
                            <div className="toolbar-menu-line"/>
                            <div className="toolbar-menu-line"/>
                        </div>
                        <div className="toolbar-logo">crypto.</div>
                        <div/>
                    </div>
                </CSSTransition>
            )
        }
    }

    const renderToolbarOptions = () => {
        return(
            <>{toolbarItemData.options.map((el, i) => {
                return(
                    <div key={i} className="toolbar-option">
                        {renderToolbarOptionItems(el.array)}
                    </div>
                )
            })}</>
        )
    }

    const renderToolbarOptionItems = (itemsArray) => {
        return(
            <>{itemsArray.map((el, i) => {
                return(
                    <div key={i} className="toolbar-option-item">
                        {el.text}
                    </div>
                )
            })}</>
        )
    }

    /**
    * Markup
    */

    return(
        <> 
           {renderToolbar(props.style)}
        </> 
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
            setIsHoveringMenuItem: bindActionCreators(Actions.setIsHoveringMenuItem, dispatch)
        };
    }
)(withRouter(Toolbar));
 