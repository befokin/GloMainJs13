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

let salaryTitle = document.querySelector('.salary-title'),
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('.income-title'),
      incomeAmount = document.querySelector('.income-amount'),
      additionalIncomeTitle = document.querySelector('.additional_income-title'),
      expensesTitleTitle = document.querySelector('.expenses-title'),
      expensesTitle = document.querySelector('[placeholder="Наименование"]'),
      expensesItems = document.querySelectorAll('.expenses-items');
     let additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      additionalExpenses = document.querySelector('.additional_expenses'),
      periodSelect = document.querySelector('.period-select'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent'),
      targetAmount = document.querySelector('.target-amount'),
      typeRange = document.querySelector('[type="range"]'),
      budgetMonthValue = document.querySelector('.budget_month-value'),
      cancel = document.querySelector('#cancel');

      let isNumber = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
      };
      

            
      
       
      
      let appData = {
            budget: 0,
            income: {},
            addIncome: [],
            expenses: {},
            addExpenses: [],
            deposite: false,
            percentDeposit: 0,
            moneyDeposit: 0,
            budgetDay: 0,
            budgetMonth: 0,
            expensesMonth: 0,
            start: function() {
            
                 
                  if(salaryAmount.value === '') {
                        alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
                        return;
                  }

                  appData.budget = salaryAmount.value;
                  console.log( salaryAmount.value);

                  appData.getExpenses();
                 
                  appData.getExpensesMonth();
                  appData.getBudget();
                  appData.getAddExpenses();
                  appData.getAddIncome();
                  appData.showResult();
            },

            showResult: function() {
                  budgetMonthValue.value = appData.budgetMonth;
                  budgetDayValue.value = appData.budgetDay;
                  expensestMonthValue.value = appData.expensesMonth;
                  additionalExpensesValue.value = appData.addExpenses.join(', ');
                  additionalIncomeValue.value = appData.addIncome.join(',');
                  targetMonthValue.value = Math.ceil(appData.getTargetMonth());
                  incomePeriodValue.value = appData.calcSavedMoney();
            },
            
            addExpensesBlock: function(){
                  
                  let cloneExpensesItem = expensesItems[0].cloneNode(true);
                  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
                  expensesItems = document.querySelectorAll('.expenses-items');
                  if(expensesItems.length === 3) {
                        expensesPlus.style.display = 'none';
                  }
            },

            getExpenses: function() {
                  expensesItems.forEach(function(item) {
                              // console.log(item);
                  let itemExpenses = item.querySelector('.expenses-title').value;
                  let cashExpenses = item.querySelector('.expenses-amount').value;

                        if (itemExpenses !== '' && cashExpenses !== '') {
                              appData.expenses[itemExpenses] = cashExpenses;
                        }
                  });
            },
            
            getAddExpenses: function() {
                  let addExpenses = additionalExpensesItem.value.split(', ');
                  addExpenses.forEach(function(item){
                        item = item.trim();
                        if (item !== '') {
                              appData.addExpenses.push(item);
                        }
                  });
            },

            getAddIncome: function() {
                  additionalIncomeItem.forEach(function(item) {
                        let itemValue = item.value.trim();
                        if (itemValue !== '') {
                              appData.addIncome.push(itemValue);
                        }
                  });
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
                  return targetAmount.value / appData.budgetMonth;                
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
                 return appData.budgetMonth * periodSelect.value;
            }
      };
      
      start.addEventListener('click', appData.start);
      expensesPlus.addEventListener('click', appData.addExpensesBlock);

    
      appData.getTargetMonth();
      appData.getStatusIncome();
      appData.getInfoDeposit();
      

      
      // console.log('Цель будет достигнута за период ' + appData.getTargetMonth());
      
      
       
      // for (let key in appData) {
      //       console.log('Наша программа включает в себя данные:    свойства :  '+ key + ' значения ' + appData[key]);
      // }
      
      

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


