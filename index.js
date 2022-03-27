const navbarToggleLabel = document.querySelector(".navbar-toggle-label")
const hamburger = document.querySelector(".hamburger")
const productsPanel = document.querySelector('#products-panel')
const products = [
  {
    id: 1,
    image: 'images/baseball-cap-mobile.png',
    name: 'White baseball cap',
    description: 'White baseball cap made of anti-bacterial cloth, no mark on it.',
    price: '20.00'
  },
  {
    id: 2,
    image: "images/baseball-glove-mobile.png",
    name: 'Catch & Throw handmade glove',
    description: 'This kind of glove is made by experienced craftsman.And the surface of the glove is coated by special material to prevent scratches.',
    price: '200.00'
  },
  {
    id: 3,
    image: "images/baseball-mobile.png",
    name: 'Premium grade baseball(hard)',
    description: 'Hard core ball with high grade leather.', price: '15.00'
  }]


// change the styles when the hamburger clicked

function onHamburgerClicked(event) {
  hamburger.classList.toggle("color-changed")
}
navbarToggleLabel.addEventListener('click', onHamburgerClicked)

// render the products

function renderProducts(products) {
  let rawHTML = ""

  products.forEach(product => {
    rawHTML += `<div class="single-product">
          <img src="${product.image}" alt="baseball-glove" />
          <span class="product-name">${product.name}</span>
          <span>Description:</span>
          <i>
            ${product.description}
          </i>
          <span class="product-price">USD ${product.price}</span>
          <button class="add-to-cart">+</button>
        </div>`
  })

  productsPanel.innerHTML = rawHTML
}
renderProducts(products)

// change the styles after the add buttons clicked

function onAddButtonClicked(event) {
  if (event.target.className.includes("add-to-cart")) {
    event.target.classList.toggle("remove")
  } else {
    return
  }

  if (event.target.innerHTML === "+") {
    event.target.innerHTML = "&#215;"
  } else {
    event.target.innerHTML = "+"
  }
}
productsPanel.addEventListener('click', onAddButtonClicked)


