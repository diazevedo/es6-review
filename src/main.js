import api from "./api";
api.getUserInfo("diazevedo");

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

import { sum } from "./functions";
console.log(sum(1, 2));

const myPromiseOne = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("My Promise One"), 2000);
  });

const myPromiseTwo = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("My Promise Two"), 2000);
  });

async function executePromise() {
  const responseOne = await myPromiseOne();
  const responseTwo = await myPromiseTwo();
}

executePromise();
