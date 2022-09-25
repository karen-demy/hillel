alert ('Я – JavaScript!');

let name = 'Ivan';
let admin ;
admin = name ;
alert (admin);

let nameForPlanet;
let curentUserName;

alert (`привіт ${1}`);
alert (`привіт ${"name"}`); 
alert (`привіт ${name}`); 

curentUserName = prompt('Як тебе звуть?');
alert (`Привіт, ${curentUserName}!Ми раді знайомству)`);


let hi;
hi = "Hello";
alert ( + hi);
console.log (typeof "hi");


let a = prompt("Перше число?", 1);
let b = prompt("Друге число?", 2);
alert(Number(a) + Number(b)); 

//!!!
let lastVersionJavsScript; 
lastVersionJavsScript = prompt("Яка остання версія JavaScript?");
if ( lastVersionJavsScript == "ESMAScript") {
    alert ("Ти правий!");

}    
    else {
    alert ("Подумай ще!");
}

 let _number;
 _number = prompt("Введіть номер");
 if (_number > 0) {
alert ("1");
 }
 else if (_number == 0) {
    alert ("0");
 }
 else  {
    alert ("-1");
 }

 let result;
 let d;
 let c;
 d = prompt("Число 1");
 c = prompt("Число 2");
 result =  ( (+d + +c)>4 ) ? "Вище":"Нижче";

 alert (result);
 

 let login;
 let mess;
 login = prompt("Введите логин");
 mess = login == "директор" ? "Доброго дня"
 : login == "працівник" ? "Привіт"
 : "Введи лог";

 alert (mess);

 let age1;
age1 = prompt("Возраст!")
 if (age1 > 14 && age1 < 90 ) {
    alert ("Вы нам подходите!!");
 }
else {
    alert ("Ваш возраст не соответствует");
}



let loGin = prompt ("Введи свій логін,мала!");
if (loGin === "Admin") {
    let pass = prompt ("Тепер давай пароль");
    if (pass === "шеф"){
        alert("Привіт,Володар!");
    }
    else if (pass === "" || pass === null) {
        alert ("Скасовано");
    }
    else {
        alert ("Йди до біса!");
    }

}
else if (loGin === "" ||  loGin === null ) {
    alert ("Скасовано");
}
else {
    alert ("Гуляй Вася");
}