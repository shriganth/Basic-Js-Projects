function Calculate() {

    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("interest");
    const yearInput = document.getElementById("years");


    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let year = Number(yearInput.value);

    const result = principal * Math.pow((1 + rate/1), 1 + year);

    totalAmount.textContent = "$" + result;
}