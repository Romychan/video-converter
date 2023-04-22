import { ChangeEvent } from 'react';

import { Input } from '@ui/Input/Input';

import styles from './TimeInputs.module.scss';

interface ITimeInputsProps {
  startVideoValue: string;
  endVideoValue: string;
  duration: string;
  setStartVideo: (value: string) => void;
  setEndVideo: (value: string) => void;
}

export const TimeInputs = ({
  startVideoValue,
  endVideoValue,
  duration,
  setStartVideo,
  setEndVideo,
}: ITimeInputsProps) => {
  return (
    <div className={styles.crop}>
      <Input
        value={startVideoValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setStartVideo(event.target.value)
        }
        className={styles.input}
        type="time"
        step={1}
        min="00:00:00"
        max={duration}
      />
      <div className={styles.line}></div>
      <Input
        value={endVideoValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEndVideo(event.target.value)
        }
        className={styles.input}
        type="time"
        step={1}
        min="00:00:00"
        max={duration}
      />
    </div>
  );
};
