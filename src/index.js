// ITERATION 1
const ALL_PRODUCTS = document.querySelectorAll(".product");
console.log(ALL_PRODUCTS);
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const subtotal = product.querySelector(".subtotal span");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const result = price.innerHTML * quantity.value;
  console.log(ALL_PRODUCTS);
  return (subtotal.innerHTML = result);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2

  let totalValue = document.querySelector("#total-value span");
  let totalSum = 0;
  console.log(ALL_PRODUCTS);
  ALL_PRODUCTS.forEach((product) => {
    updateSubtotal(product);
    totalSum += updateSubtotal(product);
  });

  totalValue.innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log("The target in remove is:", target);
  target.parentNode.removeChild(target);

  const total = document.querySelector("#total-value span");
  const subtotal = target.querySelector(".subtotal span");

  total.innerHTML = total.innerHTML - subtotal.innerHTML;
  console.log(ALL_PRODUCTS);
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector(".product-name input");
  const price = document.querySelector(".product-price input");

  const cart = document.querySelector("tbody");
  const newProduct = document.createElement("tr");

  newProduct.innerHTML = `<tr class="product">
  <td class="name">
  <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`;

  cart.appendChild(newProduct);

  name.value = "";
  price.value = "";

  const removeButton = newProduct.querySelector(".btn-remove");
  removeButton.addEventListener("click", removeProduct);

  newProduct.addEventListener("change", () => updateSubtotal(newProduct));
  console.log(ALL_PRODUCTS);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  ALL_PRODUCTS.forEach((product) => {
    product.addEventListener("change", () => updateSubtotal(product));
  });
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });
  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
