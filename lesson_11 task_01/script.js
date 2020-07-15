'use strict';

let start = document.getElementById('start'),
      incomePlus = document.getElementsByTagName('button')[0],
      expensesPlus = document.getElementsByTagName('button')[1];


let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let depositCheck = document.querySelector('#deposit-check');
let budgetDayValue = document.querySelector('.budget_day-value'),
      expensestMonthValue = document.querySelector('.expenses_month-value'),
      additionalIncomeValue = document.querySelector('.additional_income-value'),
      additionalExpensesValue = document.querySelector('.additional_expenses-value'),
      incomePeriodValue = document.querySelector('.income_period-value'),
      targetMonthValue = document.querySelector('.target_month-value');

console.log(budgetDayValue);
console.log(budgetDayValue);
console.log(additionalIncomeValue);
console.log(additionalExpensesValue);
console.log(incomePeriodValue);
console.log(targetMonthValue);


let salaryTitle = document.querySelector('.salary-title'),
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('.income-title'),
      incomeAmount = document.querySelector('.income-amount'),
      additionalIncomeTitle = document.querySelector('.additional_income-title'),
      expensesTitleTitle = document.querySelector('.expenses-title'),
      expensesTitle = document.querySelector('[placeholder="Наименование"]'),
      expensesAmount = document.querySelector('[placeholder="Сумма"]'),
      additionalExpensesTitle = document.querySelector('.additional_expenses-title'),
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent'),
      targetAmount = document.querySelector('.target-amount'),
      typeRange = document.querySelector('[type="range"]'),
      budgetMonthValue = document.querySelector('.budget_month-value'),
      cancel = document.querySelector('#cancel');

      let isNumber = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
      };
      
      let money;
            
      
       
      
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
            start: function() {
            
                  do {
                        money = prompt('Ваш месячный доход?', '1000');
                  }
                  while (isNaN(money) || money.trim() === '' || money === null);

                  // appData.asking();
                  // appData.getExpensesMonth();
                  // appData.getBudget();
            },
            asking: function() {
      
                  if (confirm('Есть ли у вас дополнительный источник заработка?')) {
      
                        for (let i = 0; i < 1; i++) {
                              let itemIncome = 0;
                              let cashIncome = 0;
      
                                    do {
                                          itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Таксую');
                                    }
                                    while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);
      
                                    do {
                                          cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                                    }
                                    while (!isNumber(cashIncome));
                                    appData.income[itemIncome] = +cashIncome;
                                    console.log(appData.income);
                        }
                                         
                                          
                  }
      
                  let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'ВОда, ЧаЙ, КонФеты');
                        addExpenses = addExpenses.split(', ');
                        console.log(addExpenses);
                              let newAddExpenses = '';
      
                                    for (let key in addExpenses) {
                                          addExpenses[key] = addExpenses[key].trim();
                                          newAddExpenses += addExpenses[key].substring(0, 1).toUpperCase() + addExpenses[key].substring(1).toLowerCase() +  ', ';
                                    }
      
                                    console.log(newAddExpenses.substring(0, newAddExpenses.length - 2));
                    
                                          appData.deposit = confirm('Есть ли у вас депозит в банке?');
                                           
                                                for (let i = 0; i < 2; i++) {
                                                      
                                                      let itemExpenses = 0;
                                                      let cashExpenses = 0;
                                                      do {
                                                            itemExpenses = prompt('Введите обязательную статью расходов', 'еда');
                                                      }
                                                      while (!isNaN(itemExpenses) || itemExpenses.trim() === '' || itemExpenses === null);
      
                                                      do{
                                                            cashExpenses = prompt('Во сколько это обойдется?', '100');
                                                      }
                                                      while (!isNumber(cashExpenses));
                                                      
                                                      appData.expenses[itemExpenses] = +cashExpenses;
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
      
                        let percentDeposit = 0;
                        let moneyDeposit = 0;
      
                        do {
                              percentDeposit  = prompt('Какой годовой процент?', '10');
                        }
                        while (!isNumber(percentDeposit));
      
                        appData.percentDeposit = percentDeposit;
      
                        do {
                              moneyDeposit  =  prompt('Какая сумма заложена?', 10000);
                        }
                        while (!isNumber(moneyDeposit));
                 
                        appData.moneyDeposit = moneyDeposit;
                  }
            },
      
            calcSavedMoney: function() {
                 return appData.budgetMonth * appData.period;
            }
      };
      
      start.addEventListener('click', appData.start);

    
      appData.getTargetMonth();
      appData.getStatusIncome();
      appData.getInfoDeposit();
      
      console.log('Расходы за месяц: ' + appData.expensesMonth);
      
      console.log('Цель будет достигнута за период ' + appData.getTargetMonth());
      
      console.log(appData.getStatusIncome());
       
      for (let key in appData) {
            console.log('Наша программа включает в себя данные:    свойства :  '+ key + ' значения ' + appData[key]);
      }
      
      

// console.log(salaryTitle);
// console.log(salaryAmount);
// console.log(incomeTitle);
// console.log(incomeAmount);
// console.log(additionalIncomeTitle);
// console.log(expensesTitleTitle);
// console.log(expensesTitle);
// console.log(expensesAmount);
// console.log(additionalExpensesTitle);
// console.log(additionalExpensesItem);
// console.log(depositAmount);
// console.log(depositPercent);
// console.log(targetAmount);
// console.log(typeRange);
// console.log(budgetMonthValue);
// console.log(cancel);


