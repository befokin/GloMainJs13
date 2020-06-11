'use strict';

let money = 150000;
let income = 'Фриланс';
let addExpenses = 'Инткрнет, такст, коммуналка';
let deposit = true;
let mission = 2000000;
let period = 12;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);

console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");

console.log(addExpenses.toLowerCase().split(", "));

money = +prompt('Ваш месячный доход?');

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');

deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов');

let expenses2 = prompt('Введите обязательную статью расходов');

let amount1 = +prompt('Во сколько это обойдется?');

let amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1- amount2;
console.log('Бюджет на месяц: ' + budgetMonth);

let periodCome = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за: ' + periodCome + ' месяцев');

let budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ' + Math.floor(budgetDay));

if (budgetDay > 1200) {
      console.log('У вас высокий уровень дохода!');
} else if (budgetDay >= 600 && budgetDay <= 1200) {
      console.log('У вас средний уровень дохода');
} else if ( budgetDay < 600 && budgetDay >= 0) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
      console.log('Что-то пошло не так');
}



