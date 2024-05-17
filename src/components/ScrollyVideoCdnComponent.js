import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.js';

const ScrollyVideoCdnComponent = ({ containerId, videoSrc }) => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const scrollyVideoRef = useRef(null);

  useEffect(() => {
    if (!videoSrc) {
      console.error("Must provide a valid video src to ScrollyVideo");
      return;
    }

    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: false,
        autoplay: false,
        preload: 'auto',
      });

      playerRef.current.ready(() => {
        scrollyVideoRef.current = new ScrollyVideo({
          scrollyVideoContainer: containerId,
          video: playerRef.current.el_,
        });
      });
    }

    return () => {
      if (scrollyVideoRef.current) {
        scrollyVideoRef.current.destroy();
      }
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [containerId, videoSrc]);

  return (
    <div id={containerId} ref={videoContainerRef}>
      <video ref={videoRef} className="video-js vjs-default-skin" controls playsInline preload="auto" loop>
        <source src={videoSrc} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

export default ScrollyVideoCdnComponent;