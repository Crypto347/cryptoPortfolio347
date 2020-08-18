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

//Id1

import Id1SmallGallery1 from '../../../../images/smallGallery/Id1/ash-from-modern-afflatus-updated1-unsplash.png';
import Id1SmallGallery2 from '../../../../images/smallGallery/Id1/estee-janssens-updated1-unsplash.png';
import Id1SmallGallery3 from '../../../../images/smallGallery/Id1/filip-mroz-updated1-unsplash.png';
import Id1SmallGallery4 from '../../../../images/smallGallery/Id1/georgie-cobbs-muOHbrFGEQY-updated1-unsplash.png';
import Id1SmallGallery5 from '../../../../images/smallGallery/Id1/laura-chouette-updated1-unsplash.png';
import Id1SmallGallery6 from '../../../../images/smallGallery/Id1/nadine-shaabana-updated1-unsplash.png';

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
            case 'id1SmallGallery1':
                return Id1SmallGallery1;
            case 'id1SmallGallery2':
                return Id1SmallGallery2;
            case 'id1SmallGallery3':
                return Id1SmallGallery3;
            case 'id1SmallGallery4':
                return Id1SmallGallery4;
            case 'id1SmallGallery5':
                return Id1SmallGallery5;
            case 'id1SmallGallery6':
                return Id1SmallGallery6;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'smallGalleryCategory': 
                setIsHoveringCategoryText("on");
                break;
            case 'smallGalleryTag1': 
                props.setSmallGalleryIsHoveringTag("on", id);
                break;
            case 'smallGalleryTag2': 
                props.setSmallGalleryIsHoveringTag("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'smallGalleryCategory': 
                setIsHoveringCategoryText("off");
                break;
            case 'smallGalleryTag1': 
                props.setSmallGalleryIsHoveringTag("off", id);
                break;
            case 'smallGalleryTag2': 
                props.setSmallGalleryIsHoveringTag("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "smallGalleryCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-hover-on";
                case 'off':
                    return "h19-nobel-lustria-hover-off"
            }
        }
        if(opt === "smallGalleryTag1"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-hover-on";
                case 'off':
                    return "h19-nobel-lustria-hover-off"
            }
        }
        if(opt === "smallGalleryTag2"){
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
                        <div className="small-gallery-content-info">
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.text}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Category:</H22>
                            <H19 
                                className={renderClassName("smallGalleryCategory", isHoveringCategoryText)}
                                onMouseEnter={() => handleMouseEnter('smallGalleryCategory')} 
                                onMouseLeave={() => handleMouseLeave('smallGalleryCategory')}
                            >
                                {props.smallGalleryPortfolio.item.category}
                            </H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Date:</H22>
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.date}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Tags:</H22>
                            {renderTags()}
                        </div>
                    </div>
                    <EH70/>
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
            setSmallGalleryIsHoveringTag: bindActionCreators(Actions.setSmallGalleryIsHoveringTag, dispatch),
            // photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
        };
    }
)(SmallGallery);
 