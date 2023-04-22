export const blobToFile = (
  uri: string,
  extension: string,
  fileName = 'video',
) => {
  return fetch(uri)
    .then((file) => file.blob())
    .then((blob) => {
      const newFileName = `${fileName}.${extension}`;
      const newFile = new File([blob], newFileName);

      return newFile;
    });
};
