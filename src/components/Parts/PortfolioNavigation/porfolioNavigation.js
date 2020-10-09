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
* Styles
*/

import './porfolioNavigation.scss';

/**
* Components
*/

import Loading from '../../SmallParts/Loading/loading';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Services
*/

import * as Services from "../../../service";

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/

import {
    H19,
    H25,
    H45,
    EH25,
    EH40
} from '../../UtilityComponents';

import * as Utility from '../../../utility';

/**
* Images
*/

/**
* PorfolioNavigation component definition and export
*/

export const PorfolioNavigation = (props) => {

    /**
    * State
    */
   
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    const [isHoveringMenuButton, setIsHoveringMenuButton] = useState("init");
    const [key, setKey] = useState("");
    const [page, setPage] = useState("");
    const [category, setCategory] = useState("");

    /**
    * Methods
    */

    useEffect(() => {
        let page = props.location.state ? props.location.state.page : props.unmountComp.prevPage;
        let category = props.location.state ? props.location.state.category : Utility.categoryKeyToPath(props.archive.category);
        setPage(page);
        setCategory(category);
        fetchContentItems(page);
        let key;
        switch(props.component){
            case 'bigImages':
                key = props.bigImagesPortfolio.item.key
                break; 
            case 'bigSlider':
                key = props.bigSliderPortfolio.item.key
                break; 
            case 'gallery':
                key = props.galleryPortfolio.item.key
                break; 
            case 'smallGallery':
                key = props.smallGalleryPortfolio.item.key
                break; 
            case 'smallImages':
                key = props.smallImagesPortfolio.item.key
                break; 
            case 'smallSlider':
                key = props.smallSliderPortfolio.item.key
                break; 
        }
        props.setHistoryPopFromPortfolioItem(key);
        setKey(key);
    }, []);

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow("on");
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow("on");
                break;
            case 'menuButton': 
                setIsHoveringMenuButton("on");
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow("off");
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow("off");
                break;
            case 'menuButton': 
                setIsHoveringMenuButton("off");
                break;
        }
    }
    
    const fetchContentItems = (page) => {
        switch(page){
            case 'portfolioGallery':
                if(props.portfolioGalleryPage.items.length === 0){
                    props.fetchPortfolioGalleryPage();
                }
                return [...props.portfolioGalleryPage.items];
            case 'archive':
                if(props.archive.items.length === 0){
                    props.fetchArchive();
                }
                return [...props.archive.items];
            case 'switchImagePage':
                if(props.switchImagePage.items.length === 0){
                    props.fetchSwitchImagePage();
                }
                return [...props.switchImagePage.items];
            case 'simpleOverlayPage':
                if(props.simpleOverlayPage.items.length === 0){
                    props.fetchSimpleOverlayPage();
                }
                return [...props.simpleOverlayPage.items];
            case 'slideFromImageLeftPage':
                if(props.slideFromImageLeftPage.items.length === 0){
                    props.fetchSlideFromImageLeftPage();
                }
                return [...props.slideFromImageLeftPage.items];
            case 'overlayPage':
                if(props.overlayPage.items.length === 0){
                    props.fetchOverlayPage();
                }
                return [...props.overlayPage.items];
            case 'overlayWithInfoPage':
                if(props.overlayWithInfoPage.items.length === 0){
                    props.fetchOverlayWithInfoPage();
                }
                return [...props.overlayWithInfoPage.items];
            case 'standardPage':
                if(props.standardPage.items.length === 0){
                    props.fetchStandardPage();
                }
                return [...props.standardPage.items];
            case 'galleryPage':
                if(props.galleryPage.items.length === 0){
                    props.fetchGalleryPage();
                }
                return [...props.galleryPage.items];
            case 'galleryWithSpacePage':
                if(props.galleryWithSpacePage.items.length === 0){
                    props.fetchGalleryWithSpacePage();
                }
                return [...props.galleryWithSpacePage.items];
            case 'stoneWallPage':
                if(props.stoneWallPage.items.length === 0){
                    props.fetchStoneWallPage();
                }
                return [...props.stoneWallPage.items];
            case 'stoneWallWidePage':
                if(props.stoneWallWidePage.items.length === 0){
                    props.fetchStoneWallWidePage();
                }
                return [...props.stoneWallWidePage.items];
            case 'metroPage':
                if(props.metroPage.items.length === 0){
                    props.fetchMetroPage();
                }
                return [...props.metroPage.items];
            case 'pinterest3ColumnsPage':
                if(props.pinterest3ColumnsPage.items.length === 0){
                    props.fetchPinterest3ColumnsPage();
                }
                return [...props.pinterest3ColumnsPage.items];
            case 'twoColumnsWidePage':
                if(props.twoColumnsWidePage.items.length === 0){
                    props.fetchTwoColumnsWidePage();
                }
                return [...props.twoColumnsWidePage.items];
            default:
                if(props.portfolioGalleryPage.items.length === 0){
                    props.fetchPortfolioGalleryPage();
                }
                return [...props.portfolioGalleryPage.items];
        }
    }

    const setContentItems = () => {
        switch(page){
            case 'portfolioGallery':
                return [...props.portfolioGalleryPage.items];
            case 'archive':
                return [...props.archive.items];
            case 'switchImagePage':
                return [...props.switchImagePage.items];
            case 'simpleOverlayPage':
                return [...props.simpleOverlayPage.items];
            case 'slideFromImageLeftPage':
                return [...props.slideFromImageLeftPage.items];
            case 'overlayPage':
                return [...props.overlayPage.items];
            case 'overlayWithInfoPage':
                return [...props.overlayWithInfoPage.items];
            case 'standardPage':
                return [...props.standardPage.items];
            case 'galleryPage':
                return [...props.galleryPage.items];
            case 'galleryWithSpacePage':
                return [...props.galleryWithSpacePage.items];
            case 'stoneWallPage':
                return [...props.stoneWallPage.items];
            case 'stoneWallWidePage':
                return [...props.stoneWallWidePage.items];
            case 'metroPage':
                return [...props.metroPage.items];
            case 'pinterest3ColumnsPage':
                return [...props.pinterest3ColumnsPage.items];
            case 'twoColumnsWidePage':
                return [...props.twoColumnsWidePage.items];
            default:
                return [...props.portfolioGalleryPage.items];
        }
    }

    const renderClassName = (opt, isHovering) => {
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
        if(opt === "menuButton"){
            switch(isHovering){
                case 'init':
                    return "navigation-menu-dot";
                case 'on':
                    return "navigation-menu-dot-hover-on";
                case 'off':
                    return "navigation-menu-dot-hover-off"
            }
        }
    }

    const handleMenuOnClick = (e) => {
        if(e.button === 2) return;
        // let page = props.location.state ? props.location.state.page : props.unmountComp.prevPage;
        localStorage.setItem("page", page);
        switch(page){
            case 'portfolioGallery':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/portfolio-gallery`);
                }else{
                    window.open(`/crypto-portfolio/portfolio-gallery`, "_blank");
                }
                break;
            case 'archive':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/portfolio-category/${category}`);
                }else{
                    window.open(`/crypto-portfolio/portfolio-category/${category}`, "_blank");
                }
                break;
            case 'switchImagePage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/switch-image`);
                }else{
                    window.open(`/crypto-portfolio/switch-image`, "_blank");
                }
                break;
            case 'simpleOverlayPage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/simple-overlay`);
                }else{
                    window.open(`/crypto-portfolio/simple-overlay`, "_blank");
                }
                break;
            case 'slideFromImageLeftPage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/slide-from-image-left`);
                }else{
                    window.open(`/crypto-portfolio/slide-from-image-left`, "_blank");
                }
                break;
            case 'overlayPage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/overlay`);
                }else{
                    window.open(`/crypto-portfolio/overlay`, "_blank");
                }
                break;
            case 'overlayWithInfoPage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/overlay-with-info`);
                }else{
                    window.open(`/crypto-portfolio/overlay-with-info`, "_blank");
                }
                break;
            case 'standardPage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/portfolio-standard`);
                }else{
                    window.open(`/crypto-portfolio/portfolio-standard`, "_blank");
                }
                break;
            case 'galleryPage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/gallery`);
                }else{
                    window.open(`/crypto-portfolio/gallery`, "_blank");
                }
                break;
            case 'galleryWithSpacePage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/gallery-with-space`);
                }else{
                    window.open(`/crypto-portfolio/gallery-with-space`, "_blank");
                }
                break;
            case 'stoneWallPage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/stone-wall`);
                }else{
                    window.open(`/crypto-portfolio/stone-wall`, "_blank");
                }
                break;
            case 'stoneWallWidePage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/stone-wall-wide`);
                }else{
                    window.open(`/crypto-portfolio/stone-wall-wide`, "_blank");
                }
                break;
            case 'metroPage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/metro`);
                }else{
                    window.open(`/crypto-portfolio/metro`, "_blank");
                }
                break;
            case 'pinterest3ColumnsPage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/pinterest-3-columns`);
                }else{
                    window.open(`/crypto-portfolio/pinterest-3-columns`, "_blank");
                }
                break;
            case 'twoColumnsWidePage':
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/two-columns-wide`);
                }else{
                    window.open(`/crypto-portfolio/two-columns-wide`, "_blank");
                }
                break;
            default:
                if(e.button !== 1){
                    props.history.push(`/crypto-portfolio/portfolio-gallery`);
                }else{
                    window.open(`/crypto-portfolio/portfolio-gallery`, "_blank");
                }
                return;
        }
        props.setHistoryPopFromPortfolioItem("scrollToTop");
    }

    const arrowOnClick = (opt, key, e) => {
      
        if(e.button === 2) return;
        let updatedItems = setContentItems();
        // let page = props.location.state ? props.location.state.page : props.unmountComp.prevPage;
        // console.log(page)
        // let category = props.location.state?.category;
        // let category = props.location.state.category ? props.location.state.category : Utility.categoryKeyToPath(props.archive.category)
        localStorage.setItem("page", page);

       
        
        console.log("updatedItems", updatedItems)
        let updatedItemIndex = updatedItems.findIndex(item => item.key === key);

        if(e.button !== 1){
            document.getElementById("html").style.scrollBehavior = null;
            switch(opt) {
                case 'prev':
                    if(updatedItemIndex === 0){
                        props.history.push(`/crypto-portfolio/${updatedItems[updatedItems.length - 1].path}`, {page: page, category: category});
                    }else{
                        props.history.push(`/crypto-portfolio/${updatedItems[updatedItemIndex - 1].path}`, {page: page, category: category});
                    }
                    return;
                case 'next':
                    if(updatedItemIndex === updatedItems.length - 1){
                        props.history.push(`/crypto-portfolio/${updatedItems[0].path}`, {page: page, category: category});
                    }else{
                        props.history.push(`/crypto-portfolio/${updatedItems[updatedItemIndex + 1].path}`, {page: page, category: category});
                    }
                    return;
            }
        }else{
            switch(opt) {
                case 'prev':
                    if(updatedItemIndex === 0){
                        window.open(`/crypto-portfolio/${updatedItems[updatedItems.length - 1].path}`,"_blank");
                    }else{
                        window.open(`/crypto-portfolio/${updatedItems[updatedItems.length - 1].path}`,"_blank");
                    }
                    return;
                case 'next':
                    if(updatedItemIndex === updatedItems.length - 1){
                        window.open(`/crypto-portfolio/${updatedItems[0].path}`,"_blank");
                    }else{
                        window.open(`/crypto-portfolio/${updatedItems[updatedItemIndex + 1].path}`,"_blank");
                    }
                    return;
            }
        }
    }

    /**
    * Markup
    */

    return(
        <div className="porfolio-navigation">
            <div 
                className={renderClassName("leftArrow", isHoveringLeftArrow)}
                onMouseEnter={() => handleMouseEnter("leftArrow")} 
                onMouseLeave={() => handleMouseLeave("leftArrow")} 
                onMouseDown={(e) => arrowOnClick('prev', key, e)}
            >
                <div className="arrow-wrapper">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
                <div className="arrow-horizontal-line"/>
            </div>

            <div 
                className="navigation-menu"
                onMouseDown={(e) => handleMenuOnClick(e)}
                onMouseEnter={() => handleMouseEnter("menuButton")} 
                onMouseLeave={() => handleMouseLeave("menuButton")} 
            >
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
            </div>
            <div 
                className={renderClassName("rightArrow", isHoveringRightArrow)}
                onMouseEnter={() => handleMouseEnter("rightArrow")} 
                onMouseLeave={() => handleMouseLeave("rightArrow")} 
                onMouseDown={(e) => arrowOnClick('next', key, e)}
            >
                <div className="arrow-horizontal-line"/>
                <div className="arrow-wrapper">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            portfolioGalleryPage: Selectors.getPortfolioGalleryPageState(state),
            archive: Selectors.getArchiveState(state),
            switchImagePage: Selectors.getSwitchImagePageState(state),
            simpleOverlayPage: Selectors.getSimpleOverlayPageState(state),
            slideFromImageLeftPage: Selectors.getSlideFromImageLeftPageState(state),
            overlayPage: Selectors.getOverlayPageState(state),
            overlayWithInfoPage: Selectors.getOverlayWithInfoPageState(state),
            standardPage: Selectors.getStandardPageState(state),
            galleryPage: Selectors.getGalleryPageState(state),
            galleryWithSpacePage: Selectors.getGalleryWithSpacePageState(state),
            stoneWallPage: Selectors.getStoneWallPageState(state),
            stoneWallWidePage: Selectors.getStoneWallWidePageState(state),
            metroPage: Selectors.getMetroPageState(state),
            pinterest3ColumnsPage: Selectors.getPinterest3ColumnsPageState(state),
            twoColumnsWidePage: Selectors.getTwoColumnsWidePageState(state),
            bigImagesPortfolio: Selectors.getBigImagesPortfolioState(state),
            bigSliderPortfolio: Selectors.getBigSliderPortfolioState(state),
            galleryPortfolio: Selectors.getGalleryPortfolioState(state),
            smallGalleryPortfolio: Selectors.getSmallGalleryPortfolioState(state),
            smallImagesPortfolio: Selectors.getSmallImagesPortfolioState(state),
            smallSliderPortfolio: Selectors.getSmallSliderPortfolioState(state),
            unmountComp: Selectors.getUnmountComponentState(state)
        };
    },
    (dispatch) => {
        return {
            fetchPortfolioGalleryPage: bindActionCreators(Services.fetchPortfolioGalleryPage, dispatch),
            fetchArchive: bindActionCreators(Services.fetchArchive, dispatch),
            fetchSwitchImagePage: bindActionCreators(Services.fetchSwitchImagePage, dispatch),
            fetchSimpleOverlayPage: bindActionCreators(Services.fetchSimpleOverlayPage, dispatch),
            fetchSlideFromImageLeftPage: bindActionCreators(Services.fetchSlideFromImageLeftPage, dispatch),
            fetchOverlayPage: bindActionCreators(Services.fetchOverlayPage, dispatch),
            fetchOverlayWithInfoPage: bindActionCreators(Services.fetchPortfolioGalleryPage, dispatch),
            fetchStandardPage: bindActionCreators(Services.fetchStandardPage, dispatch),
            fetchGalleryPage: bindActionCreators(Services.fetchGalleryPage, dispatch),
            fetchGalleryWithSpacePage: bindActionCreators(Services.fetchGalleryWithSpacePage, dispatch),
            fetchStoneWallPage: bindActionCreators(Services.fetchStoneWallPage, dispatch),
            fetchStoneWallWidePage: bindActionCreators(Services.fetchStoneWallWidePage, dispatch),
            fetchMetroPage: bindActionCreators(Services.fetchMetroPage, dispatch),
            fetchPinterest3ColumnsPage: bindActionCreators(Services.fetchPinterest3ColumnsPage, dispatch),
            fetchTwoColumnsWidePage: bindActionCreators(Services.fetchTwoColumnsWidePage, dispatch),
            setHistoryPopFromPortfolioItem: bindActionCreators(Actions.setHistoryPopFromPortfolioItem, dispatch)
        };
    }
)(withRouter(PorfolioNavigation));
 