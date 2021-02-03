'use strict';

const shchrodingerPromise = new Promise((resolve, reject) => {
  const catDestiny = Math.random();
  if (catDestiny >= 0.5) {
    resolve('Cat is alive');
  } else {
    reject('Cat is dead');
  }
});

shchrodingerPromise.then(checkCat).catch(checkCat);

function checkCat(str) {
  console.log('STATUS: ', str);
}
