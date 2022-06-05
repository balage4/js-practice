/* eslint-disable */

const dataArray = [
  { subarr: [1, 2, 3] },
  { subarr: [4, 5, 6] },
  { subarr: [7, 8, 9] }
];

function processAsync(number) {
  return new Promise(resolve => {
    setTimeout(
      () => { resolve(number * number); },
      Math.random() * 1e3
    );
  });
}

Promise.all(dataArray.map(entity => {
  return Promise.all(entity.subarr.map(item => {
    return processAsync(item);
  }));
})).then(data => {
  console.log(data);
});
