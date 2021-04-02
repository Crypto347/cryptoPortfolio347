/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './blogCommentsSection.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import BlogComment from '../../SmallParts/BlogComment/blogComment';

/**
 * Utility
 */

import {
    H15,
    H22,
    EH10
} from '../../UtilityComponents';

/**
 * Hooks
 */

 import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * BlogCommentsSection component definition and export
 */

export const BlogCommentsSection = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [isHoveringNavigationPrevDate, setIsHoveringNavigationPrevDate] = useState("init");
    const [isHoveringNavigationNextDate, setIsHoveringNavigationNextDate] = useState("init");
    const [showComponent, setShowComponent] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        // Fetch previous and next post using the current post key

        return () =>  {
            // Cleaning the unmounted component

        }

    }, []);

    const handleMouseEnter = (opt, key) => {
        switch(opt){
            case 'navigationPrevDate': 
                setIsHoveringNavigationPrevDate("on");
                break;
            case 'navigationNextDate': 
                setIsHoveringNavigationNextDate("on");
                break;
        }
    }

    const handleMouseLeave = (opt, key) => {
        switch(opt){
            case 'navigationPrevDate': 
                setIsHoveringNavigationPrevDate("off");
                break;
            case 'navigationNextDate': 
                setIsHoveringNavigationNextDate("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if([
            'navigationPrevDate',
            'navigationNextDate'
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
    }

    const onClickHandler = (e, path, key) => {

        // Do nothing on right mouse click 

        if(e.button === 2) return;
  
        if(e.button !== 1){
            /**
             *  Clear unnecessary information of the unmounted component, 
             *  and render the data of the selected blog item on left mouse click 
             */

            props.clearState();
            props.activateBlogItem("active", key);
            props.activateBlogCategory("deactive", "");
            props.history.push(`/crypto-portfolio/${path}`);
            
        }else{
            // Open selected blog item in a new window on scroll wheel click

            window.open(`/crypto-portfolio/${path}` , "_blank");
        }
    }

    const loadImg = (imgKey) => {
        switch(imgKey){
            case 'blogCardStandardPostCoverImg1':
                return Images.BLOG_CARD_STANDARD_POST_COVER_IMG_1;
            case 'blogCardStandardPostCoverImg2':
                return Images.BLOG_CARD_STANDARD_POST_COVER_IMG_2;
            case 'blogCardStandardPostCoverImg3':
                return Images.BLOG_CARD_STANDARD_POST_COVER_IMG_3;
            case 'blogCardGalleryPostCoverImg1':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_1;
            case 'blogCardGalleryPostCoverImg5':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_5;
            case 'blogCardGalleryPostCoverImg9':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_9;
            case 'blogCardLinkPostCoverImg1':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_1;
            case 'blogCardLinkPostCoverImg2':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_2;
            case 'blogCardLinkPostCoverImg3':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_3;
            case 'blogCardLinkPostCoverImg4':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_4;
            case 'blogCardQuotePostCoverImg1':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_1;
            case 'blogCardQuotePostCoverImg2':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_2;
            case 'blogCardQuotePostCoverImg3':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_3;
            case 'blogCardQuotePostCoverImg4':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_4;
            case 'blogCardAudioPostCoverImg1':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_1;
            case 'blogCardAudioPostCoverImg2':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_2;
            case 'blogCardAudioPostCoverImg3':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_3;
            case 'blogCardAudioPostCoverImg4':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_4;
            case 'blogCardAudioPostCoverImg5':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_5;
            case 'blogCardVideoPostCoverImg1':
                return Images.VIDEO_COVER_IMG_2;
            case 'blogCardVideoPostCoverImg2':
                return Images.VIDEO_COVER_IMG_3;
            case 'blogCardVideoPostCoverImg3':
                return Images.VIDEO_COVER_IMG_4;
                
            default:
                return "";
        }
    }

    const renderComments = (arr) => {
        return(
            <>
                {arr.map((el, i) => {
                    return(
                        <BlogComment
                            key={i}
                            data={el}
                        />
                    )
                })}
            </>
        )
    }

    const renderBlogPostSingleItemComments = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-comments-section-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <div className="blog-comments-section-wrapper">
                    <H22 className="h22-black-lustria">Comments</H22>
                    {renderComments(data.item.comments)}
                </div>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-comments-section-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${data.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="blog-comments-section">
          {renderBlogPostSingleItemComments(props.data)}
        </div>
    );
}

export default BlogCommentsSection;
 