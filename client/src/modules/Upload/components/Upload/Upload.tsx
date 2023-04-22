import { useNavigate } from 'react-router-dom';

import { CONVERT_PATH } from '@router/routes';
import { ACCEPTED_VIDEO_TYPES } from '../../constants/acceptedTypes';
import { getFileExtension } from '../../utils/getFileExtension';

import { useActions } from '@hooks/useActions';

import { UploadFile } from '@components/UploadFile/UploadFile';
import { UploadTitle } from '../UploadTitle/UploadTitle';

import styles from './Upload.module.scss';

export const Upload = () => {
  const navigate = useNavigate();
  const { setInputVideo, resetSettingsStore } = useActions();

  const handleUploadFile = (file: FileList) => {
    navigate(CONVERT_PATH);

    resetSettingsStore();

    setInputVideo({
      uri: URL.createObjectURL(file[0]),
      extension: getFileExtension(file[0].name),
    });
  };

  return (
    <div className={styles.container}>
      <UploadTitle />

      <UploadFile uploadFile={handleUploadFile} types={ACCEPTED_VIDEO_TYPES} />
    </div>
  );
};
