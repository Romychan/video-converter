import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';

import { VideoPlayer } from '@components/VideoPlayer/VideoPlayer';

export const ConverterVideo = () => {
  const uri = useTypedSelector((state) => state.video.uri);
  const { setDuration, setEndVideo } = useActions();

  const handleLoadedVideo = (value: string) => {
    setDuration(value);
    setEndVideo(value);
  };

  return <VideoPlayer uri={uri} handleLoadedVideo={handleLoadedVideo} />;
};
