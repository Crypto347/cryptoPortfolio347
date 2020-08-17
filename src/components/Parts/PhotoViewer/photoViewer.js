/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import {
    bindActionCreators
} from 'redux';

import Fullscreen from "react-full-screen";

/**
* Styles
*/

import './photoViewer.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/

import {
   H19,
   EW30
} from '../../UtilityComponents';

/**
* Images
*/

//TextFolder1

import text1 from '../../../images/pictureBoard/TextFolder1/alexandra-gorn-JIUjvqe2ZHg-unsplash.png';
import text2 from '../../../images/pictureBoard/TextFolder1/alexandra-gorn-W5dsm9n6e3g-unsplash.png';
import text3 from '../../../images/pictureBoard/TextFolder1/alexandru-acea-T5jXjei49uY-unsplash.png';
import text4 from '../../../images/pictureBoard/TextFolder1/cullen-jones-wu9Xr4rt5cU-unsplash.png';
import text5 from '../../../images/pictureBoard/TextFolder1/jean-philippe-delberghe-3EC_3r8-yME-unsplash.png';
import text6 from '../../../images/pictureBoard/TextFolder1/patrick-perkins-3wylDrjxH-E-unsplash.png';
import text7 from '../../../images/pictureBoard/TextFolder1/sam-marx-3w8eCQgX_4c-unsplash.png';
import text8 from '../../../images/pictureBoard/TextFolder1/timothy-buck-psrloDbaZc8-unsplash.png';

//TextFolder2

import text9 from '../../../images/pictureBoard/TextFolder2/anthony-reungere-s6xt1mwF_iU-unsplash.png';
import text10 from '../../../images/pictureBoard/TextFolder2/brendan-steeves-G-YAJ61qIuU-unsplash.png';
import text11 from '../../../images/pictureBoard/TextFolder2/matthew-henry-Ix1TiS-E17E-unsplash.png';
import text12 from '../../../images/pictureBoard/TextFolder2/rikki-chan-9FfJW5Tu_qk-unsplash.png';
import text13 from '../../../images/pictureBoard/TextFolder2/timo-stern-iUBgeNeyVy8-unsplash.png';
import text14 from '../../../images/pictureBoard/TextFolder2/ugur-peker-AkX0_cZQ6PI-unsplash.png';
import text15 from '../../../images/pictureBoard/TextFolder2/z-s-3-VLBL1DKxk-unsplash.png';


//TextFolder3

import text16 from '../../../images/pictureBoard/TextFolder3/iltun-huseynli-TQyah6wdlzg-unsplash.png';
import text17 from '../../../images/pictureBoard/TextFolder3/iltun-huseynli-Vyy_ddIxuEk-unsplash.png';
import text18 from '../../../images/pictureBoard/TextFolder3/iltun-huseynli-WIsk0e2VFgE-unsplash.jpg';
import text19 from '../../../images/pictureBoard/TextFolder3/jason-ortego-buF62ewDLcQ-unsplash.png';
import text20 from '../../../images/pictureBoard/TextFolder3/justin-chrn-OCmOLiKrK-Y-unsplash.png';
import text21 from '../../../images/pictureBoard/TextFolder3/murad-mornel-HjNqvIE91Js-unsplash.png';
import text22 from '../../../images/pictureBoard/TextFolder3/peter-jan-rijpkema-wI6o8OwUwdw-unsplash.png';

//TextFolder4

import text23 from '../../../images/pictureBoard/TextFolder4/annie-spratt-sggw4-qDD54-unsplash.png';
import text24 from '../../../images/pictureBoard/TextFolder4/christin-hume-mfB1B1s4sMc-unsplash.png';
import text25 from '../../../images/pictureBoard/TextFolder4/dylan-gillis-KdeqA3aTnBY-unsplash.png';
import text26 from '../../../images/pictureBoard/TextFolder4/perry-grone-lbLgFFlADrY-unsplash.png';
import text27 from '../../../images/pictureBoard/TextFolder4/scott-graham-5fNmWej4tAA-unsplash.png';

//Big Slider Id1

