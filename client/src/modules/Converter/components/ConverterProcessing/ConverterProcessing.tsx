import { useNavigate } from 'react-router-dom';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';

import { DEFAULT_PATH } from '@router/routes';
import { downloadVideo } from '../../utils/downloadVideo';

import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { useSubscribeToProgressQuery } from '../../store/converterApi';

import { Button } from '@ui/Button/Button';
import { Icon } from '@ui/Icon/Icon';
import { Loader } from '@ui/Loader/Loader';
import { Status } from '@ui/Status/Status';

import styles from './ConverterProcessing.module.scss';

interface IConverterProcessingProps {
  type: QueryStatus;
  file: string;
  onCancel: (value: boolean) => void;
}

export const ConverterProcessing = ({
  type,
  file,
  onCancel,
}: IConverterProcessingProps) => {
  const navigate = useNavigate();
  const format = useTypedSelector((state) => state.converter.format);
  const { resetSettingsStore, resetVideoStore } = useActions();
  const { data: percent } = useSubscribeToProgressQuery();

  const handleResetState = () => {
    onCancel(true);

    resetSettingsStore();
    resetVideoStore();

    navigate(DEFAULT_PATH);
  };

  if (type === 'rejected') {
    return (
      <div className={styles.container}>
        <Status
          title="Произошла ошибка"
          text="Во время обработки вашего файла произошла ошибка"
        >
          <Icon name="error" className={styles.icon} />
        </Status>

        <Button
          state="primary"
          onClick={() => onCancel(false)}
          className={styles.button}
        >
          Вернуться к настройкам
        </Button>
      </div>
    );
  }

  if (type === 'fulfilled') {
    downloadVideo(file, `filename.${format}`);

    return (
      <div className={styles.container}>
        <Status
          title="Видео успешно обработано"
          text="Видео будет автоматически скачано на ваш компьютер"
        >
          <Icon name="success" className={styles.icon} />
        </Status>

        <Button
          state="primary"
          onClick={handleResetState}
          className={styles.button}
        >
          Загрузить новое видео
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Status
        title="Идет обработка видео"
        text="Этот процесс может занять некоторое время"
      >
        <Loader progress={Math.floor(percent || 0)} />
      </Status>
    </div>
  );
};
