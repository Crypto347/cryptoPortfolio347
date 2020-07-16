/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import {
    bindActionCreators
} from 'redux';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './photoViewer.scss';

/**
* Components
*/


/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Services
*/

import * as Services from "../../../service";

/**
* Icons
*/

import { 
    faChevronLeft,
    faChevronRight,
    faExpand,
    faTimes
} from '@fortawesome/free-solid-svg-icons';


/**
* Utility
*/

import {
   H19
} from '../../UtilityComponents';

/**
* Images
*/

//TextFolder1

import text1 from '../../../images/pictureBoard/TextFolder1/alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg';
import text2 from '../../../images/pictureBoard/TextFolder1/alexandra-gorn-W5dsm9n6e3g-unsplash.jpg';
import text3 from '../../../images/pictureBoard/TextFolder1/alexandru-acea-T5jXjei49uY-unsplash.jpg';
import text4 from '../../../images/pictureBoard/TextFolder1/cullen-jones-wu9Xr4rt5cU-unsplash.jpg';
import text5 from '../../../images/pictureBoard/TextFolder1/jean-philippe-delberghe-3EC_3r8-yME-unsplash.jpg';
import text6 from '../../../images/pictureBoard/TextFolder1/patrick-perkins-3wylDrjxH-E-unsplash.jpg';
import text7 from '../../../images/pictureBoard/TextFolder1/sam-marx-3w8eCQgX_4c-unsplash.jpg';
import text8 from '../../../images/pictureBoard/TextFolder1/timothy-buck-psrloDbaZc8-unsplash.jpg';

//Textolder2

import text9 from '../../../images/pictureBoard/TextFolder2/anthony-reungere-s6xt1mwF_iU-unsplash.jpg';
import text10 from '../../../images/pictureBoard/TextFolder2/brendan-steeves-G-YAJ61qIuU-unsplash.jpg';
import text11 from '../../../images/pictureBoard/TextFolder2/matthew-henry-Ix1TiS-E17E-unsplash.jpg';
import text12 from '../../../images/pictureBoard/TextFolder2/rikki-chan-9FfJW5Tu_qk-unsplash.jpg';
import text13 from '../../../images/pictureBoard/TextFolder2/timo-stern-iUBgeNeyVy8-unsplash.jpg';
import text14 from '../../../images/pictureBoard/TextFolder2/ugur-peker-AkX0_cZQ6PI-unsplash.jpg';
import text15 from '../../../images/pictureBoard/TextFolder2/z-s-3-VLBL1DKxk-unsplash.jpg';


//TextFolder3

import text16 from '../../../images/pictureBoard/TextFolder3/iltun-huseynli-TQyah6wdlzg-unsplash.jpg';
import text17 from '../../../images/pictureBoard/TextFolder3/iltun-huseynli-Vyy_ddIxuEk-unsplash.jpg';
import text18 from '../../../images/pictureBoard/TextFolder3/iltun-huseynli-WIsk0e2VFgE-unsplash.jpg';
import text19 from '../../../images/pictureBoard/TextFolder3/jason-ortego-buF62ewDLcQ-unsplash.jpg';
import text20 from '../../../images/pictureBoard/TextFolder3/justin-chrn-OCmOLiKrK-Y-unsplash.jpg';
import text21 from '../../../images/pictureBoard/TextFolder3/murad-mornel-HjNqvIE91Js-unsplash.jpg';
import text22 from '../../../images/pictureBoard/TextFolder3/peter-jan-rijpkema-wI6o8OwUwdw-unsplash.jpg';

//TextFolder4

import text23 from '../../../images/pictureBoard/TextFolder4/annie-spratt-sggw4-qDD54-unsplash.jpg';
import text24 from '../../../images/pictureBoard/TextFolder4/christin-hume-mfB1B1s4sMc-unsplash.jpg';
import text25 from '../../../images/pictureBoard/TextFolder4/dylan-gillis-KdeqA3aTnBY-unsplash.jpg';
import text26 from '../../../images/pictureBoard/TextFolder4/perry-grone-lbLgFFlADrY-unsplash.jpg';
import text27 from '../../../images/pictureBoard/TextFolder4/scott-graham-5fNmWej4tAA-unsplash.jpg';




/**
* Constants
*/


/**
* PhotoViewer component definition and export
*/

