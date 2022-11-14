//Домашка 9 
//Создать массив, длину и элементы которого задаёт пользователь.
//Отсортировать массив по возрастанию.
//Удалить элементы из массива с 2 по 4 (включительно!).
//По мере изменений, выводить содержимое массива на страницу.

let arr = [];
arr.lenght  = prompt("Введіть довжину масиву");
let value;
for (let i = 1; i <= arr.lenght; i++){
     value = prompt("Введіть елементи масиву");
     arr.push(value);
}
console.log(arr);

arr.sort(function(a,b){
    return a - b ;
  });
  console.log(arr);
<<<<<<< HEAD

=======
  
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b

arr.splice(2,3);
console.log(arr);

//Домашка 10
//Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//Найти сумму и количество положительных элементов.
//Найти минимальный элемент массива и его порядковый номер.
//Найти максимальный элемент массива и его порядковый номер.
//Определить количество отрицательных элементов.
//Найти количество нечетных положительных элементов.
//Найти количество четных положительных элементов.
//Найти сумму четных положительных элементов.
//Найти сумму нечетных положительных элементов.
//Найти произведение положительных элементов.
//Найти наибольший среди элементов массива, остальные обнулить.

let numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let mult = 1;
let iteretionNumber10 = 0;
for (let i of numbers) {
    if( i > 0 ) {
        sum = sum + i;
        iteretionNumber10++
        mult = mult * i;
    };
};
console.log(sum);
console.log(mult);
console.log(iteretionNumber10++);


<<<<<<< HEAD

=======
  
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b
let getMinOfArray = numbers.find(item => item == Math.min.apply(null, numbers) );
console.log(getMinOfArray);
let getMinIndexOfArray = numbers.findIndex(item => item == Math.min.apply(null, numbers) );
console.log(getMinIndexOfArray);

let getMaxOfArray = numbers.find(item => item == Math.max.apply(null, numbers) );
console.log(getMaxOfArray);
let getMaxIndexOfArray = numbers.findIndex(item => item == Math.max.apply(null, numbers) );
console.log(getMaxIndexOfArray);


let iteretionNumber010 = 0;  
for (let u of numbers) {
    if (u < 0) {
        iteretionNumber010++
    }
}
console.log(iteretionNumber010);
<<<<<<< HEAD

=======
 
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b

let iteretionNumber0010 = 0;  
let sum010 = 0;
for (let w of numbers) {
    if ((w > 0) && (w % 2 !== 0)){
            iteretionNumber0010++
            sum010 = sum010 + w;

    }
}
console.log(iteretionNumber0010);
console.log(sum010);
<<<<<<< HEAD

=======
 
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b
let iteretionNumber00010 = 0; 
let sum0010 = 0; 
for (let e of numbers) {
    if ((e > 0) && (e % 2 == 0)){
            iteretionNumber00010++
            sum0010 = sum0010 + e;
    }
}
console.log(iteretionNumber00010);
console.log(sum0010);
<<<<<<< HEAD

=======
 
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b
let X = 0;
for(let s of numbers){
    if(s != getMaxOfArray){
         X = numbers.indexOf(s) ;
         numbers.splice(X, 1,"0");

    }
}
console.log(numbers);


//Домашка 11
//Дан массив объектов. Вывести массив телефонных номеров пользователей, у которых баланс более 2000 долларов. И найти сумму всех балансов пользователей
let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]
    usersBalance = [];
<<<<<<< HEAD

    for( let i = 0; i < users.length; i++){
     usersBalance.push(users[i].balance);
    };

=======
    
    for( let i = 0; i < users.length; i++){
     usersBalance.push(users[i].balance);
    };
   
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b

   let delete$;
   for(let i = 0; i < usersBalance.length; i++) {
    delete$ = usersBalance[i].replace(/\$/g, "");
    usersBalance[i]= delete$ ;
   }
   let deleteComma;
   for(let i = 0; i < usersBalance.length; i++) {
    deleteComma = usersBalance[i].replace(/,/g, "");
    usersBalance[i]= deleteComma  ;
   }
<<<<<<< HEAD

