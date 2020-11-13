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
    const section1Column1 = useRef();
    const section1Column2 = useRef();
    const section2 = useRef();
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
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
        transitionRef.current = smoothTransition;
    });


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
        console.log("TABCOORDINATES",headerHolderCoordinateRange)

        // props.rememberCoordinateRange(props.tabsKey, headerHolderCoordinateRange);
    }
    
    const evaluateCoordinates = (tabId) => {
        //Calculate tabs header holder coordinates

        let tabHeaderHolder = setRef("tab", tabId);
        let updatedTabsHeaderCoordinateRange = {
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
        /**
         * Split the image holder into equal parts equal to the number of elements in imagesArray,
         * and remember the coordinates of each part. Then check if the cursor coordinates are 
         * inside the part and then render the corresponding image.
         */

        let pageX = e.pageX;
        let pageY = e.pageY;

        // if(props.imgCoordinateRange.leftCoordinate < pageX && pageX < props.imgCoordinateRange.rightCoordinate &&
        //     props.imgCoordinateRange.topCoordinate < pageY && pageY < props.imgCoordinateRange.bottomCoordinate
        // ){
        //     let selectedDivDividedByImagesNumber = Math.round(props.imgCoordinateRange.width / props.imagesArray.length);
        //     let coordinatesArray = Utility.getArrayOfEmptyVal(props.imagesArray.length);
        //     coordinatesArray = coordinatesArray.map((el, i) => props.imgCoordinateRange.leftCoordinate + i * selectedDivDividedByImagesNumber);
        //     coordinatesArray.map((el, i) => {
        //         if(i !== coordinatesArray.length - 1){
        //             // Check if inside the calculated corresponding part

        //             if(coordinatesArray[i] < pageX && pageX < coordinatesArray[i + 1]){
        //                 setImgToLoad(props.imagesArray[i]);
        //             }
        //         }else{
        //             // Check if inside the calculated corresponding part

        //             if(coordinatesArray[i] < pageX && pageX < props.imgCoordinateRange.rightCoordinate){
        //                 setImgToLoad(props.imagesArray[i]);
        //             }
        //         }
               
        //     })
        // }
        // console.log(e)
    }

   
    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'tab': 
                props.setIsHoverTab("on", id);
                let tab = setRef("tab", id);
                setWidthOfTab(tab.current.getBoundingClientRect().width);
                console.log(tab.current.getBoundingClientRect())
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