export const PhotoViewer = (props) => {

    /**
    * State
    */

    // const [menuIsShown, setMenuIsShown] = useState(false);
    const [isHoveringExpand, setIsHoveringExpand] = useState(false);
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    const [isHoveringCloseButton, setIsHoveringCloseButton] = useState("init");

    /**
    * Methods
    */

    useEffect(() => {
        // props.fetchSection1Data();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'expand': 
                setIsHoveringExpand(true);
            break;
            case 'leftArrow': 
                setIsHoveringLeftArrow('on');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('on');
                break;
            case 'closeButton': 
                setIsHoveringCloseButton('on');
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'expand': 
                setIsHoveringExpand(false);
                break;
            case 'leftArrow': 
                setIsHoveringLeftArrow('off');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('off');
                break;
            case 'closeButton': 
                setIsHoveringCloseButton('off');
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "leftArrow"){
            switch(isHovering){
                case 'init':
                    return "photo-viewer-navigation-left-arrow";
                case 'on':
                    return "photo-viewer-navigation-left-arrow-hover-on";
                case 'off':
                    return "photo-viewer-navigation-left-arrow-hover-off"
            }
        }
        if(opt === "rightArrow"){
            switch(isHovering){
                case 'init':
                    return "photo-viewer-navigation-right-arrow";
                case 'on':
                    return "photo-viewer-navigation-right-arrow-hover-on";
                case 'off':
                    return "photo-viewer-navigation-right-arrow-hover-off"
            }
        }
        if(opt === "closeButtonText"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lora";
                case 'on':
                    return "h19-nobel-lora-nero-hover-on";
                case 'off':
                    return "h19-nobel-lora-nero-hover-off"
            }
        }

        if(opt === "closeButton"){
            switch(isHovering){
                case 'init':
                    return "photo-viewer-close-wrapper";
                case 'on':
                    return "photo-viewer-close-wrapper-hover-on";
                case 'off':
                    return "photo-viewer-close-wrapper-hover-off"
            }
        }        
    }

    const loadImg = (key) => {
        switch(key) {
            case 'text1':
                return text1;
            case 'text2':
                return text2;
            case 'text3':
                return text3;
            case 'text4':
                return text4;
            case 'text5':
                return text5;
            case 'text6':
                return text6;
            case 'text7':
                return text7;
            case 'text8':
                return text8;
            case 'text9':
                return text9;
            case 'text10':
                return text10;
            case 'text11':
                return text11;
            case 'text12':
                return text12;
            case 'text13':
                return text13;
            case 'text14':
                return text14;
            case 'text15':
                return text15;
            case 'text16':
                return text16;
            case 'text17':
                return text17;
            case 'text18':
                return text18;
            case 'text19':
                return text19;
            case 'text20':
                return text20;
            case 'text21':
                return text21;
            case 'text22':
                return text22;
            case 'text23':
                return text23;
            case 'text24':
                return text24;
            case 'text25':
                return text25;
            case 'text26':
                return text26;
            case 'text27':
                return text27;
            default:
                return "";
        }
    }

    const renderImages = () => {
        return(
            <div className="photo-viewer-image-items">{props.arrayOfImages.map((el,i) => {
                return(
                    <div key={i} className="photo-viewer-image-item">
                        <img src={loadImg(el.key)}/>
                    </div>
                )
            })}</div>
        )
    }

   


    /**
    * Markup
    */

    return(
        <div className="photo-viewer">
            <div className="photo-viewer-wrapper">
                <div className="photo-viewer-full-screen">
                    <FontAwesomeIcon 
                        icon={faExpand} 
                        size="lg" 
                        color={isHoveringExpand ? "white" : "rgb(155, 155, 155)"}
                        // onClick={() => props.nextImage(props.arrayOfImages[0].id)}
                        onMouseEnter={() => handleMouseEnter('expand')} 
                        onMouseLeave={() => handleMouseLeave('expand')}
                    />
                </div>
                 {/* {renderImages()} */}
                <div className="photo-viewer-image-item">
                    <img src={loadImg(props.photoViewerImagesArray[0].key)}/>
                </div>
                <div className="photo-viewer-toolbar">
                    <div className="photo-viewer-navigation">
                        <div 
                            className={renderClassName("leftArrow", isHoveringLeftArrow)}
                            onClick={props.prevImage}
                            onMouseEnter={() => handleMouseEnter('leftArrow')} 
                            onMouseLeave={() => handleMouseLeave('leftArrow')}
                        >
                            <div className="arrow-top-line"/>
                            <div className="arrow-bottom-line"/>
                        </div>
                        <div 
                            className={renderClassName("rightArrow", isHoveringRightArrow)}
                            onClick={props.nextImage}
                            onMouseEnter={() => handleMouseEnter('rightArrow')} 
                            onMouseLeave={() => handleMouseLeave('rightArrow')}
                        >
                            <div className="arrow-top-line"/>
                            <div className="arrow-bottom-line"/>
                        </div>
                    </div>
                    <H19 className="h19-nobel">{`${props.photoViewerImagesArray[0].id} / ${props.photoViewerImagesArray.length}`}</H19>
                    <div 
                        className={renderClassName("closeButton", isHoveringCloseButton)}
                        onClick={() => props.photoViewerOpen('pictureBoardForTextItem', false, [])}
                        onMouseEnter={() => handleMouseEnter('closeButton')} 
                        onMouseLeave={() => handleMouseLeave('closeButton')}
                    >
                        <H19 className={renderClassName("closeButtonText", isHoveringCloseButton)}>Close</H19>
                        <div className="photo-viewer-close">
                            <div className="close-first-line"/>
                            <div className="close-second-line"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* {renderSection1DataItems()} */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            photoViewerImagesArray: Selectors.getPhotoViewerImagesArrayState(state),
        };
    },
    (dispatch) => {
        return {
            // fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch),
            prevImage: bindActionCreators(Actions.prevImage, dispatch),
            nextImage: bindActionCreators(Actions.nextImage, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
        };
    }
)(PhotoViewer);
 