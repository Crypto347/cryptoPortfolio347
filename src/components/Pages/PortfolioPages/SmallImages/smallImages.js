/**
* Libraries
*/

import React, {
    useEffect, useState, useLa
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './smallImages.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Services
*/

import * as Services from "../../../../service";

/**
* Components
*/


import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
* Utility
*/

import {
    H70,
    H22,
    H19,
    EH30,
    EH40,
    EH60,
    EH70
 } from '../../../UtilityComponents';
 

/**
* Images
*/

//Id1

import Id1SmallImages1 from '../../../../images/smallImages/id1/adam-wilson-1QZYZib7eYs-unsplash.jpg';
import Id1SmallImages2 from '../../../../images/smallImages/id1/jason-blackeye-DKCgibUVLNc-unsplash.jpg';
import Id1SmallImages3 from '../../../../images/smallImages/id1/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg';
import Id1SmallImages4 from '../../../../images/smallImages/id1/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.jpg';
import Id1SmallImages5 from '../../../../images/smallImages/id1/shelbey-miller-HIQd4db8Kr8-unsplash.jpg';

/**
* SmallImages component definition and export
*/

export const SmallImages = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    // const [scrollingHeight, setScrollingHeight] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    const [moveStepMovablePart, setMoveStepMovablePart] = useState(0);
    const [movablePartFinalPosition, setMovablePartFinalPosition] = useState(0);
    

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
        // if(props.location.state){
        //     console.log(props.location.state.obj)
        // }

        props.fetchSmallImagesPortfolio(props.match.params.id);
        if(props.smallImagesPortfolio.item !== {}){
            setShowContent(true)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleScroll = (e) => {
        let scrollHeight = document.body.scrollTop;
        let smallImagesContentOffsetTop = document.getElementById("smallImagesContent").offsetTop;
        let smallImagesContentOffsetHeight = document.getElementById("smallImagesContent").offsetHeight - 200;
        let smallImagesPortfolioImagesOffsetTop = document.getElementById("smallImagesPortfolioImages").offsetTop;
        let smallImagesPortfolioImagesOffsetHeight = document.getElementById("smallImagesPortfolioImages").offsetHeight;
        let smallImagesPortfolioMovablePartHeight = document.getElementById("smallImagesMovablePart").offsetHeight;
        let bottomOfSmallImagesPortfolioImages = smallImagesPortfolioImagesOffsetTop + smallImagesPortfolioImagesOffsetHeight - smallImagesPortfolioMovablePartHeight
        console.log(scrollHeight, smallImagesContentOffsetTop, bottomOfSmallImagesPortfolioImages)
        if(scrollHeight > smallImagesContentOffsetTop && scrollHeight < bottomOfSmallImagesPortfolioImages){
            setMoveStepMovablePart(scrollHeight - smallImagesContentOffsetTop);
            setMovablePartFinalPosition(smallImagesContentOffsetHeight)
        } else if(scrollHeight > bottomOfSmallImagesPortfolioImages) {
            setMoveStepMovablePart(smallImagesPortfolioImagesOffsetHeight - smallImagesPortfolioMovablePartHeight - 30);
        } else {
            setMoveStepMovablePart(0);
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'id1SmallImages1':
                return Id1SmallImages1;
            case 'id1SmallImages2':
                return Id1SmallImages2;
            case 'id1SmallImages3':
                return Id1SmallImages3;
            case 'id1SmallImages4':
                return Id1SmallImages4;
            case 'id1SmallImages5':
                return Id1SmallImages5;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'smallImagesCategory': 
                setIsHoveringCategoryText("on");
                break;
            case 'smallImagesTag1': 
                props.setIsHoveringTag("on", id);
                break;
            case 'smallImagesTag2': 
                props.setIsHoveringTag("on", id);
                break;
            case 'leftArrow': 
                setIsHoveringLeftArrow("on");
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow("on");
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'smallImagesCategory': 
                setIsHoveringCategoryText("off");
                break;
            case 'smallImagesTag1': 
                props.setIsHoveringTag("off", id);
                break;
            case 'smallImagesTag2': 
                props.setIsHoveringTag("off", id);
                break;
            case 'leftArrow': 
                setIsHoveringLeftArrow("off");
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow("off");
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {

        if(opt === "smallImagesCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-hover-on";
                case 'off':
                    return "h19-nobel-lustria-hover-off"
            }
        }
        if(opt === "smallImagesTag1"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-hover-on";
                case 'off':
                    return "h19-nobel-lustria-hover-off"
            }
        }
        if(opt === "smallImagesTag2"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-hover-on";
                case 'off':
                    return "h19-nobel-lustria-hover-off"
            }
        }
        if(opt === "leftArrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-left";
                case 'on':
                    return "arrow-wrapper-left-lengthen";
                case 'off':
                    return "arrow-wrapper-left-shorten"
            }
        }
        if(opt === "rightArrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-right";
                case 'on':
                    return "arrow-wrapper-right-lengthen";
                case 'off':
                    return "arrow-wrapper-right-shorten"
            }
        }
        // if(opt === "closeButtonText"){
        //     switch(isHovering){
        //         case 'init':
        //             return "h19-nobel-lustria";
        //         case 'on':
        //             return "h19-nobel-lustria-hover-on";
        //         case 'off':
        //             return "h19-nobel-lustria-hover-off"
        //     }
        // }
    }

    // const checkScrollDirection = (e) => {
    //     let scrollHeight = document.body.scrollTop;
    //     let el = document.getElementById("home");

    //     if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
    //         setScrollingUp(false);
    //     }else{
    //         setScrollingUp(true);
    //     }
    // }

    // const checkScrollDirectionIsUp = (e)  => {
    //     if (e.wheelDelta) {
    //       return e.wheelDelta > 0;
    //     }
    //     return e.deltaY < 0;
    // }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                    />
                </>
            )
        }else{
            return(
                <>
                    <Toolbar 
                        style="regularScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                    />
                </>
            )
        }
    }

    const renderPortfolioImages = () => {
        return(
            <div 
                id="smallImagesPortfolioImages"
                className="small-images-portfolio-images"
            >{props.smallImagesPortfolio.item.imagesArray.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="small-images-portfolio-image"
                    >
                        <img src={loadImg(el.imageName)}/>
                        <EH30/>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="small-images-tags">{props.smallImagesPortfolio.item.tags.map((el,i) => {
                return(
                    <div 
                        key={i}
                        onMouseEnter={() => handleMouseEnter(`smallImagesTag${el.id}`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallImagesTag${el.id}`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallImagesTag${el.id}`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderSmallImagesContent = () => {
        if(props.smallImagesPortfolio.loading && !props.smallImagesPortfolio.error){
            return(
                <div className="small-images-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.smallImagesPortfolio.loading && !props.smallImagesPortfolio.error){
            return(
                <div className="small-images-wrapper">
                    <H70 className="h70-nero-poppins">{props.smallImagesPortfolio.item.header}</H70>
                    <EH70/>
                    <div 
                        id="smallImagesContent"
                        className="small-images-content"
                    >
                        {/* <div> */}
                            {renderPortfolioImages()}
                        {/* </div> */}
                        <div 
                            id="smallImagesMovablePart"
                            className="small-images-movable-part" 
                            style={{marginTop: `${moveStepMovablePart}px`}}
                        >
                            <H19 className="h19-nobel-lustria">{props.smallImagesPortfolio.item.text}</H19>
                            <EH60/>
                            <H22 className="h22-nero-poppins">Category:</H22>
                            <H19 
                                className={renderClassName("smallImagesCategory", isHoveringCategoryText)}
                                onMouseEnter={() => handleMouseEnter('smallImagesCategory')} 
                                onMouseLeave={() => handleMouseLeave('smallImagesCategory')}
                            >
                                {props.smallImagesPortfolio.item.category}
                            </H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Date:</H22>
                            <H19 className="h19-nobel-lustria">{props.smallImagesPortfolio.item.date}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Tags:</H22>
                            {renderTags()}
                        </div>
                    </div>
                    <div className="small-images-navigation">
                        <div 
                            className={renderClassName("leftArrow",isHoveringLeftArrow)}
                            onMouseEnter={() => handleMouseEnter("leftArrow")} 
                            onMouseLeave={() => handleMouseLeave("leftArrow")} 
                            // onClick={() => arrowOnClick(props.path)}
                        >
                            <div className="arrow-horizontal-line"></div>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div>

                        <div className="small-images-navigation-menu">
                            <div className="small-images-navigation-menu-dot"/>
                            <div className="small-images-navigation-menu-dot"/>
                            <div className="small-images-navigation-menu-dot"/>
                            <div className="small-images-navigation-menu-dot"/>
                        </div>
                        <div 
                            className={renderClassName("rightArrow", isHoveringRightArrow)}
                            onMouseEnter={() => handleMouseEnter("rightArrow")} 
                            onMouseLeave={() => handleMouseLeave("rightArrow")} 
                            // onClick={() => arrowOnClick(props.path)}
                        >
                            <div className="arrow-horizontal-line"></div>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(!props.smallImagesPortfolio.loading && props.smallImagesPortfolio.error){
            return(
                <div className="small-images-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.smallImagesPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="small-images" id="smallImages">
            {renderToolbars()}
            {showContent ? renderSmallImagesContent() : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallImagesPortfolio: Selectors.getSmallImagesPortfolioState(state),
        
        };
    },
    (dispatch) => {
        return {
            fetchSmallImagesPortfolio: bindActionCreators(Services.fetchSmallImagesPortfolio, dispatch),
            setIsHoveringTag: bindActionCreators(Actions.setIsHoveringTag, dispatch)
        };
    }
)(SmallImages);
 