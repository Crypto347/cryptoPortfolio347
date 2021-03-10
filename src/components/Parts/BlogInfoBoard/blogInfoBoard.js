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

import './blogInfoBoard.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import Toolbar from '../../Parts/Toolbar/toolbar';
import Input from '../../../library/Input/input';
import TagItem from '../../SmallParts/TagItem/tagItem';
import Icon from '../../SmallParts/Icon/icon';
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
  
        //   props.unmountComponent(key, "list-standard-blog-category", "blogCategory", e.button);
          
        props.activateBlogCategory("active", key)
        props.history.push(`/crypto-portfolio/list-standard-blog-category/${key}`);

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
                <H15 className="h15-nobel-lustria">Associate Director, SEO</H15>
            </div>
            <EH40/>
            <div className="blog-info-board-recent-post-wrapper">
                <H22 className="h22-black-poppins">Recent posts</H22>
                <EH20/>
                {renderRecentPosts()}
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
 