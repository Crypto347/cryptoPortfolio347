/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

/**
 * Styles
 */

import './blogListPostCard.scss';

/**
 * Utility
 */

import {
    H15,
    H17,
    H35,
    EH20,
    EH60
} from '../../UtilityComponents';

/**
 * Constants
 */

import * as Images from '../../../constants/images';

/**
 * BlogListPostCard component definition and export
 */

export const BlogListPostCard = (props) => {

    /**
     * State
     */

    const [isHovering, setIsHovering] = useState("init");

    /**
     * Methods
     */
   
    useEffect(() => {
     
    }, []);

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'blogCardDate': 
                setIsHovering("on");
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'blogCardDate': 
                setIsHovering("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "blogCardDate"){
            switch(isHovering){
                case 'init':
                    return "h15-nobel-lustria-animated";
                case 'on':
                    return "h15-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h15-nobel-lustria-nero-hover-off"
            }
        }     
    }

    const loadImg = (imgKey) => {
        switch(imgKey){
            case 'blogCardStandardPostCoverImg1':
                return Images.BLOG_CARD_STANDARD_POST_COVER_IMG_1;
            case 'blogCardGalleryPostCoverImg1':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_1;
            case 'blogCardGalleryPostCoverImg2':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_2;
            case 'blogCardGalleryPostCoverImg3':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_3;
            case 'blogCardLinkPostCoverImg1':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_1;
            case 'blogCardQuotePostCoverImg1':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_1;
            case 'blogCardAudioPostCoverImg1':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_1;
            case 'blogCardVideoPostCoverImg1':
                return Images.VIDEO_COVER_IMG_2;
            default:
                return "";
        }
    }

    const renderBlogCard = (type) => {
        switch(type){
            case 'standardPost':
                return (
                    <>
                        <img src={loadImg(props.data.coverImage.key)}/>
                        <EH60/>
                        <div
                            className="blog-list-post-card-date"
                            onMouseEnter={() => handleMouseEnter(`blogCardDate`)} 
                            onMouseLeave={() => handleMouseLeave(`blogCardDate`)} 
                        >
                            <H15 className={renderClassName("blogCardDate", isHovering)}>{props.data.date}</H15>
                        </div>
                        <H35 className="H35-black-poppins">{props.data.header}</H35>
                        <EH20/>
                        <div className="blog-list-post-card-text">
                            <H17 className="h17-black-lustria">{props.data.text + " ..."}</H17>
                        </div>
                        <EH20/>
                        <div className="blog-list-post-card-info-wrapper">

                        </div>
                    </>
                )
            case 'galleryPost':
                return (
                    <>
                        {/* <img src={loadImg(props.data.coverImage.key)}/> */}
                    </>
                )
            case 'linkPost':
                return (
                    <>
                        <img src={loadImg(props.data.coverImage.key)}/>
                        <EH60/>
                        <div
                            className="blog-list-post-card-date"
                            onMouseEnter={() => handleMouseEnter(`blogCardDate`)} 
                            onMouseLeave={() => handleMouseLeave(`blogCardDate`)} 
                        >
                            <H15 className={renderClassName("blogCardDate", isHovering)}>{props.data.date}</H15>
                        </div>
                        <H35 className="H35-black-poppins">{props.data.header}</H35>
                    </>
                )
            case 'quotePost':
                return (
                    <>
                        <img src={loadImg(props.data.coverImage.key)}/>
                        <EH60/>
                        <div
                            className="blog-list-post-card-date"
                            onMouseEnter={() => handleMouseEnter(`blogCardDate`)} 
                            onMouseLeave={() => handleMouseLeave(`blogCardDate`)} 
                        >
                            <H15 className={renderClassName("blogCardDate", isHovering)}>{props.data.date}</H15>
                        </div>
                        <H35 className="H35-black-poppins">{props.data.header}</H35>
                    </>
                )
            case 'audioPost':
                return (
                    <>
                        <img src={loadImg(props.data.coverImage.key)}/>
                        <EH60/>
                        <div
                            className="blog-list-post-card-date"
                            onMouseEnter={() => handleMouseEnter(`blogCardDate`)} 
                            onMouseLeave={() => handleMouseLeave(`blogCardDate`)} 
                        >
                            <H15 className={renderClassName("blogCardDate", isHovering)}>{props.data.date}</H15>
                        </div>
                        <H35 className="H35-black-poppins">{props.data.header}</H35>
                    </>
                )
            case 'videoPost':
                return (
                    <>
                        <img src={loadImg(props.data.coverImage.key)}/>
                        <EH60/>
                        <div
                            className="blog-list-post-card-date"
                            onMouseEnter={() => handleMouseEnter(`blogCardDate`)} 
                            onMouseLeave={() => handleMouseLeave(`blogCardDate`)} 
                        >
                            <H15 className={renderClassName("blogCardDate", isHovering)}>{props.data.date}</H15>
                        </div>
                        <H35 className="H35-black-poppins">{props.data.header}</H35>
                    </>
                )
        }
    }

    /**
     * Markup
     */

    return(
        <div className="blog-list-post-card">
            {renderBlogCard(props.data.cardType)}
        </div>
    );
}

export default BlogListPostCard;
 