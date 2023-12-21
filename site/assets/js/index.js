const modal = document.getElementById("modal");
const btnOpen = document.getElementById("modal-open");
const btnClose = document.getElementById("modal-close");

btnOpen.addEventListener('click', () => {
    modal.showModal();
});

btnClose.addEventListener('click', () => {
    modal.close();
});