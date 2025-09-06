const menu = document.querySelector(".header-menu");
const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

function showMenu(){
    menu.classList.add("show-menu");
    hamburgerBtn.classList.add("hide-hamburger");
    closeBtn.classList.add("show-close");
    document.body.style.overflow ="hidden";
}

function hideMenu(){
    menu.classList.remove("show-menu");
    hamburgerBtn.classList.remove("hide-hamburger");
    closeBtn.classList.remove("show-close");
    document.body.style.overflow ="auto";
}

hamburgerBtn.addEventListener("click",showMenu);
closeBtn.addEventListener("click",hideMenu);


