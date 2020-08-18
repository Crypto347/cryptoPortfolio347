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
    const [moveStepMovablePart, setMoveStepMovablePart] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
        props.fetchSmallGalleryPortfolio(props.match.params.id);

        if(props.smallGalleryPortfolio.item !== {}){
            setShowContent(true);
        }

        // window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleOnWheel);
        }
    }, []);

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
            case 'id2SmallImages1':
                return Id2SmallImages1;
            case 'id2SmallImages2':
                return Id2SmallImages2;
            case 'id3SmallImages1':
                return Id3SmallImages1;
            case 'id3SmallImages2':
                return Id3SmallImages2;
            case 'id3SmallImages3':
                return Id3SmallImages3;
            case 'id4SmallImages1':
                return Id4SmallImages1;
            case 'id4SmallImages2':
                return Id4SmallImages2;
            case 'id4SmallImages3':
                return Id4SmallImages3;
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
                props.setSmallImagesIsHoveringTag("on", id);
                break;
            case 'smallImagesTag2': 
                props.setSmallImagesIsHoveringTag("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'smallImagesCategory': 
                setIsHoveringCategoryText("off");
                break;
            case 'smallImagesTag1': 
                props.setSmallImagesIsHoveringTag("off", id);
                break;
            case 'smallImagesTag2': 
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
                id="smallGalleryPortfolioImages"
                className="small-gallery-portfolio-images"
            >{props.smallGalleryPortfolio.item.imagesArray.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="small-gallery-portfolio-image"
                    >
                        <img 
                            src={loadImg(el.key)}
                            onClick={() => openPhotoViewer(props.smallGalleryPortfolio.item.imagesArray, i)}
                        />
                        <EH30/>
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
                        onMouseEnter={() => handleMouseEnter(`smallGalleryTag${el.id}`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallGalleryTag${el.id}`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallGalleryTag${el.id}`, el.isHover)}>{el.label}</H19>
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
                        {/* <div 
                            id="smallImagesMovablePart"
                            className="small-images-movable-part" 
                            style={{marginTop: `${moveStepMovablePart}px`}}
                        >
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.text}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Category:</H22>
                            <H19 
                                className={renderClassName("smallImagesCategory", isHoveringCategoryText)}
                                onMouseEnter={() => handleMouseEnter('smallImagesCategory')} 
                                onMouseLeave={() => handleMouseLeave('smallImagesCategory')}
                            >
                                {props.smallGalleryPortfolio.item.category}
                            </H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Date:</H22>
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.date}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Tags:</H22>
                            {renderTags()}
                        </div> */}
                    </div>
                   <PortfolioNavigation/>
                </div>
            )
        }
        if(!props.smallGalleryPortfolio.loading && props.smallGalleryPortfolio.error){
            return(
                <div 
                    className="small-images-loading-error" 
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
           {/*  {props.photoViewerForSmallImagesOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="smallImages"
            /> : null} */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallGalleryPortfolio: Selectors.getSmallGalleryPortfolioState(state),
            // photoViewerForSmallImagesOpen: Selectors.getPhotoViewerForSmallImagesOpenState(state),
        };
    },
    (dispatch) => {
        return {
            fetchSmallGalleryPortfolio: bindActionCreators(Services.fetchSmallGalleryPortfolio, dispatch),
            // setSmallImagesIsHoveringTag: bindActionCreators(Actions.setSmallImagesIsHoveringTag, dispatch),
            // photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
        };
    }
)(SmallGallery);
 