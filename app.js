const menu__items = document.querySelector (".menu__items");
const toggle = document.querySelector (".toggle");
toggle.addEventListener("click" , () => {
    menu__items.classList.toggle("menu__navegador__visible");
});