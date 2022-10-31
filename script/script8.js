//ДЗ 14. Многоквартирный дом
//Создать и описать сущности Многоквартирного дома, квартиры, жильца.
//Добавить возможность создавать новые дома на определенное количество квартир
//Не ограничивать количество жильцов в квартире

class Apartment {
    constructor() {

    }  
    
}
class ApartmentBuilding {
    apartments = {}
    constructor(numberOfApartment) {
        for (let i = 1; i <= numberOfApartment; i++) {
            this.apartments[i] = (new Apartment()) }
    }
}

class Tenant {
    constructor(name,age) {
     this.name = name
     this.age =  age
    }

    }

function creatNewBuilding(numberBuilding){
        const newBuilding = new ApartmentBuilding(numberBuilding);
        console.log(newBuilding);
    }
function newTenant(numberOfApartment,name,age,numberOfTenant,nameBuilding){
    nameBuilding.apartments[numberOfApartment][numberOfTenant] = new Tenant(name,age);
}


 firstBuilding = new ApartmentBuilding(15);
newTenant(1,"Саша",56,1,firstBuilding)
newTenant(1,"Вася",34,2,firstBuilding)
newTenant(1,"Петя",21,3,firstBuilding)
newTenant(1,"Дима",3,4,firstBuilding)
newTenant(3,"Юля",19,5,firstBuilding)
newTenant(6,"Анатолий",78,6,firstBuilding)
newTenant(15,"Алла",32,7,firstBuilding)

console.log(firstBuilding);
creatNewBuilding(18);


//ДЗ 15. Создаем сущности
//Создать сущность человека
//имя
//возраст
//Метод вывода данных
//Создать сущность автомобиля:
//Характеристики автомобиля отдельными свойствами
//Методы:
//Вывода на экран данных об этом автомобиле
//Присвоения этого автомобиля владельцу (записать в автомобиль объект владельца)
//Все данные о человеке и об автомобиле получать от пользователя. Реализовать необходимые проверки на корректность ввода (пустые поля, возраст >18 для человека и т.д. по необходимости).
//Максимально использовать функции

class Person {
        constructor(name, age){
        this.name = name = prompt('Введите имя')
        this.age = age = prompt('Введите возраст')
    }

    showInfo(){
    console.log(this)
    }
}

const person1 = new Person();
person1.showInfo();



class Car {
    constructor(make,model,year){
        this.make = make = prompt('Введите марку авто')
        this.model  = model = prompt('Введите модель авто')
        this.year = year = prompt('Введите год выпуска авто') 
    }

    showInfo(){
        console.log(this)
        }

    writeOwner(car,owner){
        car[1] = owner
    }    
}



const car1 = new Car();
car1.showInfo();
car1.writeOwner(car1,person1)
car1.showInfo();





function isEmpty(str) {
    if (str.trim() == '') {
    alert("Вы не заполнили обязательное поле") 
    }
  }

  function isNumber(num) {
	if(isNaN(num)){
        alert("Некоректный тип данных, в  этом поле должно быть число") 
    };
}


if(person1.age<18){
    alert("Вы слишком юнный")  
}
  isEmpty(person1.name);
  isEmpty(person1.age);
  isEmpty(car1.make);
  isEmpty(car1.model);
  isEmpty(car1.year);
  isNumber(person1.age);
  isNumber(car1.year);
  



//ДЗ 16. Гамбургеры
//Сеть фастфудов предлагает несколько видов гамбургеров:
//- маленький (50 тугриков, 20 калорий)
//- большой (100 тугриков, 40 калорий)
//Гамбургер может быть с одним из нескольких видов начинок:
//- сыром (+ 10 тугриков, + 20 калорий)
//- салатом (+ 20 тугриков, + 5 калорий)
//- картофелем (+ 15 тугриков, + 10 калорий)
//Можно добавить добавки:
//- посыпать приправой (+ 15 тугриков, 0 калорий)
//- полить майонезом (+ 20 тугриков, + 5 калорий).
//Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход
//(подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин)

const BIG_SIZE = {cost : 100 , calories : 40, };
const SMALL_SIZE = {cost : 50 , calories : 20, };
const STUFFING_CHEESE= {cost : 10 , calories : 20, };
const STUFFING_SALAD= {cost : 20 , calories : 5, };
const STUFFING_POTATO= {cost : 15 , calories : 10, };
class Burger {
    cost = 0;
    calories = 0;
    constructor(size,stuffing){
        this.size = size
        this.stuffing = stuffing
     
    }

    addSpice(){
        this.cost = this.cost +15
        this.calories = this.calories 
    }

    addMayo(){
        this.cost = this.cost +20
        this.calories = this.calories + 5
    }
    calculateCalories() {
        this.calories = this.calories + this.size.calories +this.stuffing.calories
        return this.calories
    }
    calculatePrice(){
        this.cost = this.cost + this.size.cost +this.stuffing.cost
        return this.cost
    }
}

const cheeseBurger = new Burger(BIG_SIZE,STUFFING_CHEESE);
cheeseBurger.addMayo()
console.log(cheeseBurger);
console.log("Calories:" + cheeseBurger.calculateCalories());
console.log("Price:" + cheeseBurger.calculatePrice());
cheeseBurger.addSpice()
cheeseBurger.addMayo()
console.log("Price with sauce:" + cheeseBurger.cost);
console.log(cheeseBurger);

//ДЗ 17. Студент
//Вам нужно сделать конструктор сущности Студент.
//У Студента есть имя, фамилия, год рождения — это свойства. Есть массив с оценками, 
//это тоже свойство. И есть возможность получить возраст студента и его средний бал — это методы.
//Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов, изначально он не заполнен, 
//но на 25 элементов. Это массив в котором отмечается посещаемость, 
//каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true,
// когда вызываем .absent() — записывается false. 
 //Предусмотрите какую-нибудь защиту от того чтоб в массиве посещаемости не могло быть более 25 записей. 
 //Массив - это свойство, present и absent — методы.
