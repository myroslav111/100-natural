// Задать кнопке открытия модального окна аттрибут data-modal-open="icecream"
// Задать backdrop модального окна аттрибуты data-modal="icecream", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="icecream"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
import createModal from './modal';
const refs = {
  modal: document.querySelector('[data-modal="icecream"]'),
  openBtn: document.querySelector('[data-modal-open="icecream"]'),
  closeBtn: document.querySelector('[data-modal-close="icecream"]'),
};
createModal(refs);
