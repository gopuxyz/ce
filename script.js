
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    const validUsername = "Gopal Baghel";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("converter-page").style.display = "block";
    } else {
        document.getElementById("login-error").style.display = "block";
    }
}


function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    let conversionRate = 84.33;

    const convertedAmount = amount * conversionRate;
    document.getElementById("conversion-result").innerText = 
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
