/**
* Libraries
*/

import React, {
    useEffect, useState
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

import './smallImages.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Services
*/

import * as Services from "../../../../service";

/**
* Components
*/

import Toolbar from '../../../Parts/Toolbar/toolbar';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
* Utility
*/

import {
    H70,
    H22,
    H19,
    EH20,
    EH40,
    EH60,

 } from '../../../UtilityComponents';
 

/**
* Images
*/

// import Image1 from '../../../images/headerImages/annie-spratt-QckxruozjRg-unsplash.jpg';

/**
* SmallImages component definition and export
*/

export const SmallImages = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    // const [scrollingHeight, setScrollingHeight] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
        // if(props.location.state){
        //     console.log(props.location.state.obj)
        // }
        // let id = 
        // console.log("ID",props.match.params.id)
        props.fetchSmallImagesPortfolio(props.match.params.id);
        // window.addEventListener('wheel', (e) => checkScrollDirection(e));

        // return () => window.removeEventListener('wheel', (e) => checkScrollDirection(e))
    }, []);



    // const checkScrollDirection = (e) => {
    //     let scrollHeight = document.body.scrollTop;
    //     let el = document.getElementById("home");

    //     if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
    //         setScrollingUp(false);
    //     }else{
    //         setScrollingUp(true);
    //     }
    // }

    // const checkScrollDirectionIsUp = (e)  => {
    //     if (e.wheelDelta) {
    //       return e.wheelDelta > 0;
    //     }
    //     return e.deltaY < 0;
    // }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
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
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                    />
                </>
            )
        }
    }

    const renderPortfolioImages = () => {
        return(
            <div className="section-1-data-items">{props.smallImagesPortfolio.item.imagesArray.map((el,i) => {
                return(
                    <div key={i}>
                      
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        // console.log(props.smallImagesPortfolio.item.tags)
        return(
            <div className="small-images-tags">{props.smallImagesPortfolio.item.tags.map((el,i) => {
                return(
                    <div key={i}>
                        {el.name}
                    </div>
                )
            })}</div>
        )
    }
    
    /**
    * Markup
    */

    return(
        <div className="small-images" id="smallImages">
            {renderToolbars()}
            <div className="small-images-content">
                <H70 className="h70-nero-poppins">{props.smallImagesPortfolio.item.header}</H70>
                <div>
                    {/* {renderPortfolioImages()} */}
                </div>
                <div className="small-images-movable-part">
                    <H19 className="h19-nobel-lustria">{props.smallImagesPortfolio.item.text}</H19>
                    <EH60/>
                    <H22 className="h22-black-poppins">Category:</H22>
                    <H19 className="h19-nobel-lustria">{props.smallImagesPortfolio.item.category}</H19>
                    <EH40/>
                    <H22 className="h22-black-poppins">Date:</H22>
                    <H19 className="h19-nobel-lustria">{props.smallImagesPortfolio.item.date}</H19>
                    <EH40/>
                    <H22 className="h22-black-poppins">Tags:</H22>
                    {/* <H19 className="h19-nobel-lustria">{renderTags()}</H19> */}
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallImagesPortfolio: Selectors.getSmallImagesPortfolioState(state),
        
        };
    },
    (dispatch) => {
        return {
            fetchSmallImagesPortfolio: bindActionCreators(Services.fetchSmallImagesPortfolio, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(SmallImages);
 