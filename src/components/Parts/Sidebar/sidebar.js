/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    withRouter
} from 'react-router-dom';

/**
* Components
*/

import SidebarItem from '../../SmallParts/SidebarItem/sidebarItem';
// import SocialMediaIcon from '../../SmallParts/SocialMediaIcon/socialMediaIcon';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './sidebar.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

// import MyLogo from '../../../images/FinalLogo.png';
// import MyLogoCafe from '../../../images/myLogoCafe.png';
// import MyLogoCrypto from '../../../images/cryptoLogoText.png';

/**
* Constants
*/

import {
    menuItemsArray
} from '../../../constants/menuItems';

import {
    socialMediaIcons
} from '../../../constants/socialMediaIcons';

/**
* Sidebar component definition and export
*/

export const Sidebar = (props) => {

    /**
    * State
    */

    const [showOptions, setShowOptions] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        // props.initMenuItems(menuItemsArray);
    }, [])

    const sidebarOnClick = (path, id) => {
        // props.history.push(props.match.url + (path === "" ? path : `/${path}`));
        // props.activateMenuItem(id);
    }

    const handleMouseEnterSidebarItem = (data, id) => {
        props.setIsHoveringMenuItem("on", id);

                // if(data.options.length > 2){
                    setShowOptions(true);
                //     setSidebarItemData(data);
                // }else{
                //     setShowOptionsLessThan3Regular(true);
                // }
           
    }

    const handleMouseLeaveSidebarItem = (data) => {
        props.setIsHoveringMenuItem("off");

                // if(data.options.length > 2){
                    setShowOptions(false);
                //     setSidebarItemData({});
                // }else{
                //     setShowOptionsLessThan3Regular(false);
                // }
    }

    const renderSidebarItems = () => {
        return(
            <div className="sidebar-items">
                {props.menuItems.map((el) => {
                    return(
                        <SidebarItem 
                            key={el.id}
                            data={el}
                            onMouseEnter={() => handleMouseEnterSidebarItem(el, el.id)} 
                            onMouseLeave={() => handleMouseLeaveSidebarItem(el)}
                            showOptions={showOptions}
                            onMouseEnterAndLeaveOptionItem={props.setIsHoveringToolbarOptionItem} 
                            onMouseEnterAndLeaveSubOptionItem={props.setIsHoveringToolbarSubOptionItem}
                            // text={el.text}
                            // active={el.active}
                            // onClick={() => sidebarOnClick(el.path, el.id)}
                        />
                    )
            })}</div>
        )
    }

    const renderSocialMediaIcons = () => {
        return(
            <div className="icons-soc-med" >{socialMediaIcons.map((el, i) => {
                // return(
                //     <SocialMediaIcon
                //         key={i}
                //         name={el.name}
                //     />
                // )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="sidebar">
            <div style={{height: "68px",  borderBottom: "0.5px solid rgb(155, 155, 155)"}}/>
            {renderSidebarItems()}
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
            setIsHoveringMenuItem: bindActionCreators(Actions.setIsHoveringMenuItem, dispatch),
            setIsHoveringToolbarOptionItem: bindActionCreators(Actions.setIsHoveringToolbarOptionItem, dispatch),
            setIsHoveringToolbarSubOptionItem: bindActionCreators(Actions.setIsHoveringToolbarSubOptionItem, dispatch),
        };
    }
)(withRouter(Sidebar));
 