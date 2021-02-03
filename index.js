'use strict';

const p = fetch('./data.json');

const jsonPromise = p.then((response) => {
  return response.json();
});

jsonPromise.then((data) => {
  console.table(data);
});
