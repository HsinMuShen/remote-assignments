const welcome = document.querySelector(".backImage");
const hideContents = document.querySelector(".more-classification");
const showbtn = document.querySelector(".call");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const icon = document.querySelector(".icon");
const closeIcon = document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".fa-bars");

welcome.style.cursor = "pointer";
welcome.addEventListener("click", (e) => {
  //   console.log(welcome.children[0].innerText);
  welcome.children[0].innerText = "Have a good time!";
});

icon.addEventListener("click", () => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
});

showbtn.addEventListener("click", (e) => {
  //   console.log(showbtn.innerText);
  if (showbtn.innerText === "Call to Action") {
    hideContents.style.display = "flex";
    showbtn.innerText = "Hide Contents";
  } else {
    hideContents.style.display = "none";
    showbtn.innerText = "Call to Action";
  }
});
