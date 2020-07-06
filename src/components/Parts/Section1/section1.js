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

import './section1.scss';

/**
* Components
*/

import Section1DateItem from '../../SmallParts/Section1DateItem/section1DataItem';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Services
*/

import * as Services from "../../../service";

/**
* Images
*/



/**
* Constants
*/


/**
* Section1 component definition and export
*/

export const Section1 = (props) => {

    /**
    * State
    */

    const [menuIsShown, setMenuIsShown] = useState(false);
    const [menuDots, setMenuDots] = useState([1,2,3,4,5,6,7,8,9]);
    const [isHovering, setIsHovering] = useState(null);

    /**
    * Methods
    */

    useEffect(() => {
        props.fetchSection1Data();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // const handleMouseEnter = () => {
    //     setIsHovering(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovering(false);
    // }

    const renderSection1DataItems = () => {
        return(
            <div className="section-1-data-items">{props.section1DataItems.map((el,i) => {
                return(
                    <Section1DateItem 
                        key={i}
                        header={el.header}
                        text={el.text}
                    />
                )
            })}</div>
        )
    }


    /**
    * Markup
    */

    return(
        <div className="section-1">
            {renderSection1DataItems()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            section1DataItems: Selectors.getSection1DateItemsState(state)
        };
    },
    (dispatch) => {
        return {
            fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Section1);
 