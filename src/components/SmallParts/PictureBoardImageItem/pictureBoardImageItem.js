/**
* Libraries
*/

import React, {
    useState, 
    useEffect,
    useRef
} from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
* Styles
*/

import './pictureBoardImageItem.scss';

/**
* Utility
*/

import * as Utility from '../../../utility';

/**
* Images
*/

//B&WFolder1

import bw1 from '../../../images/pictureBoard/B&WFolder1/dose-media-bU6JyhSI6zo-unsplash.png';
import bw2 from '../../../images/pictureBoard/B&WFolder1/daniel-korpai-kO7TrSB9pCQ-unsplash.png';
import bw3 from '../../../images/pictureBoard/B&WFolder1/rahul-bhogal-lihCTIOP28U-unsplash.png';
import bw4 from '../../../images/pictureBoard/B&WFolder1/grocery-list-1670408_1920.png';
import bw5 from '../../../images/pictureBoard/B&WFolder1/heather-ford-6fiz86Ql3UA-unsplash.png';
import bw6 from '../../../images/pictureBoard/B&WFolder1/computer-820281_1920.png';

//B&WFolder2

import bw7 from '../../../images/pictureBoard/B&WFolder2/meghan-schiereck--2eJaLtf_bI-unsplash.png';
import bw8 from '../../../images/pictureBoard/B&WFolder2/marci-angeles-H_pOAqtNVEg-unsplash.png';
import bw9 from '../../../images/pictureBoard/B&WFolder2/marci-angeles-sDmLk4Mf0hQ-unsplash.png';
import bw10 from '../../../images/pictureBoard/B&WFolder2/glenn-carstens-peters-RLw-UC03Gwc-unsplash.png';


//B&WFolder3

import bw11 from '../../../images/pictureBoard/B&WFolder3/hope-house-press-leather-diary-studio-PJzc7LOt2Ig-unsplash.png';
import bw12 from '../../../images/pictureBoard/B&WFolder3/jess-bailey-ycTvvg1mPU4-unsplash.png';
import bw13 from '../../../images/pictureBoard/B&WFolder3/nahuel-hawkes-Ki6JO9sraB8-unsplash.png';
import bw14 from '../../../images/pictureBoard/B&WFolder3/stil-8-GAoVpIk4M-unsplash.png';


//B&WFolder4

import bw15 from '../../../images/pictureBoard/B&WFolder4/ohmky-lQwWZI_WjSU-unsplash.png';
import bw16 from '../../../images/pictureBoard/B&WFolder4/clay-banks-_wkd7XBRfU4-unsplash.png';
import bw17 from '../../../images/pictureBoard/B&WFolder4/lindsay-cotter-9J7sHieVFi0-unsplash.png';
import bw18 from '../../../images/pictureBoard/B&WFolder4/marina-zaharkina-TKQXY1dAgjE-unsplash.png';
import bw19 from '../../../images/pictureBoard/B&WFolder4/mike-marquez-VnlyIQxQS10-unsplash.png';
import bw20 from '../../../images/pictureBoard/B&WFolder4/alexandra-gorn-9rmnzkmydSY-unsplash.png';

//ColorfulFolder1

import col1 from '../../../images/pictureBoard/ColorfulFolder1/kara-eads-gVUV7PbSu_0-unsplash.png';
import col2 from '../../../images/pictureBoard/ColorfulFolder1/gaelle-marcel-yO9ZVNFbpao-unsplash.png';
import col3 from '../../../images/pictureBoard/ColorfulFolder1/jane-palash-iaofnd2IdFU-unsplash.png';
import col4 from '../../../images/pictureBoard/ColorfulFolder1/fallon-michael-_lKsxGjOzk8-unsplash.png';
import col5 from '../../../images/pictureBoard/ColorfulFolder1/kara-eads-ylNifQf8TiY-unsplash.png';
import col6 from '../../../images/pictureBoard/ColorfulFolder1/siora-photography-G8RdOUjVuJo-unsplash.png';

//ColorfulFolder2

