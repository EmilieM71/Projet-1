function zoomImg(URL, openModal, modal, closeModal) {
    openModal.addEventListener("click", function showElem() {
        modal.style.backgroundImage = `url('${URL}')`;
        modal.style.backgroundRepeat = "no-repeat";
        modal.style.backgroundSize = "cover";
        modal.style.display = "inherit";
    });
    
    closeModal.addEventListener("click", function hideElem() {
        modal.style.display = "none";
    });
}
