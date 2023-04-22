import clsx from 'clsx';

import styles from './UploadTitle.module.scss';

export const UploadTitle = () => {
  return (
    <div className={styles.header}>
      <h1 className={clsx(styles.title, 'subtitle')}>Конвертер видео</h1>
      <p className={clsx(styles.text, 'text')}>
        Video Converter - это онлайн-конвертер видео, который позволяет
        конвертировать видеофайлы в таких форматах, как MP4, AVI, GIF, MOV и
        другие.
      </p>
    </div>
  );
};
