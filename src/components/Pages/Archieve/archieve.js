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

import './archieve.scss';

/**
* Components
*/

import Loading from '../../SmallParts/Loading/loading';
import Toolbar from '../../Parts/Toolbar/toolbar';
// import Swiper from '../../../../library/Swiper/swiper';
// import PortfolioNavigation from '../../../Parts/PortfolioNavigation/porfolioNavigation';
// import PhotoViewer from '../../../Parts/PhotoViewer/photoViewer';
import Footer from '../../Parts/Footer/footer';

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
    H22,
    H70,
    EH30,
    EH40,
    EH70
} from '../../UtilityComponents';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
* Images
*/

//Id 1

// import Id1BigImages1 from '../../../../images/portfolioPages/bigImages/id1/joshua-reddekopp-cNe8GsQR-OQ-unsplash.png';
// import Id1BigImages2 from '../../../../images/portfolioPages/bigImages/id1/lee-campbell-CI-5GwJcVjE-unsplash.png';
// import Id1BigImages3 from '../../../../images/portfolioPages/bigImages/id1/lee-campbell-qNPESem_t4I-unsplash.png';
// import Id1BigImages4 from '../../../../images/portfolioPages/bigImages/id1/melanie-mauer-x-agyuDQHJA-unsplash.png';
// import Id1BigImages5 from '../../../../images/portfolioPages/bigImages/id1/nathan-dumlao-KEniowKfX3k-unsplash.png';

//Id 2

// import Id2BigImages1 from '../../../../images/portfolioPages/bigImages/id2/uby-yanes-LMwW0ARHc4o-updated-unsplash.png';
// import Id2BigImages2 from '../../../../images/portfolioPages/bigImages/id2/emma-matthews-digital-content-production-vKM1ZdtoBL4-updated-unsplash.png';
// import Id2BigImages3 from '../../../../images/portfolioPages/bigImages/id2/uby-yanes-393QQ30ecvQ-updated-unsplash.png';
// import Id2BigImages4 from '../../../../images/portfolioPages/bigImages/id2/stil-flRm0z3MEoA-updated-unsplash.png';
// import Id2BigImages5 from '../../../../images/portfolioPages/bigImages/id2/freestocks-A11MXTzUhLE-updated-unsplash.png';
// import Id2BigImages6 from '../../../../images/portfolioPages/bigImages/id2/emma-matthews-digital-content-production-X6M1Ke1o9yI-updated-unsplash.png';

/**
* Archieve component definition and export
*/

