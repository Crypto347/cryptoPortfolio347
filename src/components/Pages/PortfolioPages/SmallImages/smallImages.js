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

import './smallImages.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
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
* SmallImages component definition and export
*/

export const SmallImages = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");
    const [moveStepMovablePart, setMoveStepMovablePart] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        window.scrollTo(0, 0);
        props.fetchSmallImagesPortfolio(props.match.params.id);

        setShowContent(true);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleOnWheel);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleOnWheel);
        }
    }, []);

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let contentOffsetTop = document.getElementById("smallImagesContent") ? document.getElementById("smallImagesContent").offsetTop : 0;
        let imagesOffsetTop = document.getElementById("smallImagesPortfolioImages") ? document.getElementById("smallImagesPortfolioImages").offsetTop : 0;
        let imagesOffsetHeight = document.getElementById("smallImagesPortfolioImages") ? document.getElementById("smallImagesPortfolioImages").offsetHeight : 0;
        let movablePartHeight = document.getElementById("smallImagesMovablePart") ? document.getElementById("smallImagesMovablePart").offsetHeight : 0;
        let moveUntil = imagesOffsetTop + imagesOffsetHeight - movablePartHeight;

        // Set margin top of movable part

        if(scrollHeight > contentOffsetTop && scrollHeight < moveUntil){
            setMoveStepMovablePart(scrollHeight - contentOffsetTop);
        } 
        else if(scrollHeight > moveUntil) {
            setMoveStepMovablePart(imagesOffsetHeight - movablePartHeight - 30);
        } 
        else {
            setMoveStepMovablePart(0);
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("smallImages");

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

    const loadImg = (key) => {
        switch(key) {
            case 'id1SmallImages1':
                return Images.ID_1_SMALL_IMAGES_1;
            case 'id1SmallImages2':
                return Images.ID_1_SMALL_IMAGES_2;
            case 'id1SmallImages3':
                return Images.ID_1_SMALL_IMAGES_3;
            case 'id1SmallImages4':
                return Images.ID_1_SMALL_IMAGES_4;
            case 'id1SmallImages5':
                return Images.ID_1_SMALL_IMAGES_5;
            case 'id2SmallImages1':
                return Images.ID_2_SMALL_IMAGES_1;
            case 'id2SmallImages2':
                return Images.ID_2_SMALL_IMAGES_2;
            case 'id3SmallImages1':
                return Images.ID_3_SMALL_IMAGES_1;
            case 'id3SmallImages2':
                return Images.ID_3_SMALL_IMAGES_2;
            case 'id3SmallImages3':
                return Images.ID_3_SMALL_IMAGES_3;
            case 'id4SmallImages1':
                return Images.ID_4_SMALL_IMAGES_1;
            case 'id4SmallImages2':
                return Images.ID_4_SMALL_IMAGES_2;
            case 'id4SmallImages3':
                return Images.ID_4_SMALL_IMAGES_3;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'smallImagesCategory': 
                props.setSmallImagesIsHoveringCategory("on", id);
                break;
            case 'smallImagesTag': 
                props.setSmallImagesIsHoveringTag("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'smallImagesCategory': 
                props.setSmallImagesIsHoveringCategory("off", id);
                break;
            case 'smallImagesTag': 
                props.setSmallImagesIsHoveringTag("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "smallImagesCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "smallImagesTag"){
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
        props.unmountComponent(key, path, "smallImages", e.button);
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
        
        props.photoViewerOpen('smallImages', true, slidesForPhotoViewer);
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="smallImages"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="smallImages"
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
                        page="smallImages"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="smallImages"
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
            >{props.smallImagesPortfolio.item.imagesArray.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-images-portfolio-image"
                    >
                        <img 
                            src={loadImg(el.key)}
                            onClick={() => openPhotoViewer(props.smallImagesPortfolio.item.imagesArray, i)}
                        />
                        <EH30/>
                    </div>
                )
            })}</div>
        )
    }

    const renderCategories = () => {
        return(
            <div className="small-images-categories">{props.smallImagesPortfolio.item.categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-images-category"
                        onMouseDown={(e) => onClickHandler(el.path, el.key, e)}
                        onMouseEnter={() => handleMouseEnter(`smallImagesCategory`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallImagesCategory`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallImagesCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="small-images-tags">{props.smallImagesPortfolio.item.tags.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-images-tag"
                        onMouseEnter={() => handleMouseEnter(`smallImagesTag`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallImagesTag`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallImagesTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderSmallImagesContent = () => {
        if(props.smallImagesPortfolio.loading && !props.smallImagesPortfolio.error){
            return(
                <div 
                    className="small-images-loading-error" 
                    style={{height: `${size.height}px`}}
                >
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
                        {renderPortfolioImages()}
                        <div 
                            id="smallImagesMovablePart"
                            className="small-images-movable-part" 
                            style={{marginTop: `${moveStepMovablePart}px`}}
                        >
                            <H19 className="h19-nobel-lustria">{props.smallImagesPortfolio.item.text}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Category:</H22>
                            {renderCategories()}
                            <EH40/>
                            <H22 className="h22-nero-poppins">Date:</H22>
                            <H19 className="h19-nobel-lustria">{props.smallImagesPortfolio.item.date}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Tags:</H22>
                            {renderTags()}
                        </div>
                    </div>
                    <EH70/>
                   <PortfolioNavigation component="smallImages"/>
                </div>
            )
        }
        if(!props.smallImagesPortfolio.loading && props.smallImagesPortfolio.error){
            return(
                <div 
                    className="small-images-loading-error" 
                    style={{height: `${size.height}px`}}
                >
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
            <Footer/>
            {props.photoViewerForSmallImagesOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="smallImages"
            /> : null}
            {showBackToTop ? <BackToTop/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallImagesPortfolio: Selectors.getSmallImagesPortfolioState(state),
            photoViewerForSmallImagesOpen: Selectors.getPhotoViewerForSmallImagesOpenState(state),
            archive: Selectors.getArchiveState(state)
        };
    },
    (dispatch) => {
        return {
            fetchSmallImagesPortfolio: bindActionCreators(Services.fetchSmallImagesPortfolio, dispatch),
            setSmallImagesIsHoveringCategory: bindActionCreators(Actions.setSmallImagesIsHoveringCategory, dispatch),
            setSmallImagesIsHoveringTag: bindActionCreators(Actions.setSmallImagesIsHoveringTag, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(SmallImages);
 