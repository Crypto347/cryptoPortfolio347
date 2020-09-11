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

import './standardPage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import SimpleOverlayImage from '../../../SmallParts/SimpleOverlayImage/simpleOverlayImage';
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
* StandardPage component definition and export
*/

export const StandardPage = (props) => {

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
        if(props.standardPage.items.length === 0){
            props.fetchStandardPage();
        }
        let timeout = setTimeout(() => {
            if(!props.standardPage.loading && !props.standardPage.error && props.historyPopFromItem !== "scrollToTop"){
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
        let el = document.getElementById("standardPage");
    
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
                        page="bigImages"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="bigImages"
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
                        page="bigImages"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="bigImages"
                    />
                </>
            )
        }
    }
    
    const renderStandardPageData = () => {
        return(
            <div className="standard-page-items">{props.standardPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        className="standard-page-item"
                    >
                        <SimpleOverlayImage
                            page="standardPage"
                            imageKey={el.coverImage.key}
                            alt={el.coverImage.alt}
                            header={el.header}
                            isHover={el.coverImage.isHover}
                            path={el.path}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            id={el.id}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderStandardPageContent = () => {
        if(props.standardPage.loading && !props.standardPage.error){
            return(
                <div 
                    className="standard-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.standardPage.loading && !props.standardPage.error){
            return(
                <div className="standard-page-wrapper">
                    <div className="standard-page-header">
                        <H45 className="h45-nero-lustria">Standard</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderStandardPageData()}
                </div>
            )
        }
        if(!props.standardPage.loading && props.standardPage.error){
            return(
                <div 
                    className="standard-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.standardPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="standard-page" id="standardPage">
            {renderToolbars()}
            {renderStandardPageContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            standardPage: Selectors.getStandardPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchStandardPage: bindActionCreators(Services.fetchStandardPage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            // setSwitchImagePageIsHoveringArrow: bindActionCreators(Actions.setSwitchImagePageIsHoveringArrow, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(StandardPage);
 