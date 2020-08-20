/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
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
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks';

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

import Id1BigSlider1 from '../../../images/portfolioPages/bigSlider/id1/ash-from-modern-afflatus-updated-unsplash.png';
import Id1BigSlider2 from '../../../images/portfolioPages/bigSlider/id1/estee-janssens-updated-unsplash.png';
import Id1BigSlider3 from '../../../images/portfolioPages/bigSlider/id1/filip-mroz-updated-unsplash.png';
import Id1BigSlider4 from '../../../images/portfolioPages/bigSlider/id1/laura-chouette-updated-unsplash.png';
import Id1BigSlider5 from '../../../images/portfolioPages/bigSlider/id1/nadine-shaabana-updated-unsplash.png';

//Big Slider Id2

import Id2BigSlider1 from '../../../images/portfolioPages/bigSlider/id2/dose-media-bU6JyhSI6zo-updated-unsplash.png';
import Id2BigSlider2 from '../../../images/portfolioPages/bigSlider/id2/daniel-korpai-kO7TrSB9pCQ-updated-unsplash.png';
import Id2BigSlider3 from '../../../images/portfolioPages/bigSlider/id2/rahul-bhogal-lihCTIOP28U-updated-unsplash.png';
import Id2BigSlider4 from '../../../images/portfolioPages/bigSlider/id2/grocery-list-1670408_1920-updated.png';
import Id2BigSlider5 from '../../../images/portfolioPages/bigSlider/id2/heather-ford-6fiz86Ql3UA--updated-unsplash.png';
import Id2BigSlider6 from '../../../images/portfolioPages/bigSlider/id2/computer-820281_1920-updated.png';

//Big Slider Id3

import Id3BigSlider1 from '../../../images/portfolioPages/bigSlider/id3/angele-kamp-KaeaUITiWnc-upadted-unsplash.png';
import Id3BigSlider2 from '../../../images/portfolioPages/bigSlider/id3/charles-deluvio-dtSjxKDIPnA-updated-unsplash.png';
import Id3BigSlider3 from '../../../images/portfolioPages/bigSlider/id3/daily-nouri-E5Oo4nENq2M-updated-unsplash.png';
import Id3BigSlider4 from '../../../images/portfolioPages/bigSlider/id3/jess-bailey-YFn6rpnyeRY-updated-unsplash.png';
import Id3BigSlider5 from '../../../images/portfolioPages/bigSlider/id3/jozsef-hocza-pJYd5CI_TRM-updated-unsplash.png';
import Id3BigSlider6 from '../../../images/portfolioPages/bigSlider/id3/laika-notebooks-pONH9yZ-wXg-updated-unsplash.png';
import Id3BigSlider7 from '../../../images/portfolioPages/bigSlider/id3/lauren-fleischmann-R2aodqJn3b8-updated-unsplash.png';

//Small Images Id1

import Id1SmallImages1 from '../../../images/portfolioPages/smallImages/id1/adam-wilson-1QZYZib7eYs-unsplash.png';
import Id1SmallImages2 from '../../../images/portfolioPages/smallImages/id1/jason-blackeye-DKCgibUVLNc-unsplash.png';
import Id1SmallImages3 from '../../../images/portfolioPages/smallImages/id1/nordwood-themes-Nv4QHkTVEaI-unsplash.png';
import Id1SmallImages4 from '../../../images/portfolioPages/smallImages/id1/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.png';
import Id1SmallImages5 from '../../../images/portfolioPages/smallImages/id1/shelbey-miller-HIQd4db8Kr8-unsplash.png';

//Small Images Id2

import Id2SmallImages1 from '../../../images/portfolioPages/smallImages/id2/jess-bailey-MSH3ldaRZsg-updated-unsplash.png';
import Id2SmallImages2 from '../../../images/portfolioPages/smallImages/id2/paper-3025558_1920-updated.png';

//Small Images Id3

import Id3SmallImages1 from '../../../images/portfolioPages/smallImages/id3/jess-bailey-dWKqZcPLc8Y-updated-unsplash.png';
import Id3SmallImages2 from '../../../images/portfolioPages/smallImages/id3/jess-bailey-L71uKsAVo4g-updated-unsplash.png';
import Id3SmallImages3 from '../../../images/portfolioPages/smallImages/id3/jess-bailey-z0guTIr_kts-updated-unsplash.png';

