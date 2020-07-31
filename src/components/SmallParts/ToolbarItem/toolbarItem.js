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
                let pathOfIds = [obj.id, el.id]
                return(
                    <div key={i} className="toolbar-option-item">
                        {el.active || el.isHover ? 
                        <div className="arrow-wrapper">
                            <div className="arrow-horizontal-line"></div>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div> : null}
                        <div 
                            className="toolbar-option-item-wrapper"
                            onMouseEnter={() => props.onMouseEnterOptionItem(pathOfIds)} 
                            onMouseLeave={() => props.onMouseLeaveOptionItem(pathOfIds)}
                        >
                            <H15 className="h15-black-lustria">{el.text}</H15>
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
                {renderOptions()}
            </div> : null}
        </div>
    );
}
 export default ToolbarItem;
 