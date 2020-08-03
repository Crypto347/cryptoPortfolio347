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
* Utility
*/

import {
   EH40,
   EH20,
   EH10,
   H19,
   H15,
   EW2
} from '../../UtilityComponents';

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

    // const [menuIsShown, setMenuIsShown] = useState(false);
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
                            // text={el.text}
                            // active={el.active}
                            // hoverToolbarItem={el.isHover}
                            toolbarMainColor={props.toolbarMainColor}
                            onMouseEnter={() => handleMouseEnterToolbarItem('regular', el, el.id)} 
                            onMouseLeave={() => handleMouseLeaveToolbarItem('regular', el)}
                            showOptionsRegular={showOptionsLessThan3Regular}
                            onMouseEnterAndLeaveOptionItem={props.setIsHoveringToolbarOptionItem} 
                            onMouseEnterAndLeaveSubOptionItem={props.setIsHoveringToolbarSubOptionItem}
                            renderClassName={(opt, isHover) => handleMouseLeaveToolbarOptionItem(opt, isHover)}
                            data={el}
                            // hasSubOptions={el.hasSubOptions}
                        />
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
                    {showOptionsRegular ? 
                    <div 
                        className="toolbar-regular-screen-options"
                        onMouseEnter={() => handleMouseEnterToolbarItem('regular', toolbarItemData, toolbarItemData.id)} 
                        onMouseLeave={() => handleMouseLeaveToolbarItem('regular', toolbarItemData)}
                    >
                        <div  className="grey-line"/>
                        <EH20/>
                        <EH10/>
                        {renderToolbarOptions()}
                        <EH10/>
                        <EH20/>
                    </div> : null}
                </>
            )
        }
        if(option === "regularScreenAnimated"){
            return(
                <div className="wrapper">
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
                    {showOptionsRegular ? 
                    <CSSTransition
                        in={props.scrollingUp} 
                        timeout={5000}
                        // mountOnEnter
                        // unmountOnExit
                        classNames={{
                            enter: ``,
                            enterActive: `toolbar-regular-screen-animated-options-open`,
                            exit: ``,
                            exitActive: `toolbar-regular-screen-animated-options-close`,
                        }}
                    >  
                        <div 
                            className="toolbar-regular-screen-animated-options"
                            onMouseEnter={() => handleMouseEnterToolbarItem('regular', toolbarItemData, toolbarItemData.id)} 
                            onMouseLeave={() => handleMouseLeaveToolbarItem('regular', toolbarItemData)}
                        >
                            <div  className="grey-line"/>
                            <EH20/>
                            <EH10/>
                            {renderToolbarOptions()}
                            <EH10/>
                            <EH20/>
                        </div>
                    </CSSTransition>  : null}
                </div>
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
            <div className="toolbar-regular-screen-options-wrapper">{toolbarItemData.options.map((el, i) => {
                return(
                        <div 
                            key={i} 
                            className="toolbar-option"
                        >
                            <div className="toolbar-option-header-text">
                                <H19 className="h19-matterhorn-teko">{el.header}</H19>
                            </div>
                            {renderToolbarOptionItems(el)}
                        </div>
                )
            })}</div>
        )
    }

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
                return "toolbar-option-item-text-active";
            }
            switch(isHovering){
                case 'init':
                    return "toolbar-option-item-text";
                case 'on':
                    return "toolbar-option-item-text-hover-on";
                case 'off':
                    return "toolbar-option-item-text-hover-off";
            }
            
        }
       
    }

    const renderToolbarOptionItems = (obj) => {
        return(
            <>{obj.array.map((el, i) => {
                let pathOfIds = [obj.id, el.id]
                return(
                    <div key={i} className="toolbar-option-item">
                        {el.active ? 
                        <div className="arrow-wrapper-active">
                            <div className="arrow-horizontal-line"></div>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div> : null}
                        {!el.active ? 
                        <div className={renderClassName("arrow", el.isHover)}>
                            <div className="arrow-horizontal-line"></div>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div> : null}
                        <div 
                            className={renderClassName("text", el.isHover, el.active)}
                            onMouseEnter={() => props.setIsHoveringToolbarOptionItem("on", pathOfIds)} 
                            onMouseLeave={() => props.setIsHoveringToolbarOptionItem("off", pathOfIds)}
                        >
                            {/* <div className={renderClassName("text", el.isHover)}> */}
                                <H15 className="h15-black-lustria">{el.text}</H15>
                            {/* </div> */}
                        </div>
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
            setIsHoveringMenuItem: bindActionCreators(Actions.setIsHoveringMenuItem, dispatch),
            setIsHoveringToolbarOptionItem: bindActionCreators(Actions.setIsHoveringToolbarOptionItem, dispatch),
            setIsHoveringToolbarSubOptionItem: bindActionCreators(Actions.setIsHoveringToolbarSubOptionItem, dispatch),
        };
    }
)(withRouter(Toolbar));
 