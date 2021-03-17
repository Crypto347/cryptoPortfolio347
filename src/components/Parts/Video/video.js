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

import './video.scss';

/**
 * Utility
 */

import {
    H17
} from '../../UtilityComponents';

/**
 * Video
 */

import * as Videos from'../../../constants/videos';

/**
 * Video component definition and export
 */

export const Video = (props) => {

    /**
     * State
     */

    const [videoIsPlaying, setVideoIsPlaying] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        let video = document.getElementById(`${props.videoKey}Video`);
        
        // Play video

        if(props.playVideo){
            video.play();
        }

        // Event Listeners

        video.addEventListener('ended', videoOnFinish);
        video.addEventListener('play', videoOnPlay);

        return () =>  {
            // Cleaning the unmounted component

            video.removeEventListener('ended', videoOnFinish);
            video.removeEventListener('play', videoOnPlay);
        }
    }, []);

    /**
     * Markup
     */

    const videoOnPlay = () => {
        setVideoIsPlaying(true);
    }

    const loadVideo = (videoKey) => {
        switch(videoKey){
            case 'teamWorkMp4':
                return Videos.TEAM_WORK;
            case 'blogListVideo1':
                return Videos.BLOG_LIST_VIDEO_1;
            default:
                return "";
        }
    }

    const videoOnFinish = () => {
        
        setVideoIsPlaying(false);
        
        if(props.videoOnFinish){
            /**
             * When the video is over, hide the video itself and show
             * the video cover (for videoWithCover component)
             */

            props.videoOnFinish(false);
        }
    }

    return(
        <div className="video">
            <video 
                id={`${props.videoKey}Video`} 
                controls
                style={props.videoHeight ? {height: props.videoHeight} : null}
            >
                <source src={loadVideo(props.videoKey)} type="video/mp4"/>
            </video>
            {videoIsPlaying ? 
            <div className="video-copyrights">
                <H17 className="h17-nobel-lora">Video by cottonbro from Pexels</H17>
            </div> : null}
        </div>
    )
}

export default Video;
 