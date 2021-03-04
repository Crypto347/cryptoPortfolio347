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

/**
 * Styles
 */

import './blogListStandardPage.scss';

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
 * BlogListStandardPage component definition and export
 */

export const BlogListStandardPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Init imput forms

        props.initInputFormForBlogListStandardPage(blogListStandardInputForm);

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

    const inputChangeHandler = (e, inputFieldId, opt, inputForm) => {
        // Uppercase first letter of the input form name

        let updatedInputForm = inputForm.charAt(0).toUpperCase() + inputForm.slice(1);

        // Set input value and check validation

        // props.setInputFiledValueAndCheckValidation(props.contactFormPage[opt][inputForm], e, inputFieldId, `${opt}${updatedInputForm}`);
    }

    const renderCategoriesList = () => {
        return(
            <>
                {categoriesListForBlog.map((el, i) => {
                    return(
                        <div key={i}>
                            <H17 className="h17-black-lustria-cursor-animation">{el.categoryName}</H17>
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
                {tagsListForBlog.map((el, i) => {
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
                    <div className="blog-list-standard-page-content"></div>
                    <div className="blog-list-standard-page-info">
                        <div className="blog-list-standard-page-info-search">
                            {/* <Input
                                className="blog-list-standard-search"
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
                            /> */}
                        </div>
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
        };
    }
)(BlogListStandardPage);
 