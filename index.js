'use strict';

console.log('start');

try {
  //обязателен
  console.log('try1');

  throw new Error();
  console.log('try2');

} catch {
  // необязателен
  console.log('catched err');

  // но хотя бы один должен быть
} finally {
  // необязателен
  console.log('finally');
}

console.log('end');
