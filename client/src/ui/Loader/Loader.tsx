import clsx from 'clsx';

import styles from './Loader.module.scss';

interface ILoaderProps {
  progress: number;
  className?: string;
}

export const Loader = ({ progress, className = '' }: ILoaderProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.background}>
        <div
          style={{ width: `${progress || 0}%` }}
          className={styles.progress}
          data-testid="loader-progress"
        ></div>
      </div>

      <span className={clsx(styles.label, 'text text_small')}>
        {`${progress || 0}%`}
      </span>
    </div>
  );
};
