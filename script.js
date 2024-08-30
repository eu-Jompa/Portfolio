const btnMenu = document.querySelector(".fa-bars");
const header = document.querySelector(".header");
const navText = document.querySelectorAll(".text-link");

btnMenu.addEventListener("click", openMenu);

function openMenu() {
    header.classList.add("expande-menu");
    navText.forEach(element => {
        element.classList.add("open-menu");
    });
}

function closeMenu() {
    header.style.width = "100px";
    navText.forEach(element => {
        element.style.display = "none";
    });
}