
//Project List Control

function onload() {
    document.querySelector(".add-project-btn").addEventListener("click", addNewProject);
    projectPopupEventListeners();
}

function addNewProject() {
    showAddProjectPopup();
}

//Project Popup Control/Display
const showAddProjectPopup = () => {
    document.querySelector('.project-input-popup').style.display = "block"
};

//Add event listeners to "ADD" and "Cancel" buttons on "Add proejct" form
function projectPopupEventListeners() {
    const projectAddBtn = document.querySelector(".project-add-btn");
    const projectCancelBtn = document.querySelector(".project-cancel-btn");
    projectAddBtn.addEventListener('click', handleAddProject);
    projectCancelBtn.addEventListener('click', handleCancelProject);
}

//Event Handlers
function handleAddProject() {
    addToProjectList(document.querySelector('.project-input').value)
}

function handleCancelProject() {
    projectInputEl = document.querySelector(".project-input")
    projectInputEl.value = "";
    document.querySelector(".project-input-popup").style.display = "none";
}


//Create new element from project popup and append to project list
function addToProjectList(newProjectTitle) {
    projectTaskEl = document.querySelector(".project-tasks");    
    newListEl = document.createElement("li");
    newListEl.innerText = newProjectTitle;
    projectTaskEl.append(newListEl);
    handleCancelProject();
}

onload();


//-----------------code below is unused----------------

//constructor for a ToDo item
// class todoItem {
//     constructor(title, description, dueDate, priority) {
//         this.title = title;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//     }
// }

// class projectTask {
//     constructor(title) {
//         this.title = title;
//     }
// }
