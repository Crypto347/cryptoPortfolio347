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
    const resizeRef = useRef();
    const transitionRef = useRef();
    const [widthOfTab, setWidthOfTab] = useState(0);

    /**
     * Methods
     */

    useEffect(() => {
        if(props.array.length !== 0){
            let tabInfo = tab1.current.getBoundingClientRect()
            setWidthOfTab(tabInfo.width)
        }

        // Calculate tabs header holder coordinates 

        setTabCoordinateRange();

        // Event Listeners
    
        const smooth = () => {
            transitionRef.current();
        }

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);
        window.addEventListener('transitionend', smooth);
        
        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            window.removeEventListener('transitionend', smooth);
        }
    }, [props.tabsCoordinateRange.tabs[0].updated]);

    useEffect(() => {
        resizeRef.current = handleResize;
        transitionRef.current = smoothTransition;
    });

    useEffect(() => {
        // Set the transition property to the initial value if its value is 0

        if(props.tabsUnderlinesStyleValues.section1Column1?.transition === 0){
            props.updateTabsUnderlinesStyleValues("section1Column1",{
                ...props.tabsUnderlinesStyleValues.section1Column1,
                transition: 0.45
            });
        }
        if(props.tabsUnderlinesStyleValues.section1Column2?.transition === 0){
            props.updateTabsUnderlinesStyleValues("section1Column2",{
                ...props.tabsUnderlinesStyleValues.section1Column2,
                transition: 0.45
            });
        }
        if(props.tabsUnderlinesStyleValues.section2?.transition === 0){
            props.updateTabsUnderlinesStyleValues("section2",{
                ...props.tabsUnderlinesStyleValues.section2,
                transition: 0.45
            });
        }
    }, [props.tabsUnderlinesStyleValues.section1Column1?.transition,
        props.tabsUnderlinesStyleValues.section1Column2?.transition,
        props.tabsUnderlinesStyleValues.section2?.transition
    ]);

    const smoothTransition = () => {
        if(props.tabsUnderlinesStyleValues.section1Column1){
            props.updateTabsUnderlinesStyleValues("section1Column1",{
                ...props.tabsUnderlinesStyleValues.section1Column1,
                transition: 0
            });
        }
        if(props.tabsUnderlinesStyleValues.section1Column2){
            props.updateTabsUnderlinesStyleValues("section1Column2",{
                ...props.tabsUnderlinesStyleValues.section1Column2,
                transition: 0
            });
        }
        if(props.tabsUnderlinesStyleValues.section2){
            props.updateTabsUnderlinesStyleValues("section2",{
                ...props.tabsUnderlinesStyleValues.section2,
                transition: 0
            });
        }
    }

    const handleResize = () => {
        // Update tabs header holder coordinates on window resize
        
        setTabCoordinateRange();
    }

    const setTabCoordinateRange = () => {
        //Remember tab header holder coordinates

        let headerHolderCoordinateRange = [];
        if(props.page === "tabsPage"){
            headerHolderCoordinateRange = props.array.map(el => {
                return evaluateCoordinates(el.id)
            });
        }

        props.rememberCoordinateRange(props.tabsKey, headerHolderCoordinateRange);
    }
    
    const evaluateCoordinates = (tabId) => {
        //Calculate tabs header holder coordinates
        
        let tabHeaderHolder = setRef("tab", tabId);
        let updatedTabsHeaderCoordinateRange = {
            id: tabId,
            key: props.tabsKey,
            topCoordinate: tabHeaderHolder.current.getBoundingClientRect().top,
            bottomCoordinate: tabHeaderHolder.current.getBoundingClientRect().bottom,
            leftCoordinate: tabHeaderHolder.current.getBoundingClientRect().left,
            rightCoordinate: tabHeaderHolder.current.getBoundingClientRect().right,
            width: tabHeaderHolder.current.getBoundingClientRect().width,
            updated: true
        };
        return updatedTabsHeaderCoordinateRange;
    }

    const handleMouseMove = (e) => {
        /**
         * Split the image holder into equal parts equal to the number of elements in imagesArray,
         * and remember the coordinates of each part. Then check if the cursor coordinates are 
         * inside the part and then render the corresponding image.
         */

        let pageX = e.pageX;
        let pageY = e.pageY;
        props.tabsCoordinateRange.tabs.map((el, i) => {
            if(el.leftCoordinate < pageX && pageX < el.rightCoordinate && 
                el.topCoordinate < pageY && pageY < el.bottomCoordinate){
                props.updateTabsUnderlinesStyleValues(`${props.tabsKey}`,{
                    width: widthOfTab,
                    translateX: el.leftCoordinate - props.tabsCoordinateRange.tabs[0].leftCoordinate,
                    transition: 0,
                    rendered: true
                });
            }
        })
    }
   
    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'tab': 
                props.setIsHoverTab("on", id);
                let tab = setRef("tab", id);
                setWidthOfTab(tab.current.getBoundingClientRect().width);
                props.updateTabsUnderlinesStyleValues(`${props.tabsKey}`,{
                    width: widthOfTab,
                    translateX: 0,
                    transition: 0,
                    rendered: true
                });
                // console.log(tab.current.getBoundingClientRect())
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'tab': 
                props.setIsHoverTab("off", id);
                props.updateTabsUnderlinesStyleValues(`${props.tabsKey}`,{
                    width: widthOfTab,
                    translateX: 0,
                    transition: 0,
                    rendered: true
                });
                break;
        }
    }

    const tabItemOnClick = (e, path, id) => {
        switch(e.button){
            case 0:
                // Show and remember data of chosen tab on left mouse click on left mouse click

                let tab = setRef("tab", id);
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

    const setRef = (opt, id) => {
        if(opt === "tab"){
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
        
    }

    const renderTabsHeader = () => {
        return(
            <div 
                className="tabs-header-items"
            >{props.array.map((el, i) => {
                return(
                    <div
                        key={i}
                        ref={setRef("tab", el.id)}
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

    const renderLinesStyle = (tabKey) => {
        switch(tabKey){
            case 'section1Column1':
                return {
                    width: `${widthOfTab}px`,
                    transform: `translateX(${props.tabsUnderlinesStyleValues?.section1Column1?.translateX}px`,
                    transition: `transform ${props.tabsUnderlinesStyleValues?.section1Column1?.transition}s ease-out`,
                };
            case "section1Column2":
                return {
                    width: `${widthOfTab}px`,
                    transform: `translateX(${props.tabsUnderlinesStyleValues?.section1Column2?.translateX}px`,
                    transition: `transform ${props.tabsUnderlinesStyleValues?.section1Column2?.transition}s ease-out`,
                  
                };
            case 'section2':
                return {
                    width: `${widthOfTab}px`,
                    transform: `translateX(${props.tabsUnderlinesStyleValues?.section2?.translateX}px`,
                    transition: `transform ${props.tabsUnderlinesStyleValues?.section2?.transition}s ease-out`,
                };
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
                    className="tabs-black-line-short"
                    style={renderLinesStyle(props.tabsKey)}
                />
            </div>
            {renderText()}
        </div>
    );
}

export default withRouter(Tabs);
