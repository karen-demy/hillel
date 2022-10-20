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
    constructor(name,age){
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