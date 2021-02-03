'use strict';

function loadImage(src) {
  // const img = new Image();
  const img = document.createElement('img');
  img.setAttribute('src', src);

  return new Promise((resolve, reject) => {
    img.addEventListener('load', () => {
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image has not been delivered'));
    });
  });
}

loadImage(
  'https://i.piniom/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'
)
  .then((img) => {
    document.body.append(img);
  })
  .catch((error) => {
    // alert(error);
  });

/*  
    User Card Render переписать на промисы.
  
    http://192.168.1.148:3000/users


    По выделению на карточки сохранять id выбранного пользователя в массив.
    В header'е сайта рендерить имена выбранных пользователей.
    Реализовать функционал удаление имен из этого списка.
    Когда имя удаляется из списка - удалять подсветку(выделение) карточки.

  */
