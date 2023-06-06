// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3

  let totalDOM = document.querySelector("#total-value");
  let subtotalDOM = document.querySelectorAll(".subtotal span");
  let total = 0;
  for (let i = 0; i < subtotalDOM.length; i++) {
    total += Number(subtotalDOM[i].innerText);
  }

  totalDOM.innerText = total;

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // console.log("probando")
  const inputsDOM = document.querySelectorAll(".create-product input");
  const nameInputDOM = inputsDOM.item(0);
  const priceInputDOM = inputsDOM.item(1);
  text = nameInputDOM.value;
  price = priceInputDOM.value;

  // console.log(nameInputDOM, priceInputDOM)
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  let allRemoveDOM = document.querySelectorAll(".btn-remove");
  allRemoveDOM.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const createBtnDOM = document.querySelector("#create");
  createBtnDOM.addEventListener("click", createProduct);
});
