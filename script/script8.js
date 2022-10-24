
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
