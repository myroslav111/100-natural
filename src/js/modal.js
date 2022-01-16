export default function createModal(refs) {
  refs.openBtn.addEventListener('click', onModalOpenBtnClick);
  refs.openBtnMobileMenu?.addEventListener('click', onModalOpenBtnClick);
  function onModalOpenBtnClick() {
    openModal();
    refs.closeBtn.addEventListener('click', closeModal);
    refs.modal.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onEscDown);
  }
  function openModal() {
    refs.modal.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
  }
  function closeModal() {
    refs.modal.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    refs.closeBtn.removeEventListener('click', closeModal);
    refs.modal.removeEventListener('click', onBackdropClick);
    document.removeEventListener('keydown', onEscDown);
  }
  function onBackdropClick(e) {
    if (e.target !== refs.modal) return;
    closeModal();
  }
  function onEscDown(e) {
    if (e.code !== 'Escape') return;
    closeModal();
  }
}