export const Archieve = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    // const [showContent, setShowContent] = useState(false);
    // const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");
    // const [moveStepMovablePart, setMoveStepMovablePart] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        window.scrollTo(0, 0);
        props.fetchArchieve(props.match.params.category);

        // if(props.bigImagesPortfolio.item !== {}){
        //     setShowContent(true);
        // }

        window.addEventListener('wheel', handleOnWheel);

        return () => window.removeEventListener('wheel', handleOnWheel);
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("archieve");
    
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

    // const loadImg = (key) => {
    //     switch(key) {
    //         case 'id1BigImages1':
    //             return Id1BigImages1;
    //         case 'id1BigImages2':
    //             return Id1BigImages2;
    //         case 'id1BigImages3':
    //             return Id1BigImages3;
    //         case 'id1BigImages4':
    //             return Id1BigImages4;
    //         case 'id1BigImages5':
    //             return Id1BigImages5;
    //         case 'id2BigImages1':
    //             return Id2BigImages1;
    //         case 'id2BigImages2':
    //             return Id2BigImages2;
    //         case 'id2BigImages3':
    //             return Id2BigImages3;
    //         case 'id2BigImages4':
    //             return Id2BigImages4;
    //         case 'id2BigImages5':
    //             return Id2BigImages5;
    //         case 'id2BigImages6':
    //             return Id2BigImages6;
    //         default:
    //             return "";
    //     }
    // }

    // const handleMouseEnter = (opt, id) => {
    //     switch(opt){
    //         case 'bigImagesCategory': 
    //             props.setBigImagesIsHoveringCategory("on", id);
    //             break;
    //         case 'bigImagesTag': 
    //             props.setBigImagesIsHoveringTag("on", id);
    //             break;
    //     }
    // }

    // const handleMouseLeave = (opt, id) => {
    //     switch(opt){
    //         case 'bigImagesCategory': 
    //             props.setBigImagesIsHoveringCategory("off", id);
    //             break;
    //         case 'bigImagesTag': 
    //             props.setBigImagesIsHoveringTag("off", id);
    //             break;
    //     }
    // }
    
    // const renderClassName = (opt, isHovering) => {
    //     if(opt === "bigImagesCategory"){
    //         switch(isHovering){
    //             case 'init':
    //                 return "h19-nobel-lustria-animated";
    //             case 'on':
    //                 return "h19-nobel-lustria-nero-hover-on";
    //             case 'off':
    //                 return "h19-nobel-lustria-nero-hover-off"
    //         }
    //     }
    //     if(opt === "bigImagesTag"){
    //         switch(isHovering){
    //             case 'init':
    //                 return "h19-nobel-lustria-animated";
    //             case 'on':
    //                 return "h19-nobel-lustria-nero-hover-on";
    //             case 'off':
    //                 return "h19-nobel-lustria-nero-hover-off"
    //         }
    //     }
    // }

    // const handleOnWheel = (e) => {
    //     let scrollHeight = document.body.scrollTop;
    //     let el = document.getElementById("bigImages");
    
    //     // Check scroll direction

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

    // const openPhotoViewer = (array, activeIndex) => {
    //     let slidesForPhotoViewer = [...array];
    //     let removedSlides = [];
    //     // let currentSlideIndex = slidesForPhotoViewer.findIndex(item => item.id === id);
              
    //     slidesForPhotoViewer.map((el, i) => {
    //         if(i < activeIndex){
    //             removedSlides.push(el);
    //         }
    //     })
    //     slidesForPhotoViewer.splice(0, activeIndex)
      
    //     if(removedSlides.length !== 0){
    //         slidesForPhotoViewer.push(removedSlides);
    //     }

    //     slidesForPhotoViewer = slidesForPhotoViewer.flat();
        
    //     props.photoViewerOpen('bigImages', true, slidesForPhotoViewer);
    // }

   
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
   
    // const renderCategories = () => {
    //     return(
    //         <div className="big-images-categories">{props.bigImagesPortfolio.item.categories.map((el, i) => {
    //             return(
    //                 <div 
    //                     key={i}
    //                     className="big-images-category"
    //                     onMouseEnter={() => handleMouseEnter(`bigImagesCategory`, el.id)} 
    //                     onMouseLeave={() => handleMouseLeave(`bigImagesCategory`, el.id)} 
    //                 >
    //                     <H19 className={renderClassName(`bigImagesCategory`, el.isHover)}>{el.label}</H19>
    //                 </div>
    //             )
    //         })}</div>
    //     )
    // }

    // const renderTags = () => {
    //     return(
    //         <div className="big-images-tags">{props.bigImagesPortfolio.item.tags.map((el, i) => {
    //             return(
    //                 <div 
    //                     key={i}
    //                     className="big-images-tag"
    //                     onMouseEnter={() => handleMouseEnter(`bigImagesTag`, el.id)} 
    //                     onMouseLeave={() => handleMouseLeave(`bigImagesTag`, el.id)} 
    //                 >
    //                     <H19 className={renderClassName(`bigImagesTag`, el.isHover)}>{el.label}</H19>
    //                 </div>
    //             )
    //         })}</div>
    //     )
    // }

    // const renderPortfolioImages = () => {
    //     return(
    //         <div className="big-images-portfolio-images">{props.bigImagesPortfolio.item.imagesArray.map((el, i) => {
    //             return(
    //                 <div 
    //                     key={i}
    //                     className="big-images-portfolio-image"
    //                 >
    //                     <img 
    //                         src={loadImg(el.key)}
    //                         onClick={() => openPhotoViewer(props.bigImagesPortfolio.item.imagesArray, i)}
    //                     />
    //                     <EH30/>
    //                 </div>
    //             )
    //         })}</div>
    //     )
    // }

    const renderArchieveContent = () => {
        if(props.archieve.loading && !props.archieve.error){
            return(
                <div 
                    className="archieve-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.archieve.loading && !props.archieve.error){
            return(
                <div className="archieve-wrapper">
                    {/* <H70 className="h70-nero-poppins">{props.bigImagesPortfolio.item.header}</H70>
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
                    </div> */}
                </div>
            )
        }
        if(!props.archieve.loading && props.archieve.error){
            return(
                <div 
                    className="archieve-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.archieve.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="archieve" id="archieve">
            {renderToolbars()}
            {renderArchieveContent()}
            {/* {showContent ? renderArchieveContent() : null} */}
            <Footer/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            archieve: Selectors.getArchieveState(state),
            // photoViewerForBigImagesOpen: Selectors.getPhotoViewerForBigImagesOpenState(state)
        };
    },
    (dispatch) => {
        return {
            fetchArchieve: bindActionCreators(Services.fetchArchieve, dispatch),
            // setBigImagesIsHoveringCategory: bindActionCreators(Actions.setBigImagesIsHoveringCategory, dispatch),
            // setBigImagesIsHoveringTag: bindActionCreators(Actions.setBigImagesIsHoveringTag, dispatch),
            // photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
        };
    }
)(Archieve);
 