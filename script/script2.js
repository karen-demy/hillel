//Задачка 1
let firstNumber;
firstNumber = prompt ("Введіть перше число:");
let secondNumber;
secondNumber= prompt ("Введіть друге число:");
let   resultAdd
    , resultSub
    , resultMult
    , resultDiv;

    resultAdd = +firstNumber + +secondNumber;
    resultSub = firstNumber - secondNumber;
    resultMult =  firstNumber * secondNumber;
    resultDiv = firstNumber / secondNumber ;
    
alert (`${firstNumber} + ${secondNumber} = ${resultAdd}
${firstNumber} - ${secondNumber} = ${resultSub}
${firstNumber} * ${secondNumber} = ${resultMult}
${firstNumber} / ${secondNumber} = ${resultDiv}`);

//Задачка 2
add = confirm  ("Будемо додавати?");
sub = confirm  ("Будемо віднімати?");
mult = confirm ("Будемо множити?");
div = confirm ("Будемо ділити?");
firstNumber = prompt ("Введіть перше число:");
secondNumber = prompt ("Введіть друге число:");

if (add==true) {
    alert (`${firstNumber} + ${secondNumber} = ${resultAdd}`);
}

if (sub==true) {
    alert (`${firstNumber} - ${secondNumber} = ${resultSub}`);
}

if (mult==true) {
    alert (`${firstNumber} * ${secondNumber} = ${resultMult}`);
}
if (div==true) {
    alert (`${firstNumber} / ${secondNumber} = ${resultDiv}`);
}

//Задачка 3
let numberOfHours = prompt ("Введіть кількість годин, що ви витратили на завдання");
let numberOfSeconds;
const SECOND_IN_ONE_HOUR = 3600;
numberOfSeconds = numberOfHours * SECOND_IN_ONE_HOUR ;
alert (`Вітаю!Ви виконали задачу за ${numberOfSeconds}  секунд`);

//Задачка 4
let   thirdNumber;
let   average;
firstNumber = prompt ("Введіть перше число:");
secondNumber = prompt ("Введіть друге число:");
thirdNumber = prompt ("Введіть третє число:");
average = (+firstNumber + +secondNumber + +thirdNumber)/3;
alert (`Середне aрефметичне = ${average}`);
