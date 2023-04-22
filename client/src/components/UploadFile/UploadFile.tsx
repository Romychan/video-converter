import { Button } from '@ui/Button/Button';
import { Dropzone } from '@ui/Dropzone/Dropzone';
import { Icon } from '@ui/Icon/Icon';

interface IUploadFileProps {
  uploadFile: (file: FileList) => void;
  types: string[];
}

export const UploadFile = ({ uploadFile, types }: IUploadFileProps) => {
  return (
    <Dropzone
      title="Перетащите видеофайл в эту область"
      icon={<Icon name="upload-video" />}
      uploadFileHandler={uploadFile}
      acceptedTypes={types}
    >
      <Button state="primary">Выбрать файл</Button>
    </Dropzone>
  );
};
