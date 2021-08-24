//constructor for a ToDo item

class todoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

itemOne = new todoItem('Read OOP Article', 'Get acquainted with solid principles', 'However Long', 'Really Important');
console.log(itemOne);

//show todoItem

document.body.style.background = "pink";
setTimeout(() => document.body.style.background = "",5000);