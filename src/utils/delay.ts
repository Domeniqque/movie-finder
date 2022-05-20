export const delay = (fn: () => void, time: number) => {
  return setTimeout(() => {
    fn();
  }, time);
};
