class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push(`"New Todo ${this.todos.length}`);
    console.log(this.todos);
  }
}

const myList = new TodoList();

const $button = document.getElementById("button");
$button.onclick = () => myList.addTodo();
