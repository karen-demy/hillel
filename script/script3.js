

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (isNaN(+numOrStr) || numOrStr &&  numOrStr.trim()){
  case null:
    console.log( 'вы отменили' );
    break;
  case "":
    console.log('Empty String');
    break;
  case true:
    console.log(' number is Ba_NaN');
    break;
  default:
    console.log('OK!');
} 


//Домашка 7
//Цикл 1
//Вывести на страницу в одну строку через запятую числа от 10 до 20
let str = "";
for (let i =10 ;i < 21; i++) { 
if (i < 20)  {
    str +=i + ",";
}  
else  {
    str +=i;
}
}
console.log(str); 

//Цикл 2
//Вывести квадраты чисел от 10 до 20
let squ = "";
let y;
for (let x = 10; x < 21; x++) {
    y = x ** 2 ;
    if (x < 20 ) {
    squ += y + ",";  
   }
   else {
    squ +=y ;
   }
}
console.log(squ);


//Цикл 3
//Вывести таблицу умножения на 7
const z = 7 ;
let result;
let v;
for (v = 1; v < 11; v++) {
    result = v * z ;
    console.log( `${v} * ${z} = ${result}`);
}

//Цикл 4
//Найти сумму всех целых чисел от 1 до 15
let sum = 0;
for (let d = 1; d < 16; d++) {
    sum += d;
}
console.log(sum);


//Цикл 5
//Найти произведение всех целых чисел от 15 до 35
let mult = 1 ;
for (let t = 15; t < 36; t++) {
    mult = mult * t;
}
console.log(mult);

//Найти среднее арифметическое всех целых чисел от 1 до 500
//Цикл 6
let avarage;
let summ = 0;
let iterationNum = 0;
for (let r = 1; r < 501; r++) {
     summ = summ + r ;
     iterationNum++ 
}
console.log (avarage = summ / iterationNum)

//Цикл 7
//Вывести сумму только четных чисел в диапазоне от 30 до 80
let sum7 = 0;    
let remainder;
for ( h = 30; h < 81; h++) {
    remainder = h % 2 ;
    if ( remainder == 0) {
        sum7 =  sum7 + h ;
    }
}
console.log (sum7);


//Цикл 8
//Вывести все числа в диапазоне от 100 до 200 кратные 3
let ff ;
let remainder8;
for (ff = 100; ff < 201; ff++) {
    remainder8 = ff % 3;
    if (remainder8 == 0) {
        console.log(ff);
    }
}

//Цикл 9
//Дано натуральное число. Найти и вывести на страницу все его делители.
let number=prompt(`Введите число:`)
let del = -number;
let remainder9;
let stringOfDel = "";
let iteretionNumber = 0;
let sum9 = 0 ;
for ( ; del <= number; del++) {
    remainder9 = number % del;
    
    if (remainder9 == 0) {
        stringOfDel += del + "," ;
        if (del % 2 == 0) {
            sum9 = sum9 + del ;
            iteretionNumber++;
        }
     
    }
    }
  

alert(stringOfDel);
//Определить количество его четных делителей
alert( iteretionNumber);
//Найти сумму его четных делителей
alert(sum9);

//Цикл 10
//Напечатать полную таблицу умножения от 1 до 10
let result10 = 0;
for (let firstNum =1; firstNum < 10; firstNum++) {
    for(let secondNum =1; secondNum < 10; secondNum++) {
    result10 =  firstNum * secondNum;
    if(result10/10<1){
        result10= "&nbsp;&nbsp;" + firstNum * secondNum;
    }
    if (secondNum <= firstNum) {
        document.write(secondNum + "*" + firstNum  + "=" + result10 + "&nbsp;&nbsp;&nbsp;&nbsp;" )
    }
}
document.write("<br>");
}

//Домашка 8
//Цикл 1
//Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)
let str1 = "";
for(let gg = 20; gg <= 30; gg = gg+0.5) {
    str1 += gg + " ";
}
console.log(str1);

//Цикл 2
//Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов
const DOLLAR = 27;
let hryvnia = 10;
let dollar = "";
for (; hryvnia <= 100; hryvnia= hryvnia + 10 ) {
    dollar = hryvnia * DOLLAR ;
    console.log (`${ hryvnia} гривень = ${dollar} долларів!`);
}

//Цикл 3
//Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N
let yy = 1 ;
let n=prompt(`Введіть число N`);
let squYy;
for (;yy < 101; yy++ ) {
    squYy = yy ** 2;
    if (squYy < n) {
        console.log (yy)
    }
}

//Цикл 4 
//Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).
let number4=prompt(`Введіть число`);
let remainder4 = "";
let iteretionNumber4 = 0;
 for (let x4 = 0; x4 <= number4; x4++ ) {
    remainder4 = number4 % x4;
    if (remainder4 == 0) {
        iteretionNumber4++  ;
    } 
 }
 if (iteretionNumber4 == 2) {
    alert (`Число ${number4} просте!`);
}
else {
    alert (`Число ${number4} складене!`);
}

//Цикл5
//Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя)
let number5=prompt(`Введіть число`);
const x5 = 3;
let result5;
for (let y5 = 1; y5 <100; y5++){
    result5 = 3 ** y5;
    if ( result5 == number5) {
        alert (`Число ${number5} можна отримати шляхом піднесення числа 3 до деякого ступеня.`);
        break
    } 
    else {
        alert ("Спробуй інше число");
        break
}
}
