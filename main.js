
//Project Task Control

function onload() {
    document.querySelector(".add-project-btn").addEventListener("click", addNewProject);
    projectAddBtn = document.querySelector(".project-add-btn");
    projectCancelBtn = document.querySelector(".project-cancel-btn");
    projectTaskEl = document.querySelector(".project-tasks");
    projectPopupEventListeners();
}



function addNewProject() {
    showProjectPopup();
    //need to create a new list element
    //show input for user to enter project title
    //have a submit button/cancel button along with input
    //on submit generate the project item 
    //do I call the object? whats in the object? 
 
}

const showProjectPopup = () => {
    document.querySelector('.project-input-popup').style.display = "block"
};

function projectPopupEventListeners() {
    projectAddBtn.addEventListener('click', handleAddProject);
    //projectCancelBtn.addEventListener('click', handleCancelProject);
}

//event listners
function handleAddProject() {
    title = document.querySelector('.project-input')
    //projecTitle = e.target.value;
    console.log(title.value);
    newProject = document.createElement("li")
}



//constructor for a ToDo item
class todoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class projectTask {
    constructor(title) {
        this.title = title;
    }
}

onload();
