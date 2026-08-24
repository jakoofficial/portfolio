// let navOpen = true;
const navActionButton = document.getElementById("navActionButton");
const navigation = document.getElementById("navigation");

navActionButton.addEventListener("click", () => {
  navigation.classList.toggle("nav_close");
});

const pagesArr = [
  "Pages/welcome.html",
  "Pages/about.html",
  "Pages/projects.html",
  "Pages/contact.html",
];
$(document).ready(function () {
  let i = 0;
  while (i < pagesArr.length) {
    $("#container").append($("<section>").load(pagesArr[i]));
    i++;
  }
});
