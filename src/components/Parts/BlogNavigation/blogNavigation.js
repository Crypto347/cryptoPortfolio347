/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

/**
 * Styles
 */

import './blogNavigation.scss';

/**
 * Utility
 */

import {
    H15,
    EH10
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * BlogNavigation component definition and export
 */

export const BlogNavigation = (props) => {

    /**
     * State
     */

    const [isHoveringNavigationPrevDate, setIsHoveringNavigationPrevDate] = useState("init");
    const [isHoveringNavigationNextDate, setIsHoveringNavigationNextDate] = useState("init");

    /**
     * Methods
     */

    useEffect(() => {
      

        return () =>  {
            // Cleaning the unmounted component


        }
    }, []);

    const handleMouseEnter = (opt, key) => {
        switch(opt){
            case 'navigationPrevDate': 
                setIsHoveringNavigationPrevDate("on");
                break;
            case 'navigationNextDate': 
                setIsHoveringNavigationNextDate("on");
                break;
        }
    }

    const handleMouseLeave = (opt, key) => {
        switch(opt){
            case 'navigationPrevDate': 
                setIsHoveringNavigationPrevDate("off");
                break;
            case 'navigationNextDate': 
                setIsHoveringNavigationNextDate("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if([
            'navigationPrevDate',
            'navigationNextDate'
        ].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h15-nobel-lustria-animated";
                case 'on':
                    return "h15-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h15-nobel-lustria-nero-hover-off"
            }
        }
    }

    const onPageClickHandler = (e, opt, pageID) => {
        // Do nothing on right mouse click
        
        if(e.button === 2) return;

        // Storing data in local storage 

        // localStorage.setItem("archiveCategoryHG", key);
        // localStorage.setItem("pageHG", props.page);

        if(e.button !== 1){
            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */
            let _pageId;
            switch(opt){
                case 'pageNumber':
                    _pageId = pageID;
                    break;
                case 'leftArrow':
                    _pageId = pageID - 1;
                    break;
                case 'rightArrow':
                    _pageId = pageID + 1;
                    break;
            }
     
            props.fetchPageData(_pageId);
            props.activatePageNumber(_pageId);
            
            window.scrollTo(0, 0);
            // props.setUnmountComponentValues(true, path);
        }else{
            // Remember information of the unmounted component on scroll wheel click
        
            // props.setUnmountComponentValues(false, path);
        }
        // Fire up unmountComponent epic

        // props.unmountComponent(null, null,  props.page, e.button);
    }

    const renderPages = () => {
        return(
            <div className="pages-wrapper">
                {props.pagesArray.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="page"
                            onMouseDown={(e) => onPageClickHandler(e, "pageNumber", el.id)}
                        >
                            <H15 className={renderClassName("page", null, el.active)}>{el.id}</H15>
                        </div>
                    )
                })}
            </div>
        )
    }
    
    /**
     * Markup
     */

    return(
        <div className="blog-navigation">
            <div className="blog-navigation-prev">
                <div className="blog-navigation-image">
                    <img src={Images.PHOTO_19}/>
                </div>
                <div className="blog-navigation-info-wrapper">
                    <H15 className="h15-black-lustria"> Cum offendit </H15>
                    <EH10/>
                    <div
                        onMouseEnter={() => handleMouseEnter(`navigationPrevDate`)} 
                        onMouseLeave={() => handleMouseLeave(`navigationPrevDate`)}
                    >
                        <H15 className={renderClassName("navigationPrevDate", isHoveringNavigationPrevDate)}>11.11.1111</H15>
                    </div>
                </div>
            </div>
            <div className="blog-navigation-next">
                <div className="blog-navigation-info-wrapper">
                    <H15 className="h15-black-lustria"> Cum offendit</H15>
                    <EH10/>
                    <div
                        onMouseEnter={() => handleMouseEnter(`navigationNextDate`)} 
                        onMouseLeave={() => handleMouseLeave(`navigationNextDate`)}
                    >
                        <H15 className={renderClassName("navigationNextDate", isHoveringNavigationNextDate)}>11.11.1111</H15>
                    </div>
                </div>
                <div className="blog-navigation-image">
                    <img src={Images.PHOTO_19}/>
                </div>
            </div>
        </div>
    );
}

export default BlogNavigation;
 