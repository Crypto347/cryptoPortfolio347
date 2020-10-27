/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
 * Styles
 */

import './headerImages.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import Button from '../../../library/Button/button';

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

import {
    H19
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * HeaderImages component definition and export
 */

export const HeaderImages = (props) => {

    const size = useWindowSize();

    /**
     * State
     */

    const [imgShow, setImgShow] = useState(true);

    const [img, setImg] = useState(
        {
            id: 1,
            imgName: "Image1",
            headerText: "Crypto",
            text1: "Hello.",
            text2: "What can we",
            text3: "help you with?",
            alt: "Crypto"
        }
    );
    const [switchButtons, setSwitchButtons] = useState([
        {
            id: 1, 
            active: true,
            isHovering: null,
            closeSmoothly: false
        },
        {
            id: 2, 
            active: false,
            isHovering: null,
            closeSmoothly: false
        },
        {
            id: 3, 
            active: false,
            isHovering: null,
            closeSmoothly: false
        }
    ]);

    /**
     * Methods
     */

    useEffect(() => {
        props.fetchHeaderImagesArray();
    }, []);

    useInterval(() => {
        let currentId = switchButtons.find(item => item.active === true).id;
        switchButtonOnClick(currentId === 3 ? 1 : currentId + 1);
    }, true ? 10000 : null);

    const handleMouseEnter = (id) => {
        let updatedSwitchButtons = [...switchButtons];
        let switchButton = {...updatedSwitchButtons.find(x => x.id === id), isHovering: true};
        let switchButtonIndex = updatedSwitchButtons.findIndex(x => x.id === id);

        updatedSwitchButtons.splice(switchButtonIndex, 1, switchButton);
        setSwitchButtons(updatedSwitchButtons);
    }

    const handleMouseLeave = (id) => {
        let updatedSwitchButtons = [...switchButtons];
        let switchButton = {...updatedSwitchButtons.find(x => x.id === id), isHovering: false};
        let switchButtonIndex = updatedSwitchButtons.findIndex(x => x.id === id);

        updatedSwitchButtons.splice(switchButtonIndex, 1, switchButton);
        setSwitchButtons(updatedSwitchButtons);
    }
 
    const loadImage = (opt) => {
        switch(opt){
            case 'Image1':
                return Images.HEADER_IMAGE_1;
            case 'Image2':
                return Images.HEADER_IMAGE_2;
            case 'Image3':
                return Images.HEADER_IMAGE_3;
            default:
                return "";
        }
    }

    const switchButtonOnClick = (id) => {
        let updatedSwitchButtons = [...switchButtons];
        updatedSwitchButtons = updatedSwitchButtons.map(el => {
            return {
                ...el,
                active: false,
                isHovering: null,
                closeSmoothly: el.active ? true : false
            }
        });
       
        let switchButton = {...updatedSwitchButtons.find(x => x.id === id), active: true};
        let switchButtonIndex = updatedSwitchButtons.findIndex(x => x.id === id);

        updatedSwitchButtons.splice(switchButtonIndex, 1, switchButton);
        setSwitchButtons(updatedSwitchButtons);

        let headerImageObj = props.headerImages.items.find(item => item.id === id);
        setImg(headerImageObj);
        setImgShow(!imgShow);
    }
    
    const renderSwitchButtons = () => {
        return(
            <div className="switch-buttons">{switchButtons.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="switch-button-wrapper"
                        onMouseEnter={() => handleMouseEnter(el.id)} 
                        onMouseLeave={() => handleMouseLeave(el.id)}
                        onClick={() => switchButtonOnClick(el.id)}
                    >
                        <div className={el.active ? "switch-button-number" : "switch-button-number-hidden"}>{el.id}</div>
                        <CSSTransition
                            in={el.isHovering && !el.active} 
                            timeout={7000}
                            // mountOnEnter
                            // unmountOnExit
                            classNames={{
                                enter: ``,
                                enterActive: `${el.active ? null : "switch-button-deactivated-elongated"}`,
                                exit: ``,
                                exitActive: `${el.active ? null : "switch-button-deactivated-shortened"}`,
                            }}
                        > 
                            <div className={el.active ? "switch-button-activated" : `switch-button-deactivated ${el.closeSmoothly ? "switch-button-deactivated-shortened" : null}`}/>
                        </CSSTransition>
                    </div>
                )
            })}</div>
        )
    }

    const renderSubtractedPxForTextBack = () => {
        let windowWidth = size.width;

        if(windowWidth > 1120){
            return 507;
        }
        if(windowWidth < 1120 && windowWidth > 860){
            return 430;
        }
        if(windowWidth < 860 && windowWidth > 730){
            return 370;
        }
        if(windowWidth < 730 && windowWidth > 600){
            return 310;
        }
        if(windowWidth < 600){
            return 245;
        }
    }

    const renderSubtractedPxForTextFront = () => {
        let windowWidth = size.width;

        if(windowWidth > 1120){
            return 394;
        }
        if(windowWidth < 1120 && windowWidth > 860){
            return 334;
        }
        if(windowWidth < 860 && windowWidth > 730){
            return 284;
        }
        if(windowWidth < 730 && windowWidth > 600){
            return 234;
        }
        if(windowWidth < 600){
            return 183;
        }
    }

    const renderImages = () => {
        if(props.headerImages.loading && !props.headerImages.error){
            return(
                <div 
                    className="header-images-loading"
                    style={{left: `${size.width/2 - renderSubtractedPxForTextFront()}px`}}
                >
                    <Loading color="white"/>
                </div>
            )
        }
        if(!props.headerImages.loading && !props.headerImages.error){
            return(
                <>
                    <div 
                        className={`${imgShow ? "header-text-back" : "hide"}`}
                        style={{left: `${size.width/2 - renderSubtractedPxForTextBack()}px`}}
                    >
                        {img.headerText}
                    </div>
                    <div 
                        className={`${!imgShow ? "header-text-back" : "hide"}`}
                        style={{left: `${size.width/2 - renderSubtractedPxForTextBack()}px`}}
                    >
                        {img.headerText}
                    </div>
                    <div 
                        className="header-text-front-crop" 
                        style={{left: `${size.width/2 - renderSubtractedPxForTextFront()}px`}}
                    >
                        <div className={`${imgShow ? "header-text-front" : "hide"}`}>
                            {img.headerText}
                        </div>
                        <div className={`${!imgShow ? "header-text-front" : "hide"}`}>
                            {img.headerText}
                        </div>
                        <div className={`${imgShow ? "header-text" : "hide"}`}>
                            <div className="header-text-wrapper">
                                <div className="header-text-bold">{img.text1}</div>
                                <div className="header-text-regular-1">{img.text2}</div>
                            </div>
                            <div className="header-text-regular-2">{img.text3}</div>
                        </div>
                        <div className={`${!imgShow ? "header-text" : "hide"}`}>
                            <div className="header-text-wrapper">
                                <div className="header-text-bold">{img.text1}</div>
                                <div className="header-text-regular-1">{img.text2}</div>
                            </div>
                            <div className="header-text-regular-2">{img.text3}</div>
                        </div>
                        <Button
                            className={`${imgShow ? "header-get-direction" : "hide"}`}
                            text="get direction."
                        />
                        <Button
                            className={`${!imgShow ? "header-get-direction" : "hide"}`}
                            text="get direction."
                        />
                    </div>
                    
                    <div className={`${imgShow ? "header-image" : "hide"}`}>
                        <img src={loadImage(img.imgName)} alt={img.alt}/>
                    </div>
                    <div className={`${!imgShow ? "header-image" : "hide"}`}>
                        <img src={loadImage(img.imgName)} alt={img.alt}/>
                    </div>
                </>
            )
        }
        if(!props.headerImages.loading && props.headerImages.error){
            return(
                <div 
                    className="header-images-error"
                    style={{left: `${size.width/2 - renderSubtractedPxForTextFront()}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.headerImages.error}`}</H19>
                </div>
            )
        }
    }

    /**
     * Markup
     */

    return(
        <div className="header-images">
            {renderSwitchButtons()}
            {renderImages()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            headerImages: Selectors.getHeaderImagesState(state)
        };
    },
    (dispatch) => {
        return {
            fetchHeaderImagesArray: bindActionCreators(Services.fetchHeaderImagesArray, dispatch)
        };
    }
)(HeaderImages);
 