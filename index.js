'use strict';

console.log('1');

const id = setTimeout(() => {
  while (true) {}
}, 1000);

clearTimeout(id);

console.log('2');

/* 
Функция, которая последовательно выводит в консоль числа 
от 1 до 20 с интервалом в 100мс.
  Решить можно двумя способами. 
    setTimeout - рекурсия с if'ом
    setInterval - if, clearInterval
  Померять время. 
    console.time('1');
    console.timeEnd('1');
*/
console.time('1');
count();

function count() {
  let i = 1;

  const id = setInterval(() => {
    console.log(i++);
    for (let i = 0; i < 1000000000; i++) {}
    if (i > 20) {
      clearInterval(id);
      console.timeEnd('1');
    }
  }, 100);
}
