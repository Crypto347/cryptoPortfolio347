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
        console.log(obj.array)
        return(
            <>{obj.array.map((el, i) => {
                let pathOfIds = [obj.id, el.id]
                return(
                    <div key={i} className="toolbar-option-item">
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
                            onMouseEnter={() => props.onMouseEnterOptionItem(pathOfIds)} 
                            onMouseLeave={() => props.onMouseLeaveOptionItem(pathOfIds)}
                        >
                            {/* <div className={renderClassName("text", el.isHover)}> */}
                                <H15 className="h15-black-lustria">{el.text}</H15>
                            {/* </div> */}
                        </div>
                    </div>
                )
            })}</>
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
                {props.text}
        
            </div>
            {props.showOptionsRegular && props.hoverToolbarItem ? 
            <div 
                className="toolbar-item-options"
                onMouseLeave={props.onMouseLeave}
            >
                <EH40/>
                {renderOptions()}
                <EH40/>
            </div> : null}
        </div>
    );
}
 export default ToolbarItem;
 