/**
* Libraries
*/

import React, {
    useEffect, useState
} from 'react';

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

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Components
*/

import Toolbar from '../../../Parts/Toolbar/toolbar';
// import HeaderImages from '../../SmallParts/HeaderImages/headerImages';
// import Section1 from '../../Parts/Section1/section1';
// import Section2 from '../../Parts/Section2/section2';
// import Section3 from '../../Parts/Section3/section3';
// import Section4 from '../../Parts/Section4/section4';
// import Section5 from '../../Parts/Section5/section5';
// import PhotoViewer from '../../Parts/PhotoViewer/photoViewer';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

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
        console.log("ID",props.match.params.id)
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

    /**
    * Markup
    */

    return(
        <div className="small-images" id="smallImages">
            {/* <div className="home-main-background"> */}
                {/* <div className="home-curtain"/> */}
                {renderToolbars()}
                {/* <HeaderImages/> */}
            {/* </div> */}
            {/* <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/> */}
            {/* {props.photoViewerForPictureBoardTextItemOpen ? <PhotoViewer/> : null} */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // photoViewerForPictureBoardTextItemOpen: Selectors.getPhotoViewerForPictureBoardTextItemOpenState(state),
        
        };
    },
    (dispatch) => {
        return {
            // photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(SmallImages);
 