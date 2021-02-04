'use strict';

const numberPromise1 = new Promise((res, rej) => {
  res(42);
});

Promise.reject(42).catch((num) => {
  console.log('handler err');
});

function handlePromise(promise) {
  return promise
    .then((data) => {
      console.log('Data is: ', data);
    })
    .catch((arg) => {
      console.dir(arg);
    });
}