//Small Images Id4

import Id4SmallImages1 from '../../../images/portfolioPages/smallImages/id4/clay-banks-_wkd7XBRfU4-updated-unsplash.png';
import Id4SmallImages2 from '../../../images/portfolioPages/smallImages/id4/marina-zaharkina-TKQXY1dAgjE-updated-unsplash.png';
import Id4SmallImages3 from '../../../images/portfolioPages/smallImages/id4/ohmky-lQwWZI_WjSU-updated-unsplash.png';

//Big Images Id1

import Id1BigImages1 from '../../../images/portfolioPages/bigImages/id1/joshua-reddekopp-cNe8GsQR-OQ-unsplash.png';
import Id1BigImages2 from '../../../images/portfolioPages/bigImages/id1/lee-campbell-CI-5GwJcVjE-unsplash.png';
import Id1BigImages3 from '../../../images/portfolioPages/bigImages/id1/lee-campbell-qNPESem_t4I-unsplash.png';
import Id1BigImages4 from '../../../images/portfolioPages/bigImages/id1/melanie-mauer-x-agyuDQHJA-unsplash.png';
import Id1BigImages5 from '../../../images/portfolioPages/bigImages/id1/nathan-dumlao-KEniowKfX3k-unsplash.png';

//Big Images Id2

import Id2BigImages1 from '../../../images/portfolioPages/bigImages/id2/uby-yanes-LMwW0ARHc4o-updated-unsplash.png';
import Id2BigImages2 from '../../../images/portfolioPages/bigImages/id2/emma-matthews-digital-content-production-vKM1ZdtoBL4-updated-unsplash.png';
import Id2BigImages3 from '../../../images/portfolioPages/bigImages/id2/uby-yanes-393QQ30ecvQ-updated-unsplash.png';
import Id2BigImages4 from '../../../images/portfolioPages/bigImages/id2/stil-flRm0z3MEoA-updated-unsplash.png';
import Id2BigImages5 from '../../../images/portfolioPages/bigImages/id2/freestocks-A11MXTzUhLE-updated-unsplash.png';
import Id2BigImages6 from '../../../images/portfolioPages/bigImages/id2/emma-matthews-digital-content-production-X6M1Ke1o9yI-updated-unsplash.png';

//Small Gallery Id1

import Id1SmallGallery1 from '../../../images/portfolioPages/smallGallery/id1/ash-from-modern-afflatus-updated1-unsplash.png';
import Id1SmallGallery2 from '../../../images/portfolioPages/smallGallery/id1/estee-janssens-updated1-unsplash.png';
import Id1SmallGallery3 from '../../../images/portfolioPages/smallGallery/id1/filip-mroz-updated1-unsplash.png';
import Id1SmallGallery4 from '../../../images/portfolioPages/smallGallery/id1/georgie-cobbs-muOHbrFGEQY-updated1-unsplash.png';
import Id1SmallGallery5 from '../../../images/portfolioPages/smallGallery/id1/laura-chouette-updated1-unsplash.png';
import Id1SmallGallery6 from '../../../images/portfolioPages/smallGallery/id1/nadine-shaabana-updated1-unsplash.png';

//Small Gallery Id2

import Id2SmallGallery1 from '../../../images/portfolioPages/smallGallery/id2/hope-house-press-leather-diary-studio-PJzc7LOt2Ig-updated-unsplash.png';
import Id2SmallGallery2 from '../../../images/portfolioPages/smallGallery/id2/jess-bailey-ycTvvg1mPU4-updated-unsplash.png';
import Id2SmallGallery3 from '../../../images/portfolioPages/smallGallery/id2/nahuel-hawkes-Ki6JO9sraB8-updated-unsplash.png';
import Id2SmallGallery4 from '../../../images/portfolioPages/smallGallery/id2/stil-8-GAoVpIk4M-updated-unsplash.png';

//Small Gallery Id3

