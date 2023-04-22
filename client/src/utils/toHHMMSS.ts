export const toHHMMSS = (secondsTime: number) => {
  const seconds = Math.floor(secondsTime) % 60;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(secondsTime / 60) % 60;

  return [hours, minutes, seconds]
    .map((time) => (time < 10 ? '0' + time : time))
    .join(':');
};
