import { DOM_Elements } from "../models/DOM_Elements";
import { fetchData } from "../index";

export const renderProfile = profile => {
  renderInfo(profile);
  renderImage(profile.login, profile.avatar_url);

  // Event Listeners for click on the buttons
  DOM_Elements.button_repos.addEventListener("click", () =>
    fetchData("https://api.github.com/users/btholt/repos?&per_page=100", "list")
  );
  DOM_Elements.button_starred.addEventListener("click", () =>
    fetchData(
      "https://api.github.com/users/btholt/starred?&per_page=100",
      "list"
    )
  );
};

const renderInfo = profile => {
  // 1 - Rendering Repos
  let html_repo = DOM_Elements.repos.textContent.replace(
    "%repos%",
    profile.public_repos
  );
  DOM_Elements.repos.innerHTML = html_repo;

  // 2 - Rendering Followers
  let html_followers = DOM_Elements.followers.textContent.replace(
    "%followers%",
    profile.followers
  );
  DOM_Elements.followers.innerHTML = html_followers;

  // 3 - Rendering Following
  let html_following = DOM_Elements.following.textContent.replace(
    "%following%",
    profile.following
  );
  DOM_Elements.following.innerHTML = html_following;
};

const renderImage = (name, image) => {
  DOM_Elements.image.alt = DOM_Elements.image.alt.replace("%name%", `${name}`);
  DOM_Elements.image.src = `${image}`;
};
