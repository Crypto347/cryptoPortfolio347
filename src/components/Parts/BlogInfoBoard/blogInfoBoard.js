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
    Redirect,
    Link
} from 'react-router-dom';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './blogInfoBoard.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import Toolbar from '../../Parts/Toolbar/toolbar';
import Input from '../../../library/Input/input';
import TagItem from '../../SmallParts/TagItem/tagItem';
import Icon from '../../SmallParts/Icon/icon';
import BlogRecentPosts from '../../SmallParts/BlogRecentPosts/blogRecentPosts';
import Footer from '../../Parts/Footer/footer';
import BackToTop from '../../SmallParts/BackToTop/backToTop';

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
    H13,
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
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

import {
    categoriesListForBlog
} from '../../../constants/categoriesListForBlog';

import {
    tagsListForBlog
} from '../../../constants/tagsListForBlog';

import {
    socialMediaIcons
} from '../../../constants/socialMediaIcons';

import {
    blogListStandardInputForm
} from '../../../constants/inputForm';

/**
 * BlogInfoBoard component definition and export
 */

export const BlogInfoBoard = (props) => {

    /**
     * State
     */

    const [searchIsHover, setSearchIsHover] = useState("init");
    
    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component

        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
            // Fetch mock data (not required to run -> npm run server)

            // fetchFakeData(FakeData.blogListStandardPage, props.blogListStandardPage.activePageId);
            
        }else{
            // Fetch data (required to run -> npm run server)
            
            props.fetchBlogRecentPostsData(props.page);
        }
    }, []);

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

        if(e.button !== 1){
            /**
             * Show filtered items on left mouse click 
             */

            props.clearActivityOfMenuItems();
            props.activateBlogCategory("active", key);
            props.activateBlogItem("deactive", "");
            props.history.push(`/crypto-portfolio/list-standard-blog-category/${key}`);
        }else{
            // Show filtered items on scroll wheel click

            props.activateBlogCategory("active", key);
            window.open(`/crypto-portfolio/list-standard-blog-category/${key}`, "_blank");
        }
    }

    const renderSearchForm = () => {
        if(props.searchFormInputsArray){
            return(
                <>{props.searchFormInputsArray.map((el, i)=>{
                    return(
                        <div 
                            key={i} 
                            className="blog-info-board-search-wrapper"
                        >
                            <Input
                                className="blog-list-standard-search-input"
                                // onChange={(event) => inputChangeHandler(event, el.id, 'section1','inputForm')}
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
                                className="blog-info-board-search-button"
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
                return "blog-info-board-active-category";
            }else{
                return "h17-black-lustria-cursor-animation";
            }
        }
    }

    const renderCategoriesList = () => {
        return(
            <>
                {props.categoryList.map((el, i) => {
                    return(
                        // <li key={i}>
                        //     <Link to={`/crypto-portfolio/list-standard-blog-category/${el.key}`}>
                        //         <H17 className={renderClassName("blogCategory", el.isHover, el.active)}>{el.categoryName}</H17>
                        //     </Link>
                        // </li>

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
                {props.tagsList.map((el, i) => {
                    return(
                        <div
                            key={i}
                            className="blog-info-board-tag"
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

    const renderRecentPostsDataContent = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-info-board-loading-error" 
                    style={{height: `100%`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <>
                    <BlogRecentPosts
                        recentPostsArray={data.items}
                        clearState={props.clearState}
                        clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                        activateBlogCategory={props.activateBlogCategory}
                        activateBlogItem={props.activateBlogItem}
                        activateRecentPost={props.activateRecentPost}
                    />
                </>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-info-board-loading-error" 
                    style={{height: `100%`}}
                >
                    <H15 className="h19-nobel-lora">{`${data.error}`}</H15>
                </div>
            )
        }
    }

    const renderSocialMedia = () => {
        return(
            <div className="blog-info-board-icons">
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

    /**
     * Markup
     */

    return(
        <div className="blog-info-board">
            <div>
                {renderSearchForm()}
            </div>
            <EH40/>
            <div className="blog-info-board-person-info-wrapper">
                <div className="blog-info-board-person-image">
                    <img src={Images.PHOTO_19}/>
                </div>
                <EH20/>
                <H17 className="h17-black-lustria">Naomi Hernandez</H17>
                <EH10/>
                <H13 className="h13-nobel-lustria">Associate Director, SEO</H13>
            </div>
            <EH40/>
            <div className="blog-info-board-recent-post-wrapper">
                <H22 className="h22-black-poppins">Recent posts</H22>
                <EH20/>
                {renderRecentPostsDataContent(props.recentPostsList)}
            </div>
            <EH40/>
            <div className="blog-info-board-categories-wrapper">
                <H22 className="h22-black-poppins">Categories</H22>
                <EH20/>
                {renderCategoriesList()}
            </div>
            <EH40/>
            <div className="blog-info-board-follow-us-wrapper">
                <H22 className="h22-black-poppins">Follow us</H22>
                <EH20/>
                {renderSocialMedia()}
            </div>
            <EH40/>
            <div className="blog-info-board-tags-wrapper">
                <H22 className="h22-black-poppins">Tags</H22>
                <EH20/>
                {renderTagsList()}
            </div>
        </div>
    );
}

export default withRouter(BlogInfoBoard);
 