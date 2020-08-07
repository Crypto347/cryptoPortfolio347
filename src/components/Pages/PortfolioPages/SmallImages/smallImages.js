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


import Loading from '../../../SmallParts/Loading/loading';
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
    EH30,
    EH40,
    EH60,

 } from '../../../UtilityComponents';
 

/**
* Images
*/

//Id1

import Id1SmallImages1 from '../../../../images/smallImages/id1/adam-wilson-1QZYZib7eYs-unsplash.jpg';
import Id1SmallImages2 from '../../../../images/smallImages/id1/jason-blackeye-DKCgibUVLNc-unsplash.jpg';
import Id1SmallImages3 from '../../../../images/smallImages/id1/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg';
import Id1SmallImages4 from '../../../../images/smallImages/id1/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.jpg';
import Id1SmallImages5 from '../../../../images/smallImages/id1/shelbey-miller-HIQd4db8Kr8-unsplash.jpg';

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
    const [showContent, setShowContent] = useState(false);

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
        if(props.smallImagesPortfolio.item !== {}){
            setShowContent(true)
        }
    }, []);

    const loadImg = (key) => {
        switch(key) {
            case 'id1SmallImages1':
                return Id1SmallImages1;
            case 'id1SmallImages2':
                return Id1SmallImages2;
            case 'id1SmallImages3':
                return Id1SmallImages3;
            case 'id1SmallImages4':
                return Id1SmallImages4;
            case 'id1SmallImages5':
                return Id1SmallImages5;
       
            default:
                return "";
        }
    }

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
            <div className="small-images-portfolio-images">{props.smallImagesPortfolio.item.imagesArray.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="small-images-portfolio-image"
                    >
                        <img src={loadImg(el.imageName)}/>
                        <EH30/>
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

    const renderSmallImagesContent = () => {
        if(props.smallImagesPortfolio.loading && !props.smallImagesPortfolio.error){
            return(
                <div className="small-images-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.smallImagesPortfolio.loading && !props.smallImagesPortfolio.error){
            return(
                <div className="small-images-content">
                    <H70 className="h70-nero-poppins">{props.smallImagesPortfolio.header}</H70>
                    {/* <div> */}
                        {renderPortfolioImages()}
                    {/* </div> */}
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
            )
        }
        if(!props.smallImagesPortfolio.loading && props.smallImagesPortfolio.error){
            return(
                <div className="small-images-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.smallImagesPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="small-images" id="smallImages">
            {renderToolbars()}
            {showContent ? renderSmallImagesContent() : null}
          
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
 