function menuBurger() {
    let menu = document.querySelector("header");
    menu.classList.toggle("active");
}

document.querySelector("#burgerMenu").addEventListener("click", menuBurger);