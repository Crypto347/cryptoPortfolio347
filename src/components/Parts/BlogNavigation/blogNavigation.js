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

    const onClickHandler = (e, path, key) => {

        // Do nothing on right mouse click 

        if(e.button === 2) return;

        // Storing data in local storage 

        // localStorage.setItem("blogCategoryHG", {page: props.page, activeCategory: key});
        //   localStorage.setItem("pageHG", "blogListStandardPage");

        //   localStorage.setItem("archiveCategory", opt === "goToArchive" ? key : props.archive.category);
        //   localStorage.setItem("page", "blogListStandardPage");
          
          // Clear archive data 
  
        //   if(opt === 'goToArchive' && props.archive.category !== key && e.button !== 1){
        //       props.clearArchiveData();
        //   }
  
          if(e.button !== 1){
              /**
               * Add fading effect on the unmounted component and remember 
               * information of the unmounted component on left mouse click 
               */ 
  
            //   props.setUnmountComponentValues(true, path);
          }else{
              // Remember information of the unmounted component on scroll wheel click 
              
            //   props.setUnmountComponentValues(false, path);
          }
          // Fire up unmountComponent epic
  
        //   props.unmountComponent(null, null, "blogListPostCard", e.button);
          
        // Clear Blog Post Single Item state

        props.clearState();

        props.activateBlogItem("active", key);
        props.activateBlogCategory("deactive", "");
        // props.clearActivityOfMenuItems();
        props.history.push(`/crypto-portfolio/${path}`);
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
                <div 
                    className="blog-navigation-prev"
                    onMouseDown={(e) => onClickHandler(e, arr[0].path, arr[0].key)}
                >
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
                <div 
                    className="blog-navigation-next"
                    onMouseDown={(e) => onClickHandler(e, arr[1].path, arr[1].key)}
                >
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

export default withRouter(BlogNavigation);
 