import {
  ChangeEvent,
  DragEvent,
  MutableRefObject,
  ReactElement,
  ReactNode,
  cloneElement,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';

import styles from './Dropzone.module.scss';

interface IDropzoneProps {
  title: string;
  icon?: ReactNode;
  uploadFileHandler: (file: FileList) => void;
  maxFileSize?: number;
  acceptedTypes?: string[];
  children: ReactElement;
}

export const Dropzone = ({
  title,
  icon,
  uploadFileHandler,
  maxFileSize = 1024,
  acceptedTypes = [],
  children,
}: IDropzoneProps) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');

  const isAcceptExt = (fileName: string) => {
    return acceptedTypes.includes(fileName.split('.').pop() as string);
  };

  const bytesToMegaBytes = (bytes: number) => bytes / (1024 * 1024);

  const handleDrag = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleNewFileUpload(event.dataTransfer.files);
    }
  };

  const handleUpload = () => {
    inputRef.current.click();
  };

  const handleNewFileUpload = (file: FileList) => {
    if (!isAcceptExt(file[0].name)) {
      setError('Ошибка загрузки. Данный формат файла не поддерживается');
      throw new Error('Ошибка валидации');
    }

    if (bytesToMegaBytes(file[0].size) > maxFileSize) {
      setError(
        `Ошибка загрузки. Размер файла не должен превышать ${maxFileSize} МБ`,
      );
      throw new Error('Ошибка валидации');
    }

    if (file.length) {
      uploadFileHandler(file);
    }
  };

  return (
    <div
      className={clsx(styles.container, {
        [styles.active]: dragActive,
      })}
    >
      <div
        onDragEnter={handleDrag}
        className={clsx(styles.dropzone, {
          [styles.error]: !!error,
        })}
        data-testid="dropzone-container"
      >
        <input
          type="file"
          className={styles.input}
          ref={inputRef}
          accept={'.' + acceptedTypes.join(', .')}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleNewFileUpload(event.target.files as FileList)
          }
          data-testid="dropzone-input"
        />

        {icon ? <div className={styles.icon}>{icon}</div> : ''}

        <p className={clsx('subtitle', styles.subtitle)}>{title}</p>
        <p className={clsx('text text_small', styles.text)}>
          или нажмите на кнопку
        </p>

        {cloneElement(children, {
          onClick: handleUpload,
          className: clsx(styles.button),
        })}

        {dragActive && (
          <div
            className={styles.area}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            data-testid="dropzone-zone"
          ></div>
        )}

        {!!error ? (
          <p
            className={clsx(styles.message, 'text text_small')}
            data-testid="dropzone-error"
          >
            {error}
          </p>
        ) : (
          ''
        )}
      </div>
      <div className={styles.background}></div>
    </div>
  );
};
