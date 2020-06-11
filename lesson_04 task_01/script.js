'use strict';

let money = 150000;
let income = 'Фриланс';
let addExpenses = 'Инткрнет, такст, коммуналка';
let deposit = true;
let mission = 2000000;
let period = 12;

const showTypeOf = function(data) {
      console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

money = +prompt('Ваш месячный доход?');

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
console.log(addExpenses.split(', '));

deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов');

let expenses2 = prompt('Введите обязательную статью расходов');

let amount1 = +prompt('Во сколько это обойдется?');

let amount2 = +prompt('Во сколько это обойдется?');

const getExpensesMonth = function(a, b) {
      return a + b;
}

console.log('Расходы за месяц: ' + getExpensesMonth(amount1, amount2));

const getAccumulatedMonth = function(a, b, c) {
      return a - b - c;
}

let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день: ' + Math.floor(budgetDay));

const getTargetMonth = function() {
      return Math.ceil(mission / accumulatedMonth);
}

console.log('Срок достижения цели: ' + getTargetMonth());

const getStatusIncome = function() {

      if (budgetDay > 1200) {
            return ('У вас высокий уровень дохода!');
      } else if (budgetDay >= 600 && budgetDay <= 1200) {
            return('У вас средний уровень дохода');
      } else if ( budgetDay < 600 && budgetDay >= 0) {
            return('К сожалению у вас уровень дохода ниже среднего');
      } else {
            return('Что-то пошло не так');
      }
}

console.log(getStatusIncome());