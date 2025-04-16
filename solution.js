const container = document.querySelector(".container");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");
addBtn.addEventListener("click", () => {
    
    let task = input.value;
    let newTaskItem = document.createElement("li");
    if(task !== "") {
        newTaskItem.innerText += task;
        container.appendChild(newTaskItem);
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete"
        deleteBtn.addEventListener("click", () => {
            newTaskItem.remove();
        })
        newTaskItem.appendChild(deleteBtn);
        deleteBtn.style.marginLeft = "20px"
        input.value = ""
    } else {
        alert("please enter a task")
    }
})