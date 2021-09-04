import Project from './project.js'
import ProjectList from './projectList.js'


    
    export function onload() {
        startUpEvntListeners();
        projectPopupEventListeners();
    }

    let projects = new ProjectList();

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
        document.querySelector(".project-cancel-btn").addEventListener('click', handleCancelProject);
    }
    
    //Event Handlers for add new project popup
    function handleAddProject() {
        const inputResult = document.querySelector('.project-input').value;
        addToProjectList(inputResult);
        addProjectSpecificContent(inputResult);
    }
    
    function handleCancelProject() {
        document.querySelector(".project-input").value = "";
        document.querySelector(".project-input-popup").style.display = "none";
    }
    
    
    //Create new element from project popup and append to project list
    const projectTaskEl = document.querySelector(".project-tasks"); 
    let projectListArr = projects.getProjectList();
    function addToProjectList(newProjectTitle) {
        projectTaskEl.innerHTML = '';
        projects.addProject(new Project(newProjectTitle));   
        projectListArr.forEach(element => { 
            const newListEl = document.createElement("li");
            newListEl.innerText = element.getName();
            projectTaskEl.append(newListEl);
        }) 
        handleCancelProject();
    }
    
    
    
    
    
    
    
    //Project specific content --> functions used when new project is added
    function addProjectSpecificContent(title) {
        console.log(title);
        const projectContentContainer = document.querySelector(".project-content-container");
        projectContentContainer.innerHTML += `
            <div class="${title}">
                <h2> ${title} </h2>
                <button>Add Task </button>
            </div>
            `
        //add button functionality to <li> element under 'Projects'
        //create elements in main page
        //tie main page elements to this project
        //main page content initially needs to show Title and 'Add Task'
    
    
    }
    


