export function homePage () {

  const content = document.getElementById('content');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = "Jordy's Restaurant";

  const description = document.createElement('div');
  description.classList.add('description');
  description.textContent = "Best Food You'll Ever Eat!!!";

  content.append(title, description)
};
