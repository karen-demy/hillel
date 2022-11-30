//ДЗ 25. Local storage
//туду лист должен остаться в том состоянии в котором был после выхода из приложения

let index = "";

window.onload = function() {
    init();
    addFromLocalStorage();
}

function init(){
    let oldElement = document.querySelector(".page_text1");
    
    let firstInput = document.createElement("input");
    let addButton = document.createElement("button");
    let clearButton = document.createElement("button");

    addButton.addEventListener("click", addNote);
    clearButton.addEventListener("click", clearAll);
    
    oldElement.after(clearButton);
    oldElement.after(addButton);
    oldElement.after(firstInput);
    
    addButton.innerHTML = "Add";
    clearButton.innerHTML = "Clear All";
    
    firstInput.className = "first_input";
    addButton.className = "btn";
    clearButton.className = "btn";
}

function isValid(value){
    return /^[a-zA-Zа-яА-Я0-9- ]+$/.test(value)
 }

 function clearAll(){
    let allelementLi = document.querySelectorAll("li");
    for(const item of allelementLi){
    item.remove();}
    saveLocal();
}

function removeNote(){
    let elementLi = document.getElementById(`${index.id}`);
    console.log(index);
    elementLi.remove();
    saveLocal();
  
}

function saveUpdate(){
    let supernewNote = document.getElementById(`.supernewNote_${index.id}`);
        
    let note = document.getElementById(`span_${index.id}`);
    note.hidden = false;

    let newNote = document.getElementById(`.newNote_${index.id}`);
    newNote.hidden = false;
   
    let saveButton = document.getElementById(`.save_${index.id}`);
    let cancelButton = document.getElementById(`.cancel_${index.id}`);
    console.log(saveButton);
    console.log(`.save_${index.id}`);
    console.log(cancelButton);
    console.log(`.cancel_${index.id}`);

    let  editButton =document.createElement("button");
    editButton.className = "btn edit";
    editButton.innerText = "Edit";
    editButton.addEventListener("click", function (e) {
        index =  editButton.closest("li");
       })   

       editButton.addEventListener("click",editNote);
       let  removeButton =document.createElement("button");
       removeButton.className = "btn remove";
       removeButton.addEventListener("click",removeNote);
       removeButton.innerText = "Remove";

    if(isValid(supernewNote.value)){
    supernewNote.hidden = true;
    saveButton.replaceWith(editButton);
    cancelButton.replaceWith(removeButton);

    let newValue = supernewNote.value;
    note.innerText = newValue;
    saveLocal()
    }
    else{
        alert("Не используйте спецсимволы");
    }

    addIdFromElement(".edit");
    addIdFromElement(".remove");
}

function cancelNote(){
    let supernewNote = document.getElementById(`.supernewNote_${index.id}`);
    let note = document.getElementById(`span_${index.id}`);
    let oldNote = supernewNote.value = note.innerText;
    supernewNote.value = oldNote;
    saveLocal()
}


function editNote(){
    let supernewNote = document.createElement("input");
    supernewNote.className = "supernewNote";
    

    let saveButton = document.createElement("button");
    saveButton.addEventListener("click", function (e) {
        index =  saveButton.closest("li");
       }) 
    saveButton.addEventListener("click", saveUpdate);
    
   

    let cancelButton = document.createElement("button");
    cancelButton.addEventListener("click",cancelNote);
        
   let  editButton = document.getElementById(`.edit_${index.id}`);
   let removeButton = document.getElementById(`.remove_${index.id}`);
   console.log(editButton);
   console.log(removeButton);

   let newNote = document.getElementById(`.newNote_${index.id}`);
   newNote.hidden = true;

 

    let elementLi = index;
    console.log(elementLi);
    console.log(index);
    let note = document.getElementById(`span_${elementLi.id}`);
    note.hidden = true;
    console.log(`span_${elementLi.id}`);
    supernewNote.value = note.innerText;
   
    
   removeButton.replaceWith(cancelButton);
   editButton.replaceWith(saveButton);
    elementLi.prepend(supernewNote);

    saveButton.innerHTML = "Save";
    cancelButton.innerHTML = "Cancel"
    saveButton.className = "btn save";
    cancelButton.className = "btn cancel";
    addIdFromElement(".supernewNote");
    addIdFromElement(".save");
    addIdFromElement(".cancel");
    }
      

