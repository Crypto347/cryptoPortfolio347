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

import './archive.scss';

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
    H45,
    EH20,
    EH30,
    EH40,
    EH70,
    EH90
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
import * as Images from '../../../constants/images';
//GraphicDesign

import Id1SmallImages1 from '../../../images/portfolioPages/smallImages/id1/adam-wilson-1QZYZib7eYs-unsplash.png';
import Id1Gallery1 from '../../../images/portfolioPages/gallery/id1/nadine-shaabana-updated2-unsplash.png';
import Id1SmallGallery1 from '../../../images/portfolioPages/smallGallery/id1/ash-from-modern-afflatus-updated1-unsplash.png';
import Id1SmallSlider1 from '../../../images/portfolioPages/smallSlider/id1/damian-patkowski--pahtnAMuFo-unsplash.png';
import Id2BigImages1 from '../../../images/portfolioPages/bigImages/id2/uby-yanes-LMwW0ARHc4o-updated-unsplash.png';
import Id3SmallImages1 from '../../../images/portfolioPages/smallImages/id3/jess-bailey-dWKqZcPLc8Y-updated-unsplash.png';
import Id3BigSlider1 from '../../../images/portfolioPages/bigSlider/id3/angele-kamp-KaeaUITiWnc-upadted-unsplash.png';

//Id 2

// import Id2BigImages1 from '../../../../images/portfolioPages/bigImages/id2/uby-yanes-LMwW0ARHc4o-updated-unsplash.png';
// import Id2BigImages2 from '../../../../images/portfolioPages/bigImages/id2/emma-matthews-digital-content-production-vKM1ZdtoBL4-updated-unsplash.png';
// import Id2BigImages3 from '../../../../images/portfolioPages/bigImages/id2/uby-yanes-393QQ30ecvQ-updated-unsplash.png';
// import Id2BigImages4 from '../../../../images/portfolioPages/bigImages/id2/stil-flRm0z3MEoA-updated-unsplash.png';
// import Id2BigImages5 from '../../../../images/portfolioPages/bigImages/id2/freestocks-A11MXTzUhLE-updated-unsplash.png';
// import Id2BigImages6 from '../../../../images/portfolioPages/bigImages/id2/emma-matthews-digital-content-production-X6M1Ke1o9yI-updated-unsplash.png';

/**
* Archive component definition and export
*/

export const Archive = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showContent, setShowContent] = useState(false);
    // const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");
    // const [moveStepMovablePart, setMoveStepMovablePart] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        window.scrollTo(0, 0);
        props.fetchArchive(props.match.params.category, 1);

        // if(props.bigImagesPortfolio.item !== {}){
            setShowContent(true);
        // }

        window.addEventListener('wheel', handleOnWheel);

        return () => window.removeEventListener('wheel', handleOnWheel);
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("archive");
    
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
                return Id1SmallImages1;
            case 'id1Gallery1':
                return Id1Gallery1;
            case 'id1SmallGallery1':
                return Id1SmallGallery1;
            case 'id1SmallSlider1':
                return Id1SmallSlider1;
            case 'id2BigImages1':
                return Id2BigImages1;
            case 'id3SmallImages1':
                return Id3SmallImages1;
            case 'id3BigSlider1':
                return Id3BigSlider1;
            default:
                return "";
        }
    }

    
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


    const renderArchiveData = () => {
        console.log(props.archive.items.archiveData)
        return(
            <div className="archive-date-items">{props.archive.items.archiveData.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="archive-date-item"
                    >
                        <img 
                            src={loadImg(el.coverImage.key)}
                            onClick={() => openPhotoViewer(props.bigImagesPortfolio.item.imagesArray, i)}
                        />
                        <EH30/>
                        <EH40 className="h40-nero-teko">{el.header}</EH40>
                    </div>
                )
            })}</div>
        )
    }

    const renderArchiveContent = () => {
        if(props.archive.loading && !props.archive.error){
            return(
                <div 
                    className="archive-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.archive.loading && !props.archive.error){
            return(
                <div className="archive-wrapper">
                    <EH20/>
                    <H45 className="h45-nero-lustria">Archive</H45>
                    <EH90/>
                    <div className="grey-line"/>
                    <EH70/>
                   {showContent ? renderArchiveData() : null}
                </div>
            )
        }
        if(!props.archive.loading && props.archive.error){
            return(
                <div 
                    className="archive-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.archive.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="archive" id="archive">
            {renderToolbars()}
            {renderArchiveContent()}
            {/* {showContent ? renderArchiveContent() : null} */}
            <Footer/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            archive: Selectors.getArchiveState(state),
            // photoViewerForBigImagesOpen: Selectors.getPhotoViewerForBigImagesOpenState(state)
        };
    },
    (dispatch) => {
        return {
            fetchArchive: bindActionCreators(Services.fetchArchive, dispatch),
            // setBigImagesIsHoveringCategory: bindActionCreators(Actions.setBigImagesIsHoveringCategory, dispatch),
            // setBigImagesIsHoveringTag: bindActionCreators(Actions.setBigImagesIsHoveringTag, dispatch),
            // photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
        };
    }
)(Archive);
 