import Id1BigSlider1 from '../../../images/bigSlider/id1/ash-from-modern-afflatus-updated-unsplash.png';
import Id1BigSlider2 from '../../../images/bigSlider/id1/estee-janssens-updated-unsplash.png';
import Id1BigSlider3 from '../../../images/bigSlider/id1/filip-mroz-updated-unsplash.png';
import Id1BigSlider4 from '../../../images/bigSlider/id1/laura-chouette-updated-unsplash.png';
import Id1BigSlider5 from '../../../images/bigSlider/id1/nadine-shaabana-updated-unsplash.png';

//Big Slider Id2

import Id2BigSlider1 from '../../../images/bigSlider/id2/dose-media-updated-unsplash.png';
import Id2BigSlider2 from '../../../images/bigSlider/id2/daniel-korpai-updated-unsplash.png';
import Id2BigSlider3 from '../../../images/bigSlider/id2/rahul-bhogal-updated-unsplash.png';
import Id2BigSlider4 from '../../../images/bigSlider/id2/grocery-list-updated.png';
import Id2BigSlider5 from '../../../images/bigSlider/id2/heather-ford-updated-unsplash.png';
import Id2BigSlider6 from '../../../images/bigSlider/id2/computer-updated.png';

//Big Slider Id3

import Id3BigSlider1 from '../../../images/bigSlider/id3/angele-kamp-updated-unsplash.png';
import Id3BigSlider2 from '../../../images/bigSlider/id3/charles-deluvio-updated-unsplash.png';
import Id3BigSlider3 from '../../../images/bigSlider/id3/daily-nouri-updated-unsplash.png';
import Id3BigSlider4 from '../../../images/bigSlider/id3/jess-bailey-updated-unsplash.png';
import Id3BigSlider5 from '../../../images/bigSlider/id3/jozsef-hocza-updated-unsplash.png';
import Id3BigSlider6 from '../../../images/bigSlider/id3/laika-notebooks-updated-unsplash.png';
import Id3BigSlider7 from '../../../images/bigSlider/id3/lauren-fleischmann-updated-unsplash.png';

//Small Images Id1

import Id1SmallImages1 from '../../../images/smallImages/id1/adam-wilson-1QZYZib7eYs-unsplash.jpg';
import Id1SmallImages2 from '../../../images/smallImages/id1/jason-blackeye-DKCgibUVLNc-unsplash.jpg';
import Id1SmallImages3 from '../../../images/smallImages/id1/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg';
import Id1SmallImages4 from '../../../images/smallImages/id1/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.jpg';
import Id1SmallImages5 from '../../../images/smallImages/id1/shelbey-miller-HIQd4db8Kr8-unsplash.jpg';

//Small Images Id2

import Id2SmallImages1 from '../../../images/smallImages/id2/jess-bailey-MSH3ldaRZsg-unsplash.jpg';
import Id2SmallImages2 from '../../../images/smallImages/id2/paper-3025558_1920.jpg';

//Small Images Id3

import Id3SmallImages1 from '../../../images/smallImages/id3/jess-bailey-dWKqZcPLc8Y-unsplash.jpg';
import Id3SmallImages2 from '../../../images/smallImages/id3/jess-bailey-L71uKsAVo4g-unsplash.jpg';
import Id3SmallImages3 from '../../../images/smallImages/id3/jess-bailey-z0guTIr_kts-unsplash.jpg';

//Small Images Id4

import Id4SmallImages1 from '../../../images/smallImages/id4/clay-banks-_wkd7XBRfU4-unsplash.jpg';
import Id4SmallImages2 from '../../../images/smallImages/id4/marina-zaharkina-TKQXY1dAgjE-unsplash.jpg';
import Id4SmallImages3 from '../../../images/smallImages/id4/ohmky-lQwWZI_WjSU-unsplash.jpg';

/**
* Icons
*/

import {
    faExpand,
    faCompress
} from '@fortawesome/free-solid-svg-icons';

/**
* PhotoViewer component definition and export
*/

