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

import * as Utility from '../../../utility';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

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
        /**
         * Fetch data in accordance with the page and category (if the page
         * was archive) that were previously rendered in the location history
         */ 

        let page = props.location.state ? props.location.state.page : props.unmountComp.prevPage;
        let category = props.location.state ? props.location.state.category : Utility.categoryKeyToPath(props.archive.category);

        setPage(page);
        setCategory(category);
        fetchContentItems(page, category);
      
        /**
         * Remember the fetched data key to return (history action pop) to the part
         * of the screen where the link to the selected item is located
         */ 

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
    
    const fetchContentItems = (page, category) => {
        // Fetch data according to the page we came from

        switch(page){
            case 'portfolioGallery':
                if(props.portfolioGalleryPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)

                        props.fetchPortfolioGalleryPageSuccess(FakeData.portfolioGallery);
                    }else{
                        // Fetch data (required to run -> npm run server)

                        props.fetchPortfolioGalleryPage();
                    }
                }
                break;
            case 'archive':
                if(props.archive.items.length === 0){
                    props.fetchArchive(category, 1);
                }
                break;
            case 'switchImagePage':
                if(props.switchImagePage.items.length === 0){
                    props.fetchSwitchImagePage();
                }
                break;
            case 'simpleOverlayPage':
                if(props.simpleOverlayPage.items.length === 0){
                    props.fetchSimpleOverlayPage();
                }
                break;
            case 'slideFromImageLeftPage':
                if(props.slideFromImageLeftPage.items.length === 0){
                    props.fetchSlideFromImageLeftPage();
                }
                break;
            case 'overlayPage':
                if(props.overlayPage.items.length === 0){
                    props.fetchOverlayPage();
                }
                break;
            case 'overlayWithInfoPage':
                if(props.overlayWithInfoPage.items.length === 0){
                    props.fetchOverlayWithInfoPage();
                }
                break;
            case 'standardPage':
                if(props.standardPage.items.length === 0){
                    props.fetchStandardPage();
                }
                break;
            case 'galleryPage':
                if(props.galleryPage.items.length === 0){
                    props.fetchGalleryPage();
                }
                break;
            case 'galleryWithSpacePage':
                if(props.galleryWithSpacePage.items.length === 0){
                    props.fetchGalleryWithSpacePage();
                }
                break;
            case 'stoneWallPage':
                if(props.stoneWallPage.items.length === 0){
                    props.fetchStoneWallPage();
                }
                break;
            case 'stoneWallWidePage':
                if(props.stoneWallWidePage.items.length === 0){
                    props.fetchStoneWallWidePage();
                }
                break;
            case 'metroPage':
                if(props.metroPage.items.length === 0){
                    props.fetchMetroPage();
                }
                break;
            case 'pinterest3ColumnsPage':
                if(props.pinterest3ColumnsPage.items.length === 0){
                    props.fetchPinterest3ColumnsPage();
                }
                break;
            case 'twoColumnsWidePage':
                if(props.twoColumnsWidePage.items.length === 0){
                    props.fetchTwoColumnsWidePage();
                }
                break;
            case 'threeColumnsWidePage':
                if(props.threeColumnsWidePage.items.length === 0){
                    props.fetchThreeColumnsWidePage();
                }
                break;
            case 'fourColumnsWidePage':
                if(props.fourColumnsWidePage.items.length === 0){
                    props.fetchFourColumnsWidePage();
                }
                break;
            case 'fiveColumnsWidePage':
                if(props.fiveColumnsWidePage.items.length === 0){
                    props.fetchFiveColumnsWidePage();
                }
                break;
            case 'twoColumnsPage':
                if(props.twoColumnsPage.items.length === 0){
                    props.fetchTwoColumnsPage();
                }
                break;
            default:
                if(props.portfolioGalleryPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)

                        props.fetchPortfolioGalleryPageSuccess(FakeData.portfolioGallery);
                    }else{
                        // Fetch data (required to run -> npm run server)

                        props.fetchPortfolioGalleryPage();
                    }
                }
                break;
        }
    }

    const setContentItems = () => {
        // Set data according to the page we came from

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
            case 'threeColumnsWidePage':
                return [...props.threeColumnsWidePage.items];
            case 'fourColumnsWidePage':
                return [...props.fourColumnsWidePage.items];
            case 'fiveColumnsWidePage':
                return [...props.fiveColumnsWidePage.items];
            case 'twoColumnsPage':
                return [...props.twoColumnsPage.items];
            case 'threeColumnsPage':
                return [...props.threeColumnsPage.items];
            case 'fourColumnsPage':
                return [...props.fourColumnsPage.items];
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
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage

        localStorage.setItem("page", page);

        // Return to the page we came from

        switch(page){
            case 'portfolioGallery':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/portfolio-gallery`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/portfolio-gallery`, "_blank");
                }
                break;
            case 'archive':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/portfolio-category/${category}`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/portfolio-category/${category}`, "_blank");
                }
                break;
            case 'switchImagePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/switch-image`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/switch-image`, "_blank");
                }
                break;
            case 'simpleOverlayPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/simple-overlay`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/simple-overlay`, "_blank");
                }
                break;
            case 'slideFromImageLeftPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/slide-from-image-left`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/slide-from-image-left`, "_blank");
                }
                break;
            case 'overlayPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/overlay`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/overlay`, "_blank");
                }
                break;
            case 'overlayWithInfoPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/overlay-with-info`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/overlay-with-info`, "_blank");
                }
                break;
            case 'standardPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/portfolio-standard`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/portfolio-standard`, "_blank");
                }
                break;
            case 'galleryPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/gallery`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/gallery`, "_blank");
                }
                break;
            case 'galleryWithSpacePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/gallery-with-space`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/gallery-with-space`, "_blank");
                }
                break;
            case 'stoneWallPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/stone-wall`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/stone-wall`, "_blank");
                }
                break;
            case 'stoneWallWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/stone-wall-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/stone-wall-wide`, "_blank");
                }
                break;
            case 'metroPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/metro`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/metro`, "_blank");
                }
                break;
            case 'pinterest3ColumnsPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/pinterest-3-columns`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/pinterest-3-columns`, "_blank");
                }
                break;
            case 'twoColumnsWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/two-columns-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/two-columns-wide`, "_blank");
                }
                break;
            case 'threeColumnsWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/three-columns-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/three-columns-wide`, "_blank");
                }
                break;
            case 'fourColumnsWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/four-columns-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/four-columns-wide`, "_blank");
                }
                break;
            case 'fiveColumnsWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/five-columns-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/five-columns-wide`, "_blank");
                }
                break;
            case 'twoColumnsPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/two-columns`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/two-columns`, "_blank");
                }
                break;
            case 'threeColumnsPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/three-columns`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/three-columns`, "_blank");
                }
                break;
            case 'fourColumnsPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/four-columns`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/four-columns`, "_blank");
                }
                break;
            default:
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/portfolio-gallery`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/portfolio-gallery`, "_blank");
                }
                return;
        }

        // Init the fetched data key

        props.setHistoryPopFromPortfolioItem("scrollToTop");
    }

    const arrowOnClick = (opt, key, e) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;
       
        // Storing data in local storage

        localStorage.setItem("page", page);

        /**
         * Navigate to the prev or next element in
         * fetched data array for the corresponding page
         */

        let updatedItems = setContentItems();
        let updatedItemIndex = updatedItems.findIndex(item => item.key === key);

        if(e.button !== 1){
            // Clear smooth scrollbar behavior

            document.getElementById("html").style.scrollBehavior = null;

            // Follow the link to the next page on left mouse click

            switch(opt) {
                case 'prev':
                    if(updatedItemIndex === 0){
                        props.portfolioNavigationOnClickStart(updatedItems[updatedItems.length - 1].path, page, category);
                    }else{
                        props.portfolioNavigationOnClickStart(updatedItems[updatedItemIndex - 1].path, page, category);
                    }
                    return;
                case 'next':
                    if(updatedItemIndex === updatedItems.length - 1){
                        props.portfolioNavigationOnClickStart(updatedItems[0].path, page, category);
                    }else{
                        props.portfolioNavigationOnClickStart(updatedItems[updatedItemIndex + 1].path, page, category);
                    }
                    return;
            }
        }else{
            // Open the link in a new window on scroll wheel click
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
            threeColumnsWidePage: Selectors.getThreeColumnsWidePageState(state),
            fourColumnsWidePage: Selectors.getFourColumnsWidePageState(state),
            fiveColumnsWidePage: Selectors.getFiveColumnsWidePageState(state),
            twoColumnsPage: Selectors.getTwoColumnsPageState(state),
            threeColumnsPage: Selectors.getThreeColumnsPageState(state),
            fourColumnsPage: Selectors.getFourColumnsPageState(state),
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
            fetchPortfolioGalleryPageSuccess: bindActionCreators(Actions.fetchPortfolioGalleryPageSuccess, dispatch),
            fetchArchive: bindActionCreators(Services.fetchArchive, dispatch),
            fetchSwitchImagePage: bindActionCreators(Services.fetchSwitchImagePage, dispatch),
            fetchSimpleOverlayPage: bindActionCreators(Services.fetchSimpleOverlayPage, dispatch),
            fetchSlideFromImageLeftPage: bindActionCreators(Services.fetchSlideFromImageLeftPage, dispatch),
            fetchOverlayPage: bindActionCreators(Services.fetchOverlayPage, dispatch),
            fetchOverlayWithInfoPage: bindActionCreators(Services.fetchOverlayWithInfoPage, dispatch),
            fetchStandardPage: bindActionCreators(Services.fetchStandardPage, dispatch),
            fetchGalleryPage: bindActionCreators(Services.fetchGalleryPage, dispatch),
            fetchGalleryWithSpacePage: bindActionCreators(Services.fetchGalleryWithSpacePage, dispatch),
            fetchStoneWallPage: bindActionCreators(Services.fetchStoneWallPage, dispatch),
            fetchStoneWallWidePage: bindActionCreators(Services.fetchStoneWallWidePage, dispatch),
            fetchMetroPage: bindActionCreators(Services.fetchMetroPage, dispatch),
            fetchPinterest3ColumnsPage: bindActionCreators(Services.fetchPinterest3ColumnsPage, dispatch),
            fetchTwoColumnsWidePage: bindActionCreators(Services.fetchTwoColumnsWidePage, dispatch),
            fetchThreeColumnsWidePage: bindActionCreators(Services.fetchThreeColumnsWidePage, dispatch),
            fetchFourColumnsWidePage: bindActionCreators(Services.fetchFourColumnsWidePage, dispatch),
            fetchFiveColumnsWidePage: bindActionCreators(Services.fetchFiveColumnsWidePage, dispatch),
            fetchTwoColumnsPage: bindActionCreators(Services.fetchTwoColumnsPage, dispatch),
            fetchThreeColumnsPage: bindActionCreators(Services.fetchThreeColumnsPage, dispatch),
            fetchFourColumnsPage: bindActionCreators(Services.fetchFourColumnsPage, dispatch),
            setHistoryPopFromPortfolioItem: bindActionCreators(Actions.setHistoryPopFromPortfolioItem, dispatch),
            portfolioNavigationOnClickStart: bindActionCreators(Actions.portfolioNavigationOnClickStart, dispatch),
        };
    }
)(withRouter(PorfolioNavigation));
