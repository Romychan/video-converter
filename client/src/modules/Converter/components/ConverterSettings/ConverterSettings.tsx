import { blobToFile } from '../../utils/blobToFile';

import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';

import { TimeInputs } from '@components/TimeInputs/TimeInputs';
import { Button } from '@ui/Button/Button';
import { Label } from '@ui/Label/Label';
import { DropdownList } from './DropdownList/DropdownList';

import styles from './ConverterSettings.module.scss';

interface IConverterSettingsProps {
  startVideoProcessing: (data: FormData) => void;
}

export const ConverterSettings = ({
  startVideoProcessing,
}: IConverterSettingsProps) => {
  const settings = useTypedSelector((state) => state.converter);
  const { uri, extension, duration } = useTypedSelector((state) => state.video);
  const { setStartVideo, setEndVideo } = useActions();

  const handleConvertVideo = async () => {
    const convertibleVideo = await blobToFile(uri, extension);
    const formData = new FormData();

    formData.append('format', settings.format);
    formData.append('quality', settings.quality);
    formData.append('fps', settings.fps);
    formData.append('audio', settings.audio);
    formData.append('start', settings.duration.start);
    formData.append('end', settings.duration.end);
    formData.append('file', convertibleVideo);

    startVideoProcessing(formData);
  };

  return (
    <div className={styles.settings}>
      <div className={styles.container}>
        <Label label="Обрезать видео">
          <TimeInputs
            startVideoValue={settings.duration.start}
            endVideoValue={settings.duration.end}
            duration={duration}
            setStartVideo={setStartVideo}
            setEndVideo={setEndVideo}
          />
        </Label>

        <DropdownList />
      </div>

      <Button
        state="primary"
        className={styles.button}
        onClick={handleConvertVideo}
      >
        Конвертировать
      </Button>
    </div>
  );
};
