
const cart = [];

function addToCart(productName) {
  cart.push(productName);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>السلة فارغة</p>';
  } else {
    const ul = document.createElement('ul');
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    cartDiv.appendChild(ul);
  }
}
