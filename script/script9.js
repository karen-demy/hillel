   //ДЗ 19. ООП практика
  //Пофиксить https://github.com/SimonovAlex/hillel/pull/8
 //Добавить сущность "стаканчик" есть такие размеры:
  //100 мл
  //250 мл
  //500 мл
  //Объём не может быть больше чем стакан.
  //Добавить возможность разделить напиток на 2 стакана (будет 2 напитка отдельных).
  class Cup {
    constructor(volumeCup){
      this.volumeCup = volumeCup
    }
   }

  class CoffeeRecept {

    coast = 0;  
    #sugar = 0;
    volume = 0;
    coffee = 0;
  
    constructor(){
    }
  
    setSugar(value = 0){
      this.#sugar = this.#sugar + value;
      this.coast = this.coast + value * 5;
    }
  
    addSugar(){
      this.#sugar = this.#sugar + 1;
      this.coast = this.coast + 5;
    }
  
    get coast(){
      return this.coast;
    }
  
    getSugar(){
      return this.#sugar;
    }
  
    cookingEspresso(mult = 1) {
      this.coffee = this.coffee + 15 * mult;
      this.coast = this.coast + 20 * mult;
      this.volume = this.volume + 15 * mult;
    }
  
    getInfo() {
      return {
        coffee : this.coffee,
        volume: this.volume,
        coast: this.coast,
        sugar: this.#sugar,
      }
    }


  createdCup(){
    if (this.volume <= 100){
      const smallCup = new Cup(100);
      this.cup =  smallCup
      
     }
     else if ((this.volume > 100) && (this.volume <= 250)){
      const mediumCup = new Cup(250);
      this.cup =  mediumCup
     }
     else if ((this.volume > 250) && (this.volume <= 500)){
      const bigCup = new Cup(500);
      this.cup =  bigCup
     }
     else {
      alert("Занадто великий объем напою");
     }
  }

  shareDrink(nameOfDrink){
    const firstDrink  = {
    coast : nameOfDrink.coast/2, 
    volume : nameOfDrink.volume/2,
    coffee : nameOfDrink.coffee/2,
    water : nameOfDrink.water/2,
    milk : nameOfDrink.milk/2 ,
    sugar : nameOfDrink.#sugar/2}
    const secondDrink = firstDrink ;
   

    console.log(firstDrink);
    console.log(secondDrink);
    
    }
  }
  
  class EspressoRecept extends CoffeeRecept{
    constructor(){
      super();
      this.cookingEspresso();
      this.createdCup();
    }
  }
  
  
  const espresso = new EspressoRecept();
  espresso.addSugar();
  espresso.cookingEspresso(3);
  
  console.log(espresso);
  console.log(espresso.getInfo());
  
  class AmericanoRecept extends CoffeeRecept {
    constructor(water){
      super();
      this.cookingEspresso();
      this.water = water;
      this.volume = this.volume + water;
      this.createdCup();
    }
  
    getInfo(){
      const result = super.getInfo();
      return {
        ...result,
        water: this.water
      }

    }
  
    addWater(water = 0){
      this.water = this.water + water;
      this.volume = this.volume + water;
    }

          

  }
  
  const americano = new AmericanoRecept(50);
  console.log(americano);
  
   americano.cookingEspresso();
   americano.addWater(400);
  
  
   console.log(americano)
  
  class LatteRecept extends CoffeeRecept{
    constructor(milk){
      super();
      this.cookingEspresso();
      this.volume = this.volume + milk;
      this.coffee = this.coffee;
      this.milk = milk;
      this.coast = this.coast + (milk * 0.5)
      this.createdCup();
      
    }
  }
  
  class DoubleLatteRecept {
    #sugar = 0
    constructor(){
      const firstLatte = new LatteRecept(50);
      const secondLatte = new LatteRecept(50);

      this.volume = firstLatte.volume + secondLatte.volume;
      this.coffee = firstLatte.coffee + secondLatte.coffee;
      this.milk = firstLatte.milk + secondLatte.milk;
      this.coast = firstLatte.coast + secondLatte.coast;
      this.createdCup()
    }

    setSugar(value = 0){
      this.#sugar = this.#sugar + value;
      this.coast = this.coast + value * 5;
    }
    createdCup(){
      if (this.volume <= 100){
        const smallCup = new Cup(100);
        this.cup =  smallCup 
       }
       else if ((this.volume > 100) && (this.volume <= 250)){
        const mediumCup = new Cup(250);
        this.cup =  mediumCup
       }
       else if ((this.volume > 250) && (this.volume <= 500)){
        const bigCup = new Cup(500);
        this.cup =  bigCup
       }
       else {
        alert("Занадто великий объем напою");
       }
       return this.cup
    }

    shareDrink(nameOfDrink){
      const firstDrink  = {
      coast : nameOfDrink.coast/2, 
      volume : nameOfDrink.volume/2,
      coffee : nameOfDrink.coffee/2,
      water : nameOfDrink.water/2,
      milk : nameOfDrink.milk/2 ,
      sugar : nameOfDrink.#sugar/2}
      const secondDrink = firstDrink ;
      
      console.log(firstDrink);
      console.log(secondDrink);
      
      }
  }
  const latte = new LatteRecept(25);
   const latte2 = new DoubleLatteRecept(45);
   const americano1 = new AmericanoRecept(30);
   const americano2 = new AmericanoRecept(50);
   americano1.setSugar(3);
   console.log(americano1);
   console.log(americano2);
   console.log(americano1.coast, americano2.coast);
   console.log(americano1.getSugar(), americano2.getSugar());
   console.log(latte);
   console.log(latte2);
   latte2.setSugar(2)
   console.log(latte2);
   latte.addSugar();
   console.log(latte);

 
   const smallCup = new Cup(100);
   const mediumCup = new Cup(250);
   const bigCup = new Cup(500);
   console.log(smallCup);
   console.log(mediumCup);
   console.log(bigCup);
  americano.createdCup();
  console.log(americano2);
  americano2.shareDrink(americano2);
  console.log(americano2);
  latte2.shareDrink(latte2);
  console.log(latte2);