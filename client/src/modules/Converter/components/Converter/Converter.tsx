import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { DEFAULT_PATH } from '@router/routes';

import { useTypedSelector } from '@hooks/useTypedSelector';
import { useConvertVideoMutation } from '../../store/converterApi';

import { ConverterProcessing } from '../ConverterProcessing/ConverterProcessing';
import { ConverterSettings } from '../ConverterSettings/ConverterSettings';
import { ConverterVideo } from '../ConverterVideo/ConverterVideo';
import { Section } from '@ui/Section/Section';
import { Title } from '@ui/Title/Title';

import styles from './Converter.module.scss';

export const Converter = () => {
  const [convertVideo, { data, status }] = useConvertVideoMutation();
  const uri = useTypedSelector((state) => state.video.uri);
  const [isProcessing, setIsProcessing] = useState(false);

  const startVideoProcessing = (settings: FormData) => {
    setIsProcessing(true);
    convertVideo(settings);
  };

  if (!uri) {
    return <Navigate to={DEFAULT_PATH} replace />;
  }

  return isProcessing ? (
    <ConverterProcessing
      type={status}
      file={data}
      onCancel={() => setIsProcessing(false)}
    />
  ) : (
    <Section>
      <div className={styles.container}>
        <Title
          link={DEFAULT_PATH}
          title="Конвертирование видео"
          className={styles.title}
        />

        <div className={styles.content}>
          <ConverterSettings startVideoProcessing={startVideoProcessing} />

          <ConverterVideo />
        </div>
      </div>
    </Section>
  );
};
