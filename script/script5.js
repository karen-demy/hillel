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



