let products = [
  {
    id: 1,
    name: 'Checkin Burger',
    price: 1200,
    category: 'food'
  },
  {
    id: 2,
    name: 'Pizza',
    price: 1400,
    category: 'food'
  },
  {
    id: 3,
    name: 'Orange Juice',
    price: 900,
    category: 'drink'
  },
  {
    id: 4,
    name: 'Coke',
    price: 900,
    category: 'drink'
  },
  {
    id: 5,
    name: 'Water',
    price: 500,
    category: 'drink'
  },
  {
    id: 6,
    name: 'Salade',
    price: 800,
    category: 'food'
  }
];

const cartDiv = document.getElementById("cart-items");

const updateUi = (product) => {
  const cartItem = document.createElement("p");
  cartItem.innerHTML = `<strong>Name : </strong>${product.name}`;
  cartDiv.appendChild(cartItem);
};

const productSection = document.getElementById("product-section");

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  
  productCard.innerHTML = `
    <h2>${product.name}</h2>
    <p>$${(product.price / 100).toFixed(2)}</p>
    <span class="bold"><p>${product.category}</p></span>
  `;

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("addToCart-s");
  addToCartBtn.id = `addToCart${product.id}`;
  addToCartBtn.textContent = "Add to cart";
  addToCartBtn.addEventListener('click', () => updateUi(product));

  productCard.appendChild(addToCartBtn);
  productSection.appendChild(productCard);
});

const cartBtn = document.getElementById("cart");

let isClicked = false;

cartBtn.addEventListener('click', () => {
  if (!isClicked) {
    cartDiv.style.display = "block";
    isClicked = true;
  } else {
    cartDiv.style.display = "none";
    isClicked = false;
  }
});

const clearButton = document.createElement("button");

clearButton.classList.add("clear-cart");

clearButton.id = "clear";

clearButton.innerText = "Clear cart";

cartDiv.appendChild(clearButton);

clearButton.addEventListener('click',() =>{
  cartDiv.innerHTML = "";
  cartDiv.appendChild(clearButton);
});