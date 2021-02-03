'use strict';

/* 
  Создать объект. У объекта - (строка, число, undefined, null, [])
  и 2 метода.
  Сериализовать его. JSON.stringify
  Десериализовать JSON.parse

*/

const user = {
  firstName: 'Vlad',
  lastName: 'Testovich',
  age: 45,
  getName() {
    return this.firstName;
  },
  isSelected: null,
  isArgee: undefined,
  isMale: true,
  [Symbol('test')]: {},
  phones: ['648237462387', '234234324', '2342342342'],
  friend: {
    firstName: '1',
    lastName: '2',
  },
};

const serializedObject = JSON.stringify(user); // сериализация

console.log(serializedObject);

const recoveredUser = JSON.parse(serializedObject);

console.log(recoveredUser);
