export const downloadVideo = (link: string, name: string) => {
  const downloadLink = document.createElement('a');
  downloadLink.href = link;
  downloadLink.download = name;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
