// header area

const menuDrop = document.querySelector("header ul li ul");
const dropBtn = document.querySelector("header ul li .dropDown");

dropBtn.addEventListener("click", () => {
    if (menuDrop.classList.contains("hidden")) {
      menuDrop.classList.replace("hidden", "flex");
    } else {
      menuDrop.classList.replace("flex", "hidden");
    }
});

