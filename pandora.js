const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".menu_open_btn");
const pandora_header = document.querySelector(".pandora");
const content = document.querySelector(".content");
const pandora = document.querySelector(".pandora");
const theEnd = document.querySelector("#theEnd");


window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    content.classList.remove('active');
    menu.classList.remove('active');
    pandora.classList.remove('active');

    console.log(scroll);

    if (scroll > 0) {
        pandora_header.classList.add('scroll');
    } else {
        pandora_header.classList.remove('scroll');
    }

    if (scroll > 4000) {
        theEnd.classList.add('active');
    } else {
        theEnd.classList.remove('active');
    }

});

menuOpen.addEventListener("click", () => {

    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        content.classList.add('active');
        pandora.classList.add('active');

    } else {
        menu.classList.remove('active');
        content.classList.remove('active');
        pandora.classList.remove('active');
    }
});
