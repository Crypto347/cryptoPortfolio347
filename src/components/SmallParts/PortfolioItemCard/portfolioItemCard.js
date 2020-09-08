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
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './portfolioItemCard.scss';

/**
* Components
*/

import SwitchImage from '../SwitchImage/switchImage';

/**
* Utility
*/

import {
    H15,
    H19,
    EH10,
    EH30
} from '../../UtilityComponents';

/**
* PortfolioItemCard component definition and export
*/

export const PortfolioItemCard = (props) => {

    /**
    * State
    */

    const [isHovering, setIsHovering] = useState("init");

    /**
    * Methods
    */

    useEffect(() => {
    }, []);

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'portfolioItemCategory': 
                props.setIsHoveringCategory("on", pathOfIds);
                break;
            case 'arrow': 
                // props.setSwitchImagePageIsHoveringArrow("on", id);
                setIsHovering("on");
                break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'portfolioItemCategory': 
                props.setIsHoveringCategory("off", pathOfIds);
                break;
            case 'arrow': 
                // props.setSwitchImagePageIsHoveringArrow("off", id);
                setIsHovering("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "portfolioItemCategory"){
            switch(isHovering){
                case 'init':
                    return "h15-nobel-lustria-animated";
                case 'on':
                    return "h15-nobel-lora-nero-hover-on";
                case 'off':
                    return "h15-nobel-lora-nero-hover-off"
            }
        }
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "portfolio-item-card-arrow-wrapper";
                case 'on':
                    return "portfolio-item-card-arrow-wrapper-lengthen";
                case 'off':
                    return "portfolio-item-card-arrow-wrapper-shorten"
            }
        }
    }

    const onClickHandler = (path) => {
        props.setUnmountComponentValues(true, path);
        props.unmountComponent(null, null, "switchImagePage");
        props.clearArchiveData();
    }

    const renderCategories = (obj) => {
        return(
            <div className="portfolio-item-card-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="portfolio-item-card-category"
                        onClick={() => onClickHandler(el.path)}
                        onMouseEnter={() => handleMouseEnter(`portfolioItemCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`portfolioItemCategory`, null, pathOfIds)} 
                    >
                        {i !== 0 ? <div className="portfolio-item-card-category-slash">/</div> : null}
                        <H15 className={renderClassName("portfolioItemCategory", el.isHover)}>{el.label}</H15>
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <>
            <div className="portfolio-item-card-image">
                <SwitchImage  
                    component={props.component}
                    id={props.obj.id}
                    option={props.obj.option}
                    imagesArray={props.obj.pictures}
                    alt={props.obj.alt}
                    path={props.obj.path}
                    rememberCoordinateRange={props.rememberCoordinateRange}
                    imgCoordinateRange={props.imgCoordinateRange}
                    setUnmountComponentValues={props.setUnmountComponentValues}
                    unmountComponent={props.unmountComponent}
                />
            </div>
            <EH30/>
            {renderCategories(props.obj)}
            <EH10/>
            <H19 className="h19-nero-poppins">{props.obj.portfolioType}</H19>
            <div 
                className={renderClassName("arrow", isHovering)}
                onMouseEnter={() => handleMouseEnter("arrow")} 
                onMouseLeave={() => handleMouseLeave("arrow")} 
                onClick={() => onClickHandler(props.obj.path)}
            >
                <div className="arrow-horizontal-line"/>
                <div className="arrow-wrapper2">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
            </div>
            <EH30/>
        </>
    );
}

export default PortfolioItemCard;
 