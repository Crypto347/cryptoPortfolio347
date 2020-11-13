/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './tabs.scss';

/**
 * Components
 */

import Icon from '../Icon/icon';

/**
 * Utility
 */

import {
    H17,
    H19
} from '../../UtilityComponents';

/**
 * Tabs component definition and export
 */

export const Tabs = (props) => {
    /**
     * State
     */

     const tab1 = useRef();
     const tab2 = useRef();
     const tab3 = useRef();
     const tab4 = useRef();
     const transitionRef = useRef();
     const [widthOfTab, setWidthOfTab] = useState(0);

    /**
     * Methods
     */

    useEffect(() => {
        if(props.array.length !== 0){
            let tabInfo = tab1.current.getBoundingClientRect()
            setWidthOfTab(tabInfo.width)
            console.log(tabInfo);
        }

        // Event Listeners
    
        const smooth = () => {
            transitionRef.current();
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('transitionend', smooth);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('transitionend', smooth);
        }
    }, []);

    useEffect(() => {
        transitionRef.current = smoothTransition;
    });

    // useEffect(() => {
    //     // Set the transition property to the initial value if its value is 0

    //     if(props.stoneWallPage.itemsStyleValues.img1?.transition === 0){
    //         props.updateItemsStyleValuesStoneWallPage("img1",{
    //             ...props.stoneWallPage.itemsStyleValues.img1,
    //             transition: 0.45
    //         });
    //     }

    // }, [props.stoneWallPage.itemsStyleValues.img1?.transition,props.stoneWallPage.itemsStyleValues.img2?.transition,
    //     props.stoneWallPage.itemsStyleValues.img3?.transition,props.stoneWallPage.itemsStyleValues.img4?.transition,
    //     props.stoneWallPage.itemsStyleValues.img5?.transition]);

    const smoothTransition = () => {
    //     if(props.stoneWallPage.itemsStyleValues.img1){
    //         props.updateItemsStyleValuesStoneWallPage("img1",{
    //             ...props.stoneWallPage.itemsStyleValues.img1,
    //             transition: 0
    //         });
    //     }
    }

    const handleMouseMove = (e) => {
        
        // console.log(e)
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'tab': 
                props.setIsHoverTab("on", id);
                let tab = setRef(id);
                setWidthOfTab(tab.current.getBoundingClientRect().width);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'tab': 
                props.setIsHoverTab("off", id);
                break;
        }
    }

    const tabItemOnClick = (e, path, id) => {
        switch(e.button){
            case 0:
                // Show and remember data of chosen tab on left mouse click on left mouse click

                let tab = setRef(id);
                setWidthOfTab(tab.current.getBoundingClientRect().width);

                props.setActiveTab("on", id);

                return;
            case 1:
                // Open current page in a new window on scroll wheel click
                window.open(path , "_blank");
                return;
            case 2:
                // Do nothing on right mouse click 
                return;
        }
    }

    const setRef = (id) => {
        switch(id){
            case 1:
                return tab1;
            case 2:
                return tab2;
            case 3:
                return tab3;
            case 4:
                return tab4;
        }
    }

    const renderTabsHeader = () => {
        return(
            <div className="tabs-header-items">{props.array.map((el, i) => {
                return(
                    <div
                        key={i}
                        ref={setRef(el.id)}
                        className={i === 0 ? "tabs-header-item-first" : "tabs-header-item"}
                        onMouseEnter={() => handleMouseEnter("tab", el.id)} 
                        onMouseLeave={() => handleMouseLeave("tab", el.id)}
                        onMouseDown={(e) => tabItemOnClick(e, props.location.pathname, el.id)}
                    >
                        <H17 className="h17-black-poppins">{el.header}</H17>
                    </div>
                )
            })}</div>
        )
    }

    const renderText = () => {
        if(props.array.length !== 0){
            let activeTabObj = props.array.find(item => item.active === "on");
            return(
                <div className="tabs-text">
                    <H17 className="h17-nobel-lustria">{activeTabObj.text}</H17>
                </div>
            ) 
        }
    }

    /**
     * Markup
     */

    return(
        <div className="tabs">
            {renderTabsHeader()}
            <div className="tabs-gray-line-wrapper">
                <div className="tabs-gray-line-long"/>
                <div 
                    className="tabs-gray-line-short"
                    style={{
                        width: `${widthOfTab}px`,
                        // translate: ,
                        // transform: 
                    }}
                />
            </div>
            {renderText()}
        </div>
    );
}

export default withRouter(Tabs);
