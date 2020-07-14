'use strict';

const books = document.querySelectorAll('.book');
console.log(books);

books[0].before(books[1]);
books[0].after(books[4]);
books[2].before(books[3]);
books[5].after(books[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const thirdHead = document.getElementsByTagName('a')[2];
thirdHead.textContent = '';
thirdHead.insertAdjacentText('afterbegin', 'Книга 3. "this и Прототипы Объектов" ');

const advertise = document.querySelectorAll('.adv');
advertise[0].remove();

const li = document.querySelectorAll('li');

li[15].after(li[8]);
li[9].after(li[12]);
li[12].after(li[14]);

li[37].after(li[45]);
li[40].after(li[38]);
li[43].after(li[41]);

const element = document.querySelectorAll('li')[55];
element.insertAdjacentHTML('beforeend', '<p>Глава 8: За пределами ES6</p>');
