const nav = document.querySelector('nav');
const navButtons = nav.querySelectorAll('a');


const activede = (el) => {
    const activeButton = document.querySelector('.nav__button_active');
    activeButton.classList.remove('nav__button_active');
    el.classList.add("nav__button_active");
}

navButtons.forEach((btn) => {
    btn.addEventListener('click',(e)=> {
        activede(btn);
    });
});

if(window.screen.width >= 1220) {
    activede(document.querySelector('.nav__button-brends'));
}

console.log();