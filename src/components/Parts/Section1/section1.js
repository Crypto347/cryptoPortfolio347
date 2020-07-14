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

import Loading from '../../SmallParts/Loading/loading';
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
* Utility
*/

import {
    EH1,
    H19
} from '../../UtilityComponents';

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
            <div className="section-1-data-items">{props.section1Data.items.map((el,i) => {
                return(
                    <div key={i}>
                        <EH1/>
                        <Section1DateItem 
                            // key={i}
                            header={el.header}
                            text={el.text}
                            path={el.path}
                        />
                        <EH1/>
                    </div>
                )
            })}</div>
        )
    }

    const renderSection1 = () => {
        if(props.section1Data.loading && !props.section1Data.error){
            return(
                <div className="section1-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.section1Data.loading && !props.section1Data.error){
            return(
                <>
                    {renderSection1DataItems()}
                </>
            )
        }
        if(!props.section1Data.loading && props.section1Data.error){
            return(
                <div className="section1-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.section1Data.error} data`}</H19>
                </div>
            )
        }
    } 


    /**
    * Markup
    */

    return(
        <div className="section-1">
            {renderSection1()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            section1Data: Selectors.getSection1DateState(state)
        };
    },
    (dispatch) => {
        return {
            fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Section1);
 