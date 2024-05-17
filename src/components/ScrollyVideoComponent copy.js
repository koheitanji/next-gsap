import React, { useEffect, useRef } from 'react';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.js';

const ScrollyVideoComponent = ({ containerId, videoSrc }) => {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    if (videoContainerRef.current) {
      new ScrollyVideo({
        scrollyVideoContainer: containerId,
        src: videoSrc
      });
    }
  }, [containerId, videoSrc]);

  return (
    <div id={containerId} ref={videoContainerRef}>
      <video src={videoSrc} preload="auto" controls={false}></video>
    </div>
  );
};

export default ScrollyVideoComponent;