// ВАРИАНТ № 1 РАБОТАЕТ ДЛЯ НЕСКОЛЬКИХ КНОПОК С НЕСКОЛЬКИМИ МОДАЛКАМИ
document.addEventListener('DOMContentLoaded', function() {
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.overlay'),
       closeButtons = document.querySelectorAll('.js-modal-close');
   
   
   modalButtons.forEach(function(item){
      
      item.addEventListener('click', function(e) {
         
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
         
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click
   }); // end foreach
    
    closeButtons.forEach(function(item){
   item.addEventListener('click', function() {
      var parentModal = this.parentNode;
      parentModal.classList.remove('active');
      overlay.classList.remove('active');
   });
}); // end foreach
}); // end ready


// ВАРИАНТ № 2 РАБОТАЕТ ТОЛЬКО ДЛЯ 1 КНОПКИ С МОДАЛКОЙ
// document.addEventListener("DOMContentLoaded", () => {
//     const refs = {
//         openBtn: document.querySelector(".js-open-modal"),
//         closeBtn: document.querySelector(".js-modal-close"),
//         modalWindow: document.querySelector(".js-modal"),
//         backdrop: document.querySelector(".overlay")
//     };
//     refs.closeBtn.addEventListener('click', () => {
//         refs.modalWindow.classList.remove("active");
//         refs.backdrop.classList.remove("active");
//     });
//     refs.openBtn.addEventListener('click', () => {
//         refs.modalWindow.classList.add("active");
//         refs.backdrop.classList.add("active");
//     });
// })