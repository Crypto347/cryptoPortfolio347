/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
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

import './portfolioGallery.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import PictureBoardImageItem from '../../../SmallParts/PictureBoardImageItem/pictureBoardImageItem';
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
    H15,
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

//Id 1

import Id1BigImages1 from '../../../../images/portfolioPages/bigImages/id1/joshua-reddekopp-cNe8GsQR-OQ-unsplash.png';
import Id1BigImages2 from '../../../../images/portfolioPages/bigImages/id1/lee-campbell-CI-5GwJcVjE-unsplash.png';
import Id1BigImages3 from '../../../../images/portfolioPages/bigImages/id1/lee-campbell-qNPESem_t4I-unsplash.png';
import Id1BigImages4 from '../../../../images/portfolioPages/bigImages/id1/melanie-mauer-x-agyuDQHJA-unsplash.png';
import Id1BigImages5 from '../../../../images/portfolioPages/bigImages/id1/nathan-dumlao-KEniowKfX3k-unsplash.png';

//Id 2

import Id2BigImages1 from '../../../../images/portfolioPages/bigImages/id2/uby-yanes-LMwW0ARHc4o-updated-unsplash.png';
import Id2BigImages2 from '../../../../images/portfolioPages/bigImages/id2/emma-matthews-digital-content-production-vKM1ZdtoBL4-updated-unsplash.png';
import Id2BigImages3 from '../../../../images/portfolioPages/bigImages/id2/uby-yanes-393QQ30ecvQ-updated-unsplash.png';
import Id2BigImages4 from '../../../../images/portfolioPages/bigImages/id2/stil-flRm0z3MEoA-updated-unsplash.png';
import Id2BigImages5 from '../../../../images/portfolioPages/bigImages/id2/freestocks-A11MXTzUhLE-updated-unsplash.png';
import Id2BigImages6 from '../../../../images/portfolioPages/bigImages/id2/emma-matthews-digital-content-production-X6M1Ke1o9yI-updated-unsplash.png';

/**
* PortfolioGallery component definition and export
*/

