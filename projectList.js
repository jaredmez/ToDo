export default class ProjectList {
    constructor() {
        this.projects = [];
    }

    addProject(input) {
        this.projects.push(input);
    }

    getProjectList() {
        return this.projects;
    }
}