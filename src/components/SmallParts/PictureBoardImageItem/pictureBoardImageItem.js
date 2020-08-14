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

import bw1 from '../../../images/pictureBoard/B&WFolder1/dose-media-bU6JyhSI6zo-unsplash.jpg';
import bw2 from '../../../images/pictureBoard/B&WFolder1/daniel-korpai-kO7TrSB9pCQ-unsplash.jpg';
import bw3 from '../../../images/pictureBoard/B&WFolder1/rahul-bhogal-lihCTIOP28U-unsplash.jpg';
import bw4 from '../../../images/pictureBoard/B&WFolder1/grocery-list-1670408_1920.jpg';
import bw5 from '../../../images/pictureBoard/B&WFolder1/heather-ford-6fiz86Ql3UA-unsplash.jpg';
import bw6 from '../../../images/pictureBoard/B&WFolder1/computer-820281_1920.jpg';

//B&WFolder2

import bw7 from '../../../images/pictureBoard/B&WFolder2/meghan-schiereck--2eJaLtf_bI-unsplash.jpg';
import bw8 from '../../../images/pictureBoard/B&WFolder2/marci-angeles-H_pOAqtNVEg-unsplash.jpg';
import bw9 from '../../../images/pictureBoard/B&WFolder2/marci-angeles-sDmLk4Mf0hQ-unsplash.jpg';
import bw10 from '../../../images/pictureBoard/B&WFolder2/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg';


//B&WFolder3

import bw11 from '../../../images/pictureBoard/B&WFolder3/hope-house-press-leather-diary-studio-PJzc7LOt2Ig-unsplash.jpg';
import bw12 from '../../../images/pictureBoard/B&WFolder3/jess-bailey-ycTvvg1mPU4-unsplash.jpg';
import bw13 from '../../../images/pictureBoard/B&WFolder3/nahuel-hawkes-Ki6JO9sraB8-unsplash.jpg';
import bw14 from '../../../images/pictureBoard/B&WFolder3/stil-8-GAoVpIk4M-unsplash.jpg';


//B&WFolder4

import bw15 from '../../../images/pictureBoard/B&WFolder4/ohmky-lQwWZI_WjSU-unsplash.jpg';
import bw16 from '../../../images/pictureBoard/B&WFolder4/clay-banks-_wkd7XBRfU4-unsplash.jpg';
import bw17 from '../../../images/pictureBoard/B&WFolder4/lindsay-cotter-9J7sHieVFi0-unsplash.jpg';
import bw18 from '../../../images/pictureBoard/B&WFolder4/marina-zaharkina-TKQXY1dAgjE-unsplash.jpg';
import bw19 from '../../../images/pictureBoard/B&WFolder4/mike-marquez-VnlyIQxQS10-unsplash.jpg';
import bw20 from '../../../images/pictureBoard/B&WFolder4/alexandra-gorn-9rmnzkmydSY-unsplash.jpg';

//ColorfulFolder1

import col1 from '../../../images/pictureBoard/ColorfulFolder1/kara-eads-gVUV7PbSu_0-unsplash.jpg';
import col2 from '../../../images/pictureBoard/ColorfulFolder1/gaelle-marcel-yO9ZVNFbpao-unsplash.jpg';
import col3 from '../../../images/pictureBoard/ColorfulFolder1/jane-palash-iaofnd2IdFU-unsplash.jpg';
import col4 from '../../../images/pictureBoard/ColorfulFolder1/fallon-michael-_lKsxGjOzk8-unsplash.jpg';
import col5 from '../../../images/pictureBoard/ColorfulFolder1/kara-eads-ylNifQf8TiY-unsplash.jpg';
import col6 from '../../../images/pictureBoard/ColorfulFolder1/siora-photography-G8RdOUjVuJo-unsplash.jpg';

//ColorfulFolder2

import col7 from '../../../images/pictureBoard/ColorfulFolder2/nathan-dumlao-pMW4jzELQCw-unsplash.jpg';
import col8 from '../../../images/pictureBoard/ColorfulFolder2/food-3025556_1920.jpg';
import col9 from '../../../images/pictureBoard/ColorfulFolder2/nathan-dumlao-6VhPY27jdps-unsplash.jpg';
import col10 from '../../../images/pictureBoard/ColorfulFolder2/cristina-matos-albers-WhxeSQ671SM-unsplash.jpg';
import col11 from '../../../images/pictureBoard/ColorfulFolder2/nathan-dumlao-pnmRtTHWqDM-unsplash.jpg';

//ColorfulFolder3

