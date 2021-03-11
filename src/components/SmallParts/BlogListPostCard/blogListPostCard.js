/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

/**
 * Styles
 */

import './blogListPostCard.scss';

/**
 * Utility
 */

import {
    H19,
    H22,
    H70,
    
} from '../../UtilityComponents';

import * as Utility from '../../../utility';

/**
 * Hooks
 */

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
 * BlogListPostCard component definition and export
 */

export const BlogListPostCard = (props) => {

    /**
     * Methods
     */
   
    useEffect(() => {
     
    }, []);

    const renderClassName = (opt, color) => {
        if(opt === "countdownValue"){
            switch(color){
                case 'white':
                    return "h70-white-poppins";
                case 'black':
                default:
                    return "h70-black-poppins";
            }
        }
        if(opt === "countdownName"){
            switch(color){
                case 'white':
                    return "h25-white-lustria-countdown-page";
                case 'nobel':
                default:
                    return "h25-nobel-lustria-countdown-page";
            }
        }
     
    }

    const setValue = (val) => {
        // Add 0 at the beginning of the value if the value is less than 10

        if(val < 10) return val.toString().padStart(2, '0');
        else return val;
    }

    const renderBlogCard = (type) => {
        switch(type){
            case 'standardPost':
                return (
                    <div></div>
                )
            case 'galleryPost':
                return (
                    <div></div>
                )
            case 'linkPost':
                return (
                    <div></div>
                )
            case 'quotePost':
                return (
                    <div></div>
                )
            case 'audioPost':
                return (
                    <div></div>
                )
            case 'videoPost':
                return (
                    <div></div>
                )
        }
        return(
            <div className="countdown-item-wrapper">{props.data.countdownValue.map((el, i) => {
                return(
                    <div
                        key={i}
                        className="countdown-item"
                    >
                        <H70 className={renderClassName("countdownValue", props.numberColor)}>{setValue(el.val)}</H70>
                        <H22 className={renderClassName("countdownName", props.textColor)}>{el.name}</H22>
                   </div>
                )
            })}</div>
        )
    }

    /**
     * Markup
     */

    return(
        <div className="blog-list-post-card">
            {renderBlogCard(props.cardType)}
        </div>
    );
}

export default BlogListPostCard;
 