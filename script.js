//seleção de elementos
const toDoForm = document.querySelector("#to_do-form");
const toDoInput = document.querySelector("#to_do-input");
const toDoList = document.querySelector("#to_do-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let oldInputValue;


// Funções
const saveToDo = (text) => {
    const toDo = document.createElement("div");
    toDo.classList.add("to_do");

    const toDoTitle = document.createElement("h3");
    toDoTitle.innerText = text;
    toDo.appendChild(toDoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-to_do");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    toDo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-to_do");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    toDo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-to_do");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toDo.appendChild(deleteBtn);

    toDoList.appendChild(toDo);

    toDoInput.value="";
    toDoInput.focus();
};
const toggleForms = () => {
    editForm.classList.toggle("hide");
    toDoForm.classList.toggle("hide");
    toDoList.classList.toggle("hide");
};
const updateToDo = (editInputValue) => {
    const todos = document.querySelectorAll(".to_do")
    todos.forEach((todo) => {
        let toDoTitle = todo.querySelector ("h3")
        if (toDoTitle.innerText === oldInputValue) {
            toDoTitle.innerText = editInputValue;
        }
})
}

// Eventos
toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputValue = toDoInput.value;
    
    if (inputValue) {
        saveToDo(inputValue);
    }
});

document.addEventListener ("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let toDoTitle;

    if (parentEl && parentEl.querySelector("h3"))
        toDoTitle = parentEl.querySelector("h3").innerText;

    if (targetEl.classList.contains("finish-to_do")) {
        parentEl.classList.toggle("done");
    }
    if (targetEl.classList.contains("remove-to_do")) {
        parentEl.remove();
    }
    if (targetEl.classList.contains("edit-to_do")) {
        toggleForms();
        editInput.value = toDoTitle;
        oldInputValue = toDoTitle;
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;
    if(editInputValue){
        updateToDo (editInputValue);
    };
    toggleForms();
})



