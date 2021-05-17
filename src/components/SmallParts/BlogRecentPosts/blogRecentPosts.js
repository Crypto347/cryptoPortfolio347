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

import './blogRecentPosts.scss';

/**
 * Components
 */

import BlogRecentPostItem from '../../SmallParts/BlogRecentPostItem/blogRecentPostItem';

/**
 * Utility
 */

import {
    H15,
    H17,
    EH10
} from '../../UtilityComponents';

/**
 * BlogRecentPosts component definition and export
 */

export const BlogRecentPosts = (props) => {

    /**
     * State
     */

    const [recentPostDateIsHover, setRecentPostDateIsHover] = useState("init");
    
    /**
     * Methods
     */
   
    useEffect(() => {
        // Activate the recent post on browser refresh
        
        let activePostPath = props.location.pathname.slice(18);
        
        props.activateRecentPost(null, activePostPath, true);
    }, []);


    const renderRecentPosts = (arr) => {
        return(
            <>
                {arr.map((el, i) => {
                    return(
                        <React.Fragment key={i}>
                            <BlogRecentPostItem
                                elData={el}
                                clearState={props.clearState}
                                clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                                activateBlogCategory={props.activateBlogCategory}
                                activateBlogItem={props.activateBlogItem}
                                activateRecentPost={props.activateRecentPost}
                            />
                            {i !== arr.length - 1 ? <EH10/> : null}
                        </React.Fragment>
                    )
                })}
            </>
        )
    }

    /**
     * Markup
     */

    return(
        <>
            {renderRecentPosts(props.recentPostsArray)}
        </>
    );
}

export default withRouter(BlogRecentPosts);
 