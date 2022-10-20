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