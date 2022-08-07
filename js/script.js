const nav = document.querySelector('nav');
const navButtons = nav.querySelectorAll('a');


navButtons.forEach((btn) => {
    btn.addEventListener('click',(e)=> {
        const activeButton = document.querySelector('.nav__button_active');
        activeButton.classList.remove('nav__button_active');
        btn.classList.add("nav__button_active");
    });
});


console.log();