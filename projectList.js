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

    getProject(input) {
        let result;
        this.projects.forEach(proj => {
            if (proj.getName() === input) {
                result = proj;
            }
        });
        return result;
    }
}