export const getFileExtension = (file: string) =>
  file.split('.').pop() as string;
