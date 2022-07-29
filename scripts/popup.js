const popupMenu = document.getElementById("showMenu");
const popMenu = document.getElementById("menu");

popupMenu.addEventListener("click", () => {
  popMenu.classList.add("show");
});

function closeMenu() {
  popMenu.classList.remove("show");
}

const popupContact = document.querySelector('.popup-contact');

setTimeout(() => {
  popupContact.classList.add("show");
}, 5000);

function closeContact() {
  popupContact.classList.remove("show");
}