import col7 from '../../../images/pictureBoard/ColorfulFolder2/nathan-dumlao-pMW4jzELQCw-unsplash.png';
import col8 from '../../../images/pictureBoard/ColorfulFolder2/food-3025556_1920.png';
import col9 from '../../../images/pictureBoard/ColorfulFolder2/nathan-dumlao-6VhPY27jdps-unsplash.png';
import col10 from '../../../images/pictureBoard/ColorfulFolder2/cristina-matos-albers-WhxeSQ671SM-unsplash.png';
import col11 from '../../../images/pictureBoard/ColorfulFolder2/nathan-dumlao-pnmRtTHWqDM-unsplash.png';

//ColorfulFolder3

import col12 from '../../../images/pictureBoard/ColorfulFolder3/freestocks-A11MXTzUhLE-unsplash.png';
import col13 from '../../../images/pictureBoard/ColorfulFolder3/emma-matthews-digital-content-production-X6M1Ke1o9yI-unsplash.png';
import col14 from '../../../images/pictureBoard/ColorfulFolder3/emma-matthews-digital-content-production-vKM1ZdtoBL4-unsplash.png';
import col15 from '../../../images/pictureBoard/ColorfulFolder3/stil-flRm0z3MEoA-unsplash.png';
import col16 from '../../../images/pictureBoard/ColorfulFolder3/uby-yanes-393QQ30ecvQ-unsplash.png';
import col17 from '../../../images/pictureBoard/ColorfulFolder3/uby-yanes-LMwW0ARHc4o-unsplash.png';

//ColorfulFolder4

import col18 from '../../../images/pictureBoard/ColorfulFolder4/daily-nouri-E5Oo4nENq2M-unsplash.png';
import col19 from '../../../images/pictureBoard/ColorfulFolder4/charles-deluvio-dtSjxKDIPnA-unsplash.png';
import col20 from '../../../images/pictureBoard/ColorfulFolder4/angele-kamp-KaeaUITiWnc-unsplash.png';
import col21 from '../../../images/pictureBoard/ColorfulFolder4/jess-bailey-YFn6rpnyeRY-unsplash.png';
import col22 from '../../../images/pictureBoard/ColorfulFolder4/jozsef-hocza-pJYd5CI_TRM-unsplash.png';
import col23 from '../../../images/pictureBoard/ColorfulFolder4/laika-notebooks-pONH9yZ-wXg-unsplash.png';
import col24 from '../../../images/pictureBoard/ColorfulFolder4/lauren-fleischmann-R2aodqJn3b8-unsplash.png';

//ColorfulFolder5

import col25 from '../../../images/pictureBoard/ColorfulFolder5/leone-venter-pVt9j3iWtPM-unsplash.png';
import col26 from '../../../images/pictureBoard/ColorfulFolder5/kara-eads--0eTYFd2pzM-unsplash.png';
import col27 from '../../../images/pictureBoard/ColorfulFolder5/kara-eads-Uq9o9uUIT08-unsplash.png';
import col28 from '../../../images/pictureBoard/ColorfulFolder5/chris-lee-70l1tDAI6rM-unsplash.png';
import col29 from '../../../images/pictureBoard/ColorfulFolder5/olena-sergienko-dIMJWLx1YbE-unsplash.png';
import col30 from '../../../images/pictureBoard/ColorfulFolder5/sarah-dorweiler-9Z1KRIfpBTM-unsplash.png';

//ColorfulFolder6

import col31 from '../../../images/pictureBoard/ColorfulFolder6/paper-3025558_1920.png';
import col32 from '../../../images/pictureBoard/ColorfulFolder6/jess-bailey-PWxsExxrf5g-unsplash.png';
import col33 from '../../../images/pictureBoard/ColorfulFolder6/jess-bailey-MSH3ldaRZsg-unsplash.png';
import col34 from '../../../images/pictureBoard/ColorfulFolder6/desktop-3820634_1920.png';
import col35 from '../../../images/pictureBoard/ColorfulFolder6/jess-bailey-OhWKm1YoMgE-unsplash.png';

//ColorfulFolder7

import col36 from '../../../images/pictureBoard/ColorfulFolder7/jess-bailey-_969XXSgWc0-unsplash.png';
import col37 from '../../../images/pictureBoard/ColorfulFolder7/gabrielle-henderson-xTLqJqtq8R4-unsplash.png';
import col38 from '../../../images/pictureBoard/ColorfulFolder7/eyeshadow-4713577_1920.png';
import col39 from '../../../images/pictureBoard/ColorfulFolder7/laura-chouette-HTowfw8ascU-unsplash.png';
import col40 from '../../../images/pictureBoard/ColorfulFolder7/life-3602514_1920.png';
import col41 from '../../../images/pictureBoard/ColorfulFolder7/samantha-gades-pKt9mfEuZrs-unsplash.png';

