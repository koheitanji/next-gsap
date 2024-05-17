import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.js';

const ScrollyVideoComponent = ({ containerId, videoSrc }) => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    let player;
    let scrollyVideo;

    if (videoRef.current) {
      player = videojs(videoRef.current, {
        controls: false,
        autoplay: false,
        preload: 'auto'
      });

      scrollyVideo = new ScrollyVideo({
        scrollyVideoContainer: containerId,
        video: player.el_
      });
    }

    return () => {
      if (scrollyVideo) {
        scrollyVideo.destroy();
      }
      if (player) {
        player.dispose();
      }
    };
  }, [containerId, videoSrc]);

  return (
    <div id={containerId} ref={videoContainerRef}>
      <video ref={videoRef} className="video-js" preload="auto" data-setup='{}'>
        <source src={videoSrc} type="application/x-mpegURL" />
        <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that<a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
      </video>
    </div>
  );
};

export default ScrollyVideoComponent;