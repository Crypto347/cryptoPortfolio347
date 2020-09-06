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

import './simpleOverlayImage.scss';

/**
* Utility
*/

import * as Utility from '../../../utility';

import { 
    H15,
    H35,
    H45,
    H70,
    EH10,
    EH30,
    EH40,
    EH70,
    EH110
} from '../../UtilityComponents';

/**
* Images
*/

import * as Images from '../../../constants/images';

/**
* SimpleOverlayImage component definition and export
*/

export const SimpleOverlayImage = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();
    const [isHovering, setIsHovering] = useState("init");
    const [cardHeight, setCardHeight] = useState(0);
 
    /**
    * Methods
    */

    useEffect(() => {   
        const resize = () => {
            resizeRef.current();
        }
        window.addEventListener('resize', resize);
        return () =>  window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    })

    const handleResize = () => {
        let cardHeight = document.getElementById("img").clientHeight;
        setCardHeight(cardHeight);
    }

    const handleMouseEnter = () => {
        setIsHovering("on");
        handleResize();
    }

    const handleMouseLeave = () => {
        setIsHovering("off");
    }

    const loadImg = (key) => {
        switch(key) {
            case 'id1SmallImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_1;
            case 'id1BigSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_2;
            case 'id1Gallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_3;
            case 'id1SmallGallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_4;
            case 'id1BigImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_5;
            case 'id1SmallSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_6;
            case 'id2SmallSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_7;
            case 'id2Gallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_8;
            case 'id2SmallGallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_9;
            case 'id2SmallImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_10;
            case 'id2BigSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_11;
            case 'id2BigImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_12;
            case 'id3Gallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_13;
            case 'id3SmallSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_14;
            case 'id3SmallGallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_15;
            case 'id3SmallImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_16;
            case 'id3BigSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_17;
            case 'id4SmallImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_18;
            default:
                return "";
        }
    }

    const simpleOverlayImageOnClick = (path) => {
        props.setUnmountComponentValues(true, path);
        props.unmountComponent(null, null, props.page);
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "image"){
            switch(isHovering){
                case 'init':
                    return "simple-overlay-curtain";
                case 'on':
                    return "simple-overlay-curtain-hover-on";
                case 'off':
                    return "simple-overlay-curtain-hover-off"
            }
        }
    }

    /**
    * Markup
    */

    return(
        <div 
            className="simple-overlay-image"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <img 
                id="img"
                src={loadImg(props.imageKey)} 
                alt={props.alt}
            />
            {isHovering ? 
                <div 
                    className={renderClassName("image", isHovering)}
                    style={{height: `${cardHeight}px`}}
                    onClick={() => simpleOverlayImageOnClick(props.path)}
                >
                    <H35 className="h35-nero-poppins">{props.header}</H35>
                </div> 
                :  null}
            <EH30/>
        </div>
    );
}

export default withRouter(SimpleOverlayImage);
