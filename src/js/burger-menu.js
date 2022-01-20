// (() => {
//     const menuBurger = document.querySelector('.header__burger');
//     const mobMenu = document.querySelector('.mob-menu');
//     const burger = document.querySelector('.burger');

//     menuBurger.addEventListener('click', () => {
//         mobMenu.classList.toggle('is-hidden');
//         menuBurger.classList.toggle('is-hidden');
//         burger.classList.toggle('is-hidden');
//     });
// })()
(() => {
    const menuBurger = document.querySelector('.header__burger');
    const mobMenu = document.querySelector('.mob-menu');
    const burger = document.querySelector('.burger');
    const menuItem = document.querySelectorAll('.mobileMenu__item');
    menuBurger.addEventListener('click', () => {
        mobMenu.classList.toggle('is-hidden');
        menuBurger.classList.toggle('is-hidden');
        burger.classList.toggle('is-hidden');
    });
    menuItem.forEach(function(item){
      item.addEventListener('click', function(e) {
         mobMenu.classList.toggle('is-hidden');
        menuBurger.classList.toggle('is-hidden');
        burger.classList.toggle('is-hidden');
      });
   });
})()