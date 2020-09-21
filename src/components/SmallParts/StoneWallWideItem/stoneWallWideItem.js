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

import './stoneWallWideItem.scss';

/**
* Utility
*/

import * as Utility from '../../../utility';

import { 
    H17,
    H35,
    H45,
    H70,
    EH10,
    EH20,
    EH40,
    EH70,
    EH110
} from '../../UtilityComponents';

/**
* Images
*/

import * as Images from '../../../constants/images';

/**
* StoneWallWideItem component definition and export
*/

export const StoneWallWideItem = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();
    const [isHovering, setIsHovering] = useState("init");
    const [paddingTopBottom, setPaddingTopBottom] = useState(0);
    const [upload, setUpload] = useState(false)
 
    /**
    * Methods
    */

    useEffect(() => {   
        const resize = () => {
            resizeRef.current();
        } 
        setUpload(true);
        if(upload){
            // props.getImagesWidthAndHeight({
            //     img1: {
            //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
            //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
            //     }, 
            //     img2: {
            //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
            //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
            //     }, 
            //     img3: {
            //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
            //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
            //     },
            //     img4: {
            //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
            //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
            //     },
            //     img5: {
            //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
            //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
            //     },
            //     img6: {
            //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
            //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
            //     },
            //     img7: {
            //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
            //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
            //     }
            // })
        }       
        window.addEventListener('resize', resize);
        return () =>  window.removeEventListener('resize', resize);
    }, [upload]);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        let paddingTopBottomVal = setPadding(props.page);

        setPaddingTopBottom(paddingTopBottomVal);
        console.log(document.getElementById("stoneWallWideItemId1").clientWidth)
        // props.getImagesWidthAndHeight({
        //     img1: {
        //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
        //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
        //     }, 
        //     img2: {
        //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
        //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
        //     }, 
        //     img3: {
        //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
        //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
        //     },
        //     img4: {
        //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
        //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
        //     },
        //     img5: {
        //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
        //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
        //     },
        //     img6: {
        //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
        //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
        //     },
        //     img7: {
        //         width: document.getElementById("stoneWallWideItemId1").clientWidth,
        //         height: document.getElementById("stoneWallWideItemId1").clientHeight,
        //     }
        // })
    }

    const setPadding = (page) => {
        switch(page){
            case 'stoneWallWidePage':
                return 40;
        }
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("on");
                handleResize();
            break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("off");
                break;
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'stoneWallWideCover1':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_1;
            case 'stoneWallWideCover2':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_2;
            case 'stoneWallWideCover3':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_3;
            case 'stoneWallWideCover4':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_4;
            case 'stoneWallWideCover5':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_5;
            case 'stoneWallWideCover6':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_6;
            case 'stoneWallWideCover7':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_7;
            default:
                return "";
        }
    }

    const stoneWallOnClick = (e, path) => {
        if(e.button === 2) return; 
        localStorage.setItem("page", props.page);
        if(e.button !== 1){
            props.setUnmountComponentValues(true, path);
        }else{
            props.setUnmountComponentValues(false, path);
        }
        props.unmountComponent(null, null,  props.page, e.button);
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "curtain"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "stone-wall-wide-item-curtain-hover-on";
                case 'off':
                    return "stone-wall-wide-item-curtain-hover-off"
            }
        }
        if(opt === "stoneWallWideItemImage"){
            switch(isHovering){
                case 'init':
                    return "stone-wall-wide-item-image";
                case 'on':
                    return "stone-wall-wide-item-image-hover-on";
                case 'off':
                    return "stone-wall-wide-item-image-hover-off"
            }
        }
        if(opt === "header"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "h35-white-poppins-animated-opacity-hover-on";
                case 'off':
                    return "h35-white-poppins-animated-opacity-hover-off"
            }
        }
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "stone-wall-item-image-arrow-wrapper-lengthen";
                case 'off':
                    return "stone-wall-item-image-arrow-wrapper-shorten"
            }
        }
    }

    /**
    * Markup
    */

    return(
        <div 
            className="stone-wall-wide-item"
            onMouseEnter={() => handleMouseEnter("curtain", null, isHovering)} 
            onMouseLeave={() => handleMouseLeave("curtain", null, isHovering)}
            style={{marginBottom: `${props.page === "galleryPage" ? 0 : 30}px`}}
            id={`stoneWallWideItemId${props.obj.id}`}
        >
            <div className={renderClassName("stoneWallWideItemImage", isHovering)}>
                <img 
                    id="img"
                    src={loadImg(props.obj.coverImage.key)} 
                    alt={props.obj.coverImage.alt}
                />
            </div>
            <div 
                className={renderClassName("curtain", isHovering)}
                style={{height: `calc(100% - ${paddingTopBottom}px)`, padding: `${paddingTopBottom/2} 20px ${paddingTopBottom/2} 20px`}}
                onMouseDown={(e) => stoneWallOnClick(e, props.obj.path)}
            >
                <H35 className={renderClassName("header", isHovering)}>{props.obj.header}</H35>
                <EH20/>
               <div className={renderClassName("arrow", isHovering)}>
                    <div className="arrow-horizontal-line"/>
                    <div className="arrow-wrapper2">
                        <div className="arrow-top-line"></div>
                        <div className="arrow-bottom-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoneWallWideItem;
