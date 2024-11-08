document.getElementById("quantity").addEventListener("input", function () {
    const price = 49000;
    const quantity = parseInt(this.value) || 0;
    const totalPrice = price * quantity;
    document.querySelector(".total-price").textContent = `Total Price: Rs. ${totalPrice}`;
});
