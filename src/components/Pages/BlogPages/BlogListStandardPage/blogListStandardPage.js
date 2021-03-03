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

        // Fetch data for the component

        if(props.highlightsPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchHighlightsPageDataSuccess(FakeData.highlightsPage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchHighlightsPageData();
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

    const renderCategoriesList = () => {
        return(
            <>
                {categoriesListForBlog.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="blog-list-standard-page-category"
                        >
                            <H17 className="h17-black-lustria-cursor">{el.categoryName}</H17>
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
                            className="blog-list-standard-page-category"
                        >
                            <H17 className="h17-black-lustria-cursor">{el.tagName}</H17>
                        </div>
                    )
                })}
            </>
        )
    }

    const renderParagraph = (obj) => {
        return(
            <>
                {obj.text.map((el, i) => {
                    if(el.highlightedText !== null){
                        return(
                            <React.Fragment key={i}>
                                {el.normalText}&nbsp;&nbsp;
                                {<span
                                    className="highlighted-text"
                                    style={{
                                        background: `${el.highlightsBackground}`,
                                        color: `${el.highlightsColor}`
                                    }}
                                >
                                    {el.highlightedText}
                                </span>}&nbsp;&nbsp;
                            </React.Fragment>
                        )
                    }else{
                        return(el.normalText);
                    }
                })}
            </>
        )

        // Example with items.push 

        // const items = [];
        // obj.text.map((el, i) => {
        //     if(el.highlightedText !== null){
        //         items.push(
        //             <React.Fragment key={i}>
        //                 {el.normalText}&nbsp;&nbsp;
        //                 {<span
        //                     className="highlighted-text"
        //                     style={{
        //                         background: `${el.highlightsBackground}`,
        //                         color: `${el.highlightsColor}`
        //                     }}
        //                 >
        //                     {el.highlightedText}
        //                 </span>}&nbsp;&nbsp;
        //             </React.Fragment>
        //         )
        //     }else{
        //         items.push(el.normalText)
        //     }  
        // })

        // Example with for loop

        // for(const [index, value] of obj.text.entries()){
        //     if(value.highlightedText !== null){
        //         items.push(
        //             <React.Fragment key={index}>
        //                 {value.normalText}&nbsp;&nbsp;
        //                 {<span 
        //                     className="highlighted-text"
        //                     style={{
        //                         background: `${value.highlightsBackground}`,
        //                         color: `${value.highlightsColor}`
        //                     }}
        //                 >
        //                     {value.highlightedText}
        //                 </span>}&nbsp;&nbsp;
        //             </React.Fragment>
        //         )
        //     }else{
        //         items.push(value.normalText)
        //     }  
        // }

        // return(
        //     <>{items}</>
        // )
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
                        <div className="blog-list-standard-page-info-search"></div>
                        <div className="blog-list-standard-page-info-person-info-wrapper">
                            <div className="blog-list-standard-page-info-person-image">
                                <img src={Images.PHOTO_19}/>
                            </div>
                            <EH20/>
                            <H17 className="h17-black-lustria">Naomi Hernandez</H17>
                            <EH10/>
                            <H15 className="h15-nobel-lustria">Associate Director, SEO</H15>
                            <div className="blog-list-standard-page-info-person-position"></div>
                        </div>
                        <EH40/>
                        <div className="blog-list-standard-page-recent-post-wrapper"></div>
                        <EH40/>
                        <div className="blog-list-standard-page-recent-categories-wrapper">
                            <H22 className="h22-black-poppins">Categories</H22>
                            {renderCategoriesList()}
                        </div>
                        <EH40/>
                        <div className="blog-list-standard-page-recent-follow-us"></div>
                        <EH40/>
                        <div className="blog-list-standard-page-recent-tags-wrapper">
                            <H22 className="h22-black-poppins">Tags</H22>
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
            highlightsPage: Selectors.getHighlightsPageState(state),
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
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(BlogListStandardPage);
 