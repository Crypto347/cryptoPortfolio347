/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

/**
 * Styles
 */

import './blogReplyForm.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import BlogComment from '../../SmallParts/BlogComment/blogComment';

/**
 * Utility
 */

import {
    H15,
    H22
} from '../../UtilityComponents';

/**
 * Hooks
 */

 import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * BlogReplyForm component definition and export
 */

export const BlogReplyForm = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    
    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    const renderComments = (arr) => {
        let iteration = 0;
        return(
            <>
                {arr.map((el, i) => {
                    iteration ++;
                    return(
                        <React.Fragment key={el.id}>
                            <BlogComment
                                data={el}
                            />
                            <div className="blog-comments-section-reply" style={{paddingLeft: `${iteration * 75}px`}}>
                                {el.repliesArray.length !== 0 ? renderComments(el.repliesArray) : null}
                            </div>
                        </React.Fragment>
                    )
                })}
            </>
        )
    }

    const renderBlogPostSingleItemComments = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-comments-section-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <div className="blog-comments-section-wrapper">
                    <H22 className="h22-black-lustria">Comments</H22>
                    {renderComments(data.item.comments)}
                </div>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-comments-section-loading-error" 
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
        <div className="blog-reply-form">
            {/* {renderBlogPostSingleItemComments(props.data)} */}
        </div>
    );
}

export default BlogReplyForm;
 