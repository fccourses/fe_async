'use strict';

function sum(a, b) {
  return a + b;
}

function withLog(func, ...args) {
  const result = func(...args);
  console.log(result);
  return result;
}

function withLog2(func) {
  return function (...args) {
    const res = func(...args);
    console.log(res);
    return res;
  };
}

const sumWithLog = withLog2(sum);
