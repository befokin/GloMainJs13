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

let budgetDay = money / 30;
console.log(budgetDay);
