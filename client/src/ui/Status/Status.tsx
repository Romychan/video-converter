import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Status.module.scss';

interface IStatusProps {
  title: string;
  text?: string;
}

export const Status = ({
  title,
  text,
  children,
}: PropsWithChildren<IStatusProps>) => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>{children}</div>

      <h1 className={clsx(styles.title, 'subtitle')}>{title}</h1>
      {text ? (
        <p data-testid="status-text" className={clsx(styles.text, 'text')}>
          {text}
        </p>
      ) : (
        ''
      )}
    </div>
  );
};
