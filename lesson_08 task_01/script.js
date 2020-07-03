
'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    start = function() {
    
        do {
            money = +prompt('Ваш месячный доход?', '30000');
        }
        while (!isNumber(money));
        
    console.log(typeof(money));
    };       

start();

let appData = {
        budget: money,
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        mission: 50000,
        period: 3,
        asking: function(){

             if(confirm('Есть ли у вас дополнительный источник заработка?')) {

                let itemIncome;
                let cashIncome;
           

                // appData.getItemIncome = function() {
                    
                    for(let i = 0; i < 2; i++) {

                            do {
                            itemIncome = prompt('Какой у вас есть дополнительный зарабток?' , 'Таксую');
                            }
                            while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null); 
                            
                            do {
                            cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?' , '10000');
                            }
                            while (!isNumber(cashIncome));

                                appData.income[itemIncome] = +cashIncome;
                                // console.log(appData.income);
                    }           
            }

                    let addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую').split(' , ');
                    let newAddExpenses = '  ';
                    for (let key in addExpenses) {
                        addExpenses[key] = addExpenses[key].trim();
                        newAddExpenses += addExpenses[key].substr(0, 1).toUpperCase() + addExpenses[key].substr(1).toLowerCase()  +  '  ';
                    }
                     console.log(newAddExpenses);
           


       
            
          
            // appData.getExpensesMonth = function() {
               
                    let answer1;
                    let answer2;

                    for (let i = 0; i < 2;  i++) {
                
                           
                        do {
                            answer1  = prompt('Введите обязательную статью расходов?', 'еда');
                        }  
                        while (!isNaN(answer1) || answer1.trim() === '' || answer1 === null); 
                       
                                              
                        do {
                            answer2 = prompt('Во сколько это обойдется?', '15000');
                        }
                        while (!isNumber(answer2)); 


                        appData.expenses[answer1] = +answer2;

                                // console.log(appData.expenses);
                     } 
                     
                     appData.deposit = confirm('Есть ли у вас депозит в банке?');
                     if(appData.deposit) {
                      
                        do {
                          answer1 = prompt('Какой годовой процент?', '10');
                        }
                        while (!isNumber(answer1)); 
                
                        do {
                          answer2 = prompt('Какая сумма заложена?', '10000');
                        }
                        while (!isNumber(answer2)); 
                    }
                          appData.percentDeposit = +answer1;
                           
                          appData.moneyDeposit = +answer2;
        } ,


                    getExpensesMonth:  function() {
                        for (let key in appData.expenses) {
                            appData.expensesMonth += +appData.expenses[key];
                        }   
                           return;
                    },
                    
                    getBudget:  function() {
                        appData.budgetMonth  = appData.budget - appData.expensesMonth;
                        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
                     },

                     getTargetMonth: function() {
                        return  Math.ceil(appData.mission / appData.budgetMonth);
                    },

                    
                    //  getInfoDeposit = function() {
                        // let answer1 = 0;
                        // let answer2 = 0;
                      
                        
                        
                     calcSavedMoney: function() {
                        return  appData.budgetMonth * appData.period;
                    },

                        getStatusIncome: function() {
                            if (appData.budgetDay >= 1200) {
                                return ('У вас высокий уровень дохода');
                            } else if ((appData.budgetDay >= 600) && (appData.budgetDay <= 1200)) {
                                return ('У вас средний уровень дохода');
                             } else if ((appData.budgetDay < 600) && (appData.budgetDay >= 0)) {
                                return ('К сожалению у вас уровень дохода ниже среднего');
                             } else {
                                return('Что то пошло не так');
                            } 
                         },
                                    
        
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
// appData.getTargetMonth();
appData.getStatusIncome();
appData.calcSavedMoney();


    
    
if (appData. getTargetMonth() >= 0) {
    console.log('Цель будет достигнута');
} else if (appData. getTargetMonth() < 0){
    console.log('Цель не будет достигнута');
}



console.log('Расходы за месяц: ' + appData.expensesMonth);

console.log('Цель будет достигнута за период ' + appData.res + ' месяцев');

console.log(appData.getStatusIncome());
 
for (let key in appData){
      console.log('Наша программа включает в себя данные:    свойства :  '+ key + '  значения ' + appData[key]);
}
console.log(Object.keys(appData).length);

console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());