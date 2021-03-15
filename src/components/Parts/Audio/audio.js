/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

/**
 * Styles
 */

import './audio.scss';

/**
 * Utility
 */

import {
    H19
} from '../../UtilityComponents';


/**
 * Video
 */

import * as Images from '../../../constants/images';

/**
 * Audio
 */

import audio1 from '../../../audio/bensound-ukulele.mp3';

/**
 * Audio component definition and export
 */

export const Audio = () => {

    /**
     * State
     */

    const [isHoveringPlayButton, setIsHoveringPlayButton] = useState("init");
    const [videoShown, setVideoShown] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        let video;

        // Play video

        if(videoShown){
            video = document.getElementById("video");
            video.play();

            // When the video ends, hide the video itself and show the video cover

            video.addEventListener('ended', videoOnFinish);
        }

        return () =>  {
            // Cleaning the unmounted component

            if(videoShown){
                video.removeEventListener('ended', videoOnFinish);
            }
        }
    }, [videoShown]);

    /**
     * Markup
     */

    const renderClassName = (isHovering) => {
        switch(isHovering){
            case 'init':
                return "video-play-button";
            case 'on':
                return "video-play-button-hover-on";
            case 'off':
                return "video-play-button-hover-off"
        }       
    }

    const handleMouseEnter = () => {
        setIsHoveringPlayButton("on")
    }

    const handleMouseLeave = () => {
        setIsHoveringPlayButton("off")
    }

    const showVideo = (e) => {
        switch(e.button){
            case 0: 
                // Play video on left mouse click
                setVideoShown(true);
                return;
            case 1:
                // Open the website (from which the vidoe was downloaded) in a new window on scroll wheel click
                window.open("https://www.pexels.com/", "_blank");
                return;
            case 2:
                // Do nothing on right mouse click
                return;
        }      
    }

    const videoOnFinish = () => {
        setVideoShown(false);
    }

    return(
        <audio className="audio" controls>
            <source src={audio1} type="audio/mp3"/>
            Your browser does not support the audio element.
        </audio>
    );
}
// Music: https://www.bensound.com
export default Audio;
 