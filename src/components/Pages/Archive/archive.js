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
                return Images.ID_1_SMALL_IMAGES_1;
            case 'id1Gallery1':
                return Images.ID_1_GALLERY_1;
            case 'id1SmallGallery1':
                return Images.ID_1_SMALL_GALLERY_1;
            case 'id1SmallSlider1':
                return Images.ID_1_SMALL_SLIDER_1;
            case 'id2BigImages1':
                return Images.ID_2_BIG_IMAGES_1;
            case 'id3SmallImages1':
                return Images.ID_3_SMALL_IMAGES_1;
            case 'id3BigSlider1':
                return Images.ID_3_BIG_SLIDER_1;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'image': 
                props.setArchiveIsHoveringImage("on", id);
                break;
            case 'smallGalleryCategory': 
                props.setSmallGalleryIsHoveringCategory("on", id);
                break;           
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'image': 
                props.setArchiveIsHoveringImage("off", id);
                break;
            case 'smallGalleryCategory': 
                // props.setArchiveIsHoveringImage("off", id);
                break;           
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "image"){
            switch(isHovering){
                case 'init':
                    return "archive-image-curtain";
                case 'on':
                    return "archive-image-curtain-hover-on";
                case 'off':
                    return "archive-image-curtain-hover-off"
            }
        }
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
        console.log(props.archive.item.archiveData)
        return(
            <div className="archive-date-items">{props.archive.item.archiveData.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="archive-date-item"
                    >
                        <div 
                            className="archive-image"
                            // onClick={() => openPhotoViewer(props.smallGalleryPortfolio.item.imagesArray, i)}
                            onMouseEnter={() => handleMouseEnter(`image`, el.id)} 
                            onMouseLeave={() => handleMouseLeave(`image`, el.id)}
                        >
                            <img src={loadImg(el.coverImage.key)}/>
                            <div className={renderClassName(`image`, el.isHover)}/>
                        </div>
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
            setArchiveIsHoveringImage: bindActionCreators(Actions.setArchiveIsHoveringImage, dispatch),
            // setBigImagesIsHoveringTag: bindActionCreators(Actions.setBigImagesIsHoveringTag, dispatch),
            // photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
        };
    }
)(Archive);
 