// Задать кнопке открытия модального окна аттрибут data-modal-open="map"
// Задать backdrop модального окна аттрибуты data-modal="map", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="map"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
import createModal from './modal';
const refs = {
  modal: document.querySelector('[data-modal="map"]'),
  openBtn: document.querySelector('[data-modal-open="map"]'),
  closeBtn: document.querySelector('[data-modal-close="map"]'),
};
createModal(refs);
