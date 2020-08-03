/**
* Libraries
*/

import React, {
    useState
} from 'react';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './toolbarItem.scss';

/**
* Utility
*/

import {
    EH40,
    EH20,
    H15,
    EW2
 } from '../../UtilityComponents';

/**
* ToolbarItem component definition and export
*/

export const ToolbarItem = (props) => {
    
    /**
    * State
    */

    const [isHovering, setIsHovering] = useState(false);
    
    /**
    * Methods
    */

    const toolbarOptionItemOnClick = (path, id) => {
        console.log(path, id)
        // props.history.push(props.match.url + (path === "" ? path : `/${path}`));
        // props.activateMenuItem(id);
    }

    const renderClassName = (opt, isHovering, active) => {
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-hide";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
        if(opt === "text"){
            if(active){
                return "toolbar-option-item-text-active";
            }
            switch(isHovering){
                case 'init':
                    return "toolbar-option-item-text";
                case 'on':
                    return "toolbar-option-item-text-hover-on";
                case 'off':
                    return "toolbar-option-item-text-hover-off";
            }
        }
    }

    const renderOptions = () => {
        return(
            <div className="toolbar-item-options-wrapper">{props.data.options.map((el, i) => {
                return(
                        <div 
                            key={i} 
                            className="toolbar-option"
                        >
                            {renderOptionItems(el)}
                        </div>
                )
            })}</div>
        )
    }

    const renderOptionItems = (obj) => {
        return(
            <>{obj.array.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                if(!props.data.hasSubOptions){
                    return(
                        <div 
                            key={i} 
                            className="toolbar-option-item"
                            onClick={() => toolbarOptionItemOnClick(el.path, el.id)}
                        >
                            {el.active ? 
                            <div className="arrow-wrapper-active">
                                <div className="arrow-horizontal-line"></div>
                                <div className="arrow-wrapper2">
                                    <div className="arrow-top-line"></div>
                                    <div className="arrow-bottom-line"></div>
                                </div>
                            </div> : null}
                            {!el.active ? 
                            <div className={renderClassName("arrow", el.isHover)}>
                                <div className="arrow-horizontal-line"></div>
                                <div className="arrow-wrapper2">
                                    <div className="arrow-top-line"></div>
                                    <div className="arrow-bottom-line"></div>
                                </div>
                            </div> : null}
                            <div 
                                className={renderClassName("text", el.isHover, el.active)}
                                onMouseEnter={() => props.onMouseEnterAndLeaveOptionItem("on", pathOfIds)} 
                                onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
                            >
                                {/* <div className={renderClassName("text", el.isHover)}> */}
                                    <H15 className="h15-black-lustria">{el.text}</H15>
                                {/* </div> */}
                            </div>
                        </div>
                    )
                }else{
                    if(el.subOptions.length === 0){
                        return(
                            <div 
                                key={i} 
                                className="toolbar-option-item"
                                onClick={() => toolbarOptionItemOnClick(el.path, el.id)}
                            >
                                <div 
                                    className={renderClassName("text", el.isHover, el.active)}
                                    onMouseEnter={() => props.onMouseEnterAndLeaveOptionItem("on", pathOfIds)} 
                                    onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
                                >
                                    {/* <div className={renderClassName("text", el.isHover)}> */}
                                        <H15 className="h15-black-lustria">{el.text}</H15>
                                    {/* </div> */}
                                </div>
                                {el.active ? 
                                <div className="arrow-wrapper-active">
                                    <div className="arrow-wrapper2">
                                        <div className="arrow-top-line"></div>
                                        <div className="arrow-bottom-line"></div>
                                    </div>
                                    <div className="arrow-horizontal-line"></div>
                                </div> : null}
                                {!el.active ? 
                                <div className={renderClassName("arrow", el.isHover)}>
                                    <div className="arrow-wrapper2">
                                        <div className="arrow-top-line"></div>
                                        <div className="arrow-bottom-line"></div>
                                    </div>
                                    <div className="arrow-horizontal-line"></div>
                                </div> : null}
                            </div>
                        )
                    }else{
                        return(
                            <div 
                                key={i} 
                                className="toolbar-option-item-with-sub-option"
                                onMouseEnter={() => props.onMouseEnterAndLeaveOptionItem("on", pathOfIds)}
                                onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
                            >
                                <div className="sub-option-arrow-wrapper">
                                    <div className="sub-option-arrow-top-line"/>
                                    <div className="sub-option-arrow-bottom-line"/>
                                </div>
                                <div className="toolbar-option-item-text-and-arrow-wrapper">
                                    <div 
                                        className={renderClassName("text", el.isHover, el.active)}
                                     
                                    >
                                        {/* <div className={renderClassName("text", el.isHover)}> */}
                                            <H15 className="h15-black-lustria">{el.text}</H15>
                                        {/* </div> */}
                                    </div>
                                    {el.active ? 
                                    <div className="arrow-wrapper-active">
                                        <div className="arrow-wrapper2">
                                            <div className="arrow-top-line"></div>
                                            <div className="arrow-bottom-line"></div>
                                        </div>
                                        <div className="arrow-horizontal-line"></div>
                                    </div> : null}
                                    {!el.active ? 
                                    <div className={renderClassName("arrow", el.isHover)}>
                                        <div className="arrow-wrapper2">
                                            <div className="arrow-top-line"></div>
                                            <div className="arrow-bottom-line"></div>
                                        </div>
                                        <div className="arrow-horizontal-line"></div>
                                    </div> : null}
                                </div>
                                {el.isHover === "on" ? renderSubOptions(el.subOptions, pathOfIds): null}
                            </div>
                        )
                    }
                   
                }
            })}</>
        )
    }

    const renderSubOptions = (subOptions, pathOfIds) => {
        return(
            <div 
                className="toolbar-item-sub-options"
                onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
            >
                <EH20/>
                {subOptions.map((el, i) => {
                    let updatedPathOfIds = [...pathOfIds];
                    updatedPathOfIds.push(el.id);
                    console.log(updatedPathOfIds)
                return(
                    <div key={i} className="toolbar-sub-option-item">
                        <div 
                            className={renderClassName("text", el.isHover, el.active)}
                            onMouseEnter={() => props.onMouseEnterAndLeaveSubOptionItem("on", updatedPathOfIds)} 
                            onMouseLeave={() => props.onMouseEnterAndLeaveSubOptionItem("off", updatedPathOfIds)}
                        >
                            {/* <div className={renderClassName("text", el.isHover)}> */}
                                <H15 className="h15-black-lustria">{el.text}</H15>
                            {/* </div> */}
                        </div>
                        {el.active ? 
                        <div className="arrow-wrapper-active">
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                            <div className="arrow-horizontal-line"></div>
                        </div> : null}
                        {!el.active ? 
                        <div className={renderClassName("arrow", el.isHover)}>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                            <div className="arrow-horizontal-line"></div>
                        </div> : null}
                    </div>
                )})}
                <EH20/>
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <div 
            className="toolbar-item-wrapper"
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave}
           >
            <div className={`toolbar-item-${props.toolbarMainColor}`}>
                {props.data.text}
        
            </div>
            {props.showOptionsRegular && props.data.isHover ? 
            <div 
                className={props.data.hasSubOptions ? "toolbar-item-options-align-end" : "toolbar-item-options"}
                // className="toolbar-item-options"
                onMouseLeave={props.onMouseLeave}
            >
                <div  className="grey-line"/>
                <EH20/>
                {renderOptions()}
                <EH20/>
            </div> : null}
        </div>
    );
}
 export default ToolbarItem;
 