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

import './archive.scss';

/**
* Components
*/

import Loading from '../../SmallParts/Loading/loading';
import LoadingVersion2 from '../../SmallParts/LoadingVersion2/loadingVersion2';
import Toolbar from '../../Parts/Toolbar/toolbar';


// import Swiper from '../../../../library/Swiper/swiper';
// import PortfolioNavigation from '../../../Parts/PortfolioNavigation/porfolioNavigation';
import Button from '../../../library/Button/button';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Services
*/

import * as Services from "../../../service";

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/
import * as Utility from '../../../utility';

import { 
    H19,
    H22,
    H35,
    H45,
    EH10,
    EH20,
    EH30,
    EH40,
    EH70,
    EH90
} from '../../UtilityComponents';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
* Images
*/
import * as Images from '../../../constants/images';

/**
* Archive component definition and export
*/

export const Archive = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    // const [moveStepMovablePart, setMoveStepMovablePart] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.archive.items.length === 0){
            props.fetchArchive(props.match.params.category, 1);
        }
        // console.log("1",props.archive.category)
        // console.log("2", Utility.categoryPathToKey(props.location.state.category))
        let timeout = setTimeout(() => {
            if(!props.archive.loading && !props.archive.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);
        window.addEventListener('wheel', handleOnWheel);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("archive");
    
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

    const loadImg = (key) => {
        switch(key) {
            case 'graphicDesignCover1':
            case 'designCover1':
                return Images.ARCHIVE_COVER_PIC_1;
            case 'graphicDesignCover2':
                return Images.ARCHIVE_COVER_PIC_2;
            case 'graphicDesignCover3':
                return Images.ARCHIVE_COVER_PIC_3;
            case 'graphicDesignCover4':
                return Images.ARCHIVE_COVER_PIC_4;
            case 'graphicDesignCover5':
                return Images.ARCHIVE_COVER_PIC_5;
            case 'graphicDesignCover6':
            case 'artDirectionCover4':
                return Images.ARCHIVE_COVER_PIC_6;
            case 'graphicDesignCover7':
            case 'designCover2':
                return Images.ARCHIVE_COVER_PIC_7;
            case 'artDirectionCover1':
            case 'designCover3':
                return Images.ARCHIVE_COVER_PIC_8;
            case 'artDirectionCover2':
            case 'designCover6':
                return Images.ARCHIVE_COVER_PIC_9;
            case 'artDirectionCover3':
                return Images.ARCHIVE_COVER_PIC_10;
            case 'designCover4':
                return Images.ARCHIVE_COVER_PIC_11;
            case 'designCover5':
                return Images.ARCHIVE_COVER_PIC_12;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'image': 
                props.setArchiveIsHoveringImage("on", id);
                break;
            case 'archiveCategory': 
                props.setArchiveIsHoveringCategory("on", pathOfIds);
                break;   
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'image': 
                props.setArchiveIsHoveringImage("off", id);
                break;
            case 'archiveCategory': 
                props.setArchiveIsHoveringCategory("off", pathOfIds);
                break;     
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "image"){
            switch(isHovering){
                case 'init':
                    return "archive-image-curtain";
                case 'on':
                    return "archive-image-curtain-hover-on";
                case 'off':
                    return "archive-image-curtain-hover-off"
            }
        }
        if(opt === "archiveCategory"){
            switch(isHovering){
                case 'init':
                    return "h22-nero-lustria-animated";
                case 'on':
                    return "h22-nero-lora-nobel-hover-on";
                case 'off':
                    return "h22-nero-lora-nobel-hover-off"
            }
        }
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

    const onClickHandler = (opt, path, key) => {
        if(opt === 'goToArchive' && props.archive.category !== key){
            props.clearArchiveData();
        }
        props.setUnmountComponentValues(true, path);
        props.unmountComponent(key, path, "archive");
    }
   
    const renderCategories = (obj) => {
        return(
            <div className="archive-item-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="archive-item-category"
                        onClick={() => onClickHandler("goToArchive", el.path, el.key)}
                        onMouseEnter={() => handleMouseEnter(`archiveCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`archiveCategory`, null, pathOfIds)} 
                    >
                        {i !== 0 ? <div className="archive-item-category-slash">/</div> : null}
                        <H22 className={renderClassName("archiveCategory", el.isHover)}>{el.label}</H22>
                    </div>
                )
            })}</div>
        )
    }

    const renderArchiveData = () => {
        return(
            <div className="archive-date-items">{props.archive.items.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="archive-date-item"
                        id={el.key}
                    >
                        <div 
                            className="archive-image"
                            onClick={() => onClickHandler("goToPortfolioItem", el.path)}
                            onMouseEnter={() => handleMouseEnter(`image`, el.id)} 
                            onMouseLeave={() => handleMouseLeave(`image`, el.id)}
                        >
                            <img src={loadImg(el.coverImage.key)}/>
                            <div className={renderClassName(`image`, el.coverImage.isHover)}/>
                        </div>
                        <EH30/>
                        <H35 className="h35-nero-poppins">{el.header}</H35>
                        <EH10/>
                        {renderCategories(el)}
                        <EH70/>
                    </div>
                )
            })}
            {renderLoadMoreButton()}
            </div>
        )
    }

    const renderLoadMoreButton = () => {
        if(props.archive.loadingMoreData && !props.archive.errorMoreData){
            return(
                <div 
                    className="archive-button-load-more-loading-error"
                >
                    <LoadingVersion2 color="rgb(37, 37, 37)"/>
                </div>
            )
        }
        if(!props.archive.loadingMoreData && !props.archive.errorMoreData){
            return(
                <div className="archive-button-load-more">
                    <Button
                        className="archive-load-more"
                        text="load more."
                        onClick={() => props.fetchArchive(props.match.params.category, 2)}
                        disabled={props.archive.disableLoadMoreButton}
                    />
                </div> 
            )
        }
        if(!props.archive.loadingMoreData && props.archive.errorMoreData){
            return(
                <div 
                    className="archive-button-load-more-loading-error" 
                >
                    <H19 className="h19-nobel-lora">{`${props.archive.error}`}</H19>
                </div>
            )
        }
    } 

    const renderArchiveContent = () => {
        if(props.archive.loading && !props.archive.error){
            return(
                <div 
                    className="archive-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.archive.loading && !props.archive.error){
            return(
                <div className="archive-wrapper">
                    <div className="archive-header">
                        <H45 className="h45-nero-lustria">Archive</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderArchiveData()}
                </div>
            )
        }
        if(!props.archive.loading && props.archive.error){
            return(
                <div 
                    className="archive-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.archive.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="archive" id="archive">
            {renderToolbars()}
            {renderArchiveContent()}
            {/* {showContent ? renderArchiveContent() : null} */}
            <Footer/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            archive: Selectors.getArchiveState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
        };
    },
    (dispatch) => {
        return {
            fetchArchive: bindActionCreators(Services.fetchArchive, dispatch),
            setArchiveIsHoveringImage: bindActionCreators(Actions.setArchiveIsHoveringImage, dispatch),
            setArchiveIsHoveringCategory: bindActionCreators(Actions.setArchiveIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(Archive);
 