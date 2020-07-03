'use strict';

let isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
      start = function() {
      
            do {
                  money = prompt('Ваш месячный доход?', '1000');
            }
            while (isNaN(money) || money === '' || money === null);
      };

      start();

let appData = {
      budget: money,
      income: {},
      expenses: {},
      addExpenses: [],
      deposite: false,
      percentDeposit: 0,
      moneyDeposit: 0,
      mission: 50000,
      period: 3,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      asking: function() {

            if (confirm('Есть ли у вас дополнительный источник заработка?')) {
                  let itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Таксую');
                  let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                  appData.income[itemIncome] = cashIncome;
            }

            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'ВОда, ЧаЙ, КонФеты');
                  addExpenses = addExpenses.split(', ');
                        let newAddExpenses = '';

                              for (let key in addExpenses) {
                                    addExpenses[key] = addExpenses[key].trim();
                                    newAddExpenses += addExpenses[key].substring(0, 1).toUpperCase() + addExpenses[key].substring(1).toLowerCase() +  ', ';
                              }

                              console.log(newAddExpenses.substring(0, newAddExpenses.length - 2));
              
                                    appData.deposit = confirm('Есть ли у вас депозит в банке?');

                              
                                          let answer1;
                                          let answer2;
                                    

                                                for (let i = 0; i < 2; i++) {

                                                      do {
                                                            answer1 = prompt('Введите обязательную статью расходов', 'еда');
                                                      }
                                                      while (!isNaN(answer1) || answer1.trim() === '' || answer1 === null);

                                                      do{
                                                            answer2 = prompt('Во сколько это обойдется?', '100');
                                                      }
                                                      while (!isNumber(answer2));
                                                      answer2 = +answer2;

                                                      appData.expenses[answer2] = +answer2;
                                                      console.log(appData.expenses);
                                                }     
      },

      getExpensesMonth: function() {
            for (let key in appData.expenses) {
                  appData.expensesMonth += +appData.expenses[key];
            }
            return ;
      },

      getBudget: function() {
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
      },

      getTargetMonth: function() {
            if (Math.ceil(appData.mission / appData.budgetMonth) <= 0) {
                  return 'Цель не будет достигнута!';
            } else {
                 return Math.ceil(appData.mission / appData.budgetMonth) + ' месяцев';
            }
      },

      getStatusIncome: function() {

            if (appData.budgetDay >= 1200) {
                  return ('У вас высокий уровень дохода!');
            } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
                  return('У вас средний уровень дохода');
            } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
                  return('К сожалению у вас уровень дохода ниже среднего');
            } else {
                  return('Что-то пошло не так');
            }
      },

      getInfoDeposit: function() {
            if(appData.deposit) {
                  appData.percentDeposit = prompt('Какой годовой процент?', '10');
                  appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
      },

      calcSavedMoney: function() {
           return appData.budgetMonth * appData.period;
      }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();

console.log('Расходы за месяц: ' + appData.expensesMonth);

console.log('Цель будет достигнута за период ' + appData.getTargetMonth());

console.log(appData.getStatusIncome());
 
for (let key in appData) {
      console.log('Наша программа включает в себя данные:    свойства :  '+ key + ' значения ' + appData[key]);
}


// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

let addExpenses = new Array(1,2,3,4,5);
for (let key in addExpenses) {