import col12 from '../../../images/pictureBoard/ColorfulFolder3/freestocks-A11MXTzUhLE-unsplash.jpg';
import col13 from '../../../images/pictureBoard/ColorfulFolder3/emma-matthews-digital-content-production-X6M1Ke1o9yI-unsplash.jpg';
import col14 from '../../../images/pictureBoard/ColorfulFolder3/emma-matthews-digital-content-production-vKM1ZdtoBL4-unsplash.jpg';
import col15 from '../../../images/pictureBoard/ColorfulFolder3/stil-flRm0z3MEoA-unsplash.jpg';
import col16 from '../../../images/pictureBoard/ColorfulFolder3/uby-yanes-393QQ30ecvQ-unsplash.jpg';
import col17 from '../../../images/pictureBoard/ColorfulFolder3/uby-yanes-LMwW0ARHc4o-unsplash.jpg';

//ColorfulFolder4

import col18 from '../../../images/pictureBoard/ColorfulFolder4/daily-nouri-E5Oo4nENq2M-unsplash.jpg';
import col19 from '../../../images/pictureBoard/ColorfulFolder4/charles-deluvio-dtSjxKDIPnA-unsplash.jpg';
import col20 from '../../../images/pictureBoard/ColorfulFolder4/angele-kamp-KaeaUITiWnc-unsplash.jpg';
import col21 from '../../../images/pictureBoard/ColorfulFolder4/jess-bailey-YFn6rpnyeRY-unsplash.jpg';
import col22 from '../../../images/pictureBoard/ColorfulFolder4/jozsef-hocza-pJYd5CI_TRM-unsplash.jpg';
import col23 from '../../../images/pictureBoard/ColorfulFolder4/laika-notebooks-pONH9yZ-wXg-unsplash.jpg';
import col24 from '../../../images/pictureBoard/ColorfulFolder4/lauren-fleischmann-R2aodqJn3b8-unsplash.jpg';

//ColorfulFolder5

import col25 from '../../../images/pictureBoard/ColorfulFolder5/leone-venter-pVt9j3iWtPM-unsplash.jpg';
import col26 from '../../../images/pictureBoard/ColorfulFolder5/kara-eads--0eTYFd2pzM-unsplash.jpg';
import col27 from '../../../images/pictureBoard/ColorfulFolder5/kara-eads-Uq9o9uUIT08-unsplash.jpg';
import col28 from '../../../images/pictureBoard/ColorfulFolder5/chris-lee-70l1tDAI6rM-unsplash.jpg';
import col29 from '../../../images/pictureBoard/ColorfulFolder5/olena-sergienko-dIMJWLx1YbE-unsplash.jpg';
import col30 from '../../../images/pictureBoard/ColorfulFolder5/sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg';

//ColorfulFolder6

import col31 from '../../../images/pictureBoard/ColorfulFolder6/paper-3025558_1920.jpg';
import col32 from '../../../images/pictureBoard/ColorfulFolder6/jess-bailey-PWxsExxrf5g-unsplash.jpg';
import col33 from '../../../images/pictureBoard/ColorfulFolder6/jess-bailey-MSH3ldaRZsg-unsplash.jpg';
import col34 from '../../../images/pictureBoard/ColorfulFolder6/desktop-3820634_1920.jpg';
import col35 from '../../../images/pictureBoard/ColorfulFolder6/jess-bailey-OhWKm1YoMgE-unsplash.jpg';

//ColorfulFolder7

import col36 from '../../../images/pictureBoard/ColorfulFolder7/jess-bailey-_969XXSgWc0-unsplash.jpg';
import col37 from '../../../images/pictureBoard/ColorfulFolder7/gabrielle-henderson-xTLqJqtq8R4-unsplash.jpg';
import col38 from '../../../images/pictureBoard/ColorfulFolder7/eyeshadow-4713577_1920.jpg';
import col39 from '../../../images/pictureBoard/ColorfulFolder7/laura-chouette-HTowfw8ascU-unsplash.jpg';
import col40 from '../../../images/pictureBoard/ColorfulFolder7/life-3602514_1920.jpg';
import col41 from '../../../images/pictureBoard/ColorfulFolder7/samantha-gades-pKt9mfEuZrs-unsplash.jpg';

//ColorfulFolder8

import col42 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-L71uKsAVo4g-unsplash.jpg';
import col43 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-6izKUqAC9xw-unsplash.jpg';
import col44 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-dWKqZcPLc8Y-unsplash.jpg';
import col45 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-z0guTIr_kts-unsplash.jpg';
import col46 from '../../../images/pictureBoard/ColorfulFolder8/jess-bailey-ZY2GNpgiWyU-unsplash.jpg';

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
            default:
                return "";
        }
    }

    const pictureBoardItemOnClick = (path) => {
        props.history.push(`/crypto-portfolio/${path}`);
        props.clearActivityOfMenuItems();
    }

    /**
    * Markup
    */

    return(
        <div 
            className="picture-board-image-item" 
            id={`pictureBoardImageItem${props.id}`}
            onClick={() => pictureBoardItemOnClick(props.path)}
        >
            <div className={props.option === "colorful" ? "picture-board-image" : "picture-board-image-black-and-white"}>
                <img src={loadImg(imgToLoad.key)} alt={imgToLoad.alt}/>
            </div>
        </div>
    );
}

export default withRouter(PictureBoardImageItem);
