export const array = (() => {
  const arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(i);
  }
  return arr;
})();
