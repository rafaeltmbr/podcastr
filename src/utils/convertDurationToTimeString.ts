export const convertDurationToTimeString = (durationSeconds: number): string => {
  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.floor((durationSeconds % 3600) / 60);
  const seconds = durationSeconds % 60;

  return `${hours}:${[minutes, seconds].map((e) => e.toString().padStart(2, "0")).join(":")}`;
};
