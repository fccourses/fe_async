'use strict';

fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    console.table(data);
  })
  .catch((err) => {
    console.log('COMMON ERROR HANDLER');
  });

const myFirstPromise = new Promise(executor);

function executor(resolve, reject) {
  reject();
}

setTimeout(callback, ms);

delay(ms).then(callback);

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
