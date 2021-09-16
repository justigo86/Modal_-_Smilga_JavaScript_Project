// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const button = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const closes = document.querySelector(".close-btn");

const openOverlay = () => {
    overlay.classList.add("open-modal")
}

const closeOverlay = () => {
    overlay.classList.remove("open-modal");
}

button.addEventListener("click", openOverlay);
closes.addEventListener("click", closeOverlay);