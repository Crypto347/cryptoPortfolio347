/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
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

import './slideFromImageLeftPage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import SlideFromImageLeft from '../../../SmallParts/SlideFromImageLeft/slideFromImageLeft';
import SwitchImage from '../../../SmallParts/SwitchImage/switchImage';
import Footer from '../../../Parts/Footer/footer';

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
    H19,
    H45,
    H70,
    EH10,
    EH30,
    EH40,
    EH70,
    EH110
} from '../../../UtilityComponents';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
* SlideFromImageLeftPage component definition and export
*/

export const SlideFromImageLeftPage = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.slideFromImageLeftPage.items.length === 0){
            props.fetchSlideFromImageLeftPage();
        }
        let timeout = setTimeout(() => {
            if(!props.slideFromImageLeftPage.loading && !props.slideFromImageLeftPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                console.log("PPP",itemOffsetTop)
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("slideFromImageLeft");
    
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
                        page="slideFromImageLeftPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="slideFromImageLeftPage"
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
                        page="slideFromImageLeftPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="slideFromImageLeftPage"
                    />
                </>
            )
        }
    }
    
    const renderSlideFromImageLeftPageData = () => {
        return(
            <div className="slide-from-image-left-page-items">{props.slideFromImageLeftPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        className="slide-from-image-left-page-item"
                    >
                        <SlideFromImageLeft
                            obj={el}
                            // id={el.id}
                            page="slideFromImageLeftPage"
                      
                            // imageKey={el.coverImage.key}
                            // alt={el.coverImage.alt}
                            // header={el.header}
                            // isHover={el.coverImage.isHover}
                            // path={el.path}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            setIsHoveringCategory={props.setSlideFromImageLeftPageIsHoveringCategory}
                            clearArchiveData={props.clearArchiveData}
                            // archiveCategory={props.archive.category}
                        />
                        {/* <SimpleOverlayImage
                            imageKey={el.coverImage.key}
                            alt={el.coverImage.alt}
                            header={el.header}
                            isHover={el.coverImage.isHover}
                            path={el.path}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            page="simpleOverlayPage"
                            id={el.id}
                        /> */}
                    </div>
                )
            })}</div>
        )
    }

    const renderSlideFromImageLeftPageContent = () => {
        if(props.slideFromImageLeftPage.loading && !props.slideFromImageLeftPage.error){
            return(
                <div 
                    className="slide-from-image-left-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.slideFromImageLeftPage.loading && !props.slideFromImageLeftPage.error){
            return(
                <div className="slide-from-image-left-page-wrapper">
                    <div className="slide-from-image-left-page-header">
                        <H45 className="h45-nero-lustria">Slide From Image Left</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderSlideFromImageLeftPageData()}
                </div>
            )
        }
        if(!props.slideFromImageLeftPage.loading && props.slideFromImageLeftPage.error){
            return(
                <div 
                    className="slide-from-image-left-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.slideFromImageLeftPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="slide-from-image-left-page" id="slideFromImageLeft">
            {renderToolbars()}
            {renderSlideFromImageLeftPageContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            slideFromImageLeftPage: Selectors.getSlideFromImageLeftPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
        };
    },
    (dispatch) => {
        return {
            fetchSlideFromImageLeftPage: bindActionCreators(Services.fetchSlideFromImageLeftPage, dispatch),
            setSlideFromImageLeftPageIsHoveringCategory: bindActionCreators(Actions.setSlideFromImageLeftPageIsHoveringCategory, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            // setSwitchImagePageIsHoveringArrow: bindActionCreators(Actions.setSwitchImagePageIsHoveringArrow, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(SlideFromImageLeftPage);
 