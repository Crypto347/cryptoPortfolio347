/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './blogPostSingleItem.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import Icon from '../Icon/icon';
import TagItem from '../../SmallParts/TagItem/tagItem';
import Audio from '../../Parts/Audio/audio';
import Video from '../../Parts/Video/video'
import Swiper from '../../../library/Swiper/swiper';
import BlogNavigation from '../../Parts/BlogNavigation/blogNavigation';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Services
 */

import * as Services from "../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import {
    H15,
    H17,
    H19,
    H22,
    H35,
    EW10,
    EH10,
    EH20,
    EH30,
    EH60,
    EH70
} from '../../UtilityComponents';

import * as Utility from '../../../utility';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

import {
    socialMediaIcons
} from '../../../constants/socialMediaIcons';

/**
 * BlogPostSingleItem component definition and export
 */

export const BlogPostSingleItem = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [showContent, setShowContent] = useState(false);
    const [isHoveringBlogPostItemDate, setIsHoveringBlogPostItemDate] = useState("init");
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

        // Init state for fading effect when component will unmount
console.log("JJJ", props.props1)
        // props.setUnmountComponentValues(false, "");

        // Scroll to the top of the screen

        window.scrollTo(0, 0);
     
        // Set width of swiper and height of the content

        let blogPostSingleItem = document.getElementById("blogPostSingleItem");
        setCardWidth(blogPostSingleItem.offsetWidth);

        // Init blog post element data

        let pathNameArray = props.location.pathname.split("/");
        let cardType = Utility.categoryPathToKey(pathNameArray[pathNameArray.length-2]);
        let cardIdFromPathname = +pathNameArray[pathNameArray.length-1];

        // Fetch data for the component

        switch(cardType){
            case 'standardPost':
                // Fetch data for the component

                if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                    // Fetch mock data (not required to run -> npm run server)

                    fetchFakeData(FakeData.standardPost, cardIdFromPathname);
                }else{
                    // Fetch data (required to run -> npm run server)
                    
                    props.fetchStandardPostBlogData(cardIdFromPathname);
                }
                break;
            case 'galleryPost':
                // Fetch data for the component

                if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                    // Fetch mock data (not required to run -> npm run server)

                    fetchFakeData(FakeData.galleryPost, cardIdFromPathname);
                }else{
                    // Fetch data (required to run -> npm run server)
                    
                    props.fetchGalleryPostBlogData(cardIdFromPathname);
                }
                break;
            case 'linkPost':
                // Fetch data for the component

                if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                    // Fetch mock data (not required to run -> npm run server)

                    fetchFakeData(FakeData.linkPost, cardIdFromPathname);
                }else{
                    // Fetch data (required to run -> npm run server)
                    
                    props.fetchLinkPostBlogData(cardIdFromPathname);
                }
                break;
            case 'quotePost':
                // Fetch data for the component
                
                if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                    // Fetch mock data (not required to run -> npm run server)

                    fetchFakeData(FakeData.quotePost, cardIdFromPathname);
                }else{
                    // Fetch data (required to run -> npm run server)
                    
                    props.fetchQuotePostBlogData(cardIdFromPathname);
                }
                break;
            case 'audioPost':
                // Fetch data for the component

                if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                    // Fetch mock data (not required to run -> npm run server)

                    fetchFakeData(FakeData.audioPost, cardIdFromPathname);
                }else{
                    // Fetch data (required to run -> npm run server)
                    
                    props.fetchAudioPostBlogData(cardIdFromPathname);
                }
                break;
            case 'videoPost':
                // Fetch data for the component

                if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                    // Fetch mock data (not required to run -> npm run server)

                    fetchFakeData(FakeData.videoPost, cardIdFromPathname);
                }else{
                    // Fetch data (required to run -> npm run server)
                    
                    props.fetchVideoPostBlogData(cardIdFromPathname);
                }
                break;
            default:
                // props.fetchStandardPostBlogData(cardIdFromPathname);
                break;
        }

        // Show content after successful data fetch

        setShowContent(true);

        return () =>  {
            // Cleaning the unmounted component

            props.activateListStandardBlogItem("deactive", "", "");
        }
    }, []);

    const fetchFakeData = (fakeData, cardIdFromPathname) => {
        let postObj = fakeData.find(item => item.id === cardIdFromPathname);

        let updatedJson = {...postObj};
        let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
        userPostsLikedArray.map((el, i) => {
            if(updatedJson.cardId === el){
                updatedJson = {
                    ...updatedJson,
                    numberOfLikes: updatedJson.numberOfLikes + 1,
                    userLikedThePost: true
                }
            }
        });

        props.fetchPostBlogDataSuccess(updatedJson);
        props.activateListStandardBlogItem("active", updatedJson.cardId, updatedJson.cardType);
    }

    const handleMouseEnter = (opt, key) => {
        switch(opt){
            case 'blogPostItemDate': 
                setIsHoveringBlogPostItemDate("on");
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
            case 'blogCardCategories':
                // Depending on the page set function to hover categories

                switch(props.page){
                    case 'standardPost':
                        props.blogPostSingleItemCategoryIsHoverForBlogListStandardPage("on", key);
                        break;
                    default:
                        props.blogPostSingleItemCategoryIsHoverForBlogListStandardPage("on", key);
                        break;
                }
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
            case 'blogPostItemDate': 
                setIsHoveringBlogPostItemDate("off");
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
            case 'blogCardCategories':
                // Depending on the page set function to hover categories

                switch(props.page){
                    case 'standardPost':
                        props.blogPostSingleItemCategoryIsHoverForBlogListStandardPage("off", key);
                        break;
                    default:
                        props.blogPostSingleItemCategoryIsHoverForBlogListStandardPage("off", key);
                        break;
                }
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
            'blogPostItemDate',
            'blogCardLikes',
            'blogCardComments',
            'blogCardCategories'
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
        if(['blogCardSocMedInstagram'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "blog-post-single-item-soc-med-Instagram";
                case 'on':
                    return "blog-post-single-item-soc-med-Instagram-hover-on";
                case 'off':
                    return "blog-post-single-item-soc-med-Instagram-hover-off"
            }
        }
        if(['blogCardSocMedTwitter'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "blog-post-single-item-soc-med-Twitter";
                case 'on':
                    return "blog-post-single-item-soc-med-Twitter-hover-on";
                case 'off':
                    return "blog-post-single-item-soc-med-Twitter-hover-off"
            }
        }
        if(['blogCardSocMedFacebook'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "blog-post-single-item-soc-med-Facebook";
                case 'on':
                    return "blog-post-single-item-soc-med-Facebook-hover-on";
                case 'off':
                    return "blog-post-single-item-soc-med-Facebook-hover-off"
            }
        }
        if(['blogCardSocMedTumblr'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "blog-post-single-item-soc-med-Tumblr";
                case 'on':
                    return "blog-post-single-item-soc-med-Tumblr-hover-on";
                case 'off':
                    return "blog-post-single-item-soc-med-Tumblr-hover-off"
            }
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

    const renderCardCover = (type) => {
        switch(type){
            case 'audioPost':
                return(
                    <div className="blog-post-single-item-audio-wrapper">
                        <img 
                            src={loadImg(props.blogListStandardPage.postBlogContent.item.coverImage.key)}
                            // onMouseDown={(e) => onClickHandler(e)}
                        />
                        <Audio
                            audioKey={props.blogListStandardPage.postBlogContent.item.audioKey}
                        />
                    </div>
                );
            case 'videoPost':
                return(
                    <div className="blog-post-single-item-video-wrapper">
                        <Video videoKey={props.blogListStandardPage.postBlogContent.item.videoKey}/>
                    </div>
                );
            case 'galleryPost':
                let translatedValue;
                let setSwiperState;

                switch(props.page){
                    case 'blogListStandardPage':
                        setSwiperState = props.setSwiperStateOfBlogPostSingleItemForBlogListStandardPage;
                        break;
                    default:
                        setSwiperState = props.setSwiperStateOfBlogPostSingleItemForBlogListStandardPage;
                        break;
                }
            
                // Calculate translatedWidth property for different screen widths

                if(size.width > 830){
                    translatedValue = cardWidth;
                }else{
                    translatedValue = size.width;
                }

                return(
                    <div className="blog-post-single-item-gallery-wrapper">
                        {cardWidth !== 0 ? 
                        <Swiper
                            component={props.blogListStandardPage.postBlogContent.item.cardId}
                            contentArray={props.blogListStandardPage.postBlogContent.item.imagesArray}
                            content={props.blogListStandardPage.postBlogContent.item}
                            translateWidth={translatedValue}
                            showNumbersOfSlides={1}
                            setSwiperState={setSwiperState}
                            swiperData={props.blogListStandardPage.postBlogContent.item.swiper}
                            onlyImages
                            // autoPlay
                        /> : null}
                    </div>
                );
            default: 
                return(
                    <img src={loadImg(props.blogListStandardPage.postBlogContent.item.coverImage.key)}/>              
                );
        }
    }

    const onLikesClickHandler = (postData) => {

        let increasePostSingleItemLikesFunc;
        let decreasePostSingleItemLikesFunc;
        let increasePostCardLikesFunc;
        let decreasePostCardLikesFunc;

        switch(props.page){
            case 'blogListStandardPage':
                increasePostSingleItemLikesFunc = props.increaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage;
                decreasePostSingleItemLikesFunc = props.decreaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage;
                increasePostCardLikesFunc = props.increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage;
                decreasePostCardLikesFunc = props.decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage;
                break;
           
            default:
                // props.fetchStandardPostBlogData(cardIdFromPathname);
                break;
        }

        // Remember posts that user liked

        if(!postData.userLikedThePost){
            // Icrease the number of likes

            increasePostSingleItemLikesFunc(postData.cardId);
            increasePostCardLikesFunc(postData.cardId);

            let userLikedPosts = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            if(!userLikedPosts.includes(postData.cardId)){
                userLikedPosts.push(postData.cardId);
            }
         
            localStorage.setItem("userLikedPostsHG", JSON.stringify(userLikedPosts));
        }else{
            // Decrease the number of likes
            
            decreasePostSingleItemLikesFunc(postData.cardId);
            decreasePostCardLikesFunc(postData.cardId);

            let userLikedPosts = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            userLikedPosts = userLikedPosts.filter(item => item !== postData.cardId);
            localStorage.setItem("userLikedPostsHG", JSON.stringify(userLikedPosts))
        }
    }

    const setFakeData = (page) => {
        switch(page){
            case 'blogListStandardPage':
                return FakeData.blogListStandardPage;
        }
    }

    const renderBlogCardInfo = () => {
        return(
            <div className="blog-post-single-item-info-wrapper">
                <div className="blog-post-single-item-info-left-part-wrapper">
                    <div 
                        className="blog-post-single-item-info-likes"
                        onMouseEnter={() => handleMouseEnter(`blogCardLikes`)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardLikes`)}
                        onClick={() => onLikesClickHandler(props.blogListStandardPage.postBlogContent.item)}
                    >
                        <Icon 
                            iconType="fontAwesome"
                            icon={props.blogListStandardPage.postBlogContent.item.userLikedThePost ? "faHeartSolid" : "faHeart"}
                            iconSize="1x"
                            isHover={isHoveringBlogCardLikes}
                            classNameOpt="blogCardLike"
                        />
                        &nbsp;
                        <H15 className={renderClassName("blogCardLikes", isHoveringBlogCardLikes)}>{props.blogListStandardPage.postBlogContent.item.numberOfLikes}</H15>
                    </div>
                    <EW10/>
                    <div 
                        className="blog-post-single-item-info-comments"
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
                        <H15 className={renderClassName("blogCardComments", isHoveringBlogCardComments)}>{props.blogListStandardPage.postBlogContent.item.numberOfComments}</H15>
                    </div>
                    <EW10/>
                    <div className="blog-post-single-item-info-categories">
                        <Icon
                            iconType="fontAwesome"
                            icon="faBookmark"
                            iconSize="1x"
                            classNameOpt="blogCardCategory"
                        />
                        &nbsp;
                        {renderCategories(props.blogListStandardPage.postBlogContent.item.categories)}
                    </div>
                </div>
            </div>
        )
    }

    const renderCategories = (arr) => {
        return(
            <>{arr.map((el, i) => {
                return(
                    <div
                        key={i}
                        onMouseEnter={() => handleMouseEnter(`blogCardCategories`, el.key)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardCategories`, el.key)} 
                    >
                        <H15 className={renderClassName("blogCardCategories", el.isHover)}>{el.label + `${i !== arr.length - 1 ? "," : ""}`}&nbsp;</H15>
                    </div>
                )
            })}</>
        )
    }

    const renderParagraphs = (arr) => {
        return(
            <div className="blog-post-single-item-paragraphs">
                {arr.map((el, i) => {
                    if(el.type === "quote"){
                        return(
                            <React.Fragment key={i}>
                                <EH30/>
                                <div className="blog-post-single-item-blockquote-wrapper">
                                    <blockquote className="blog-post-single-item-blockquote">
                                        <H19 className="h19-black-poppins"> {el.textPart}</H19>
                                    </blockquote>
                                </div>
                                <EH30/>
                            </React.Fragment>
                        )
                    }else{
                        return(
                            <React.Fragment key={i}>
                                <H15 className="h15-black-lustria">{el.textPart}</H15>
                            </React.Fragment>
                        )
                    }
                    
                })}
            </div>
        )
    }

    const renderTagsAndSocMedia = () => {
        return(
            <div className="blog-post-single-item-tags-and-soc-media-wrapper">
                <div className="blog-post-single-item-tags-part-wrapper">
                   {renderTags(props.blogListStandardPage.postBlogContent.item.tags)}
                </div>              
                <div 
                    className="blog-post-single-item-soc-med-part-wrapper"
                    onMouseEnter={() => handleMouseEnter(`blogCardShare`)} 
                    onMouseLeave={() => handleMouseLeave(`blogCardShare`)} 
                >
                    {renderSocialMediaIcons()}
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

    const renderTags = (arr) => {
        return(
            <>
                {arr.map((el, i) => {
                    return(
                        <div
                            key={i}
                            className="blog-post-single-item-tag"
                        >
                            <TagItem
                               tagName={el.tagName} 
                            />
                        </div>
                    )
                })}
            </>
        )
    }

    const renderSocialMediaIcons = () => {
        return(
            <div className="blog-post-single-item-soc-med-icons">{socialMediaIcons.map((el, i) => {
               return(
                    <div 
                        key={i}
                        className={renderClassName(`blogCardSocMed${el.name}`, isHoveringBlogCardShare)}
                    >
                        <Icon 
                            key={i}
                            iconType="fontAwesome"
                            iconName={el.name} 
                            icon={el.iconKey} 
                            iconSize="1x"
                            onMouseEnter
                            onMouseLeave
                            onMouseDown
                            classNameOpt={`blogCardSocMed${el.name}`}
                        />
                        <EW10/>
                    </div>
               ) 
            })}
            </div>
        )
    }

    const renderAuthorNote = () => {
        return(
            <div className="blog-post-single-item-author-note-wrapper">
                <div className="blog-post-single-item-author-image">
                    <img src={Images.PHOTO_19}/>
                </div>
                <div className="blog-post-single-item-name-and-note-wrapper">
                    <H17 className="h17-black-poppins">Naomi Hernandez</H17>
                    <EH10/>
                    <H15 className="h15-black-lustria">
                        Cum offendit repudiandae ut, eam alii magna falli ne. 
                        Duo utinam consequat ei, eum cetero atomorum ne, dictas bonorum vel cu. 
                        Lorem eloquentiam ea pri sit.
                    </H15>
                </div>
            </div>
        )
    }

    const renderBlogPostSingleItem = (data) => {
        return(
            <>
                {renderCardCover(data.cardType)}
                <EH60/>
                <div className="blog-post-single-item-date-and-header-wrapper">
                    <div
                        onMouseEnter={() => handleMouseEnter(`blogPostItemDate`)} 
                        onMouseLeave={() => handleMouseLeave(`blogPostItemDate`)} 
                    >
                        <H15 className={renderClassName("blogPostItemDate", isHoveringBlogPostItemDate)}>{data.date}</H15>
                    </div>
                    <H35 className="h35-black-poppins">{data.header}</H35>
                </div>
                <EH20/>
                {renderBlogCardInfo()}
                <EH30/>
                {renderParagraphs(data.text)}
                <EH70/>
                {renderTagsAndSocMedia()}
                <EH70/>
                {renderAuthorNote()}
                <EH70/>
                <BlogNavigation
                    page={props.page}
                    itemKey={props.blogListStandardPage.activeItem.itemKey}
                    fetchPrevAndNextPostForBlogListItem={props.fetchPrevAndNextPostForBlogListItem}
                    fakeData={setFakeData(props.page)}
                    fetchBlogNavigationForBlogListStandardPageDataSuccess={props.fetchBlogNavigationForBlogListStandardPageDataSuccess}
                    data={props.blogListStandardPage.navigation}
                    setUnmountComponentValues={props.setUnmountComponentValues}
                    unmountComponent={props.unmountComponent}
                    clearState={props.clearBlogListSingleItemStateForBlogListStandardPage}
                    activateBlogItem={props.activateListStandardBlogItem}
                    activateBlogCategory={props.activateListStandardBlogCategory}
                />
            </>
        )
    }

    const renderBlogPostSingleItemDataContent = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-post-single-item-loading-error" 
                    style={{height: `100%`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <>
                    {renderBlogPostSingleItem(data.item)}
                </>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-post-single-item-loading-error" 
                    style={{height: `100%`}}
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
        <div className="blog-post-single-item" id="blogPostSingleItem">
            {showContent ? renderBlogPostSingleItemDataContent(props.blogListStandardPage.postBlogContent) : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            blogListStandardPage: Selectors.getBlogListStandardPageState(state),
        };
    },
    (dispatch) => {
        return {
            fetchStandardPostBlogData: bindActionCreators(Services.fetchStandardPostBlogData, dispatch),
            fetchGalleryPostBlogData: bindActionCreators(Services.fetchGalleryPostBlogData, dispatch),
            fetchLinkPostBlogData: bindActionCreators(Services.fetchLinkPostBlogData, dispatch),
            fetchQuotePostBlogData: bindActionCreators(Services.fetchQuotePostBlogData, dispatch),
            fetchAudioPostBlogData: bindActionCreators(Services.fetchAudioPostBlogData, dispatch),
            fetchVideoPostBlogData: bindActionCreators(Services.fetchVideoPostBlogData, dispatch),
            fetchPostBlogDataSuccess: bindActionCreators(Actions.fetchPostBlogDataSuccess, dispatch),
            fetchPrevAndNextPostForBlogListItem: bindActionCreators(Services.fetchPrevAndNextPostForBlogListItem, dispatch),
            fetchBlogNavigationForBlogListStandardPageDataSuccess: bindActionCreators(Actions.fetchBlogNavigationForBlogListStandardPageDataSuccess, dispatch),
            blogPostSingleItemCategoryIsHoverForBlogListStandardPage: bindActionCreators(Actions.blogPostSingleItemCategoryIsHoverForBlogListStandardPage, dispatch),
            setSwiperStateOfBlogPostSingleItemForBlogListStandardPage: bindActionCreators(Actions.setSwiperStateOfBlogPostSingleItemForBlogListStandardPage, dispatch),

            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearBlogListSingleItemStateForBlogListStandardPage: bindActionCreators(Actions.clearBlogListSingleItemStateForBlogListStandardPage, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            activateListStandardBlogItem: bindActionCreators(Actions.activateListStandardBlogItem, dispatch),
            increaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage: bindActionCreators(Actions.increaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage, dispatch),
            decreaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage: bindActionCreators(Actions.decreaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage, dispatch),
            increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
            decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
        };
    }
)(withRouter(BlogPostSingleItem));
 