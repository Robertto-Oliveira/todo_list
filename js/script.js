//seleção de elementos
const toDoForm = document.querySelector("#to_do-form");
const toDoInput = document.querySelector("#to_do-input");
const toDoList = document.querySelector("#to_do-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


// Funções
const saveToDo = (text) => {
    const toDo = document.createElement("div");
    toDo.classList.add("to_do");

    const toDoTitle = document.createElement("h3");
    toDoTitle.innerText = text;
    toDo.appendChild(toDoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-to_Do");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    toDo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-to_do");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    toDo.appendChild(editBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-to_do");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toDo.appendChild(removeBtn);

    toDoList.appendChild(toDo);

    toDoInput.Value="";
}


// Eventos
toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = toDoInput.Value

    if (inputValue) {
        saveToDo(inputValue);
    }
});

