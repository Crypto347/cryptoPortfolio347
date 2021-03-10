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
    Switch,
    Redirect
} from 'react-router-dom';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './postSinglesStandardPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Input from '../../../../library/Input/input';
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
 * PostSinglesStandardPage component definition and export
 */

export const PostSinglesStandardPage = (props) => {

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

        // if(props.blogListStandardPage.items.length === 0){
        //     if(process.env.ENVIRONMENT === Environment.PRODUCTION){
        //         // Fetch mock data (not required to run -> npm run server)

        //         props.fetchHighlightsPageDataSuccess(FakeData.highlightsPage);
        //     }else{
        //         // Fetch data (required to run -> npm run server)

        //         props.fetchHighlightsPageData();
        //     }
        // }

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

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'searchIcon':
                setSearchIsHover("on")
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'searchIcon':
                setSearchIsHover("off")
                break;
        }
    }

    const inputChangeHandler = (e, inputFieldId, opt, inputForm) => {
        // Uppercase first letter of the input form name

        let updatedInputForm = inputForm.charAt(0).toUpperCase() + inputForm.slice(1);

        // Set input value and check validation

        // props.setInputFiledValueAndCheckValidation(props.contactFormPage[opt][inputForm], e, inputFieldId, `${opt}${updatedInputForm}`);
    }

    const onClickCategory = (key, path, e) => {

          // Do nothing on right mouse click 

          if(e.button === 2) return;

          // Storing data in local storage 
  
        //   localStorage.setItem("archiveCategory", opt === "goToArchive" ? key : props.archive.category);
        //   localStorage.setItem("page", "archive");
          
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
  
        //   props.unmountComponent(key, "list-standard-blog-category", "blogCategory", e.button);
          
        props.activateListStandardBlogCategory("active", key)
        props.history.push(`/crypto-portfolio/list-standard-blog-category/${key}`);

    }

    const renderSearchForm = () => {
        if(props.blogListStandardPage.inputForm.inputsArray){
            return(
                <>{props.blogListStandardPage.inputForm.inputsArray.map((el, i)=>{
                    return(
                        <div 
                            key={i} 
                            className="blog-list-standard-page-search-wrapper"
                        >
                            <Input
                                className="blog-list-standard-search-input"
                                onChange={(event) => inputChangeHandler(event, el.id, 'section1','inputForm')}
                                elementType={el.elementType}
                                rows={el.elementConfig.rows}
                                validField={el.validField}
                                touched={el.touched}
                                erroeMessages={el.errorMessage}
                                inputID={el.inputID}
                                textareaID={el.textareaID}
                                placeholder={el.elementConfig.placeholder}
                                options={el.elementConfig.options}
                            />
                            <div
                                className="blog-list-standard-page-search-button"
                                onMouseEnter={() => handleMouseEnter("searchIcon")} 
                                onMouseLeave={() => handleMouseLeave("searchIcon")}
                            >
                                <Icon 
                                    iconType="fontAwesome"
                                    // iconName={el.name} 
                                    icon="faSearch"
                                    iconSize="lg"
                                    classNameOpt="searchIcon"
                                    isHover={searchIsHover}
                                />
                            </div>
                        </div>
                    )
                })}
            </>
            )
        }
    }

    const renderClassName = (opt, isHovering, active) => {
        if(opt === "blogCategory"){
            if(active === "on"){
                return "blog-list-standard-page-active-category";
            }else{
                return "h17-black-lustria-cursor-animation";
            }
        }
    }

    const renderCategoriesList = () => {
        return(
            <>
                {props.blogListStandardPage.categoriesList.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            onMouseDown={(e) => onClickCategory(el.key, null, e)}
                        >
                            <H17 className={renderClassName("blogCategory", el.isHover, el.active)}>{el.categoryName}</H17>
                            {i !== categoriesListForBlog.length - 1 ? <EH10/> : null}
                        </div>
                    )
                })}
            </>
        )
    }

    const renderTagsList = () => {
        return(
            <>
                {props.blogListStandardPage.tagsList.map((el, i) => {
                    return(
                        <div
                            key={i}
                            className="blog-list-standard-page-tag"
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

    const renderRecentPosts = () => {
        // return(
        //     <>
        //         {socialMediaIcons.map((el, i) => {
        //             return(
        //                 <div 
        //                     key={i}
        //                     className="blog-list-standard-page-category"
        //                 >
        //                     <H17 className="h17-black-lustria-cursor">{el.tagName}</H17>
        //                 </div>
        //             )
        //         })}
        //     </>
        // )
    }

    const renderSocialMedia = () => {
        return(
            <div className="blog-list-standard-page-icons">
                {socialMediaIcons.map((el, i) => {
                    return(
                        <React.Fragment key={i}>
                            <Icon 
                                key={i}
                                iconType="fontAwesomeWithAnimatedBackground"
                                iconName={el.name} 
                                icon={el.iconKey} 
                                iconSize="1x"
                                instaName={props.instaName}
                                onMouseEnter
                                onMouseLeave
                                onMouseDown
                                classNameOpt="socMedIconForBlog"
                                classNameBackground="background-for-blog-list-standard-page-icon"
                            />
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
    
    const renderHighlightsPageData = (arr) => {
        return(
            <div>
                {arr.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="blog-list-standard-page-data-paragraph"
                        >
                            {renderParagraph(el)}
                            {i !== arr.length - 1 ? 
                            <EH30/> 
                            : null}
                        </div>
                    )
                })}
            </div>
        )
    }
    
    const renderHighlightsPageDataContent = (arr) => {
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
                    {renderHighlightsPageData(arr.items)}
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
            <div className="blog-list-standard-page-wrapper">
                <div className="blog-list-standard-page-header">
                    <H45 className="h45-nero-lustria">Blog List Standard</H45>
                </div>
                <div className="grey-line"/>
                <div className="blog-list-standard-page-content-info-wrapper">
                    <div className="blog-list-standard-page-content">
                        <Switch>
                            <Route 
                                exact 
                                path={props.match.url + "/list-standard-blog-category/:category"}
                                render={(props) => (
                                    <Archive key={props.match.params.category} {...props} />)
                                }
                            />
                            {/* <Redirect exact from={`${props.match.url + "/blog-category/:category"}`} to={`${props.match.url + "/blog-category/:category"}`}/> */}
                        </Switch>
                    </div>
                    <div className="blog-list-standard-page-info">
                        <div className="blog-list-standard-page-info-search">
                            {renderSearchForm()}
                        </div>
                        <EH40/>
                        <div className="blog-list-standard-page-info-person-info-wrapper">
                            <div className="blog-list-standard-page-info-person-image">
                                <img src={Images.PHOTO_19}/>
                            </div>
                            <EH20/>
                            <H17 className="h17-black-lustria">Naomi Hernandez</H17>
                            <EH10/>
                            <H15 className="h15-nobel-lustria">Associate Director, SEO</H15>
                        </div>
                        <EH40/>
                        <div className="blog-list-standard-page-recent-post-wrapper">
                            <H22 className="h22-black-poppins">Recent posts</H22>
                            <EH20/>
                            {renderRecentPosts()}
                        </div>
                        <EH40/>
                        <div className="blog-list-standard-page-categories-wrapper">
                            <H22 className="h22-black-poppins">Categories</H22>
                            <EH20/>
                            {renderCategoriesList()}
                        </div>
                        <EH40/>
                        <div className="blog-list-standard-page-follow-us">
                            <H22 className="h22-black-poppins">Follow us</H22>
                            <EH20/>
                            {renderSocialMedia()}
                        </div>
                        <EH40/>
                        <div className="blog-list-standard-page-tags-wrapper">
                            <H22 className="h22-black-poppins">Tags</H22>
                            <EH20/>
                            {renderTagsList()}
                        </div>
                    </div>
                </div>
            </div>
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
            fetchHighlightsPageData: bindActionCreators(Services.fetchHighlightsPageData, dispatch),
            fetchHighlightsPageDataSuccess: bindActionCreators(Actions.fetchHighlightsPageDataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            initInputFormForBlogListStandardPage: bindActionCreators(Actions.initInputFormForBlogListStandardPage, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            initCategoriesForBlogListStandardPage: bindActionCreators(Actions.initCategoriesForBlogListStandardPage, dispatch),
            initTagsForBlogListStandardPage: bindActionCreators(Actions.initTagsForBlogListStandardPage, dispatch),
        };
    }
)(withRouter(PostSinglesStandardPage));
 