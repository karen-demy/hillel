//ДЗ 20. div - призрак
//Имеется текстовое поле на странице. 
//При фокусировке на этом поле сбоку появляется <div> с информацией. 
//При пропаже фокуса - <div> так же пропадает
let  firstDiv = document.querySelector(".page_text1");
let  newInput = document.createElement("textarea");
let  newDiv = document.createElement("div");
newDiv.innerHTML = "Здесь должно быть какое-то описание, но у автора плохо с фантазией";
newInput.setAttribute("rows", "10");
newInput.setAttribute("cols", "50");
firstDiv.after(newDiv);
firstDiv.after(newInput);
newInput.className = "focus";
newDiv.className = "casper";

//ДЗ 21. Таблица
//Вывести таблицу 10 × 10, заполненную числами от 1 до 100 (таблица создаётся динамически)
let  newTable = document.createElement("table");
newDiv.after(newTable);
let myCell ="";
let myRow = "";
for(let i = 0; i < 10; i++) {
  myRow = newTable.insertRow(i);
  for(let y = 0; y < 10; y++) {
   myCell =  myRow.insertCell(y); 
  }
};


console.log(myCell);
console.log(myRow);
newTable.className = "table";
let  manyMyCell = document.getElementsByTagName("td");

for(let u = 0; u < manyMyCell.length ; u++) {
   manyMyCell[u].innerHTML = `${1 + u}`;
};

//ДЗ 22. Вывод изображений
//В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
//Вывести изображение из этой папки полученное случайным образом (Math.random)
let array = [];
array.push(`/img/1.jpg`);
array.push(`/img/2.jpg`);
array.push(`/img/3.jpg`);
array.push(`/img/4.jpg`);
array.push(`/img/5.jpg`);
array.push(`/img/6.jpg`);
array.push(`/img/7.jpg`);
array.push(`/img/8.jpg`);
array.push(`/img/9.jpg`);
console.log(array);

let newImg = document.createElement("img");
newImg.className = "bigimage";
let i = parseInt(Math.random() * 9);
console.log(i);
newImg.setAttribute("src", `${array[i]}`);
newInput.after(newImg);
console.log(array[i])