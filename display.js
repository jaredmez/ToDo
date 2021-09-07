import Project from './project.js'
import ProjectList from './projectList.js'
import Task from './task.js'


    
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

    //handles DOM to show specific project tasks when clicked from left menu
    function projectBtnHandler(e) {
        console.log(projectlist.getProjectList());
        console.log(e.currentTarget.innerHTML);
        projectlist.getProjectList().forEach(proj => {
            if (proj.getName() === e.currentTarget.innerHTML) {
                const projectContentContainer = document.querySelector(".project-content-container");
                projectContentContainer.innerHTML = `
                    <div class="projInfo">
                        <h2 class="projTitle">${proj.getName()}</h2>
                        <button class="taskBtn">Add Task </button>
                        <div class="task-list-container"></div>

                        <div class="task-form-container">
                            <input class="task-input-area">
                            <button class="addTaskBtn">Add</button>
                            <button class="cancelTaskBtn">Cancel</button>
                        </div>
                    </div>
                    `;
            }
        });
        addTaskEvntListener();
        showProjectTasks();
    }

    //Add event listener to "Add Task" button
    function addTaskEvntListener() {
        document.querySelector(".taskBtn").addEventListener("click", addTaskHandler)
    }

    function addTaskHandler() {
        showTaskForm();
        hideMainTaskBtn();
    }

    function hideMainTaskBtn() {
        document.querySelector(".taskBtn").style.display = "none";
    }
    function showMainTaskBtn() {
        document.querySelector(".taskBtn").style.display = "block";
        
    }

    function showTaskForm() {
        // const projectTasksEl = document.querySelector(".projInfo");
        // const popupEl = document.createElement('div');
        // popupEl.classList.add('task-form-container');
        // popupEl.innerHTML = `
        //     <input class="task-input-area">
        //     <button class="addTaskBtn">Add</button>
        //     <button class="cancelTaskBtn">Cancel</button>
        //     `;
        // projectTasksEl.append(popupEl);
        document.querySelector(".task-form-container").style.display = 'block';
        setTaskBtnListeners();
    }

    function setTaskBtnListeners() {
        document.querySelector(".addTaskBtn").addEventListener("click", addTaskToProject);
        document.querySelector(".cancelTaskBtn").addEventListener("click", closeTaskForm);
    }


    //take task input data and store within respective project
    function addTaskToProject() {
        const taskInput = document.querySelector(".task-input-area").value;
        const projName = document.querySelector(".projTitle").innerText;
        
        projectlist.getProjectList().forEach(proj => {
            if (proj.getName() === projName) {
                proj.addTask(new Task(taskInput));
            }
        });
        closeTaskForm();
        showProjectTasks();
    }

    function showProjectTasks() {
        const currentProjectListEl = document.querySelector(".task-list-container");
        currentProjectListEl.innerHTML = '';
        const projectTitle = document.querySelector(".projTitle").innerText;
        const projectContent = projectlist.getProject(projectTitle);
        //console.log(projectContent);
        projectContent.getTasks().forEach(task => {
            const taskEl = document.createElement("div");
            taskEl.innerHTML = task.getTaskName();
            currentProjectListEl.append(taskEl);
        })
    }

    function closeTaskForm() {
        document.querySelector(".task-input-area").innerHTML = "";
        document.querySelector(".task-form-container").style.display = "none";
        showMainTaskBtn();
        ///////////////////////////
    }


    