export const PortfolioGallery = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const resizeRef = useRef();
    const [scrollingUp, setScrollingUp] = useState(false);
    // const [showContent, setShowContent] = useState(false);
    // const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");
    // const [moveStepMovablePart, setMoveStepMovablePart] = useState(0);
  
    const initCoordinateRange = [
        {
            id: 1,
            updated: false
        },
        {
            id: 2,
            updated: false
        },
        {
            id: 3,
            updated: false
        },
        {
            id: 4,
            updated: false
        },
        {
            id: 5,
            updated: false
        },
        {
            id: 6,
            updated: false
        },
        {
            id: 7,
            updated: false
        },
        {
            id: 8,
            updated: false
        },
        {
            id: 9,
            updated: false
        },
        {
            id: 10,
            updated: false
        },
        {
            id: 11,
            updated: false
        },
        {
            id: 12,
            updated: false
        },
        {
            id: 13,
            updated: false
        },
        {
            id: 14,
            updated: false
        },
        {
            id: 15,
            updated: false
        },
        {
            id: 16,
            updated: false
        },
        {
            id: 17,
            updated: false
        },
        {
            id: 18,
            updated: false
        }
    ]

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
        props.fetchPortfolioGalleryPage();

        const resize = () => {
            resizeRef.current();
        }
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        props.forgetCoordinateRangeForPortfolioGalleryPage(initCoordinateRange);
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'designType': 
                props.setPortfolioGalleryPageIsHoveringTypeOfCard("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'designType': 
                props.setPortfolioGalleryPageIsHoveringTypeOfCard("off", id);
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "designType"){
            switch(isHovering){
                case 'init':
                    return "h15-nobel-lustria-animated";
                case 'on':
                    return "h15-nobel-lora-nero-hover-on";
                case 'off':
                    return "h15-nobel-lora-nero-hover-off"
            }
        }
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
    //             setIsHoveringCategoryText("on");
    //             break;
    //         case 'bigImagesTag': 
    //             props.setBigImagesIsHoveringTag("on", id);
    //             break;
    //     }
    // }

    // const handleMouseLeave = (opt, id) => {
    //     switch(opt){
    //         case 'bigImagesCategory': 
    //             setIsHoveringCategoryText("off");
    //             break;
    //         case 'bigImagesTag': 
    //             props.setBigImagesIsHoveringTag("off", id);
    //             break;
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
        return(
                <Toolbar 
                    style="toolbarVersion2" 
                    // scrollingUp={scrollingUp}
                    toolbarMainColor="white"
                />
        )
        // if(size.width < 1120){
        //     return(
        //         <>
        //             <Toolbar 
        //                 style="smallScreenAnimated" 
        //                 scrollingUp={scrollingUp}
        //                 toolbarMainColor="white"
        //             />
        //             <Toolbar 
        //                 style="smallScreen"
        //                 toolbarMainColor="regular"
        //             />
        //         </>
        //     )
        // }else{
        //     return(
        //         <>
        //             <Toolbar 
        //                 style="regularScreenAnimated" 
        //                 scrollingUp={scrollingUp}
        //                 toolbarMainColor="white"
        //             />
        //             <Toolbar 
        //                 style="regularScreenWhite"
        //                 toolbarMainColor="white"
        //             />
        //         </>
        //     )
        // }
    }
   
 

    const renderPortfolioGalleryPageItems = () => {
        return(
            <div className="portfolio-gallery-page-items">{props.portfolioGalleryPage.items.map((el, i) => {
                let imgCoordinateRange = props.portfolioGalleryPage.itemsCooradinateRange.find(item => item.id === el.id);
                return(
                    <div 
                        key={i}
                        className="portfolio-gallery-page-item"
                    >
                        <div className="portfolio-gallery-page-item-image">
                            <PictureBoardImageItem  
                                component="portfolioGallery"
                                id={el.id}
                                option={el.option}
                                imagesArray={el.pictures}
                                alt={el.alt}
                                // path={el.path}
                                // clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                                rememberCoordinateRange={props.rememberCoordinateRangeForPortfolioGalleryPage}
                                // forgetCoordinateRange={props.forgetCoordinateRange}
                                imgCoordinateRange={imgCoordinateRange}
                            />
                        </div>
                        <div
                            onMouseEnter={() => handleMouseEnter('designType', el.id)} 
                            onMouseLeave={() => handleMouseLeave('designType', el.id)}
                        >
                            <H15 className={renderClassName("designType", el.isHover)}>{el.designType}</H15>
                        </div>
                    </div>
                )
                // 
                // return(
                //     <div 
                //         key={i}
                //         className="portfolio-gallery-page-item"
                //     >
                //         <PictureBoardImageItem  
                //             key={i}
                //             id={el.id}
                //             option={el.option}
                //             imagesArray={el.pictures}
                //             alt={el.alt}
                //             // path={el.path}
                //             // clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                //             rememberCoordinateRange={props.rememberCoordinateRangeForPortfolioGalleryPage}
                //             // forgetCoordinateRange={props.forgetCoordinateRange}
                //             imgCoordinateRange={imgCoordinateRange}
                //         />
                //     </div>
                // )
            })}</div>
        )
    }

    const renderPortfolioGalleryPageData = () => {
        if(props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error){
            return(
                <div 
                    className="portfolio-gallery-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error){
            return(
                <>
                    {renderPortfolioGalleryPageItems()}
                </>
            )
        }
        if(!props.portfolioGalleryPage.loading && props.portfolioGalleryPage.error){
            return(
                <div 
                    className="portfolio-gallery-page-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.portfolioGalleryPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="portfolio-gallery">
            {renderToolbars()}
            <div className="portfolio-gallery-wrapper">
                <div className="portfolio-gallery-header-wrapper">
                    <div className="header-wrapper">
                        <div className="portfolio-gallery-header-bold">Welcome!</div>
                        <div className="portfolio-gallery-header-text1">Take a Look</div>
                    </div>
                    <div className="portfolio-gallery-header-text2">at Our Portfolio.</div>
                </div>
                {renderPortfolioGalleryPageData()}
            </div>
            <Footer/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            portfolioGalleryPage: Selectors.getPortfolioGalleryPageState(state),
            // photoViewerForBigImagesOpen: Selectors.getPhotoViewerForBigImagesOpenState(state)
        };
    },
    (dispatch) => {
        return {
            fetchPortfolioGalleryPage: bindActionCreators(Services.fetchPortfolioGalleryPage, dispatch),
            rememberCoordinateRangeForPortfolioGalleryPage: bindActionCreators(Actions.rememberCoordinateRangeForPortfolioGalleryPage, dispatch),
            forgetCoordinateRangeForPortfolioGalleryPage: bindActionCreators(Actions.forgetCoordinateRangeForPortfolioGalleryPage, dispatch),
            setPortfolioGalleryPageIsHoveringTypeOfCard: bindActionCreators(Actions.setPortfolioGalleryPageIsHoveringTypeOfCard, dispatch),
            // photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch)
        };
    }
)(PortfolioGallery);
 