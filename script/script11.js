//ДЗ 23. Todo list pure js
//сделать используя только js приложение Todo list
//функционал:

//добавлять новый айтем
//редактировать айтем
//удалять айтем
//ставить статус (чекбокс )
//удалить всё
//небольшую валидацию по усмотрению (низя спецсимволы вводить)
//дизайн прикреплён ниже

let oldElement = document.querySelector(".page_text1");
let oldElement2 = document.querySelector(".page_text2");

let firstInput = document.createElement("input");
let addButton = document.createElement("button");
let clearButton = document.createElement("button");

oldElement.after(clearButton);
oldElement.after(addButton);
oldElement.after(firstInput);


addButton.innerHTML = "Add";
clearButton.innerHTML = "Clear All";

firstInput.className = "first_input";
addButton.className = "btn";
clearButton.className = "btn";

function isValid(value){
    return /^[a-zA-Zа-яА-Я0-9- ]+$/.test(value)
 }


function addNote() {
    let father = document.createElement("li");
    let  newNote = document.createElement("input");
    let note = document.createElement("span");
    let  editButton = document.createElement("button");
    let  removeButton =document.createElement("button");
    
    newNote.setAttribute("type", "checkbox");
    newNote.setAttribute("id", "note");
  
    editButton.className = "edit";
    editButton.innerHTML = "Edit";
    removeButton.innerHTML = "Remove";
    editButton.className = "btn";
    removeButton.className = "btn";
    oldElement2.className = "flexfather";
    


    

 

    if(isValid(firstInput.value)){
        
        oldElement2.append(father);
        father.append(newNote);
        father.append(note);
        father.append(editButton);
        father.append(removeButton);
        
        let valueNote = firstInput.value;
        note.innerText = valueNote;
        firstInput.value = "";
        console.log(valueNote)
    }
    else{
        alert("Не используйте спецсимволы");
    }

function clearAll(){
    father.remove();
}

clearButton.addEventListener("click", clearAll)


function removeNote(){
    father.remove()
}
removeButton.addEventListener("click",removeNote);

function editNote(){
    let supernewNote = document.createElement("input");
    let saveButton = document.createElement("button");
    let cancelButton = document.createElement("button");
  
    let father2 = document.createElement("li");

    father2.prepend(cancelButton);
    father2.prepend(saveButton);
    father2.prepend(supernewNote);
    

    
    let oldNote = supernewNote.value = note.innerText;
    father.replaceWith(father2);

    saveButton.innerHTML = "Save";
    cancelButton.innerHTML = "Cancel"
    saveButton.className = "btn";
    cancelButton.className = "btn";

    function saveUpdate(){
        if(isValid(supernewNote.value)){

        father2.replaceWith(father);
        let newValue = supernewNote.value;
        note.innerText = newValue;
        
        }
        else{
            alert("Не используйте спецсимволы");
        }

    }
    saveButton.addEventListener("click", saveUpdate);

    function cancelNote(){
        supernewNote.value = oldNote;
    }
    cancelButton.addEventListener("click",cancelNote);

    }
    editButton.addEventListener("click",editNote);  


}

addButton.addEventListener("click", addNote);


   
 
