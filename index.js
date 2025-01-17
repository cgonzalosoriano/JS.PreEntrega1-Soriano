function calculateTotal() {
    const basePrice = parseFloat(document.getElementById('basePrice').textContent);
    const shippingCost = parseFloat(document.getElementById('shipping').value);
    const installments = parseInt(document.getElementById('installments').value);
    const annualInterestRate = 0.60;
    
    if (isNaN(installments) || installments <= 0) {
        alert("Por favor, introduce un número válido de cuotas.");
        return;
    }

    const totalCost = basePrice + shippingCost;
    const monthlyInterestRate = annualInterestRate / 12;
    const installmentAmount = (totalCost * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -installments));
    
    let results = document.getElementById('results');
    results.innerHTML = `<h3>Detalle de Pago</h3>`;
    let balance = totalCost;
    
    for (let i = 1; i <= installments; i++) {
        let interest = balance * monthlyInterestRate;
        let principal = installmentAmount - interest;
        balance -= principal;
        results.innerHTML += `Cuota ${i}: $${installmentAmount.toFixed(2)} (Principal: $${principal.toFixed(2)}, Interés: $${interest.toFixed(2)})<br>`;
    }
}