=======
   
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b
   usersPhone = [];
   for(let i = 0; i < usersBalance.length; i++){
   if(usersBalance[i] > 2000) {
    usersPhone.push(users[i].phone);
}};
console.log (usersPhone);
<<<<<<< HEAD

=======
 
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b
let sumOfBalance = 0;
for(let i = 0; i < usersBalance.length; i++) {
    sumOfBalance = +sumOfBalance + +usersBalance[i];
}
console.log( `"$${sumOfBalance}"`);
<<<<<<< HEAD

=======
    
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b
 //Домашка 12
 //Реализуйте функцию removeElement(array, item), чтобы удалить элемент item из массива array.
//Например:

function removeElement(arr , item) {
    let r =  arr.indexOf(item);
    arr.splice(r , 1);
};
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]  

//Домашка 13
//Эта дз состоит из четырех небольших задач, за реализацию каждой из них можно получить 25 баллов:
//Дан массив с элементами разных типов. Создать функцию которая высчитывает среднее арифметическое только числовых элементов данного массива.

function addNumber(arr) {
let sum13 = 0;
let avarage = 0;  
iteretionNumber13 = 0;  
for (let i = 0; i < arr.length; i++){
if(!isNaN(+arr[i])) {
iteretionNumber13++    
sum13 = sum13 + arr[i];
}};
avarage = sum13 / iteretionNumber13 
console.log(avarage);}


let h = 10;
const array13 = [1, 2, "e", h, "Ghbdtn", 6, 7];
addNumber(array13);


//Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия, указанного в переменной znak. Оба числа и знак получаются от пользователя.
function doMath(x, znak, y) {
  x = prompt("Введите число 1:"); 
  y = prompt("Введите число 2:");
  znak = prompt("Введите действие из предложеных вариантов ( +, -, *, /, %, ^) и введите необходимый символ" );
  let result = "";
  switch(znak) {
    case "+" :
      result = +x + +y ;
      break;
      case "-" :
      result = x - y ;
      break;
      case "*" :
      result = x * y ;
      break;
      case "/" :
      result = x / y ;
      break;
      case "%" :
      result = x % y ;
      break;
      case "^" :
      result = x ** y ;
      break;
  }
  console.log(result);
}

doMath();


//Написать функцию заполнения пользовательскими данными двумерного массива. Длину основного массива и внутренних массивов задаёт пользователь. Значения всех элементов всех массивов задаёт пользователь.
function makeTwoDimArr (){
<<<<<<< HEAD

=======
    
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b
const mainLenght = prompt('Введите длину основного массива');
const subLenght = prompt('Введите длину внутренних массивов');

let arr = new Array(+mainLenght).fill(0)
.map((_, index1) =>
    new Array(+subLenght).fill(0).map((_, index2) => prompt(`Введите элемент ${index2} в подмассиве ${index1}`)));
console.log(arr);
}

makeTwoDimArr ();


//Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor". Исходную строку и символы для удаления задаёт пользователь
<<<<<<< HEAD

  function deleteSymbol() {
=======
 //В этой задаче не могу понять как внести переменную со значениями которые мы хотим удалить в качестве второго аргумента, ведь этих значений может быть сколько угодно?Возможно для этого нужно какой-то другой вариант решения.Буду рада подсказке))
  function deleteSymbol(str1) {
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b
    str1 = prompt("Введите строку");
    let rrr = str1.split("");
    let numberOfSymbol = prompt("Введите количество символов, которое хотите удалить");
    for (let i=1 ; i <= numberOfSymbol; i++)  {
        let symbol = prompt(`Введите ${i} символ, который хотите удалить`);
        iii = rrr.filter(item => item !== symbol);
        result = iii;
    }
    let strResult = result.join("");
<<<<<<< HEAD

    //i = prompt("Введите символ, который необходимо удалить");
    //let u = str1.replace(/i/g,"");


    console.log(strResult);




  } 

 deleteSymbol();
=======
    
    console.log(strResult);
  } 

 deleteSymbol();
>>>>>>> 125c345ea2c60e89dc517471eea496f2f0bb283b
