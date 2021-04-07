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

import './blogCommentsSection.scss';

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
 * BlogCommentsSection component definition and export
 */

export const BlogCommentsSection = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [pathOfIdsToComment, setPathOfIdsToComment] = useState([])
    
    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    const renderComments = (arr, id, _pathOfIds = []) => {
        let iteration = 0;
        let pathOfIds = [...pathOfIdsToComment];
       
        if(id && _pathOfIds.length === 0){
            // pathOfIdsToComment = Array.isArray(pathOfIdsToComment) ? [...pathOfIdsToComment] : new Array();
            pathOfIds.push(id)
        }else if(id && _pathOfIds.length !== 0){
            pathOfIds=[..._pathOfIds];
            pathOfIds.push(id)
        }

        return(
            <>
                {arr.map((el, i) => {
                    iteration ++;                  
                    return(
                        <React.Fragment key={el.id}>
                            <BlogComment
                                data={el}
                                triggerCommentReplyButtonVal={props.triggerCommentReplyButtonVal}
                                triggerCommentReplyButton={props.triggerCommentReplyButton}
                                initInputForm={props.initInputForm}
                                inputFormFieldsArray={props.inputFormFieldsArray}
                                setInputFiledValueAndCheckValidation={props.setInputFiledValueAndCheckValidation}
                                replyComment={props.replyComment}
                                pathOfIdsToComment={pathOfIds}
                            />
                            {el.repliesArray.length !== 0 ? 
                            <div className="blog-comments-section-reply" style={{paddingLeft: `${iteration * 75}px`}}>
                                {renderComments(el.repliesArray, el.id, pathOfIds)}
                            </div> : null}
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
        <div className="blog-comments-section">
            {renderBlogPostSingleItemComments(props.data)}
        </div>
    );
}

export default BlogCommentsSection;
 