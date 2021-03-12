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
 * Components
 */

import Icon from '../../SmallParts/Icon/icon';

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

    const [isHoveringBlogCardDate, setIsHoveringBlogCardDate] = useState("init");
    const [isHoveringBlogCardLikes, setIsHoveringBlogCardLikes] = useState("init");

    /**
     * Methods
     */
   
    useEffect(() => {
     
    }, []);

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'blogCardDate': 
                setIsHoveringBlogCardDate("on");
                break;
            case 'blogCardLikes': 
                setIsHoveringBlogCardLikes("on");
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'blogCardDate': 
                setIsHoveringBlogCardDate("off");
                break;
            case 'blogCardLikes': 
                setIsHoveringBlogCardLikes("off");
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

    const renderBlogCardMainBody = () => {
        return(
            <>
                <img src={loadImg(props.data.coverImage.key)}/>
                <EH60/>
                <div
                    className="blog-list-post-card-date"
                    onMouseEnter={() => handleMouseEnter(`blogCardDate`)} 
                    onMouseLeave={() => handleMouseLeave(`blogCardDate`)} 
                >
                    <H15 className={renderClassName("blogCardDate", isHoveringBlogCardDate)}>{props.data.date}</H15>
                </div>
                <H35 className="H35-black-poppins">{props.data.header}</H35>
                <EH20/>
                <div className="blog-list-post-card-text">
                    <H17 className="h17-black-lustria">{props.data.text + " ..."}</H17>
                </div>
                <EH20/>
                {renderBlogCardInfo()}
            </>
        )
    }

    const renderBlogCardInfo = () => {
        return(
            <div className="blog-list-post-card-info-wrapper">
                <div 
                    className="blog-list-post-card-info-likes"
                    onMouseEnter={() => handleMouseEnter(`blogCardLikes`)} 
                    onMouseLeave={() => handleMouseLeave(`blogCardLikes`)} 
                >
                    <Icon 
                        iconType="fontAwesome"
                        icon="faHeart"
                        iconSize="1x"
                        isHover={isHoveringBlogCardLikes}
                        classNameOpt="blogCardLikes"
                    />
                </div>
                <div className="blog-list-post-card-info-comments">
                    
                </div>
                <div className="blog-list-post-card-info-tags">
                
                </div>
                <div className="blog-list-post-card-info-soc-med">
                
                </div>
            </div>
        )
    }

    const renderBlogCard = (type) => {
        switch(type){
            case 'standardPost':
                return (
                    <>
                        {renderBlogCardMainBody()}
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
                        {renderBlogCardMainBody()}
                    </>
                )
            case 'quotePost':
                return (
                    <>
                        {renderBlogCardMainBody()}
                    </>
                )
            case 'audioPost':
                return (
                    <>
                        {renderBlogCardMainBody()}
                    </>
                )
            case 'videoPost':
                return (
                    <>
                        {renderBlogCardMainBody()}
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
 