import "../sass/main.scss";
import { renderProfile } from "./views/renderProfile";
import { renderList } from "./views/renderList";

/* 
  The function takes 2 parameters:
  url - Contains the address to be fetched
  type - It can be profile or list, based on the type a function will be called for render either a Profile or a List of Repos or Starreds 

  I made this unique function for follow the DRY principle

*/
export const fetchData = (url, type) => {
  let dataFetched;
  fetch(url)
    .then(response => response.json())
    .then(data => (dataFetched = data))
    .then(() => {
      switch (type) {
        case "profile":
          renderProfile(dataFetched);
          break;
        case "list":
          renderList(dataFetched);
          break;
      }
    });
};

fetchData("https://api.github.com/users/btholt", "profile");
