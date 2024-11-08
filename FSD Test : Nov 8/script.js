document.getElementById("quantity").addEventListener("input", function () {
    const price = 49000;
    const quantity = parseInt(this.value) || 0;
    const totalPrice = price * quantity;
    document.querySelector(".total-price").textContent = `Total Price: Rs. ${totalPrice}`;
});

document.querySelector(".buy-now-button").addEventListener("click", function () {
    const quantity = parseInt(document.getElementById("quantity").value) || 1;
    const price = 49000;
    const totalPrice = price * quantity;
    alert(`${quantity} items worth Rs. ${totalPrice} have been added to your cart.`);
});
