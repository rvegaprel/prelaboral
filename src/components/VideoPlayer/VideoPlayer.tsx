import React, { RefObject } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  videoKey: number;
  videoRef: RefObject<HTMLVideoElement>;
  onPlay: () => void;
  onEnded: () => void;
  label: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  videoKey,
  videoRef,
  onPlay,
  onEnded,
  label = 'Podcast',
}) => {
  return (
    <div className="w-full bq-white md:rounded-[30px] p-3" 
      style={{ boxShadow: '4px 20px 40px 0px rgba(0, 0, 0, 0.03)' }}
    >
      <div className="p-2">
        <span className='font-semibold text-[16px] md:text-[24px]'> {label}</span>
      </div>
      <video
        key={videoKey}
        ref={videoRef}
        controls
        className="w-full h-auto rounded-[16px] "
        onPlay={onPlay}
        onEnded={onEnded}
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta videos.
      </video> </div>
  );
};

export default VideoPlayer;
