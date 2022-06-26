const navbarToggleLabel = document.querySelector(".navbar-toggle-label")
const hamburger = document.querySelector(".hamburger")

// change the styles when the hamburger clicked

function onHamburgerClicked(event) {
  hamburger.classList.toggle("color-changed")
}
navbarToggleLabel.addEventListener('click', onHamburgerClicked)






