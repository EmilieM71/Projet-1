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

/* For first image */
const img1OpenModal = document.querySelector("#mosaicImg1");
const urlImg1Open = "../images/fidji/Taveuni2.jpg";
const div11Modal = img1OpenModal.parentElement.nextElementSibling;
const btn1CloseModal = document.querySelector(".close-modal");

img1OpenModal.onclick = zoomImg(urlImg1Open, img1OpenModal, div11Modal, btn1CloseModal);



/* For second image */
const img2OpenModal = document.querySelector("#mosaicImg2");
const urlImg2Open =  "../images/fidji/Garden2.jpg";
// const urlImg2Open = img2OpenModal.getAttribute("src");
const div12Modal = img2OpenModal.parentElement.nextElementSibling;
const btn2CloseModal = document.querySelector(".slider > div > div:nth-child(4) > div > button");

console.log(btn2CloseModal);

img2OpenModal.onclick = zoomImg(urlImg2Open, img2OpenModal, div12Modal, btn2CloseModal)

/* For third image */
const img3OpenModal = document.querySelector("#mosaicImg3");
const urlImg3Open =  img3OpenModal.getAttribute("src");
const div13Modal = img3OpenModal.parentElement.nextElementSibling;
const btn3CloseModal = document.querySelector(".slider > div > div:nth-child(6) > div > button");

img3OpenModal.onclick = zoomImg(urlImg3Open, img3OpenModal, div13Modal, btn3CloseModal);



/* For fourth image */
const img4OpenModal = document.querySelector("#mosaicImg4");
const urlImg4Open =  "../images/fidji/Nanuya2.jpg";
// const urlImg2Open = img2OpenModal.getAttribute("src");
const div4Modal = img4OpenModal.parentElement.nextElementSibling;
const btn4CloseModal = document.querySelector(".slider > div > div:nth-child(8) > div > button");

console.log(btn2CloseModal);

img4OpenModal.onclick = zoomImg(urlImg4Open, img4OpenModal, div4Modal, btn4CloseModal)

// /* For fifth image */
const img5OpenModal = document.querySelector("#mosaicImg5");
const urlImg5Open = img5OpenModal.getAttribute("src");
const div5Modal = img5OpenModal.parentElement.nextElementSibling;
const btn5CloseModal = document.querySelector(".slider > div > div:nth-child(10) > div > button");

img5OpenModal.onclick = zoomImg(urlImg5Open, img5OpenModal, div5Modal, btn5CloseModal);



// /* For sixth image */
const img6OpenModal = document.querySelector("#mosaicImg6");
const urlImg6Open =  "../images/fidji/Mamanuca2.jpg";
const div6Modal = img6OpenModal.parentElement.nextElementSibling;
const btn6CloseModal = document.querySelector(".slider > div > div:nth-child(12) > div > button");

img6OpenModal.onclick = zoomImg(urlImg6Open, img6OpenModal, div6Modal, btn6CloseModal)
