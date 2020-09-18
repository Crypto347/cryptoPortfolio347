/**
* Libraries
*/

import React, {
    useState, 
    useEffect,
    useRef
} from 'react';

/**
* Styles
*/

import './slideFromImageLeft.scss';

/**
* Utility
*/

import * as Utility from '../../../utility';

import { 
    H17,
    H22,
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
* SlideFromImageLeft component definition and export
*/

export const SlideFromImageLeft = (props) => {

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
        setCardHeight(cardHeight - 80);
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("on");
                handleResize();
                break;
            case 'slideFromImageLeftCategory': 
                props.setIsHoveringCategory("on", pathOfIds);
                break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("off");
                break;
            case 'slideFromImageLeftCategory': 
                props.setIsHoveringCategory("off", pathOfIds);
                break;
        }
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

    const renderClassName = (opt, isHovering) => {
        if(opt === "image"){
            switch(isHovering){
                case 'init':
                    return "slide-from-image-left-image-wrapper";
                case 'on':
                    return "slide-from-image-left-image-wrapper-hover-on";
                case 'off':
                    return "slide-from-image-left-image-wrapper-hover-off"
            }
        }
        if(opt === "curtain"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "slide-from-image-left-curtain-hover-on";
                case 'off':
                    return "slide-from-image-left-curtain-hover-off"
            }
        }
        if(opt === "slideFromImageLeftCategory"){
            switch(isHovering){
                case 'init':
                    return "h17-white-lustria-animated";
                case 'on':
                    return "h17-white-lustria-nobel-hover-on";
                case 'off':
                    return "h17-nobel-lustria-nobel-hover-off"
            }
        }
        if(opt === "header"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "h22-white-poppins-animated-opacity-hover-on";
                case 'off':
                    return "h22-white-poppins-animated-opacity-hover-off"
            }
        }
    }

    const slideFromImageLeftOnClick = (e, path) => {
        if(e.button === 2) return;
        localStorage.setItem("page", props.page);
        if(e.button !== 1){
            props.setUnmountComponentValues(true, path);
        }else{
            props.setUnmountComponentValues(false, path);
        }
        props.unmountComponent(null, null,  props.page, e.button);
    }

    const onClickHandler = (e, path, key) => {
        if(e.button === 2) return;
        e.stopPropagation();       
        localStorage.setItem("archiveCategory", key);
        localStorage.setItem("page", props.page);
        props.clearArchiveData();
        if(e.button !== 1){
            props.setUnmountComponentValues(true, path);
        }else{
            props.setUnmountComponentValues(false, path);
        }
        props.unmountComponent(null, null,  props.page, e.button);
    }

    const renderCategories = (obj) => {
        return(
            <div className="slide-from-image-left-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="slide-from-image-left-category"
                        onMouseDown={(e) => onClickHandler(e, el.path, el.key)}
                        onMouseEnter={() => handleMouseEnter(`slideFromImageLeftCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`slideFromImageLeftCategory`, null, pathOfIds)} 
                    >
                        <H17 className={renderClassName("slideFromImageLeftCategory", el.isHover)}>{el.label}</H17>
                        {i !== obj.categories.length-1 ? <div className="slide-from-image-left-category-slash">/</div> : null}
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div 
            className="slide-from-image-left"
            onMouseEnter={() => handleMouseEnter("curtain", null, isHovering)} 
            onMouseLeave={() => handleMouseLeave("curtain", null, isHovering)}
        >
            <div 
                className={renderClassName("image", isHovering)}
            >
                <img 
                    id="img"
                    src={loadImg(props.obj.coverImage.key)} 
                    alt={props.obj.coverImage.alt}
                />
            </div>
            <div 
                // className="slide-from-image-left-curtain-hover-on"
                className={renderClassName("curtain", isHovering)}
                style={{height: `${cardHeight}px`}}
                onMouseDown={(e) => slideFromImageLeftOnClick(e, props.obj.path)}
            >
                {renderCategories(props.obj)}
                <div className="slide-from-image-left-header-wrapper">
                    <H22 className={renderClassName("header", isHovering)}>{props.obj.header}</H22>
                    <div className="slide-from-image-left-line"/>
                </div>
            </div>
        </div>
    );
}

export default SlideFromImageLeft;