export const PhotoViewer = (props) => {

    /**
    * State
    */

    const [isHoveringExpand, setIsHoveringExpand] = useState(false);
    const [isHoveringShrink, setIsHoveringShrink] = useState(false);
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    const [isHoveringCloseButton, setIsHoveringCloseButton] = useState("init");
    const [fullScreen, setFullScreen] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {

    }, []);

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'expand': 
                setIsHoveringExpand(true);
                break;
            case 'shrink': 
                setIsHoveringShrink(true);
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
            case 'shrink': 
                setIsHoveringShrink(false);
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
            case 'id1BigSlider1': 
                return Id1BigSlider1;
            case 'id1BigSlider2': 
                return Id1BigSlider2;
            case 'id1BigSlider3': 
                return Id1BigSlider3;
            case 'id1BigSlider4': 
                return Id1BigSlider4;
            case 'id1BigSlider5': 
                return Id1BigSlider5;
            case 'id2BigSlider1': 
                return Id2BigSlider1;
            case 'id2BigSlider2': 
                return Id2BigSlider2;
            case 'id2BigSlider3': 
                return Id2BigSlider3;
            case 'id2BigSlider4': 
                return Id2BigSlider4;
            case 'id2BigSlider5': 
                return Id2BigSlider5;
            case 'id2BigSlider6': 
                return Id2BigSlider6;
            case 'id3BigSlider1': 
                return Id3BigSlider1;
            case 'id3BigSlider2': 
                return Id3BigSlider2;
            case 'id3BigSlider3': 
                return Id3BigSlider3;
            case 'id3BigSlider4': 
                return Id3BigSlider4;
            case 'id3BigSlider5': 
                return Id3BigSlider5;
            case 'id3BigSlider6': 
                return Id3BigSlider6;
            case 'id3BigSlider7': 
                return Id3BigSlider7;
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

    const fullscreenOnChangeHandler = (e) => {
        if(!e){
            setFullScreen(e);
        }
    }

    /**
    * Markup
    */

    return(
        <>
            <div className="photo-viewer">
                <div 
                    className="photo-viewer-wrapper"
                    style={{width: `${props.width}`}}
                >
                    <div className="photo-viewer-full-screen-button">
                        <FontAwesomeIcon 
                            icon={faExpand} 
                            size="lg" 
                            color={isHoveringExpand ? "white" : "rgb(155, 155, 155)"}
                            onClick={() => setFullScreen(true)}
                            onMouseEnter={() => handleMouseEnter('expand')} 
                            onMouseLeave={() => handleMouseLeave('expand')}
                        />
                    </div>
                    <div 
                        className="photo-viewer-image-item"
                        style={{width: `${props.width}`, height: `${props.height}`}}
                    >
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
                            onClick={() => props.photoViewerOpen(props.component, false, [])}
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
            </div>
            {fullScreen ? 
                <Fullscreen
                enabled={fullScreen}
                onChange={(e) => fullscreenOnChangeHandler(e)}
            >
                <div className="fullscreen-outer-wrapper">
                    <div className="fullscreen-close-button">
                        <div className="small-screen">
                        <FontAwesomeIcon 
                            icon={faCompress} 
                            size="lg" 
                            color={isHoveringShrink ? "white" : "rgb(155, 155, 155)"}
                            onClick={() => setFullScreen(false)}
                            onMouseEnter={() => handleMouseEnter('shrink')} 
                            onMouseLeave={() => handleMouseLeave('shrink')}
                        />
                        </div>
                    </div>
                    <div className="fullscreen-wrapper">
                        <div 
                            className={renderClassName("leftArrow", isHoveringLeftArrow)}
                            onClick={props.prevImage}
                            onMouseEnter={() => handleMouseEnter('leftArrow')} 
                            onMouseLeave={() => handleMouseLeave('leftArrow')}
                        >
                            <div className="arrow-top-line"/>
                            <div className="arrow-bottom-line"/>
                        </div>
                        <EW30/>
                        <div className="fullscreen-photo-viewer-image-item">
                            <img src={loadImg(props.photoViewerImagesArray[0].key)}/>
                        </div>
                        <EW30/>
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
                </div>
            </Fullscreen> : null}
        </>
    );
}

export default connect(
    (state) => {
        return {
            photoViewerImagesArray: Selectors.getPhotoViewerImagesArrayState(state)
        };
    },
    (dispatch) => {
        return {
            prevImage: bindActionCreators(Actions.prevImage, dispatch),
            nextImage: bindActionCreators(Actions.nextImage, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch)
        };
    }
)(PhotoViewer);
 