/**
* Libraries
*/

import React, {
    useState,
    useEffect
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

import './bigImages.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
// import Swiper from '../../../../library/Swiper/swiper';
import PortfolioNavigation from '../../../Parts/PortfolioNavigation/porfolioNavigation';
import PhotoViewer from '../../../Parts/PhotoViewer/photoViewer';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Services
*/

import * as Services from "../../../../service";

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Utility
*/

import { 
    H19,
    H22,
    H70,
    EH30,
    EH40,
    EH70
} from '../../../UtilityComponents';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
* Images
*/

import * as Images from '../../../../constants/images';

/**
* BigImages component definition and export
*/

export const BigImages = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");
    const [showBackToTop, setShowBackToTop] = useState(false);
    // const [moveStepMovablePart, setMoveStepMovablePart] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        window.scrollTo(0, 0);
        props.fetchBigImagesPortfolio(props.match.params.id);

        setShowContent(true);

        window.addEventListener('wheel', handleOnWheel);

        return () => window.removeEventListener('wheel', handleOnWheel);
    }, []);

    const loadImg = (key) => {
        switch(key) {
            case 'id1BigImages1':
                return Images.ID_1_BIG_IMAGES_1;
            case 'id1BigImages2':
                return Images.ID_1_BIG_IMAGES_2;
            case 'id1BigImages3':
                return Images.ID_1_BIG_IMAGES_3;
            case 'id1BigImages4':
                return Images.ID_1_BIG_IMAGES_4;
            case 'id1BigImages5':
                return Images.ID_1_BIG_IMAGES_5;
            case 'id2BigImages1':
                return Images.ID_2_BIG_IMAGES_1;
            case 'id2BigImages2':
                return Images.ID_2_BIG_IMAGES_2;
            case 'id2BigImages3':
                return Images.ID_2_BIG_IMAGES_3;
            case 'id2BigImages4':
                return Images.ID_2_BIG_IMAGES_4;
            case 'id2BigImages5':
                return Images.ID_2_BIG_IMAGES_5;
            case 'id2BigImages6':
                return Images.ID_2_BIG_IMAGES_6;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'bigImagesCategory': 
                props.setBigImagesIsHoveringCategory("on", id);
                break;
            case 'bigImagesTag': 
                props.setBigImagesIsHoveringTag("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'bigImagesCategory': 
                props.setBigImagesIsHoveringCategory("off", id);
                break;
            case 'bigImagesTag': 
                props.setBigImagesIsHoveringTag("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "bigImagesCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "bigImagesTag"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("bigImages");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            setShowBackToTop(true);
        }else{
            setShowBackToTop(false);
        }
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
            setScrollingUp(false);
        }else{
            setScrollingUp(true);
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    const onClickHandler = (path, key, e) => {
        if(e.button === 2) return;
        localStorage.setItem("archiveCategory", key);
        localStorage.setItem("page", localStorage.getItem("page"));
        if(props.archive.category !== key && e.button !== 1){
            props.clearArchiveData();
        }
        if(e.button !== 1){
            props.setUnmountComponentValues(true, path);
        }else{
            props.setUnmountComponentValues(false, path);
        }
        props.unmountComponent(key, path, "bigImages", e.button);
    }
   
    const openPhotoViewer = (array, activeIndex) => {
        let slidesForPhotoViewer = [...array];
        let removedSlides = [];
        // let currentSlideIndex = slidesForPhotoViewer.findIndex(item => item.id === id);
              
        slidesForPhotoViewer.map((el, i) => {
            if(i < activeIndex){
                removedSlides.push(el);
            }
        })
        slidesForPhotoViewer.splice(0, activeIndex)
      
        if(removedSlides.length !== 0){
            slidesForPhotoViewer.push(removedSlides);
        }

        slidesForPhotoViewer = slidesForPhotoViewer.flat();
        
        props.photoViewerOpen('bigImages', true, slidesForPhotoViewer);
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="bigImages"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="bigImages"
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
                        page="bigImages"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="bigImages"
                    />
                </>
            )
        }
    }

    const renderCategories = () => {
        return(
            <div className="big-images-categories">{props.bigImagesPortfolio.item.categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="big-images-category"
                        onMouseDown={(e) => onClickHandler(el.path, el.key, e)}
                        onMouseEnter={() => handleMouseEnter(`bigImagesCategory`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`bigImagesCategory`, el.id)} 
                    >
                        <H19 className={renderClassName(`bigImagesCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="big-images-tags">{props.bigImagesPortfolio.item.tags.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="big-images-tag"
                        onMouseEnter={() => handleMouseEnter(`bigImagesTag`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`bigImagesTag`, el.id)} 
                    >
                        <H19 className={renderClassName(`bigImagesTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderPortfolioImages = () => {
        return(
            <div className="big-images-portfolio-images">{props.bigImagesPortfolio.item.imagesArray.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="big-images-portfolio-image"
                    >
                        <img 
                            src={loadImg(el.key)}
                            onClick={() => openPhotoViewer(props.bigImagesPortfolio.item.imagesArray, i)}
                        />
                        <EH30/>
                    </div>
                )
            })}</div>
        )
    }

    const renderBigImagesContent = () => {
        if(props.bigImagesPortfolio.loading && !props.bigImagesPortfolio.error){
            return(
                <div 
                    className="big-images-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bigImagesPortfolio.loading && !props.bigImagesPortfolio.error){
            return(
                <div className="big-images-wrapper">
                    <H70 className="h70-nero-poppins">{props.bigImagesPortfolio.item.header}</H70>
                    <EH70/>
                    <div 
                        id="bigSliderContent"
                        className="big-images-content"
                    >
                        <div className="big-images-content-info">
                            {renderPortfolioImages()}
                            <EH40/>
                            <div className="big-images-content-info">
                                <div className="big-images-text-wrapper">
                                    <H19 className="h19-nobel-lustria">{props.bigImagesPortfolio.item.text}</H19>
                                </div>
                                <div className="big-images-category-date-tags-wrapper">
                                    <H22 className="h22-nero-poppins">Category:</H22>
                                    {renderCategories()}
                                    <EH40/>
                                    <H22 className="h22-nero-poppins">Date:</H22>
                                    <H19 className="h19-nobel-lustria">{props.bigImagesPortfolio.item.date}</H19>
                                    <EH40/>
                                    <H22 className="h22-nero-poppins">Tags:</H22>
                                    {renderTags()}
                                </div>
                            </div>
                        </div>
                        <EH70/>
                        <PortfolioNavigation component="bigImages"/>
                    </div>
                </div>
            )
        }
        if(!props.bigImagesPortfolio.loading && props.bigImagesPortfolio.error){
            return(
                <div 
                    className="big-images-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.bigImagesPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="big-images" id="bigImages">
            {renderToolbars()}
            {showContent ? renderBigImagesContent() : null}
            <Footer/>
            {props.photoViewerForBigImagesOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="bigImages"
            /> : null}
            {showBackToTop ? <BackToTop/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            bigImagesPortfolio: Selectors.getBigImagesPortfolioState(state),
            photoViewerForBigImagesOpen: Selectors.getPhotoViewerForBigImagesOpenState(state),
            archive: Selectors.getArchiveState(state)
        };
    },
    (dispatch) => {
        return {
            fetchBigImagesPortfolio: bindActionCreators(Services.fetchBigImagesPortfolio, dispatch),
            setBigImagesIsHoveringCategory: bindActionCreators(Actions.setBigImagesIsHoveringCategory, dispatch),
            setBigImagesIsHoveringTag: bindActionCreators(Actions.setBigImagesIsHoveringTag, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(BigImages);
 