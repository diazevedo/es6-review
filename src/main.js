import api from "./api";

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.querySelector("#repo-form");
    this.inputEl = document.querySelector("input[name=repository]");
    this.listEl = document.querySelector("#repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();
    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) return;
    //Rocketseat/bootcamp-nodejs-desafio-01
    const response = await api.get(`/repos/${repoInput}`);
    const {
      name,
      owner: { avatar_url },
      description,
      html_url
    } = response.data;
    console.log(response);
    this.repositories.push({
      name,
      description,
      avatar_url,
      html_url
    });

    this.render();
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("h4");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Access"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);

      this.inputEl.value = "";
    });
  }
}

new App();
