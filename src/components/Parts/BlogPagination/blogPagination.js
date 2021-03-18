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

import './blogPagination.scss';

/**
 * Utility
 */

import {
    H15
} from '../../UtilityComponents';

/**
 * BlogPagination component definition and export
 */

export const BlogPagination = (props) => {

    /**
     * State
     */

    const [leftArrowIsHovering, setLeftArrowIsHovering] = useState("init");
    const [rightArrowIsHovering, setRightArrowIsHovering] = useState("init");

    /**
     * Methods
     */

    useEffect(() => {
      

        return () =>  {
            // Cleaning the unmounted component


        }
    }, []);

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'leftArrowPaginatio':
                setLeftArrowIsHovering("on");
                break;
            case 'rightArrowPaginatio':
                setRightArrowIsHovering("on");
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'leftArrowPaginatio':
                setLeftArrowIsHovering("off");
                break;
            case 'rightArrowPaginatio':
                setRightArrowIsHovering("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering, active) => {
        if(['page'].includes(opt)){
            if(active) {
                return "h15-black-poppins-cursor";
            }else {
                return "h15-nobel-poppins-cursor";
            }
        }
        if(opt === "leftArrowPaginatio"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
        if(opt === "rightArrowPaginatio"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
    }

    const renderPages = () => {
        return(
            <div className="pages-wrapper">
                {props.pagesArray.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="page"
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
        <div className="pagination">
            <div 
                className={renderClassName("leftArrowPaginatio", leftArrowIsHovering)}
                onMouseEnter={() => handleMouseEnter("leftArrowPaginatio")} 
                onMouseLeave={() => handleMouseLeave("leftArrowPaginatio")}
                style={{transform: "rotate(180deg)"}}
                // onMouseDown={(e) => onMouseDownHandler(e)}
            >
                <div className="arrow-horizontal-line"/>
                <div className="arrow-wrapper2">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
            </div>
            {renderPages()}
            <div 
                className={renderClassName("rightArrowPaginatio", rightArrowIsHovering)}
                onMouseEnter={() => handleMouseEnter("rightArrowPaginatio")} 
                onMouseLeave={() => handleMouseLeave("rightArrowPaginatio")}
                // onMouseDown={(e) => onMouseDownHandler(e)}
            >
                <div className="arrow-horizontal-line"/>
                <div className="arrow-wrapper2">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
            </div>
        </div>
    );
}

export default BlogPagination;
 