//ColorfulFolder8

import col42 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-L71uKsAVo4g-unsplash.png';
import col43 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-6izKUqAC9xw-unsplash.png';
import col44 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-dWKqZcPLc8Y-unsplash.png';
import col45 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-z0guTIr_kts-unsplash.png';
import col46 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-ZY2GNpgiWyU-unsplash.png';


//Big Slider Id1

import Id1BigSlider1 from '../../../images/portfolioPages/bigSlider/id1/laura-chouette-updated-unsplash.png';
import Id1BigSlider2 from '../../../images/portfolioPages/bigSlider/id1/estee-janssens-updated-unsplash.png';
import Id1BigSlider3 from '../../../images/portfolioPages/bigSlider/id1/filip-mroz-updated-unsplash.png';
import Id1BigSlider4 from '../../../images/portfolioPages/bigSlider/id1/ash-from-modern-afflatus-updated-unsplash.png';
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

import Id1Gallery1 from '../../../images/portfolioPages/Gallery/id1/nadine-shaabana-updated2-unsplash.png';
import Id1Gallery2 from '../../../images/portfolioPages/Gallery/id1/estee-janssens-updated2-unsplash.png';
import Id1Gallery3 from '../../../images/portfolioPages/Gallery/id1/filip-mroz-updated2-unsplash.png';
import Id1Gallery4 from '../../../images/portfolioPages/Gallery/id1/georgie-cobbs-muOHbrFGEQY-updated2-unsplash.png';
import Id1Gallery5 from '../../../images/portfolioPages/Gallery/id1/laura-chouette-updated2-unsplash.png';
import Id1Gallery6 from '../../../images/portfolioPages/Gallery/id1/ash-from-modern-afflatus-updated2-unsplash.png';

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
* PictureBoardImageItem component definition and export
*/

