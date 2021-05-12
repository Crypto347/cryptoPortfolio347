/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
 * Styles
 */

import './blogCategoriesContent.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import BlogListPostCard from '../../SmallParts/BlogListPostCard/blogListPostCard';

/**
 * Services
 */

import * as Actions from "../../../actions";

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
    H19,
    EH80
} from '../../UtilityComponents';

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

/**
 * BlogCategoriesContent component definition and export
 */

export const BlogCategoriesContent = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [showComponent, setShowComponent] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component

        let categoryName;
        switch(props.page){
            case 'blogListStandardPage':
                categoryName = props.blogListStandardPage.activeCategory.categoryName;
                break;
        }
      
        if(!!categoryName){
            props.fetchBlogCategoriesContentData(props.page, categoryName);
        }
        
        // if(props.achievementsData.items.length === 0){
        //     if(process.env.ENVIRONMENT === Environment.PRODUCTION){
        //         // Fetch mock data (not required to run -> npm run server)
                
        //         props.fetchAchievementsDataSuccess(FakeData.achievementsData);
        //     }else{
        //        // Fetch data (required to run -> npm run server)

        //         props.fetchAchievementsData();
        //     }
        // }
       
        // Event Listeners
        
        // window.addEventListener('scroll', handleScroll);

        // Cleaning the unmounted component
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [props.blogListStandardPage.activeCategory.categoryName]);
 
    const renderBlogListStandardPageData = (arr) => {
        return(
            <div>
                {arr.map((el, i) => {                     
                    return(
                        <React.Fragment key={i}>
                            <BlogListPostCard 
                                page={props.page}
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
                                increaseTheNumberOfLikes={props.increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage}
                                decreaseTheNumberOfLikes={props.decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage}
                                setCommentsButtonClickedState={props.setCommentsButtonClickedStateForBlogListStandardPage}
                            />
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }

    const renderBlogListStandardPageDataContent = () => {
        let data;
        switch(props.page){
            case 'blogListStandardPage':
                data = props.blogListStandardPage;
                break;
        }
        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-categories-content-loading-error" 
                    style={{height: `100%`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <div className="blog-categories-content-data-wrapper">
                    {renderBlogListStandardPageData(data.items)}
                    {/* <Pagination
                        page="blogListStandardPage"
                        activePageNumber={props.blogListStandardPage.activePageId}
                        pagesArray={props.blogListStandardPage.pagesArray}
                        fetchPageData={props.fetchBlogListStandardPageData}
                        fakeData={FakeData.blogListStandardPage}
                        fetchFakeData={(fakeData, activePageId) => fetchFakeData(fakeData, activePageId)}
                        activatePageNumber={props.activatePageNumberForBlogListStandardPage}
                    /> */}
                </div>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-categories-content-loading-error" 
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
        <div className="blog-categories-content">
            {renderBlogListStandardPageDataContent()}
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
            fetchBlogCategoriesContentData: bindActionCreators(Services.fetchBlogCategoriesContentData, dispatch),
            blogListCardCategoryIsHoverForBlogListStandardPage: bindActionCreators(Actions.blogListCardCategoryIsHoverForBlogListStandardPage, dispatch),
            setSwiperStateForBlogListStandardPage: bindActionCreators(Actions.setSwiperStateForBlogListStandardPage, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            activateListStandardBlogItem: bindActionCreators(Actions.activateListStandardBlogItem, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearBlogListSingleItemStateForBlogListStandardPage: bindActionCreators(Actions.clearBlogListSingleItemStateForBlogListStandardPage, dispatch),
            increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
            decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
            setCommentsButtonClickedStateForBlogListStandardPage: bindActionCreators(Actions.setCommentsButtonClickedStateForBlogListStandardPage, dispatch),
            // fetchAchievementsDataSuccess: bindActionCreators(Actions.fetchAchievementsDataSuccess, dispatch),
        };
    }
)(BlogCategoriesContent);
 