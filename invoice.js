document.addEventListener("DOMContentLoaded", function() {
    const selectedProductsList = document.getElementById('selected-products');
    const totalCostElement = document.getElementById('total-cost');

    // Retrieve the selected products and total from localStorage
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
    const total = parseFloat(localStorage.getItem('total')); // Ensure total is a number

    const TAX_RATE = 0.10; // 10% tax

    // Check if there are selected products
    if (selectedProducts && !isNaN(total)) {
        let productHTML = '';

        // Loop through selected products and display them in a list
        selectedProducts.forEach(product => {
            productHTML += `<li>${product.label} - $${product.price}</li>`;
        });

        // Calculate tax and final total
        const taxAmount = total * TAX_RATE;
        const finalTotal = total + taxAmount;

        selectedProductsList.innerHTML = productHTML;
        totalCostElement.textContent = `Subtotal: $${total.toFixed(2)} | Tax: $${taxAmount.toFixed(2)} | Total: $${finalTotal.toFixed(2)}`;
    } else {
        selectedProductsList.innerHTML = '<li>No products selected.</li>';
        totalCostElement.textContent = "$0.00";
    }
});

function confirmPurchase() {
    alert("Thank you for your purchase!");

    // Clear the localStorage data after purchase
    localStorage.removeItem('selectedProducts');
    localStorage.removeItem('total');
}
