export const myDebounce = (cb, d) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};
