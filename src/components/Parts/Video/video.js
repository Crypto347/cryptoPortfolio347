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
    H19
} from '../../UtilityComponents';

/**
* Video
*/

import vid1 from '../../../videos/team_work.mp4';
import vidCover from '../../../videos/john-schnobrich-unsplash.jpg';

/**
* Video component definition and export
*/

export const Video = () => {

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
        if(videoShown){
            video = document.getElementById("video");
            video.play();
            video.addEventListener('ended', videoOnFinish);
        }

        return () =>  {
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
                setVideoShown(true);
                return;
            case 1:
                window.open("https://www.pexels.com/", "_blank");
                return;
            case 2:
                return;
        }      
    }

    const videoOnFinish = () => {
        setVideoShown(false);
    }

    return(
        <div className="video">
            {!videoShown ? 
            <div className="video-wrapper">
                <img src={vidCover}/>
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
                <video id="video" controls>
                    <source src={vid1} type="video/mp4"/>
                </video> 
            </div> : null}
       
        </div>
    );
}

export default Video;
 