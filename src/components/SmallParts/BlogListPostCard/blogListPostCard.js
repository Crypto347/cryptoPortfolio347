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
    H22,
    H35,
    EW10,
    EH20,
    EH60,
    EH70
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
    const [isHoveringBlogCardComments, setIsHoveringBlogCardComments] = useState("init");
    const [isHoveringBlogCardShare, setIsHoveringBlogCardShare] = useState("init");
    const [isHoveringBlogCardLink, setIsHoveringBlogCardLink] = useState("init");
    const [isHoveringBlogCardQuote, setIsHoveringBlogCardQuote] = useState("init");
    
    /**
     * Methods
     */
   
    useEffect(() => {
     
    }, []);

    const handleMouseEnter = (opt, key) => {
        switch(opt){
            case 'blogCardDate': 
                setIsHoveringBlogCardDate("on");
                break;
            case 'blogCardLikes': 
                setIsHoveringBlogCardLikes("on");
                break;
            case 'blogCardComments': 
                setIsHoveringBlogCardComments("on");
                break;
            case 'blogCardShare': 
                setIsHoveringBlogCardShare("on");
                break;
            case 'blogCardTags': 
                props.blogListCardTagIsHover("on", props.data.key, key);
                break;
            case 'blogCardLink': 
                setIsHoveringBlogCardLink("on");
                break;
            case 'blogCardQuote': 
                setIsHoveringBlogCardQuote("on");
                break;
        }
    }

    const handleMouseLeave = (opt, key) => {
        switch(opt){
            case 'blogCardDate': 
                setIsHoveringBlogCardDate("off");
                break;
            case 'blogCardLikes': 
                setIsHoveringBlogCardLikes("off");
                break;
            case 'blogCardComments': 
                setIsHoveringBlogCardComments("off");
                break;
            case 'blogCardShare': 
                setIsHoveringBlogCardShare("off");
                break;
            case 'blogCardTags': 
                props.blogListCardTagIsHover("off", props.data.key, key);
                break;
            case 'blogCardLink': 
                setIsHoveringBlogCardLink("off");
            case 'blogCardQuote': 
                setIsHoveringBlogCardQuote("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if([
            'blogCardDate',
            'blogCardLikes',
            'blogCardComments',
            'blogCardTags'
        ].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h15-nobel-lustria-animated";
                case 'on':
                    return "h15-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h15-nobel-lustria-nero-hover-off"
            }
        }
        if(['blogCardLink'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h22-white-smoke-2-lustria-cursor";
                case 'on':
                    return "h22-white-smoke-2-lustoria-nobel-hover-on";
                case 'off':
                    return "h22-white-smoke-2-lustoria-nobel-hover-off"
            }
        }
        if(['blogCardQuote'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h22-nero-lustria-cursor";
                case 'on':
                    return "h22-nero-lustria-nobel-hover-on";
                case 'off':
                    return "h22-nero-lustria-nobel-hover-off"
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
                <EH70/>
            </>
        )
    }

    const renderTags = (arr) => {
        return(
            <>{arr.map((el, i) => {
                return(
                    <div
                        key={i}
                        onMouseEnter={() => handleMouseEnter(`blogCardTags`, el.key)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardTags`, el.key)} 
                    >
                        <H15 className={renderClassName("blogCardTags", el.isHover)}>{el.label + `${i !== arr.length - 1 ? "," : ""}`}&nbsp;</H15>
                    </div>
                )
            })}</>
        )
    }

    const renderBlogCardInfo = () => {
        return(
            <div className="blog-list-post-card-info-wrapper">
                <div className="blog-list-post-card-info-left-part-wrapper">
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
                            classNameOpt="blogCardLike"
                        />
                        &nbsp;
                        <H15 className={renderClassName("blogCardLikes", isHoveringBlogCardLikes)}>{props.data.numberOfLikes}</H15>
                    </div>
                    <EW10/>
                    <div 
                        className="blog-list-post-card-info-comments"
                        onMouseEnter={() => handleMouseEnter(`blogCardComments`)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardComments`)} 
                    >
                        <Icon 
                            iconType="fontAwesome"
                            icon="faComment"
                            iconSize="1x"
                            isHover={isHoveringBlogCardComments}
                            classNameOpt="blogCardComment"
                        />
                        &nbsp;
                        <H15 className={renderClassName("blogCardComments", isHoveringBlogCardComments)}>{props.data.numberOfComments}</H15>
                    </div>
                    <EW10/>
                    <div className="blog-list-post-card-info-tags">
                        <Icon
                            iconType="fontAwesome"
                            icon="faBookmark"
                            iconSize="1x"
                            classNameOpt="blogCardTag"
                        />
                         &nbsp;
                        {renderTags(props.data.tags)}
                    </div>
                </div>              
                <div 
                    className="blog-list-post-card-info-soc-med"
                    onMouseEnter={() => handleMouseEnter(`blogCardShare`)} 
                    onMouseLeave={() => handleMouseLeave(`blogCardShare`)} 
                >
                    <Icon
                        iconType="fontAwesome"
                        icon="faShareAlt"
                        iconSize="1x"
                        isHover={isHoveringBlogCardShare}
                        classNameOpt="blogCardShare"
                    />
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
                        <div className="blog-list-post-card-link">
                            <div
                                className="blog-list-post-card-link-text-wrapper"
                                onMouseEnter={() => handleMouseEnter(`blogCardLink`)} 
                                onMouseLeave={() => handleMouseLeave(`blogCardLink`)} 
                            >
                                <H22 className={renderClassName("blogCardLink", isHoveringBlogCardLink)}>{props.data.linkText}</H22>
                            </div>
                            <div className="blog-list-post-card-link-icon-wrapper">
                                <Icon
                                    iconType="fontAwesome"
                                    icon="faLink"
                                    iconSize="2x"
                                    classNameOpt="blogCardLink"
                                />
                            </div>
                        </div>
                        <EH60/>
                        {renderBlogCardMainBody()}
                    </>
                )
            case 'quotePost':
                return (
                    <>
                        <div className="blog-list-post-card-quote">
                            <div>
                                <div
                                    className="blog-list-post-card-quote-text-wrapper"
                                    onMouseEnter={() => handleMouseEnter(`blogCardQuote`)} 
                                    onMouseLeave={() => handleMouseLeave(`blogCardQuote`)} 
                                >
                                    <H22 className={renderClassName("blogCardQuote", isHoveringBlogCardQuote)}>{props.data.quoteText}</H22>
                                </div>
                                <EH20/>
                                <div className="blog-list-post-card-quote-author-name-wrapper">
                                    <div className="slide-dash"/>
                                    <H17 className="h17-nero-poppins">{props.data.quoteAuthor}</H17>
                                </div>
                            </div>
                            <div className="blog-list-post-card-quote-icon-wrapper">
                                <Icon
                                    iconType="fontAwesome"
                                    icon="faQuoteLeft"
                                    iconSize="2x"
                                    classNameOpt="blogCardQuote"
                                />
                            </div>
                        </div>
                        <EH60/>
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
 