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
    Link
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
import TagItem from '../../../SmallParts/TagItem/tagItem';
import Icon from '../../../SmallParts/Icon/icon';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';

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
    blogListStandardInputForm
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

        props.initInputFormForBlogListStandardPage(blogListStandardInputForm);

        // Init blog categories and tags lists

        props.initCategoriesForBlogListStandardPage(categoriesListForBlog);
        props.initTagsForBlogListStandardPage(tagsListForBlog);

        // Fetch data for the component

        if(props.blogListStandardPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBlogListStandardPageDataSuccess(FakeData.blogListStandardPage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBlogListStandardPageData(1);
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
                                data={el}
                                blogListCardTagIsHover={props.blogListCardTagIsHoverForBlogListStandardPage}
                            />
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
    
    const renderBlogListStandardPageDataContent = (arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="blog-list-standard-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!arr.loading && !arr.error){
            return(
                <div className="blog-list-standard-page-data-wrapper">
                    {renderBlogListStandardPageData(arr)}
                </div>
            )
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="blog-list-standard-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${arr.error}`}</H15>
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
                            <Route exact path="/crypto-portfolio/blog-list-standard">
                                {renderBlogListStandardPageDataContent(props.blogListStandardPage.items)}
                            </Route>
                            <Route exact path="/crypto-portfolio/list-standard-blog-category/:category"
                                render={(props) => (
                                    <div className="blog-list-standard-page-posts-list"></div>
                                )}
                            />
                        </div>
                        <BlogInfoBoard
                            page="blogListStandardPage"
                            searchFormInputsArray={props.blogListStandardPage.inputForm.inputsArray}
                            categoryList={props.blogListStandardPage.categoriesList}
                            tagsList={props.blogListStandardPage.tagsList}
                            activateBlogCategory={props.activateListStandardBlogCategory}
                        />
                    </div>
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
            initInputFormForBlogListStandardPage: bindActionCreators(Actions.initInputFormForBlogListStandardPage, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            initCategoriesForBlogListStandardPage: bindActionCreators(Actions.initCategoriesForBlogListStandardPage, dispatch),
            initTagsForBlogListStandardPage: bindActionCreators(Actions.initTagsForBlogListStandardPage, dispatch),
            blogListCardTagIsHoverForBlogListStandardPage: bindActionCreators(Actions.blogListCardTagIsHoverForBlogListStandardPage, dispatch),
        };
    }
)(withRouter(BlogListStandardPage));
 