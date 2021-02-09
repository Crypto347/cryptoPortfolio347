/**
 * Libraries
 */

import React, {
    useEffect,
    useRef
} from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';

/**
 * Styles
 */

import './googleMapContainer.scss';

/**
 * GoogleMapContainer component definition and export
 */

export const GoogleMapContainer = (props) => {

    /**
     * State
     */

    const googleMapSection1Column1 = useRef();

    /**
     * Methods
     */

    useEffect(() => {
        // const googleMapScript = document.createElement('script');

        // googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCPjkxzgmKxCOngkKFGByXX-1xASP8LUuA&callback=initMap`;

        // window.document.body.appendChild(googleMapScript);

        // console.log(googleMapScript)
        // googleMapScript.addEventListener('load', () => {
        //     // props.googleMap = createGoogleMap()
        // })
    }, []);

    const setRef = (mapKey) => {
        switch(mapKey){
            case 'googleMapSection1Column1':
                return googleMapSection1Column1;
        }
    }

    const createGoogleMap = () => {
        new window.google.maps.Map(setRef(props.mapRef).current, {
            zoom: 14,
            center: {
                lat: -1.2884,
                lng: 36.8233
            },
            disableDefaultUI: true // more details https://developers.google.com/maps/documentation/javascript/controls#DisablingDefaults
        })
    }

    /**
     * Markup
     */

    return(
        // <div
        //     id={props.mapKey}
        //     ref={setRef(props.mapKey)}
        //     style={{
        //         width: `${props.mapWidth}`,
        //         height: `${props.mapHeight}`
        //     }}
        // />
        <Map
            google={props.google}
            zoom={14}
            style={{
                width: `${props.mapWidth}`,
                height: `${props.mapHeight}`
            }}
            initialCenter={
                {
                    lat: -1.2884,
                    lng: 36.8233
                }
            }
        />
    );
}

// export default GoogleMapContainer;

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyCPjkxzgmKxCOngkKFGByXX-1xASP8LUuA'
})(GoogleMapContainer);
