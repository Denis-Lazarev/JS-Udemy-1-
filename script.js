' use strict ';

let money = prompt('Ваш бюджет на месяц?, ""');
let time = prompt('Введите дату в формате YYYY-MM-DD, ""');

let appData = {
    money,
    timeData: time,
    expenses: {
        "ответ на первый вопрос" : "ответ на второй вопрос"
    },
    optionalExpenses,
    income = [],
    saving: false,
};

prompt('Введите обязателуют статью расходов в этом месяце, ""');
prompt('Во сколько обойдется?, ""');

alert("moneyData");