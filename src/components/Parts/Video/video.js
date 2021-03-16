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
    H17,
    H19
} from '../../UtilityComponents';


/**
 * Video
 */

import * as Images from '../../../constants/images';

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

    const [isHoveringPlayButton, setIsHoveringPlayButton] = useState("init");
    const [videoShown, setVideoShown] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        let video;

        // Play video

        if(videoShown){
            video = document.getElementById(`${props.videoKey}Video`);
            video.play();

            // Event Listeners

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

    const loadImg = (imgKey) => {
        switch(imgKey){
            case 'teamWorkImg':
                return Images.VIDEO_COVER_IMG_1;
            case 'blogCardVideoPostCoverImg1':
                return Images.VIDEO_COVER_IMG_2;
            default:
                return "";
        }
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
        // When the video is over, hide the video itself and show the video cover

        setVideoShown(false);
    }

    const renderVideo = (opt) => {
        switch(opt){
            case 'simple':
                return(
                    <div className="video-simple">
                        <video id={`${props.videoKey}Video`} controls>
                            <source src={loadVideo(props.videoKey)} type="video/mp4"/>
                        </video>
                        <div className="video-copyrights">
                            <H17 className="h17-nobel-lora">Video by cottonbro from Pexels</H17>
                        </div>
                    </div>
                );
            case 'videoWithCover':
                return(
                    <div className="video-with-cover">
                        {!videoShown ? 
                        <div className="video-wrapper">
                            <img src={loadImg(props.coverImageKey)}/>
                            <div className="video-play-button-wrapper">
                                <div 
                                    className={renderClassName(isHoveringPlayButton)}
                                    onMouseDown={(e) => showVideo(e)}
                                    onMouseEnter={() => handleMouseEnter('expand')} 
                                    onMouseLeave={() => handleMouseLeave('expand')}
                                >
                                </div>
                            </div>
                        </div> : null}
                        {videoShown ?
                        <div className="video-copyrights-wrapper">
                            <H19 className="h19-nobel-lora">Video by cottonbro from Pexels</H19> 
                            <video id={`${props.videoKey}Video`} controls>
                                <source src={loadVideo(props.videoKey)} type="video/mp4"/>
                            </video> 
                        </div> : null}
                    </div>
                )
        }
    }

    return(
        renderVideo(props.videoType)
    );
}

export default Video;
 