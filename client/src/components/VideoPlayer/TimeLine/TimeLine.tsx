import { ChangeEvent } from 'react';

import styles from './TimeLine.module.scss';

interface ITimeLineProps {
  progress: number;
  handleVideoProgress: (event: ChangeEvent<HTMLInputElement>) => void;
  colorPrimary?: string;
  colorSecondary?: string;
}

export const TimeLine = ({
  progress,
  handleVideoProgress,
  colorPrimary = 'var(--color-primary)',
  colorSecondary = 'var(--color-secondary)',
}: ITimeLineProps) => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={progress}
      onChange={(event) => handleVideoProgress(event)}
      className={styles.timeline}
      style={{
        background: `linear-gradient(90deg, ${colorPrimary} ${progress}%, ${colorSecondary} ${progress}%)`,
      }}
      aria-label="Timeline"
    />
  );
};
