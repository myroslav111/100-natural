// Задать кнопке открытия модального окна аттрибут data-modal-open="buy"
// Задать кнопке открытия модального окна в мобильном меню аттрибут data-modal-open="buy-mobile-menu"
// Задать backdrop модального окна аттрибуты data-modal="buy", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="buy"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
import createModal from './modal';
const refs = {
  modal: document.querySelector('[data-modal="buy"]'),
  openBtn: document.querySelector('[data-modal-open="buy"]'),
  openBtnMobileMenu: document.querySelector('[data-modal-open="buy-mobile-menu"]'),
  closeBtn: document.querySelector('[data-modal-close="buy"]'),
};
createModal(refs);