import Id3SmallGallery1 from '../../../images/portfolioPages/smallGallery/id3/eyeshadow-4713577_1920-updated.png';
import Id3SmallGallery2 from '../../../images/portfolioPages/smallGallery/id3/gabrielle-henderson-xTLqJqtq8R4-updated-unsplash.png';
import Id3SmallGallery3 from '../../../images/portfolioPages/smallGallery/id3/jess-bailey-_969XXSgWc0-updated-unsplash.png';
import Id3SmallGallery4 from '../../../images/portfolioPages/smallGallery/id3/laura-chouette-HTowfw8ascU-updated-unsplash.png';
import Id3SmallGallery5 from '../../../images/portfolioPages/smallGallery/id3/life-3602514_1920-updated.png';
import Id3SmallGallery6 from '../../../images/portfolioPages/smallGallery/id3/samantha-gades-pKt9mfEuZrs-updated-unsplash.png';

//Gallery Id1

import Id1Gallery1 from '../../../images/portfolioPages/Gallery/id1/ash-from-modern-afflatus-updated2-unsplash.png';
import Id1Gallery2 from '../../../images/portfolioPages/Gallery/id1/estee-janssens-updated2-unsplash.png';
import Id1Gallery3 from '../../../images/portfolioPages/Gallery/id1/filip-mroz-updated2-unsplash.png';
import Id1Gallery4 from '../../../images/portfolioPages/Gallery/id1/georgie-cobbs-muOHbrFGEQY-updated2-unsplash.png';
import Id1Gallery5 from '../../../images/portfolioPages/Gallery/id1/laura-chouette-updated2-unsplash.png';
import Id1Gallery6 from '../../../images/portfolioPages/Gallery/id1/nadine-shaabana-updated2-unsplash.png';

// GalleryId2

import Id2Gallery1 from '../../../images/portfolioPages/Gallery/id2/cristina-matos-albers-WhxeSQ671SM-updated-unsplash.png';
import Id2Gallery2 from '../../../images/portfolioPages/Gallery/id2/food-3025556_1920-updated.png';
import Id2Gallery3 from '../../../images/portfolioPages/Gallery/id2/nathan-dumlao-6VhPY27jdps-updated-unsplash.png';
import Id2Gallery4 from '../../../images/portfolioPages/Gallery/id2/nathan-dumlao-pMW4jzELQCw-updated-unsplash.png';
import Id2Gallery5 from '../../../images/portfolioPages/Gallery/id2/nathan-dumlao-pnmRtTHWqDM-updated-unsplash.png';

// GalleryId3

import Id3Gallery1 from '../../../images/portfolioPages/Gallery/id3/chris-lee-70l1tDAI6rM-updated-unsplash.png';
import Id3Gallery2 from '../../../images/portfolioPages/Gallery/id3/kara-eads--0eTYFd2pzM-updated-unsplash.png';
import Id3Gallery3 from '../../../images/portfolioPages/Gallery/id3/kara-eads-Uq9o9uUIT08-updated-unsplash.png';
import Id3Gallery4 from '../../../images/portfolioPages/Gallery/id3/leone-venter-pVt9j3iWtPM-updated-unsplash.png';
import Id3Gallery5 from '../../../images/portfolioPages/Gallery/id3/olena-sergienko-dIMJWLx1YbE-updated-unsplash.png';
import Id3Gallery6 from '../../../images/portfolioPages/Gallery/id3/sarah-dorweiler-9Z1KRIfpBTM-updated-unsplash.png';

//Small Slider Id1

import Id1SmallSlider1 from '../../../images/portfolioPages/smallSlider/id1/damian-patkowski--pahtnAMuFo-unsplash.png';
import Id1SmallSlider2 from '../../../images/portfolioPages/smallSlider/id1/drew-beamer-ehBB9G7qbss-unsplash.png';
import Id1SmallSlider3 from '../../../images/portfolioPages/smallSlider/id1/drew-beamer-PL6ClUWwDEw-unsplash.png';
import Id1SmallSlider4 from '../../../images/portfolioPages/smallSlider/id1/grovemade-DhZ5BpBeQEM-unsplash.png';
import Id1SmallSlider5 from '../../../images/portfolioPages/smallSlider/id1/lee-campbell-gA-km82BywY-unsplash.png';
import Id1SmallSlider6 from '../../../images/portfolioPages/smallSlider/id1/workperch-AiOzVFqlyZI-unsplash.png';

