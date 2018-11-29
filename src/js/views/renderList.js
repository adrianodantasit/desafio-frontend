import { DOM_Elements } from "../models/DOM_Elements";

export let renderList = list => {
  //Resetting the list container for new elements
  DOM_Elements.list_repos.innerHTML = `<h3 class="heading-tertiary">Lista de Repositórios</h3>`;

  list.map(element => {
    let html = `<li class="list__element"><a href="${
      element.html_url
    }" class="list__link" target="_blank" > ${element.name}</a></li>`;
    DOM_Elements.list_repos.insertAdjacentHTML("beforeend", html);
  });
};
