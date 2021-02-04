'use strict';
console.log('start');
setTimeout(() => {
  console.log('timer');
}, 0);

const p1 = new Promise((resolve, reject) => {
  console.log('создание промиса');

  resolve();
  reject();

  console.log('завершение создания промиса');
});

p1.then(() => {
  console.log('promise cb body');
})
  .catch(() => {
    console.log('catch body');
  })
  .finally(() => {
    console.log('fin');
  });

console.log('end');
