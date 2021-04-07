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
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './blogListStandardPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import BlogInfoBoard from '../../../Parts/BlogInfoBoard/blogInfoBoard';
import BlogListPostCard from '../../../SmallParts/BlogListPostCard/blogListPostCard';
import BlogPostSingleItem from '../../../SmallParts/BlogPostSingleItem/blogPostSingleItem';
import TagItem from '../../../SmallParts/TagItem/tagItem';
import Icon from '../../../SmallParts/Icon/icon';
import Pagination from '../../../Parts/Pagination/pagination';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';
import BlogCommentsSection from '../../../Parts/BlogCommentsSection/blogCommentsSection';

/**
 * Actions
 */

import * as Actions from '../../../../actions';

/**
 * Services
 */

import * as Services from "../../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../../reducers/selectors';

/**
 * Utility
 */

import {
    H15,
    H17,
    H22,
    H35,
    H45,
    EW20,
    EH10,
    EH20,
    EH30,
    EH40
} from '../../../UtilityComponents';

import * as Utility from '../../../../utility';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * Images
 */

import * as Images from '../../../../constants/images';

/**
 * Constants
 */

import * as FakeData from '../../../../fakeData';
import * as Environment from '../../../../constants/environments';

import {
    categoriesListForBlog
} from '../../../../constants/categoriesListForBlog';

import {
    tagsListForBlog
} from '../../../../constants/tagsListForBlog';

import {
    socialMediaIcons
} from '../../../../constants/socialMediaIcons';

import {
    blogListStandardSearchInputForm
} from '../../../../constants/inputForm';

/**
 * BlogListStandardPage component definition and export
 */

