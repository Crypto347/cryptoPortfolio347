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

//Big Slider Id1

import Id1BigSlider1 from '../../../images/bigSlider/id1/ash-from-modern-afflatus-KPDDc1DeP4Y-unsplash.png';
import Id1BigSlider2 from '../../../images/bigSlider/id1/estee-janssens-zni0zgb3bkQ-unsplash.png';
import Id1BigSlider3 from '../../../images/bigSlider/id1/filip-mroz-uKV0xYsRdsg-unsplash.png';
import Id1BigSlider4 from '../../../images/bigSlider/id1/laura-chouette-t6hNUc8vspA-unsplash.png';
import Id1BigSlider5 from '../../../images/bigSlider/id1/nadine-shaabana-soX8qpVwOm4-unsplash.png';

//Big Slider Id2

import Id2BigSlider1 from '../../../images/bigSlider/id2/dose-media-updated-unsplash.jpg';
import Id2BigSlider2 from '../../../images/bigSlider/id2/daniel-korpai-updated-unsplash.jpg';
import Id2BigSlider3 from '../../../images/bigSlider/id2/rahul-bhogal-updated-unsplash.jpg';
import Id2BigSlider4 from '../../../images/bigSlider/id2/grocery-list-updated.jpg';
import Id2BigSlider5 from '../../../images/bigSlider/id2/heather-ford-updated-unsplash.jpg';
import Id2BigSlider6 from '../../../images/bigSlider/id2/computer-updated.jpg';

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
            {!fullScreen ? <div className="photo-viewer">
                <div className="photo-viewer-wrapper">
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
            </div> :
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
            </Fullscreen>}
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
 