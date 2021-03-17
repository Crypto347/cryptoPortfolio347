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
import Audio from '../../Parts/Audio/audio';
import Video from '../../Parts/Video/video'
import Swiper from '../../../library/Swiper/swiper';

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
    const [isHoveringBlogCardHeader, setIsHoveringBlogCardHeader] = useState("init");
    const [isHoveringBlogCardLikes, setIsHoveringBlogCardLikes] = useState("init");
    const [isHoveringBlogCardComments, setIsHoveringBlogCardComments] = useState("init");
    const [isHoveringBlogCardShare, setIsHoveringBlogCardShare] = useState("init");
    const [isHoveringBlogCardLink, setIsHoveringBlogCardLink] = useState("init");
    const [isHoveringBlogCardQuote, setIsHoveringBlogCardQuote] = useState("init");
    const [cardWidth, setCardWidth] = useState(0);
    
    /**
     * Methods
     */
   
    useEffect(() => {

        //Set width of swiper

        let blogListPostCard = document.getElementById("blogListPostCard");
        setCardWidth(blogListPostCard.offsetWidth);

        
    }, []);

    const handleMouseEnter = (opt, key) => {
        switch(opt){
            case 'blogCardDate': 
                setIsHoveringBlogCardDate("on");
                break;
            case 'blogCardHeader': 
                setIsHoveringBlogCardHeader("on");
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
                props.blogListCardTagIsHover("on", props.elData.key, key);
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
            case 'blogCardHeader': 
                setIsHoveringBlogCardHeader("off");
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
                props.blogListCardTagIsHover("off", props.elData.key, key);
                break;
            case 'blogCardLink': 
                setIsHoveringBlogCardLink("off");
                break;
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
        if(['blogCardHeader'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h35-black-poppins-cursor";
                case 'on':
                    return "h35-black-poppins-nobel-cursor-hover-on";
                case 'off':
                    return "h35-black-poppins-nobel-cursor-hover-off"
            }
        }
    }

    const loadImg = (imgKey) => {
        switch(imgKey){
            case 'blogCardStandardPostCoverImg1':
                return Images.BLOG_CARD_STANDARD_POST_COVER_IMG_1;
            case 'blogCardStandardPostCoverImg2':
                return Images.BLOG_CARD_STANDARD_POST_COVER_IMG_2;
            case 'blogCardLinkPostCoverImg1':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_1;
            case 'blogCardLinkPostCoverImg2':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_2;   
            case 'blogCardQuotePostCoverImg1':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_1;
            case 'blogCardQuotePostCoverImg2':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_2;
            case 'blogCardAudioPostCoverImg1':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_1;
            case 'blogCardAudioPostCoverImg2':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_2;
            default:
                return "";
        }
    }

    const renderCardCover = (type) => {
        switch(type){
            case 'audioPost':
                return(
                    <div className="blog-list-post-card-audio-wrapper">
                        <img 
                            src={loadImg(props.elData.coverImage.key)}
                            onMouseDown={(e) => onClickHandler(e)}
                        />
                        <Audio
                            audioKey={props.elData.audioKey}
                        />
                    </div>
                );
            case 'videoPost':
                return(
                    <div className="blog-list-post-card-video-wrapper">
                        <Video videoKey={props.elData.videoKey}/>
                    </div>
                );
            case 'galleryPost':
                return(
                    <div className="blog-list-post-card-gallery-wrapper">
                        {cardWidth !== 0 ? 
                        <Swiper
                            component={props.elData.key}
                            contentArray={props.elData.imagesArray}
                            content={props.pageData}
                            translateWidth={cardWidth}
                            showNumbersOfSlides={1}
                            setSwiperState={props.setSwiperStateForBlogListStandardPage}
                            swiperData={props.elData.swiper}
                            onlyImages
                            pathToFindSwiper={props.elData.key}
                            // autoPlay
                        /> : null}
                    </div>
                );
            default: 
                return(
                    <img 
                        src={loadImg(props.elData.coverImage.key)}
                        onMouseDown={(e) => onClickHandler(e)}
                    />              
                );
        }
    }

    const renderBlogCardMainBody = (type) => {
        return(
            <>
                {renderCardCover(type)}
                <EH60/>
                <div className="blog-list-post-card-date-and-header-wrapper">
                    <div
                        onMouseEnter={() => handleMouseEnter(`blogCardDate`)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardDate`)} 
                    >
                        <H15 className={renderClassName("blogCardDate", isHoveringBlogCardDate)}>{props.elData.date}</H15>
                    </div>
                    <div
                        onMouseEnter={() => handleMouseEnter(`blogCardHeader`)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardHeader`)} 
                    >
                        <H35 className={renderClassName("blogCardHeader", isHoveringBlogCardHeader)}>{props.elData.header}</H35>
                    </div>
                </div>
                <EH20/>
                <div className="blog-list-post-card-text">
                    <H17 className="h17-black-lustria">{props.elData.text + " ..."}</H17>
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
                        <H15 className={renderClassName("blogCardLikes", isHoveringBlogCardLikes)}>{props.elData.numberOfLikes}</H15>
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
                        <H15 className={renderClassName("blogCardComments", isHoveringBlogCardComments)}>{props.elData.numberOfComments}</H15>
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
                        {renderTags(props.elData.tags)}
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
                        {renderBlogCardMainBody(type)}
                    </>
                )
            case 'galleryPost':
                return (
                    <>
                        {renderBlogCardMainBody(type)}
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
                                <H22 className={renderClassName("blogCardLink", isHoveringBlogCardLink)}>{props.elData.linkText}</H22>
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
                        {renderBlogCardMainBody(type)}
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
                                    <H22 className={renderClassName("blogCardQuote", isHoveringBlogCardQuote)}>{props.elData.quoteText}</H22>
                                </div>
                                <EH20/>
                                <div className="blog-list-post-card-quote-author-name-wrapper">
                                    <div className="slide-dash"/>
                                    <H17 className="h17-nero-poppins">{props.elData.quoteAuthor}</H17>
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
                        {renderBlogCardMainBody(type)}
                    </>
                )
            case 'audioPost':
                return (
                    <>
                        {renderBlogCardMainBody(type)}
                    </>
                )
            case 'videoPost':
                return (
                    <>
                        {renderBlogCardMainBody(type)}
                    </>
                )
        }
    }

    const onClickHandler = (e) => {
        // // Do nothing on right mouse click

        // if(e.button === 2) return;
        // if(['bannerPageSection3','bannerPageSection4','bannerPageSection8'].includes(props.page)) return;

        // // Prevent function overlayImageItemOnClick from running

        // e.stopPropagation();

        // // Storing data in local storage 

        // localStorage.setItem("archiveCategoryHG", key);
        // localStorage.setItem("pageHG", props.page);

        // // Clear archive data

        // props.clearArchiveData();
    
        // if(e.button !== 1){
        //     /**
        //      * Add fading effect on the unmounted component and remember 
        //      * information of the unmounted component on left mouse click 
        //      */ 

        //     props.setUnmountComponentValues(true, path);
        // }else{
        //     // Remember information of the unmounted component on scroll wheel click
        
        //     props.setUnmountComponentValues(false, path);
        // }
        // // Fire up unmountComponent epic

        // props.unmountComponent(null, null,  props.page, e.button);
    }

    /**
     * Markup
     */

    return(
        <div className="blog-list-post-card" id="blogListPostCard">
            {renderBlogCard(props.elData.cardType)}
        </div>
    );
}

export default BlogListPostCard;
 