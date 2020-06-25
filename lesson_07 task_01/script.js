'use strict';

let isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
      start = function() {
      
            do {
                  money = prompt('Ваш месячный доход?');
            }
            while (isNaN(money) || money === '' || money === null);
      };

      start();

let appData = {
      budget: money,
      income: {},
      addIncome: [],
      expenses: {},
      addExpenses: [],
      deposite: false,
      mission: 2000000,
      period: 3,
      asking: function() {
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
                  appData.addExpenses.toLowerCase().split(', ');
                  appData.deposit = confirm('Есть ли у вас депозит в банке?');

                  appData.getExpensesMonth = function() {
                        let answer1;
                        let answer2;

                              for (let i = 0; i < 2; i++) {

                                    do {answer1 = prompt('Введите обязательную статью расходов');
                                    }
                                    while (isNaN(answer1) || answer1 === '' || answer1 === null)

                                    do{
                                          answer2= prompt('Во сколько это обойдется?');
                                    }
                                    while (isNumber(answer2));
                        
                                    appData.expenses[answer1] = +answer2;
                              }     
                  }
      }
};
 
                            
appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0;

appData.getExpensesMonth = function() {
      for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
      }
            return;
}

let expensesMonth= appData.getExpensesMonth();

console.log('Расходы за месяц: ' + expensesMonth);

appData.getBudget = function() {
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
};

appData.getTargetMonth = function() {
      
      if (Math.ceil(appData.mission / appData.getBudget) <= 0) {
            return 'Цель не будет достигнута!';
      } else {
            return Math.ceil(appData.mission / appData.getBudget);
      }
};

console.log('Срок достижения цели: ' + appData.getTargetMonth() + ' месяцев');

appData.getStatusIncome = function() {

      if (appData.budgetDay > 1200) {
            return ('У вас высокий уровень дохода!');
      } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
            return('У вас средний уровень дохода');
      } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
            return('К сожалению у вас уровень дохода ниже среднего');
      } else {
            return('Что-то пошло не так');
      }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы за месяц: ' + appData.expensesMonth);

console.log('Цель будет достигнута за период ' + appData.res + ' месяцев');

console.log(appData.getStatusIncome());
 
for (let key in appData){
      console.log('Наша программа включает в себя данные:    свойства :  '+ key + '  значения ' + appData[key]);
}