function addNote() {
    let elementLi = document.createElement("li");
    elementLi.className = "elementLi";
    
    let  newNote = document.createElement("input");
    newNote.addEventListener("click",checked);
    
    let note = document.createElement("span");
    note.className = "note";
    let  editButton = document.createElement("button");
    
    editButton.addEventListener("click", function (e) {
     index =  editButton.closest("li");
    })   
    editButton.addEventListener("click",editNote);

    
    let  removeButton =document.createElement("button");
    removeButton.addEventListener("click", function (e) {
        index =  removeButton.closest("li");
       }) 
    removeButton.addEventListener("click",removeNote);
      

    let oldElement2 = document.querySelector(".page_text2");
    let firstInput = document.querySelector(".first_input");

    
    newNote.setAttribute("type", "checkbox");
    newNote.className = "newNote";    
  
    editButton.className = "edit";
    editButton.innerHTML = "Edit";
    removeButton.innerHTML = "Remove";
    editButton.className = "btn edit";
    removeButton.className = "btn remove";
    


    if(isValid(firstInput.value)){
        
        oldElement2.append(elementLi);
        elementLi.append(newNote);
        elementLi.append(note);
        elementLi.append(editButton);
        elementLi.append(removeButton);
        
        let valueNote = firstInput.value;
        note.innerText = valueNote;
        firstInput.value = "";
        saveLocal();   
    }
    else{
        alert("Не используйте спецсимволы");
    }

    
    addIdFromLi();
    addIdFromElement("span");
    addIdFromElement(".edit");
    addIdFromElement(".newNote");
    addIdFromElement(".remove");
    

    saveLocal();
}

function checked(){
    let collection = document.querySelectorAll(".newNote");
    let allnewnote = Array.from(collection);
for(const item of allnewnote){
    if(item.checked){
        item.setAttribute("checked", "checked");    
    saveLocal();
}}}

 
function saveLocal() {
    const elemUl = document.querySelector("ul");
    let ul = elemUl.innerHTML;
    localStorage.setItem('myNote',JSON.stringify(ul));
   }

function addFromLocalStorage(){
if(localStorage.getItem('myNote')){
let oldElement2 = document.querySelector(".page_text2");    
let newUl = localStorage.getItem('myNote');
newUl = JSON.parse(newUl);
oldElement2.innerHTML = newUl;

let collectionEditButton  = document.querySelectorAll(".edit");
let allEditButton  = Array.from(collectionEditButton);
for(const item of allEditButton){
    item.addEventListener("click", function (e) {
        index =  item.closest("li");
       }) 
    item.addEventListener("click",editNote);            
}

let  collectionNewNote = document.querySelectorAll(".newNote");
let allNewNote = Array.from(collectionNewNote);
for(const item of allNewNote){
item.addEventListener("click",checked);
}}

let  collectionRemoveButton = document.querySelectorAll(".remove");
let allRemoveButton = Array.from(collectionRemoveButton);
for(const item of allRemoveButton){
    item.addEventListener("click", function (e) {
    index =  item.closest("li");
   }) 
   item.addEventListener("click",removeNote);
}}
  
function addIdFromElement(element){
let collection = document.querySelectorAll(`${element}`);
let allelement = Array.from(collection);
for(const item of allelement){
     item.setAttribute("id",`${element}_${item.closest("li").id}`)}
}

function addIdFromLi(){
    let collection = document.querySelectorAll(`li`);
    let allelement = Array.from(collection);
    for(const item of allelement){
         item.setAttribute("id",`${allelement.indexOf(item)}`)}
    }

   
    
    

