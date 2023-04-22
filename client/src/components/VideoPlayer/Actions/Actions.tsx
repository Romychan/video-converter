import clsx from 'clsx';

import { toHHMMSS } from '@utils/toHHMMSS';

import styles from './Actions.module.scss';

interface IActionsProps {
  togglePlay: () => void;
  isPlaying: boolean;
  progress: number;
  duration: number;
}

export const Actions = ({
  togglePlay,
  isPlaying,
  progress,
  duration,
}: IActionsProps) => {
  return (
    <div className={styles.actions}>
      <button
        className={styles.square}
        onClick={togglePlay}
        data-testid="actions-button"
      >
        <div
          className={clsx(styles.playback, {
            [styles.paused]: isPlaying,
          })}
          data-testid="actions-playing"
        ></div>
      </button>

      <p className="text text_small">
        {toHHMMSS((progress / 100) * duration)} / {toHHMMSS(duration)}
      </p>
    </div>
  );
};
