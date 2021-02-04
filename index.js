'use strict';

fetch('./data.json')
  .then((response) => {
    console.log(response);

    const jsonPromise = response.json();

    return jsonPromise;
  })
  .then((jsonData) => {
    console.table(jsonData);

    const stringData = JSON.stringify(jsonData, null, 4);

    document.body.append(stringData);
  })
  .catch((err) => {
    if (err instanceof TypeError) {
      console.log(10);
    }

    if (err instanceof SyntaxError) {
      console.log(1);
    }

    document.body.append('ERROR HAPPENED. TRY AGAIN');
  })
  .finally(() => {
    document.getElementById('load').remove();
  });

class UserError extends Error {
  constructor(str) {
    super(str);
    this.userType = 'user';
    this.name = 'User Error'
    Error.captureStackTrace(this, UserError);
  }
}
