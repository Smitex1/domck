// Get the necessary elements
const itemList = document.getElementById("item-list");
const totalPrice = document.getElementById("price");

// Add event listeners to the buttons
itemList.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
  const target = event.target;
  
  if (target.classList.contains("increment")) {
    incrementQuantity(target);
  } else if (target.classList.contains("decrement")) {
    decrementQuantity(target);
  } else if (target.classList.contains("delete")) {
    deleteItem(target);
  } else if (target.classList.contains("like")) {
    toggleLike(target);
  }
}

function incrementQuantity(button) {
  const quantityElement = button.parentNode.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity.toString();
  updateTotalPrice();
}

function decrementQuantity(button) {
  const quantityElement = button.parentNode.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity.toString();
  }
  
  updateTotalPrice();
}

function deleteItem(button) {
  const listItem = button.parentNode.parentNode;
  listItem.remove();
  updateTotalPrice();
}

function toggleLike(button) {
  button.classList.toggle("clicked");
}

function updateTotalPrice() {
  let total = 0;
  const items = document.querySelectorAll("#item-list li");
  
  items.forEach((item) => {
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    total += quantity;
  });
  
  totalPrice.textContent = total.toString();
}
