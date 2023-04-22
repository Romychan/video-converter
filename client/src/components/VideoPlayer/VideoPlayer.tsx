import {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

import { toHHMMSS } from '@utils/toHHMMSS';

import { Actions } from './Actions/Actions';
import { TimeLine } from './TimeLine/TimeLine';

import styles from './VideoPlayer.module.scss';

interface IVideoPlayerProps {
  uri: string;
  handleLoadedVideo: (value: string) => void;
}

export const VideoPlayer = ({ uri, handleLoadedVideo }: IVideoPlayerProps) => {
  const videoElement = useRef() as MutableRefObject<HTMLVideoElement>;
  const [duration, setDuration] = useState(0);
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const handleOnTimeUpdate = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;

    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event: ChangeEvent<HTMLInputElement>) => {
    const manualChange = parseInt(event.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;

    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleLoadedMetadata = () => {
    const video = videoElement.current;

    if (!video) return;

    setDuration(video.duration);
    handleLoadedVideo(toHHMMSS(video.duration));
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        src={uri}
        ref={videoElement}
        onTimeUpdate={handleOnTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        data-testid="video-player"
      />

      <div className={styles.controls}>
        <TimeLine
          progress={playerState.progress}
          handleVideoProgress={handleVideoProgress}
        />

        <Actions
          isPlaying={playerState.isPlaying}
          progress={playerState.progress}
          duration={duration}
          togglePlay={togglePlay}
        />
      </div>
    </div>
  );
};
