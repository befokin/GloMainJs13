'use strict';

let isNumber = function (n) {
   return   !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
mission = 2000000;

let start = function() {
     
      do {
            money = prompt('Ваш месячный доход?')}
     
      while (!isNumber(money));
};

start();

const showTypeOf = function(data) {
      console.log(data, typeof(data));
};

showTypeOf(mission);




let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
console.log(addExpenses.toLowerCase().split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses = [],
expenses1;

const getExpensesMonth = function() {
      let sum = 0;

      for (let i = 0; i < 2; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов');

            do{
                  expenses1 = prompt('Во сколько это обойдется?');
            }

            while (!isNumber(expenses1))

            sum += +expenses1;
      }
     
      return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

const getAccumulatedMonth = function() {
      return money - expensesAmount;
};


let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function() {
      
      if (Math.ceil(mission / accumulatedMonth) <= 0) {
            return 'Цель не будет достигнута!';
      } else {
            return Math.ceil(mission / accumulatedMonth);
      }
};

console.log('Срок достижения цели: ' + getTargetMonth() + ' месяцев');

let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день: ' + Math.floor(budgetDay));

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
};

console.log(getStatusIncome());


