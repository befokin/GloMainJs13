'use strict';

let mission = 2000000;
console.log(typeof mission);
console.log("Цель заработать " + mission + " рублей");

let money = +prompt('Ваш месячный доход?');
console.log(typeof money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
console.log(typeof addExpenses);
console.log(addExpenses.toLowerCase().split(", "));

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);

let expenses1 = prompt('Введите обязательную статью расходов');
console.log(typeof expenses1);

let expenses2 = prompt('Введите обязательную статью расходов');

let amount1 = +prompt('Во сколько это обойдется?');
console.log(typeof amount1);

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



