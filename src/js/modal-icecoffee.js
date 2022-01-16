// Задать кнопке открытия модального окна аттрибут data-modal-open="icecoffee"
// Задать backdrop модального окна аттрибуты data-modal="icecoffee", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="icecoffee"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
import createModal from './modal';
const refs = {
  modal: document.querySelector('[data-modal="icecoffee"]'),
  openBtn: document.querySelector('[data-modal-open="icecoffee"]'),
  closeBtn: document.querySelector('[data-modal-close="icecoffee"]'),
};
createModal(refs);