//Последний метод: .summary(), проверяет среднюю оценку, и среднее посещение(количествоПосещений/количествоЗанятий),
 //и если средняя оценка больше 90 а среднее посещение больше 0.9, то метод summary, возвращает строку "Молодец!", 
 //если одно из этих значений меньше, то — Хорошо, но можно лучше", если оба ниже — "Редиска!".
//Не забудьте после того как напишите этот конструктор, создать 2-3 экземпляра (конкретных студентов) 
//и показать использование этих методов.

class Student {
    constructor(name,surname,age,dateOfBirth){
        this.name = name
        this.surname = surname
        this.age = age
        this.dateOfBirth = dateOfBirth
        this.marks = []
        this.visits = []
        this.visits.length = 25
        if( this.visits.length > 25){
            this.visits.length = 25
        }
    }
 showAge(student){
 console.log(student.age)
 }
 addMark(student,mark){
student.marks.push(mark)
 }
 avarageCalculMark(student){
    let sum = 0 ;
    let iteretion = 0;
    for(let i = 0 ;i < student.marks.length;i++){
        sum = sum + student.marks[i];
        iteretion++;
    }
    let result = sum/iteretion;
    return result ;
 }

 showAvarageMark(student){
   console.log(student.avarageCalculMark(student));
 }

 present(student){
    for (let i = 0; i < student.visits.length; i++){
    if (student.visits[i] == undefined){
        student.visits[i] = true
        break                
    }
}
 }


 absent(student){
    for (let i = 0; i < student.visits.length; i++){
    if (student.visits[i] == undefined){
        student.visits[i] = false
        break                
    }
}
 } 

 avarageVisit(student){
    let iteretionNumber = 0;
    let iteretionVisit = 0;
    let result = 0;
    for (let i = 0; i < student.visits.length; i++){
        if (student.visits[i] != undefined){   
            iteretionNumber++
        }  
 }
 for (let i = 0; i < student.visits.length; i++){
    if (student.visits[i] == true){   
        iteretionVisit++
    }  
}
   result = iteretionVisit/iteretionNumber
   return result
 }
 summary(student){
   let  avarageMark = student.avarageCalculMark(student);
   let  avarageVisit = student.avarageVisit(student);
   if ((avarageMark >= 90) && (avarageVisit >= 0.9)){
    console.log("Молодец!!")
   }
    else if((avarageMark >= 90) || (avarageVisit >= 0.9)){
    console.log("Хорошо, но можно лучше")
   }
   else{
    console.log("Редиска")
   }
 }
 

}
const firstStudent = new Student("Вася","Петров",20, "09.07.2022");
console.log(firstStudent);
firstStudent.showAge(firstStudent);
firstStudent.addMark(firstStudent,100);
firstStudent.addMark(firstStudent,90);
firstStudent.addMark(firstStudent,100);
firstStudent.addMark(firstStudent,100);
firstStudent.showAvarageMark(firstStudent);

firstStudent.present(firstStudent);
firstStudent.present(firstStudent);
firstStudent.present(firstStudent);

firstStudent.summary(firstStudent);


const secondStudent = new Student("Аня","Васютина",22, "10.06.2000");
console.log(secondStudent);
secondStudent.showAge(secondStudent);
secondStudent.addMark(secondStudent,60);
secondStudent.addMark(secondStudent,60);
secondStudent.showAvarageMark(secondStudent);

secondStudent.present(secondStudent);
secondStudent.absent(secondStudent);
secondStudent.present(secondStudent);

secondStudent.summary(secondStudent);


//ДЗ 18. SuperMath
//  Создать класс SuperMath.
//Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak.
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
// Если - да, сделать математическое действие znak(которое описано в прототипе), 
//иначе - запросить ввод новых данных через метод input() класса SuperMath. 
//Пример обекта: `obj = { X:12, Y:3, znak: “/”}`, возможные варианты znak=> `+ - / * %`.
//При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
  //p = new SuperMath();
  //p.check(obj); // --> no p.input() -> 3 prompt -> считает

  class  SuperMath {
    constructor(x,y,znak) {
        this.x  = x 
        this.y = y
        this.znak = znak
    }
    input() {
       let  x = prompt("Введите первое число");
       let  y = prompt("Введите второе число");
       let znak = prompt("Введите знак одного из предложеных действий: + - / * % ");
       let result = 0 ;
        switch (znak) {
      case "+" :
             result = +x + +y ;
             console.log(`${x} + ${y} = ${result}`);
             break;
      case "-" :
              result = +x - +y; 
              console.log(`${x} - ${y} = ${result}`);
              break;
      case "/" :
             result = +x / +y ;
             console.log(`${x} / ${y} = ${result}`);
             break;
      case "*" :
             result = +x * +y ;
             console.log(`${x} * ${y} = ${result}`);
             break;
      case "%" :
             result = +x % +y 
             console.log(`${x} % ${y} = ${result}`);
             break;
      default:  
             alert("Я не знаю таких арифметических действий");
        }
    }
    
    check(obj) {
        let resultConfirm = confirm(`Если хотите посчитать ${ this.x} ${ this.znak} ${ this.y} нажмите да,если хотите посчитать что-то другое нажмите нет`);
         if(resultConfirm == true){
          let result = 0;
          result = +this.x  / this.y
          console.log(`${ this.x} ${ this.znak} ${ this.y} = ${result}`)
         } 
         else {
          obj.input();
         } 
    }
   }
  
   p = new SuperMath(15,5,"/");
   console.log(p);
   p.check(p);
   
   