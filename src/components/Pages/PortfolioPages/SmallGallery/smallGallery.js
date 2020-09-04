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

import './smallGallery.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import PortfolioNavigation from '../../../Parts/PortfolioNavigation/porfolioNavigation';
import PhotoViewer from '../../../Parts/PhotoViewer/photoViewer';
import Footer from '../../../Parts/Footer/footer';

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
* SmallGallery component definition and export
*/

export const SmallGallery = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        window.scrollTo(0, 0);
        props.fetchSmallGalleryPortfolio(props.match.params.id);

        setShowContent(true);

        // window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleOnWheel);
        }
    }, []);

    const loadImg = (key) => {
        switch(key) {
            case 'id1SmallGallery1':
                return Images.ID_1_SMALL_GALLERY_1;
            case 'id1SmallGallery2':
                return Images.ID_1_SMALL_GALLERY_2;
            case 'id1SmallGallery3':
                return Images.ID_1_SMALL_GALLERY_3;
            case 'id1SmallGallery4':
                return Images.ID_1_SMALL_GALLERY_4;
            case 'id1SmallGallery5':
                return Images.ID_1_SMALL_GALLERY_5;
            case 'id1SmallGallery6':
                return Images.ID_1_SMALL_GALLERY_6;
            case 'id2SmallGallery1':
                return Images.ID_2_SMALL_GALLERY_1;
            case 'id2SmallGallery2':
                return Images.ID_2_SMALL_GALLERY_2;
            case 'id2SmallGallery3':
                return Images.ID_2_SMALL_GALLERY_3;
            case 'id2SmallGallery4':
                return Images.ID_2_SMALL_GALLERY_4;
            case 'id3SmallGallery1':
                return Images.ID_3_SMALL_GALLERY_1;
            case 'id3SmallGallery2':
                return Images.ID_3_SMALL_GALLERY_2;
            case 'id3SmallGallery3':
                return Images.ID_3_SMALL_GALLERY_3;
            case 'id3SmallGallery4':
                return Images.ID_3_SMALL_GALLERY_4;
            case 'id3SmallGallery5':
                return Images.ID_3_SMALL_GALLERY_5;
            case 'id3SmallGallery6':
                return Images.ID_3_SMALL_GALLERY_6;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'smallGalleryCategory': 
                props.setSmallGalleryIsHoveringCategory("on", id);
                break;
            case 'smallGalleryTag': 
                props.setSmallGalleryIsHoveringTag("on", id);
                break;
            case 'image': 
                props.setSmallGalleryIsHoveringImage("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'smallGalleryCategory': 
                props.setSmallGalleryIsHoveringCategory("off", id);
                break;
            case 'smallGalleryTag': 
                props.setSmallGalleryIsHoveringTag("off", id);
                break;
            case 'image': 
                props.setSmallGalleryIsHoveringImage("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "smallGalleryCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "smallGalleryTag"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "image"){
            switch(isHovering){
                case 'init':
                    return "small-gallery-portfolio-image-curtain";
                case 'on':
                    return "small-gallery-portfolio-image-curtain-hover-on";
                case 'off':
                    return "small-gallery-portfolio-image-curtain-hover-off"
            }
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("smallGallery");
    
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

    const onClickHandler = (path, key) => {
        if(props.archive.category !== key){
            props.clearArchiveData();
        }
        props.setUnmountComponentValues(true, path);
        props.unmountComponent(key, path, "smallGallery");
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
        
        props.photoViewerOpen('smallGallery', true, slidesForPhotoViewer);
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="smallGallery"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="smallGallery"
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
                        page="smallGallery"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="smallGallery"
                    />
                </>
            )
        }
    }

    const renderPortfolioImages = () => {
        return(
            <div 
                id="smallGalleryPortfolioImages"
                className="small-gallery-portfolio-images"
            >{props.smallGalleryPortfolio.item.imagesArray.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-gallery-portfolio-image-wrapper"
                    >
                        <div 
                            className="small-gallery-portfolio-image"
                            onClick={() => openPhotoViewer(props.smallGalleryPortfolio.item.imagesArray, i)}
                            onMouseEnter={() => handleMouseEnter(`image`, el.id)} 
                            onMouseLeave={() => handleMouseLeave(`image`, el.id)}
                        >
                            <img src={loadImg(el.key)}/>
                            <div className={renderClassName(`image`, el.isHover)}/>
                        </div>
                        <EH30/>
                    </div>
                )
            })}</div>
        )
    }

    const renderCategories = () => {
        return(
            <div className="small-gallery-categories">{props.smallGalleryPortfolio.item.categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-gallery-category"
                        onClick={() => onClickHandler(el.path, el.key)}
                        onMouseEnter={() => handleMouseEnter(`smallGalleryCategory`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallGalleryCategory`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallGalleryCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="small-gallery-tags">{props.smallGalleryPortfolio.item.tags.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="small-gallery-tag"
                        onMouseEnter={() => handleMouseEnter(`smallGalleryTag`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallGalleryTag`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallGalleryTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderSmallGalleryContent = () => {
        if(props.smallGalleryPortfolio.loading && !props.smallGalleryPortfolio.error){
            return(
                <div 
                    className="small-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.smallGalleryPortfolio.loading && !props.smallGalleryPortfolio.error){
            return(
                <div className="small-gallery-wrapper">
                    <H70 className="h70-nero-poppins">{props.smallGalleryPortfolio.item.header}</H70>
                    <EH70/>
                    <div 
                        id="smallGalleryContent"
                        className="small-gallery-content"
                    >
                        {renderPortfolioImages()}
                        <div className="small-gallery-content-info">
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.text}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Category:</H22>
                            {renderCategories()}
                            <EH40/>
                            <H22 className="h22-nero-poppins">Date:</H22>
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.date}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Tags:</H22>
                            {renderTags()}
                        </div>
                    </div>
                    <EH70/>
                   <PortfolioNavigation component="smallGallery"/>
                </div>
            )
        }
        if(!props.smallGalleryPortfolio.loading && props.smallGalleryPortfolio.error){
            return(
                <div 
                    className="small-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.smallGalleryPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="small-gallery" id="smallGallery">
            {renderToolbars()}
            {showContent ? renderSmallGalleryContent() : null}
            <Footer/>
            {props.photoViewerForSmallGalleryOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="smallGallery"
            /> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallGalleryPortfolio: Selectors.getSmallGalleryPortfolioState(state),
            photoViewerForSmallGalleryOpen: Selectors.getPhotoViewerForSmallGalleryOpenState(state),
            archive: Selectors.getArchiveState(state)
        };
    },
    (dispatch) => {
        return {
            fetchSmallGalleryPortfolio: bindActionCreators(Services.fetchSmallGalleryPortfolio, dispatch),
            setSmallGalleryIsHoveringCategory: bindActionCreators(Actions.setSmallGalleryIsHoveringCategory, dispatch),
            setSmallGalleryIsHoveringTag: bindActionCreators(Actions.setSmallGalleryIsHoveringTag, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setSmallGalleryIsHoveringImage: bindActionCreators(Actions.setSmallGalleryIsHoveringImage, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(SmallGallery);
 