//Small Slider Id2

import Id2SmallSlider1 from '../../../images/portfolioPages/smallSlider/id2/fallon-michael-_lKsxGjOzk8-updated-unsplash.png';
import Id2SmallSlider2 from '../../../images/portfolioPages/smallSlider/id2/gaelle-marcel-yO9ZVNFbpao-updated-unsplash.png';
import Id2SmallSlider3 from '../../../images/portfolioPages/smallSlider/id2/jane-palash-iaofnd2IdFU-updated-unsplash.png';
import Id2SmallSlider4 from '../../../images/portfolioPages/smallSlider/id2/kara-eads-gVUV7PbSu_0-updated-unsplash.png';
import Id2SmallSlider5 from '../../../images/portfolioPages/smallSlider/id2/siora-photography-G8RdOUjVuJo-updated-unsplash.png';

//Small Slider Id3

import Id3SmallSlider1 from '../../../images/portfolioPages/smallSlider/id3/meghan-schiereck--2eJaLtf_bI-updated-unsplash.png';
import Id3SmallSlider2 from '../../../images/portfolioPages/smallSlider/id3/glenn-carstens-peters-RLw-UC03Gwc-updated-unsplash.png';
import Id3SmallSlider3 from '../../../images/portfolioPages/smallSlider/id3/marci-angeles-H_pOAqtNVEg-updated-unsplash.png';
import Id3SmallSlider4 from '../../../images/portfolioPages/smallSlider/id3/marci-angeles-sDmLk4Mf0hQ-updated-unsplash.png';

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

    const size = useWindowSize();
    const resizeRef = useRef();
    const [isHoveringExpand, setIsHoveringExpand] = useState(false);
    const [isHoveringShrink, setIsHoveringShrink] = useState(false);
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    const [isHoveringCloseButton, setIsHoveringCloseButton] = useState("init");
    const [fullScreen, setFullScreen] = useState(false);
    const [photoViewerWindowSize, setPhotoViewerWindowSize] = useState({
        width: 0,
        height: 0
    })
    const [photoViewerFullscreenWindowSize, setPhotoViewerFullscreenWindowSize] = useState({
        width: 0,
        height: 0
    })

    /**
    * Methods
    */

    useEffect(() => {
        renderStyle(size.width, props.width, props.height);
        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, [size.width]);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        // calculateOnePercent(size.width);
    }

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
            case 'id1BigImages1':
                return Id1BigImages1;
            case 'id1BigImages2':
                return Id1BigImages2;
            case 'id1BigImages3':
                return Id1BigImages3;
            case 'id1BigImages4':
                return Id1BigImages4;
            case 'id1BigImages5':
                return Id1BigImages5;
            case 'id2BigImages1':
                return Id2BigImages1;
            case 'id2BigImages2':
                return Id2BigImages2;
            case 'id2BigImages3':
                return Id2BigImages3;
            case 'id2BigImages4':
                return Id2BigImages4;
            case 'id2BigImages5':
                return Id2BigImages5;
            case 'id2BigImages6':
                return Id2BigImages6;
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
            case 'id2SmallGallery1':
                return Id2SmallGallery1;
            case 'id2SmallGallery2':
                return Id2SmallGallery2;
            case 'id2SmallGallery3':
                return Id2SmallGallery3;
            case 'id2SmallGallery4':
                return Id2SmallGallery4;
            case 'id3SmallGallery1':
                return Id3SmallGallery1;
            case 'id3SmallGallery2':
                return Id3SmallGallery2;
            case 'id3SmallGallery3':
                return Id3SmallGallery3;
            case 'id3SmallGallery4':
                return Id3SmallGallery4;
            case 'id3SmallGallery5':
                return Id3SmallGallery5;
            case 'id3SmallGallery6':
                return Id3SmallGallery6;
            case 'id1Gallery1':
                return Id1Gallery1;
            case 'id1Gallery2':
                return Id1Gallery2;
            case 'id1Gallery3':
                return Id1Gallery3;
            case 'id1Gallery4':
                return Id1Gallery4;
            case 'id1Gallery5':
                return Id1Gallery5;
            case 'id1Gallery6':
                return Id1Gallery6;
            case 'id2Gallery1':
                return Id2Gallery1;
            case 'id2Gallery2':
                return Id2Gallery2;
            case 'id2Gallery3':
                return Id2Gallery3;
            case 'id2Gallery4':
                return Id2Gallery4;
            case 'id2Gallery5':
                return Id2Gallery5;
            case 'id3Gallery1':
                return Id3Gallery1;
            case 'id3Gallery2':
                return Id3Gallery2;
            case 'id3Gallery3':
                return Id3Gallery3;
            case 'id3Gallery4':
                return Id3Gallery4;
            case 'id3Gallery5':
                return Id3Gallery5;
            case 'id3Gallery6':
                return Id3Gallery6;
            case 'id1SmallSlider1': 
                return Id1SmallSlider1;
            case 'id1SmallSlider2': 
                return Id1SmallSlider2;
            case 'id1SmallSlider3': 
                return Id1SmallSlider3;
            case 'id1SmallSlider4': 
                return Id1SmallSlider4;
            case 'id1SmallSlider5': 
                return Id1SmallSlider5;
            case 'id1SmallSlider6': 
                return Id1SmallSlider6;
            case 'id2SmallSlider1': 
                return Id2SmallSlider1;
            case 'id2SmallSlider2': 
                return Id2SmallSlider2;
            case 'id2SmallSlider3': 
                return Id2SmallSlider3;
            case 'id2SmallSlider4': 
                return Id2SmallSlider4;
            case 'id2SmallSlider5': 
                return Id2SmallSlider5;
            case 'id3SmallSlider1': 
                return Id3SmallSlider1;
            case 'id3SmallSlider2': 
                return Id3SmallSlider2;
            case 'id3SmallSlider3': 
                return Id3SmallSlider3;
            case 'id3SmallSlider4': 
                return Id3SmallSlider4;
            default:
                return "";
        }
    }

    const fullscreenOnChangeHandler = (e) => {
        if(!e){
            setFullScreen(e);
        }
    }

    const renderStyle = (screenWidth, width, height) => {
        let updatedPhotoViewerWindowSize = {};
        let updatedPhotoViewerFullscreenWindowSize = {};
        if(screenWidth > 1100){
            updatedPhotoViewerWindowSize = {
                width: width,
                height: height
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: 0,
                height: 80
            }
        }else if(screenWidth < 1100 && screenWidth > 900){
            updatedPhotoViewerWindowSize = {
                width: width,
                height: height
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: 0,
                height: 65
            }
        }else if(screenWidth < 900 && screenWidth > 800){
            updatedPhotoViewerWindowSize = {
                width: width,
                height: height
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: 0,
                height: 55
            }
        }else if(screenWidth < 800 && screenWidth > 700){
                updatedPhotoViewerWindowSize = {
                    width: width - 200,
                    height: height - 100
                }
                updatedPhotoViewerFullscreenWindowSize = {
                    width: width,
                    height: 50
                }
        }else if(screenWidth < 700 && screenWidth > 600){
            updatedPhotoViewerWindowSize = {
                width: width - 200,
                height: height - 100
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: width,
                height: 40
            }
        }else if(screenWidth < 600 && screenWidth > 480){
            updatedPhotoViewerWindowSize = {
                width: width - 300,
                height: height - 200
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: width,
                height: 35
            }
        }else if(screenWidth < 480){
            updatedPhotoViewerWindowSize = {
                width: width - 400,
                height: height - 270
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: width,
                height: 30
            }
        }
        setPhotoViewerWindowSize(updatedPhotoViewerWindowSize);
        setPhotoViewerFullscreenWindowSize(updatedPhotoViewerFullscreenWindowSize)
    }

    /**
    * Markup
    */

    return(
        <>
            <div className="photo-viewer">
                <div 
                    className="photo-viewer-wrapper"
                    style={{width: `${photoViewerWindowSize.width}`}}
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
                        style={{width: `${photoViewerWindowSize.width}`, height: `${photoViewerWindowSize.height}`}}
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
                        <div 
                            className="fullscreen-photo-viewer-image-item"
                            style={{height: `${photoViewerFullscreenWindowSize.height}vh`}}
                        >
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
 