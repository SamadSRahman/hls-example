import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const App = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const sources = [
    // 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8',
    // 'https://bgjokrb8n4my-hls-push.5centscdn.com/videoCampaign/video-1718000030557.mp4/playlist.m3u8',
   "https://bgjokrb8n4my-hls-push.5centscdn.com/videoCampaign/video-1718175888394.mp4/playlist.m3u8",
  //  "https://bgjokrb8n4my-hls-push.5centscdn.com/videoCampaign/video-1718168549103.mp4/playlist.m3u8"
  ];
  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      playerRef.current = videojs(videoElement, {
        sources: sources.map(src => ({
          src,
          type: 'application/x-mpegURL',
// type:'mp4'
        })),
      });
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" controls crossOrigin='anonymous' />
    </div>
  );
};

export default App;