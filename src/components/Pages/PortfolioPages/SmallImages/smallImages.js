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

import Id1SmallImages1 from '../../../../images/smallImages/id1/adam-wilson-1QZYZib7eYs-unsplash.png';
import Id1SmallImages2 from '../../../../images/smallImages/id1/jason-blackeye-DKCgibUVLNc-unsplash.png';
import Id1SmallImages3 from '../../../../images/smallImages/id1/nordwood-themes-Nv4QHkTVEaI-unsplash.png';
import Id1SmallImages4 from '../../../../images/smallImages/id1/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.png';
import Id1SmallImages5 from '../../../../images/smallImages/id1/shelbey-miller-HIQd4db8Kr8-unsplash.png';

//Id2

import Id2SmallImages1 from '../../../../images/smallImages/id2/jess-bailey-MSH3ldaRZsg-updated-unsplash.png';
import Id2SmallImages2 from '../../../../images/smallImages/id2/paper-3025558_1920-updated.png';

//Id3

import Id3SmallImages1 from '../../../../images/smallImages/id3/jess-bailey-dWKqZcPLc8Y-updated-unsplash.png';
import Id3SmallImages2 from '../../../../images/smallImages/id3/jess-bailey-L71uKsAVo4g-updated-unsplash.png';
import Id3SmallImages3 from '../../../../images/smallImages/id3/jess-bailey-z0guTIr_kts-updated-unsplash.png';

//Id4

import Id4SmallImages1 from '../../../../images/smallImages/id4/clay-banks-_wkd7XBRfU4-updated-unsplash.png';
import Id4SmallImages2 from '../../../../images/smallImages/id4/marina-zaharkina-TKQXY1dAgjE-updated-unsplash.png';
import Id4SmallImages3 from '../../../../images/smallImages/id4/ohmky-lQwWZI_WjSU-updated-unsplash.png';

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

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
        props.fetchSmallImagesPortfolio(props.match.params.id);

        if(props.smallImagesPortfolio.item !== {}){
            setShowContent(true)
        }

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
        let el = document.getElementById("smallImages");
    
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
                   <PortfolioNavigation/>
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
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallImagesPortfolio: Selectors.getSmallImagesPortfolioState(state),
            photoViewerForSmallImagesOpen: Selectors.getPhotoViewerForSmallImagesOpenState(state),
        };
    },
    (dispatch) => {
        return {
            fetchSmallImagesPortfolio: bindActionCreators(Services.fetchSmallImagesPortfolio, dispatch),
            setSmallImagesIsHoveringTag: bindActionCreators(Actions.setSmallImagesIsHoveringTag, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
        };
    }
)(SmallImages);
 