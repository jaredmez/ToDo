import Task from './task.js'

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.tasks;
    }

    addTask(input) {
        this.tasks.push(input);
    }

    removeTask(taskName) {
        this.tasks = this.tasks.filter(task => {
            return task.getTaskName() != taskName;
        })
    }
}