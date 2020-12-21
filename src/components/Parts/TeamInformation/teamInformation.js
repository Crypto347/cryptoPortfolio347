/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
 * Styles
 */

import './teamInformation.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import TeamInformationCard from '../../SmallParts/TeamInformationCard/teamInformationCard';

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

/**
 * TeamInformation component definition and export
 */

export const TeamInformation = (props) => {

    /**
     * State
     */

    const size = useWindowSize();

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component
        
        props.fetchTeamInformation();
    }, []);

    
    const renderTeamInformation = () => {
        if(props.teamInformation.loading && !props.teamInformation.error){
            return(
                <div className="team-information-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.teamInformation.loading && !props.teamInformation.error){
            return(
                <div className="team-information-items">{props.teamInformation.items.map((el, i) => {
                    return(
                        <TeamInformationCard
                            photo={el.photo}
                            key={i}
                            imgKey={el.key}
                            name={el.name}
                            position={el.position}
                            instaName={el.instaName}
                            alt={el.alt}
                        />
                    )})}
                </div>
            )
        }
        if(!props.teamInformation.loading && props.teamInformation.error){
            return(
                <div className="team-information-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.teamInformation.error}`}</H19>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="team-information">
            {renderTeamInformation()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            teamInformation: Selectors.getTeamInformationState(state)
        };
    },
    (dispatch) => {
        return {
            fetchTeamInformation: bindActionCreators(Services.fetchTeamInformation, dispatch)
        };
    }
)(TeamInformation);
 