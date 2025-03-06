const cardHolderInput = document.getElementById("cardholder-name");
const cardHolderDisplay = document.querySelector(".card-name");

const cardNumberInput = document.getElementById("card-number");
const cardNumberDisplay = document.querySelector(".card-number");

const cardCvcInput = document.getElementById("cvc");
const cardCvcDisplay = document.querySelector(".card-cvc");

const expiryMonthInput = document.getElementById("expiry-month");
const expiryYearInput = document.getElementById("expiry-year");
const expiryCardDisplay = document.querySelector(".card-expiry");

const cardForm = document.querySelector(".card-form");
const successMessage = document.querySelector(".success-message");
const continueButton = document.querySelector(".continue-btn");

cardForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const cardNumber = cardNumberInput.value;
    const cardHolder = cardHolderInput.value;
    const expiryDate = expiryMonthInput.value;
    const expiryYear = expiryYearInput.value;
    const cvc = cardCvcInput.value;
    
    if (cardNumber && cardHolder && expiryDate && expiryYear && cvc) {
        cardForm.style.display = "none";
        successMessage.style.display = "flex";
    }
});

continueButton.addEventListener("click", function() {
    successMessage.style.display = "none";
    cardForm.style.display = "block";
    cardForm.reset();
    
    cardHolderDisplay.textContent = "JANE APPLESEED";
    cardNumberDisplay.textContent = "0000 0000 0000 0000";
    expiryCardDisplay.textContent = "00/00";
    cardCvcDisplay.textContent = "000";
});

function fixCardnumber(value) {
    let format = "";
    
    const numbers = value.replace(/\D/g, "");
    
    for (let i = 0; i < numbers.length; i++) {
        if (i > 0 && i % 4 === 0) {
            format += " ";
        }
        format += numbers[i];
    }
    return format;
}

cardNumberInput.addEventListener("input", function () {
    const format = fixCardnumber(this.value);
    
    this.value = format;
    
    cardNumberDisplay.textContent = format || "0000 0000 0000 0000";
});

cardHolderInput.addEventListener("input", function () {
    cardHolderDisplay.textContent = this.value.toUpperCase() || "JANE APPLESEED";
});

function expiry() {
    const month = expiryMonthInput.value.padStart(2, "0");
    const year = expiryYearInput.value.padStart(2, "0");
    expiryCardDisplay.textContent = `${month}/${year}`;
}

expiryMonthInput.addEventListener("input", expiry);
expiryYearInput.addEventListener("input", expiry);

cardCvcInput.addEventListener("input", function() {
    cardCvcDisplay.textContent = this.value || "000";
});
