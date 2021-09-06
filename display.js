import Project from './project.js'
import ProjectList from './projectList.js'


    
    export function onload() {
        startUpEvntListeners();
        projectPopupEventListeners();
    }

    let projectlist = new ProjectList();

    function startUpEvntListeners() {
        projectPopupEventListeners();
        document.querySelector(".add-project-btn").addEventListener("click", addNewProject);
    }

    function addNewProject() {
        showAddProjectPopup();
    }
    
    //Project Popup Control/Display
    const showAddProjectPopup = () => {
        document.querySelector('.project-input-popup').style.display = "block"
    };
    
    //Add event listeners to "ADD" and "Cancel" buttons on "Add project" form
    function projectPopupEventListeners() {
        document.querySelector(".project-add-btn").addEventListener('click', handleAddProject);
        document.querySelector(".project-cancel-btn").addEventListener('click', closePopupHandler);
    }
    
    //Event Handlers for add new project popup
    function handleAddProject() {
        const inputResult = document.querySelector('.project-input').value;
        addToProjectList(inputResult);
    }
    
    function closePopupHandler() {
        document.querySelector(".project-input").value = "";
        document.querySelector(".project-input-popup").style.display = "none";
    }
    
    //store user input (new data) in projectlist object, and call DOM functions
    function addToProjectList(newProjectTitle) {
        projectlist.addProject(new Project(newProjectTitle));   
        closePopupHandler();
        populateProjectList();
        //populateProjectContent();
    }
    //Create new elements from project list data and append DOM
    function populateProjectList() {
        const projectEl = document.querySelector(".project-tasks");
        projectEl.innerHTML = "";

        const projectArr = projectlist.getProjectList();
        projectArr.forEach(proj => {
            const newPT = document.createElement("li");
            newPT.innerText = proj.getName();
            newPT.addEventListener('click', projectBtnHandler);
            projectEl.append(newPT);
        })
    }

    //Add event listener to "Add Task" button
    function addTaskEvntListener() {
        document.querySelector(".taskBtn").addEventListener("click", addTaskHandler)
    }

    function addTaskHandler() {
        showTaskForm();
    }

    //handles DOM to show specific project tasks when clicked from left menu
    function projectBtnHandler(e) {
        projectlist.getProjectList().forEach(proj => {
            if (proj.getName() === e.currentTarget.innerHTML) {
                const projectContentContainer = document.querySelector(".project-content-container");
                projectContentContainer.innerHTML = `
                    <div class="projInfo">
                        <h2 class="projTitle"> ${proj.getName()} </h2>
                        <button class="taskBtn">Add Task </button>
                    </div>
                    `
            }
        addTaskEvntListener();
        //write a function that populates project tasks 
        });
        console.log(projectlist);
        console.log(e.currentTarget.innerHTML);
    }
    
    function showTaskForm() {
        const projectTasksEl = document.querySelector(".projInfo");
        const popupEl = document.createElement('div');
        popupEl.innerHTML = `
            <input class="task-input-area">
            <button class="addTaskBtn">Add</button>
            <button class="cancelTaskBtn">Cancel</button>
            `;
        projectTasksEl.append(popupEl);
    }


