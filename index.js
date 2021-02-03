'use strict';

fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    console.table(data);
  })
  .catch((err) => {
    console.log('COMMON ERROR HANDLER');
  });
