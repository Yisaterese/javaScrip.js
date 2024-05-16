
const task_List = document.querySelector("#task-list ul");
console.log(task_List);
task_List.addEventListener('click', (e) => {
    console.log(e)
    let className = e.target.className;
    console.log(className);
    if (className === "delete"){
        let li = e.target.parentElement;
        task_List.removeChild(li);
    }
})

const search_task = document.forms["find-task"];
const listOfTasks = document.querySelectorAll("#task-list li .name")
console.log(listOfTasks);
search_task.addEventListener('keyup', (e) => {
    let inputText = e.target.value.toLowerCase();
    listOfTasks.forEach(task => {
        let title = task.textContent.toLowerCase();
        let isIncludeInputText = title.includes(inputText)
        let parentNode  = task.parentNode

        if(isIncludeInputText){
            parentNode.style.display = "block";
        }else {
            parentNode.style.display = "none";
        }
    })
})

const addTask = document.forms["add-task"];
console.log(addTask)
addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = addTask.querySelector("input").value.trim();
    if(inputValue) {
        const liTag = document.createElement("li")
        const checkbox = document.createElement("input");
        const firstSpan = document.createElement("span");
        const secondSpan = document.createElement("span");

        checkbox.type = "checkbox";
        firstSpan.classList = 'name';
        secondSpan.className = 'delete';

        liTag.appendChild(checkbox)
        liTag.appendChild(firstSpan)
        liTag.appendChild(secondSpan)

        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";
        console.log(liTag)
        // bookList.prepend(liTag)adds to the top
        task_List.appendChild(liTag)
        addTask.reset()
    }
})