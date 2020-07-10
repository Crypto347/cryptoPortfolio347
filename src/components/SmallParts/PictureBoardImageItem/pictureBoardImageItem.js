/**
* Libraries
*/

import React, {
    useState, useEffect
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './pictureBoardImageItem.scss';

/**
* Utility
*/

import {
    H3,
    H4,
    H5,
    EH1,
    EW1,
    DoubleLine1
} from '../../UtilityComponents';

/**
* Images
*/

//B&WFolder1

import bw1 from '../../../images/pictureBoard/B&WFolder1/computer-820281_1920.jpg';
import bw2 from '../../../images/pictureBoard/B&WFolder1/daniel-korpai-kO7TrSB9pCQ-unsplash.jpg';
import bw3 from '../../../images/pictureBoard/B&WFolder1/dose-media-bU6JyhSI6zo-unsplash.jpg';
import bw4 from '../../../images/pictureBoard/B&WFolder1/grocery-list-1670408_1920.jpg';
import bw5 from '../../../images/pictureBoard/B&WFolder1/heather-ford-6fiz86Ql3UA-unsplash.jpg';
import bw6 from '../../../images/pictureBoard/B&WFolder1/rahul-bhogal-lihCTIOP28U-unsplash.jpg';

//B&WFolder2

import bw7 from '../../../images/pictureBoard/B&WFolder2/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg';
import bw8 from '../../../images/pictureBoard/B&WFolder2/marci-angeles-H_pOAqtNVEg-unsplash.jpg';
import bw9 from '../../../images/pictureBoard/B&WFolder2/marci-angeles-sDmLk4Mf0hQ-unsplash.jpg';
import bw10 from '../../../images/pictureBoard/B&WFolder2/meghan-schiereck--2eJaLtf_bI-unsplash.jpg';


//B&WFolder3

import bw11 from '../../../images/pictureBoard/B&WFolder3/hope-house-press-leather-diary-studio-PJzc7LOt2Ig-unsplash.jpg';
import bw12 from '../../../images/pictureBoard/B&WFolder3/jess-bailey-ycTvvg1mPU4-unsplash.jpg';
import bw13 from '../../../images/pictureBoard/B&WFolder3/nahuel-hawkes-Ki6JO9sraB8-unsplash.jpg';
import bw14 from '../../../images/pictureBoard/B&WFolder3/stil-8-GAoVpIk4M-unsplash.jpg';


//B&WFolder4

import bw15 from '../../../images/pictureBoard/B&WFolder4/alexandra-gorn-9rmnzkmydSY-unsplash.jpg';
import bw16 from '../../../images/pictureBoard/B&WFolder4/clay-banks-_wkd7XBRfU4-unsplash.jpg';
import bw17 from '../../../images/pictureBoard/B&WFolder4/lindsay-cotter-9J7sHieVFi0-unsplash.jpg';
import bw18 from '../../../images/pictureBoard/B&WFolder4/marina-zaharkina-TKQXY1dAgjE-unsplash.jpg';
import bw19 from '../../../images/pictureBoard/B&WFolder4/mike-marquez-VnlyIQxQS10-unsplash.jpg';
import bw20 from '../../../images/pictureBoard/B&WFolder4/ohmky-lQwWZI_WjSU-unsplash.jpg';

//ColorfulFolder1

import col1 from '../../../images/pictureBoard/ColorfulFolder1/fallon-michael-_lKsxGjOzk8-unsplash.jpg';
import col2 from '../../../images/pictureBoard/ColorfulFolder1/gaelle-marcel-yO9ZVNFbpao-unsplash.jpg';
import col3 from '../../../images/pictureBoard/ColorfulFolder1/jane-palash-iaofnd2IdFU-unsplash.jpg';
import col4 from '../../../images/pictureBoard/ColorfulFolder1/kara-eads-gVUV7PbSu_0-unsplash.jpg';
import col5 from '../../../images/pictureBoard/ColorfulFolder1/kara-eads-ylNifQf8TiY-unsplash.jpg';
import col6 from '../../../images/pictureBoard/ColorfulFolder1/siora-photography-G8RdOUjVuJo-unsplash.jpg';

//ColorfulFolder2

import col7 from '../../../images/pictureBoard/ColorfulFolder2/cristina-matos-albers-WhxeSQ671SM-unsplash.jpg';
import col8 from '../../../images/pictureBoard/ColorfulFolder2/food-3025556_1920.jpg';
import col9 from '../../../images/pictureBoard/ColorfulFolder2/nathan-dumlao-6VhPY27jdps-unsplash.jpg';
import col10 from '../../../images/pictureBoard/ColorfulFolder2/nathan-dumlao-pMW4jzELQCw-unsplash.jpg';
import col11 from '../../../images/pictureBoard/ColorfulFolder2/nathan-dumlao-pnmRtTHWqDM-unsplash.jpg';

//ColorfulFolder3

import col12 from '../../../images/pictureBoard/ColorfulFolder3/emma-matthews-digital-content-production-vKM1ZdtoBL4-unsplash.jpg';
import col13 from '../../../images/pictureBoard/ColorfulFolder3/emma-matthews-digital-content-production-X6M1Ke1o9yI-unsplash.jpg';
import col14 from '../../../images/pictureBoard/ColorfulFolder3/freestocks-A11MXTzUhLE-unsplash.jpg';
import col15 from '../../../images/pictureBoard/ColorfulFolder3/stil-flRm0z3MEoA-unsplash.jpg';
import col16 from '../../../images/pictureBoard/ColorfulFolder3/uby-yanes-393QQ30ecvQ-unsplash.jpg';
import col17 from '../../../images/pictureBoard/ColorfulFolder3/uby-yanes-LMwW0ARHc4o-unsplash.jpg';

//ColorfulFolder4

import col18 from '../../../images/pictureBoard/ColorfulFolder4/angele-kamp-KaeaUITiWnc-unsplash.jpg';
import col19 from '../../../images/pictureBoard/ColorfulFolder4/charles-deluvio-dtSjxKDIPnA-unsplash.jpg';
import col20 from '../../../images/pictureBoard/ColorfulFolder4/daily-nouri-E5Oo4nENq2M-unsplash.jpg';
import col21 from '../../../images/pictureBoard/ColorfulFolder4/jess-bailey-YFn6rpnyeRY-unsplash.jpg';
import col22 from '../../../images/pictureBoard/ColorfulFolder4/jozsef-hocza-pJYd5CI_TRM-unsplash.jpg';
import col23 from '../../../images/pictureBoard/ColorfulFolder4/laika-notebooks-pONH9yZ-wXg-unsplash.jpg';
import col24 from '../../../images/pictureBoard/ColorfulFolder4/lauren-fleischmann-R2aodqJn3b8-unsplash.jpg';

//ColorfulFolder5

import col25 from '../../../images/pictureBoard/ColorfulFolder5/chris-lee-70l1tDAI6rM-unsplash.jpg';
import col26 from '../../../images/pictureBoard/ColorfulFolder5/kara-eads--0eTYFd2pzM-unsplash.jpg';
import col27 from '../../../images/pictureBoard/ColorfulFolder5/kara-eads-Uq9o9uUIT08-unsplash.jpg';
import col28 from '../../../images/pictureBoard/ColorfulFolder5/leone-venter-pVt9j3iWtPM-unsplash.jpg';
import col29 from '../../../images/pictureBoard/ColorfulFolder5/olena-sergienko-dIMJWLx1YbE-unsplash.jpg';
import col30 from '../../../images/pictureBoard/ColorfulFolder5/sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg';

//ColorfulFolder6

import col31 from '../../../images/pictureBoard/ColorfulFolder6/jess-bailey-MSH3ldaRZsg-unsplash.jpg';
import col32 from '../../../images/pictureBoard/ColorfulFolder6/jess-bailey-PWxsExxrf5g-unsplash.jpg';
import col33 from '../../../images/pictureBoard/ColorfulFolder6/paper-3025558_1920.jpg';
import col34 from '../../../images/pictureBoard/ColorfulFolder6/desktop-3820634_1920.jpg';
import col35 from '../../../images/pictureBoard/ColorfulFolder6/jess-bailey-OhWKm1YoMgE-unsplash.jpg';

//ColorfulFolder7

import col36 from '../../../images/pictureBoard/ColorfulFolder7/eleni-koureas-jUcuu5f5js0-unsplash.jpg';
import col37 from '../../../images/pictureBoard/ColorfulFolder7/jess-bailey-6izKUqAC9xw-unsplash.jpg';
import col38 from '../../../images/pictureBoard/ColorfulFolder7/jess-bailey-dWKqZcPLc8Y-unsplash.jpg';
import col39 from '../../../images/pictureBoard/ColorfulFolder7/jess-bailey-L71uKsAVo4g-unsplash.jpg';
import col40 from '../../../images/pictureBoard/ColorfulFolder7/jess-bailey-z0guTIr_kts-unsplash.jpg';
import col41 from '../../../images/pictureBoard/ColorfulFolder7/jess-bailey-ZY2GNpgiWyU-unsplash.jpg';

//ColorfulFolder8

import col42 from '../../../images/pictureBoard/ColorfulFolder8/eyeshadow-4713577_1920.jpg';
import col43 from '../../../images/pictureBoard/ColorfulFolder8/gabrielle-henderson-xTLqJqtq8R4-unsplash.jpg';
import col44 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-_969XXSgWc0-unsplash.jpg';
import col45 from '../../../images/pictureBoard/ColorfulFolder8/laura-chouette-HTowfw8ascU-unsplash.jpg';
import col46 from '../../../images/pictureBoard/ColorfulFolder8/life-3602514_1920.jpg';
import col47 from '../../../images/pictureBoard/ColorfulFolder8/samantha-gades-pKt9mfEuZrs-unsplash.jpg';

//TextFolder1

import text1 from '../../../images/pictureBoard/TextFolder1/alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg';
import text2 from '../../../images/pictureBoard/TextFolder1/alexandra-gorn-W5dsm9n6e3g-unsplash.jpg';
import text3 from '../../../images/pictureBoard/TextFolder1/alexandru-acea-T5jXjei49uY-unsplash.jpg';
import text4 from '../../../images/pictureBoard/TextFolder1/cullen-jones-wu9Xr4rt5cU-unsplash.jpg';
import text5 from '../../../images/pictureBoard/TextFolder1/jean-philippe-delberghe-3EC_3r8-yME-unsplash.jpg';
import text6 from '../../../images/pictureBoard/TextFolder1/patrick-perkins-3wylDrjxH-E-unsplash.jpg';
import text7 from '../../../images/pictureBoard/TextFolder1/sam-marx-3w8eCQgX_4c-unsplash.jpg';
import text8 from '../../../images/pictureBoard/TextFolder1/timothy-buck-psrloDbaZc8-unsplash.jpg';

//TextFolder2

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
import { LoadingManager } from 'three';

/**
* Constants
*/

// import * as Colors from '../../../constants/colors';

/**
* PictureBoardImageItem component definition and export
*/

export const PictureBoardImageItem = (props) => {

    /**
    * State
    */
    const [isHovering, setIsHovering] = useState(false);
    const divRef = React.useRef();

    /**
    * Methods
    */

    useEffect(() => {   
        let imgCoordinateRange; 
        switch(props.id){
            case 1:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 2:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 4:
                imgCoordinateRange = evaluateCoordinates()
                break;
            case 6:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 7:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 8:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 9:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 10:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 11:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 13:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 15:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 16:
                imgCoordinateRange = evaluateCoordinates(); 
                break;

        }     

        window.addEventListener('mousemove', (e) => handleMouseMove(e, imgCoordinateRange));
        window.addEventListener('resize', evaluateCoordinates);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', evaluateCoordinates)
        } 
    }, [])

    const evaluateCoordinates = () => {
        let pictureBoardImageItem = document.getElementById(`pictureBoardImageItem${props.id}`);
        let updatedImgCoordinateRange = {
            id: props.id,
            topCoordinate: pictureBoardImageItem.offsetTop,
            bottomCoordinate: pictureBoardImageItem.offsetTop + pictureBoardImageItem.offsetHeight,
            leftCoordinate: pictureBoardImageItem.offsetLeft,
            rightCoordinate: pictureBoardImageItem.offsetLeft + pictureBoardImageItem.offsetWidth
        };
        return updatedImgCoordinateRange;
    }

    const handleMouseMove = (e, imgCoordinateRange) => {
        let pageX = e.pageX;
        let pageY = e.pageY;
        
        if(imgCoordinateRange.leftCoordinate < pageX && pageX < imgCoordinateRange.rightCoordinate &&
            imgCoordinateRange.topCoordinate < pageY && pageY < imgCoordinateRange.bottomCoordinate
        ){
            console.log("my div", props.id)
        }else{
            console.log("Notmy div", props.id)
        }
    }

    // const handleMouseEnter = () => {
    //     setIsHovering(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovering(false);
    // }

    // const loadImage = (img) => {
    //     switch(img) {
    //         case 'image1':
    //             return StoryImage1;
    //         case 'image2':
    //             return StoryImage2;
    //         case 'image3':
    //             return StoryImage3;
    //         case 'image4':
    //             return StoryImage4;
    //         case 'image5':
    //             return StoryImage5;
    //         case 'image6':
    //             return StoryImage6;
    //         default:
    //             return DefaultImage;
    //     }
    // }

    // const onClick = (obj) => {
    //     props.history.push(`/crypto-cafe/${props.path}`,{obj, comment: true});
    // }

    const loadImg = (coordX) => {
        return col16;
    }

    const onMouseMoveHandler = (e) => {
       console.log(e.pageX)
    }

    
    /**
    * Markup
    */

    return(
        <div className="picture-board-image-item" ref={divRef} id={`pictureBoardImageItem${props.id}`}>
            <div className="picture-board-image">
                {/* <img src={() => loadImg(coordX)}/> */}
                {/* <img src={col47}/> */}
            </div>
        </div>
    );
}

export default PictureBoardImageItem;