export const BlogListStandardPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [searchIsHover, setSearchIsHover] = useState("init");
    
    /**
     * Methods
     */

    useEffect(() => {

        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Init imput forms

        props.initSearchInputFormForBlogListStandardPage(blogListStandardSearchInputForm);

        // Init blog categories and tags lists

        props.initCategoriesForBlogListStandardPage(categoriesListForBlog);
        props.initTagsForBlogListStandardPage(tagsListForBlog);

        // Set activity of initial category and item

        props.activateListStandardBlogCategory("deactive", "");
        props.activateListStandardBlogItem("deactive", "");

        // Fetch data for the component

        if(props.blogListStandardPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBlogListStandardPageDataSuccess(FakeData.blogListStandardPage);
               
            }else{
                // Fetch data (required to run -> npm run server)
                
                props.fetchBlogListStandardPageData(props.blogListStandardPage.activePageId);
            }
        }

        // Scroll to the top of the screen

        let timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);
        
        return () => {
            // Cleaning the unmounted component
            
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("blogListStandardPage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
        }
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
            setScrollingUp(false);
        }else{
            setScrollingUp(true);
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="blogListStandardPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="blogListStandardPage"
                    />
                </>
            )
        }else{
            return(
                <>
                    <Toolbar 
                        style="regularScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="blogListStandardPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="blogListStandardPage"
                    />
                </>
            )
        }
    }
    
    const renderBlogListStandardPageData = (arr) => {
        return(
            <div>
                {arr.map((el, i) => {                     
                    return(
                        <React.Fragment key={i}>
                            <BlogListPostCard 
                                page="blogListStandardPage"
                                elData={el}
                                blogListCardCategoryIsHover={props.blogListCardCategoryIsHoverForBlogListStandardPage}
                                setSwiperStateForBlogListStandardPage={props.setSwiperStateForBlogListStandardPage}
                                pageData={props.blogListStandardPage}
                                clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                                activateBlogItem={props.activateListStandardBlogItem}
                                activateBlogCategory={props.activateListStandardBlogCategory}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                clearState={props.clearBlogListSingleItemStateForBlogListStandardPage}
                            />
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
    
    const renderBlogCommentsSection = () => {
         
        let pathNameArray = props.location.pathname.split("/");
        let cardType = Utility.categoryPathToKey(pathNameArray[pathNameArray.length-2]);
        let cardIdFromPathname = +pathNameArray[pathNameArray.length-1];
        let postReply;
 
        switch(cardType){
            case 'standardPost':
                postReply = props.fetchStandardPostBlogData;
                break;
            case 'galleryPost':
                postReply = props.fetchGalleryPostBlogData;
                break;
            case 'linkPost':
                postReply = props.fetchLinkPostBlogData;
                break;
            case 'quotePost':
                postReply = props.fetchQuotePostBlogData;
                break;
            case 'audioPost':
                postReply = props.fetchAudioPostBlogData;
                break;
            case 'videoPost':
                postReply = props.fetchVideoPostBlogData;
                break;
            default:
                // props.fetchStandardPostBlogData(cardIdFromPathname);
                break;
        }

        return(
            <BlogCommentsSection
                data={props.blogListStandardPage.postBlogContent}
                triggerCommentReplyButtonVal={props.blogListStandardPage.triggerCommentReplyButtonVal}
                triggerCommentReplyButton={props.triggerCommentReplyButtonForBlogListStandardPage}
                initInputForm={props.initInputFormOfBlogCommentReplyForBlogListStandardPage}
                inputFormFieldsArray={props.blogListStandardPage.commentReplyInputForm}
                setInputFiledValueAndCheckValidation={props.setInputFiledValueAndCheckValidationForBlogListStandardPage}
                replyComment={props.replyCommentBlogListStandardPage}
                postReply={postReply}
                cardIdFromPathname={cardIdFromPathname}
            />
        )
    }

    const renderBlogListStandardPageDataContent = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-list-standard-page-loading-error" 
                    style={{height: `100%`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <div className="blog-list-standard-page-data-wrapper">
                    {renderBlogListStandardPageData(data.items)}
                    <Pagination
                        page="blogListStandardPage"
                        activePageNumber={props.blogListStandardPage.activePageId}
                        pagesArray={props.blogListStandardPage.pagesArray}
                        fetchPageData={props.fetchBlogListStandardPageData}
                        activatePageNumber={props.activatePageNumberForBlogListStandardPage}
                    />
                </div>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-list-standard-page-loading-error" 
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
        <div className="blog-list-standard-page" id="blogListStandardPage">
            {renderToolbars()}
            <Router>
                <div className="blog-list-standard-page-wrapper">
                    <div className="blog-list-standard-page-header">
                        <H45 className="h45-nero-lustria">Blog List Standard</H45>
                    </div>
                    <div className="grey-line"/>
                    <div className="blog-list-standard-page-content-info-wrapper">
                        <div className="blog-list-standard-page-content">
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard"
                            >
                                {renderBlogListStandardPageDataContent(props.blogListStandardPage)} 
                            </Route>
                            <Route 
                                exact 
                                path="/crypto-portfolio/list-standard-blog-category/:category"
                                render={(props) => (
                                    <div className="blog-list-standard-page-posts-list"></div>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/standard-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/gallery-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/link-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/quote-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/audio-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/video-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem page='blogListStandardPage'/>
                                )}
                            />
                        </div>
                        <BlogInfoBoard
                            page="blogListStandardPage"
                            searchFormInputsArray={props.blogListStandardPage.searchInputForm.inputsArray}
                            categoryList={props.blogListStandardPage.categoriesList}
                            tagsList={props.blogListStandardPage.tagsList}
                            activateBlogCategory={props.activateListStandardBlogCategory}
                            clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                            activateBlogItem={props.activateListStandardBlogItem}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                        />
                    </div>
                    {props.blogListStandardPage.activeItem.activated === "active" && !Utility.isObjEmpty(props.blogListStandardPage.postBlogContent.item) ?
                    <> 
                        {renderBlogCommentsSection()}
                    </>: null} 
                </div>
            </Router>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            blogListStandardPage: Selectors.getBlogListStandardPageState(state),
            unmountComp: Selectors.getUnmountComponentState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchBlogListStandardPageData: bindActionCreators(Services.fetchBlogListStandardPageData, dispatch),
            fetchBlogListStandardPageDataSuccess: bindActionCreators(Actions.fetchBlogListStandardPageDataSuccess, dispatch),
            
            
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            initSearchInputFormForBlogListStandardPage: bindActionCreators(Actions.initSearchInputFormForBlogListStandardPage, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            initCategoriesForBlogListStandardPage: bindActionCreators(Actions.initCategoriesForBlogListStandardPage, dispatch),
            initTagsForBlogListStandardPage: bindActionCreators(Actions.initTagsForBlogListStandardPage, dispatch),
            blogListCardCategoryIsHoverForBlogListStandardPage: bindActionCreators(Actions.blogListCardCategoryIsHoverForBlogListStandardPage, dispatch),

            setSwiperStateForBlogListStandardPage: bindActionCreators(Actions.setSwiperStateForBlogListStandardPage, dispatch),
            activatePageNumberForBlogListStandardPage: bindActionCreators(Actions.activatePageNumberForBlogListStandardPage, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            activateListStandardBlogItem: bindActionCreators(Actions.activateListStandardBlogItem, dispatch),
            clearBlogListSingleItemStateForBlogListStandardPage: bindActionCreators(Actions.clearBlogListSingleItemStateForBlogListStandardPage, dispatch),
            triggerCommentReplyButtonForBlogListStandardPage: bindActionCreators(Actions.triggerCommentReplyButtonForBlogListStandardPage, dispatch),
            initInputFormOfBlogCommentReplyForBlogListStandardPage: bindActionCreators(Actions.initInputFormOfBlogCommentReplyForBlogListStandardPage, dispatch),
            setInputFiledValueAndCheckValidationForBlogListStandardPage: bindActionCreators(Actions.setInputFiledValueAndCheckValidationForBlogListStandardPage, dispatch),
            replyCommentBlogListStandardPage: bindActionCreators(Actions.replyCommentBlogListStandardPage, dispatch),
            fetchStandardPostBlogData: bindActionCreators(Services.fetchStandardPostBlogData, dispatch),
            fetchGalleryPostBlogData: bindActionCreators(Services.fetchGalleryPostBlogData, dispatch),
            fetchLinkPostBlogData: bindActionCreators(Services.fetchLinkPostBlogData, dispatch),
            fetchQuotePostBlogData: bindActionCreators(Services.fetchQuotePostBlogData, dispatch),
            fetchAudioPostBlogData: bindActionCreators(Services.fetchAudioPostBlogData, dispatch),
            fetchVideoPostBlogData: bindActionCreators(Services.fetchVideoPostBlogData, dispatch),
        };
    }
)(withRouter(BlogListStandardPage));
 