export const PictureBoardImageItem = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();
    const [imgToLoad, setImgToLoad] = useState({});
 
    /**
    * Methods
    */

    useEffect(() => {   
        const resize = () => {
            resizeRef.current();
        }

        setImgToLoad(props.imagesArray[0]);
        setImageCoordinateRange();
        

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
        }
    }, [props.imgCoordinateRange.updated]);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        setImageCoordinateRange();
    }
   
    const handleMouseMove = (e) => {
        let pageX = e.pageX;
        let pageY = e.pageY;
        if(props.imgCoordinateRange.leftCoordinate < pageX && pageX < props.imgCoordinateRange.rightCoordinate &&
            props.imgCoordinateRange.topCoordinate < pageY && pageY < props.imgCoordinateRange.bottomCoordinate
        ){
            let selectedDivDividedByImagesNumber = Math.round(props.imgCoordinateRange.width / props.imagesArray.length);
            let coordinatesArray = Utility.getArrayOfEmptyVal(props.imagesArray.length);
            coordinatesArray = coordinatesArray.map((el, i) => props.imgCoordinateRange.leftCoordinate + i * selectedDivDividedByImagesNumber);
            coordinatesArray.map((el, i) => {
                if(i !== coordinatesArray.length - 1){
                    if(coordinatesArray[i] < pageX && pageX < coordinatesArray[i + 1]){
                        setImgToLoad(props.imagesArray[i]);
                    }
                }else{
                    if(coordinatesArray[i] < pageX && pageX < props.imgCoordinateRange.rightCoordinate){
                        setImgToLoad(props.imagesArray[i]);
                    }
                }
               
            })
        }else{
            // console.log("Notmy div", props.id)
        }
    }

    const setImageCoordinateRange = () => {
        let imgCoordinateRange; 
        switch(props.id){
            case 1:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 2:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 3:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 4:
                imgCoordinateRange = evaluateCoordinates();
                break;
            case 5:
                imgCoordinateRange = evaluateCoordinates();
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
            case 12:
                imgCoordinateRange = evaluateCoordinates();
                break;
            case 13:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 14:
                imgCoordinateRange = evaluateCoordinates()
                break;
            case 15:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 16:
                imgCoordinateRange = evaluateCoordinates(); 
                break;
            case 17:
                imgCoordinateRange = evaluateCoordinates();
                break;
            case 18:
                imgCoordinateRange = evaluateCoordinates();
                break;
        }  
            props.rememberCoordinateRange(props.id, imgCoordinateRange);
       
    }

    const evaluateCoordinates = () => {
        let pictureBoardImageItem = document.getElementById(`pictureBoardImageItem${props.id}`);
        let updatedImgCoordinateRange = {
            id: props.id,
            topCoordinate: pictureBoardImageItem.offsetTop,
            bottomCoordinate: pictureBoardImageItem.offsetTop + pictureBoardImageItem.offsetHeight,
            leftCoordinate: pictureBoardImageItem.offsetLeft,
            rightCoordinate: pictureBoardImageItem.offsetLeft + pictureBoardImageItem.offsetWidth,
            width: pictureBoardImageItem.offsetWidth,
            updated: true
        };
        return updatedImgCoordinateRange;
    }

    const loadImg = (key) => {
        switch(key) {
            case 'bw1':
                return bw1;
            case 'bw2':
                return bw2;
            case 'bw3':
                return bw3;
            case 'bw4':
                return bw4;
            case 'bw5':
                return bw5;
            case 'bw6':
                return bw6;
            case 'bw7':
                return bw7;
            case 'bw8':
                return bw8;
            case 'bw9':
                return bw9;
            case 'bw10':
                return bw10;
            case 'bw11':
                return bw11;
            case 'bw12':
                return bw12;
            case 'bw13':
                return bw13;
            case 'bw14':
                return bw14;
            case 'bw15':
                return bw15;
            case 'bw16':
                return bw16;
            case 'bw17':
                return bw17;
            case 'bw18':
                return bw18;
            case 'bw19':
                return bw19;
            case 'bw20':
                return bw20;
            case 'col1':
                return col1;
            case 'col2':
                return col2;
            case 'col3':
                return col3;
            case 'col4':
                return col4;
            case 'col5':
                return col5;
            case 'col6':
                return col6;
            case 'col7':
                return col7;
            case 'col8':
                return col8;
            case 'col9':
                return col9;
            case 'col10':
                return col10;
            case 'col11':
                return col11;
            case 'col12':
                return col12;
            case 'col13':
                return col13;
            case 'col14':
                return col14;
            case 'col15':
                return col15;
            case 'col16':
                return col16;
            case 'col17':
                return col17;
            case 'col18':
                return col18;
            case 'col19':
                return col19;
            case 'col20':
                return col20;
            case 'col21':
                return col21;
            case 'col22':
                return col22;
            case 'col23':
                return col23;
            case 'col24':
                return col24;
            case 'col25':
                return col25;
            case 'col26':
                return col26;
            case 'col27':
                return col27;
            case 'col28':
                return col28;
            case 'col29':
                return col29;
            case 'col30':
                return col30;
            case 'col31':
                return col31;
            case 'col32':
                return col32;
            case 'col33':
                return col33;
            case 'col34':
                return col34;
            case 'col35':
                return col35;
            case 'col36':
                return col36;
            case 'col37':
                return col37;
            case 'col38':
                return col38;
            case 'col39':
                return col39;
            case 'col40':
                return col40;
            case 'col41':
                return col41;
            case 'col42':
                return col42;
            case 'col43':
                return col43;
            case 'col44':
                return col44;
            case 'col45':
                return col45;
            case 'col46':
                return col46;
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

    const renderClassName = (opt) => {
        switch(opt) {
            case 'pictureBoard':
                return 'picture-board-image-item';
            case 'portfolioGallery':
                return "portfolio-gallery-image-item";
        }
    }

    const pictureBoardItemOnClick = (path) => {
        props.setUnmountComponentValues(true, path);
        props.unmountComponent();
        // props.history.push(`/crypto-portfolio/${path}`);
        // props.clearActivityOfMenuItems();
    }

    /**
    * Markup
    */

    return(
        <div 
            className={renderClassName(props.component)}
            id={`pictureBoardImageItem${props.id}`}
            onClick={() => pictureBoardItemOnClick(props.path)}
        >
            <div className={props.option === "colorful" ? "picture-board-image" : "picture-board-image-black-and-white"}>
                <img 
                    src={loadImg(imgToLoad.key)} 
                    alt={imgToLoad.alt}
                />
            </div>
        </div>
    );
}

export default withRouter(PictureBoardImageItem);
