const btnMenu = document.querySelector(".fa-bars");
const header = document.querySelector("header");

btnMenu.addEventListener("click", () => {
    // Alterna a classe que expande o menu
    header.classList.toggle("expande-menu");
});
