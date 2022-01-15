(() => {
    const menuBurger = document.querySelector('.header__burger');
    const mobMenu = document.querySelector('.mob-menu');
    const burger = document.querySelector('.burger');

    menuBurger.addEventListener('click', () => {
        mobMenu.classList.toggle('is-hidden');
        menuBurger.classList.toggle('is-hidden');
        burger.classList.toggle('is-hidden');
    });
})()