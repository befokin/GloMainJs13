'use strict';

let start = document.getElementById('start'),
      incomePlus = document.getElementsByTagName('button')[0],
      expensesPlus = document.getElementsByTagName('button')[1],
      additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
      depositCheck = document.querySelector('#deposit-check'),
      budgetDayValue = document.querySelector('.budget_day-value'),
      expensestMonthValue = document.querySelector('.expenses_month-value'),
      additionalIncomeValue = document.querySelector('.additional_income-value'),
      additionalExpensesValue = document.querySelector('.additional_expenses-value'),
      incomePeriodValue = document.querySelector('.income_period-value'),
      targetMonthValue = document.querySelector('.target_month-value'),
      salaryTitle = document.querySelector('.salary-title'),
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('.income-title'),
      incomeItem = document.querySelectorAll('.income-items'),
      additionalIncomeTitle = document.querySelector('.additional_income-title'),
      expensesTitleTitle = document.querySelectorAll('.title')[3],
      expensesTitle = document.querySelector('.expenses-title'),
      expensesItems = document.querySelectorAll('.expenses-items'),
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      additionalExpenses = document.querySelector('.additional_expenses'),
      periodSelect = document.querySelector('.period-select'),
      periodAmount = document.querySelector('.period-amount'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent'),
      targetAmount = document.querySelector('.target-amount'),
      budgetMonthValue = document.querySelector('.budget_month-value'),
      cancel = document.querySelector('#cancel');
    
let appData = {
      budget: 0,
      income: {},
      incomeMonth: 0,
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
                  start.querySelector.addEventListener('click', function(event) {
                        event.preventDefault();
                  });
            }

            appData.budget = +salaryAmount.value;
            
            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudget();
            appData.showResult();
      },

      showResult: function() {
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;
            expensestMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcSavedMoney();

            periodSelect.addEventListener('input', function () {
                  incomePeriodValue.value = appData.calcSavedMoney();
            });
      },
      
      addExpensesBlock: function(){
            
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3) {
                  expensesPlus.style.display = 'none';
            }
      },

      addIncomeBlock: function() {
            let cloneIncomeItem = incomeItem[0].cloneNode(true);
            incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItem = document.querySelectorAll('.income-items');
            if(incomeItem.length === 3) {
                  incomePlus.style.display = 'none';
            }
      },

      getExpenses: function() {

            expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

                  if (itemExpenses !== '' && cashExpenses !== '') {
                        appData.expenses[itemExpenses] = cashExpenses;
                  }
            });
      },

      getIncome: function() {
            
            incomeItem.forEach (function(item){
            let itemIncomes = item.querySelector('.income-title').value;
            let cashIncomes = item.querySelector('.income-amount').value;

                  if(itemIncomes !== '' && cashIncomes !== ''){
                        appData.income[itemIncomes] = cashIncomes;
                  }
            });

            for (let key in appData.income) {
                  appData.incomeMonth += +appData.income[key]
            }
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
                  let value = item.value.trim();

                        if (value !== '') {
                        appData.addIncome.push(value);
                  }
            });
      },


      getExpensesMonth: function() {

            for (let key in appData.expenses) {
                  appData.expensesMonth += +appData.expenses[key];
            }
            return ;
      },

      getBudget: function() {
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = Math.round(appData.budgetMonth / 30);
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
incomePlus.addEventListener('click', appData.addIncomeBlock); 

periodSelect.addEventListener('input', function() {
periodAmount.textContent = periodSelect.value;
});

appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();
      



