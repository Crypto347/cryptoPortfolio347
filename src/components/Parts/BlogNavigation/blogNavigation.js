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

import './blogNavigation.scss';


/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';

/**
 * Utility
 */

import {
    H15,
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
 * BlogNavigation component definition and export
 */

export const BlogNavigation = (props) => {

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

        if(props.itemKey !== "") props.fetchPrevAndNextPostForBlogListItem(props.page, props.itemKey);

        if(props.data.items.length !== 0) setShowComponent(true);

        return () =>  {
            // Cleaning the unmounted component
        }
    }, [props.itemKey,
        props.data.items.length]);

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

    const onPageClickHandler = (e, opt, pageID) => {
        // Do nothing on right mouse click
        
        if(e.button === 2) return;

        // Storing data in local storage 

        // localStorage.setItem("archiveCategoryHG", key);
        // localStorage.setItem("pageHG", props.page);

        if(e.button !== 1){
            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */
            let _pageId;
            switch(opt){
                case 'pageNumber':
                    _pageId = pageID;
                    break;
                case 'leftArrow':
                    _pageId = pageID - 1;
                    break;
                case 'rightArrow':
                    _pageId = pageID + 1;
                    break;
            }
     
            props.fetchPageData(_pageId);
            props.activatePageNumber(_pageId);
            
            window.scrollTo(0, 0);
            // props.setUnmountComponentValues(true, path);
        }else{
            // Remember information of the unmounted component on scroll wheel click
        
            // props.setUnmountComponentValues(false, path);
        }
        // Fire up unmountComponent epic

        // props.unmountComponent(null, null,  props.page, e.button);
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
            case 'blogCardAudioPostCoverImg5':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_5;
            case 'blogCardAudioPostCoverImg9':
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
            default:
                return "";
        }
    }

    const updateHeader = (str) => {
        let _str = str.split("");
        if(_str[_str.length-1] === "."){
            _str.pop();
        }
        return _str.join("")
    }

    const renderBlogNavigationContent = (arr) => {
        return(
            <>
                <div className="blog-navigation-prev">
                    <div className="blog-navigation-image">
                        <img src={loadImg(arr[0].coverImage?.key)}/>
                    </div>
                    <div className="blog-navigation-info-wrapper">
                        <H15 className="h15-black-lustria">{updateHeader(arr[0].header)}</H15>
                        <EH10/>
                        <div
                            onMouseEnter={() => handleMouseEnter(`navigationPrevDate`)} 
                            onMouseLeave={() => handleMouseLeave(`navigationPrevDate`)}
                        >
                            <H15 className={renderClassName("navigationPrevDate", isHoveringNavigationPrevDate)}>{arr[0].date}</H15>
                        </div>
                    </div>
                </div>
                <div className="blog-navigation-next">
                    <div className="blog-navigation-info-wrapper">
                        <H15 className="h15-black-lustria">{updateHeader(arr[1].header)}</H15>
                        <EH10/>
                        <div
                            onMouseEnter={() => handleMouseEnter(`navigationNextDate`)} 
                            onMouseLeave={() => handleMouseLeave(`navigationNextDate`)}
                        >
                            <H15 className={renderClassName("navigationNextDate", isHoveringNavigationNextDate)}>{arr[1].date}</H15>
                        </div>
                    </div>
                    <div className="blog-navigation-image">
                        <img src={loadImg(arr[1].coverImage?.key)}/>
                    </div>
                </div>
            </>
        )
    }

    const renderBlogNavigationDataContent = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-post-single-item-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <>
                    {renderBlogNavigationContent(data.items)}
                </>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-post-single-item-loading-error" 
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
        <div className="blog-navigation">
            {showComponent ? renderBlogNavigationDataContent(props.data) : null}
        </div>
    );
}

export default BlogNavigation;
 