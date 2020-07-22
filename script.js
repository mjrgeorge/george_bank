//LOGIN BUTTON ADD EVENT LISTENER
document.getElementById("login").addEventListener("click", function () {
    document.getElementById("login_area").style.display = "none";
    document.getElementById("transaction_area").style.display = "block";
});

//DEPOSIT BUTTON ADD EVENT LISTENER
document.getElementById("addDeposit").addEventListener("click", function () {
    let totalDeposit = inputValue("inputDepositAmount") + textToValue("depositAmount");
    document.getElementById("depositAmount").innerText = totalDeposit;

    let totalBlanc = inputValue("inputDepositAmount") + textToValue("blanchAmount");
    document.getElementById("blanchAmount").innerText = totalBlanc;

    document.getElementById("inputDepositAmount").value = "";
})

//WITHDRAW BUTTON ADD EVENT LISTENER
document.getElementById("addWithdraw").addEventListener("click", function () {
    let totalWithdraw = inputValue("inputWithdrawAmount") + textToValue("withdrawAmount");
    document.getElementById("withdrawAmount").innerText = totalWithdraw;

    let totalBlanc = -1 * inputValue("inputWithdrawAmount") + textToValue("blanchAmount");
    document.getElementById("blanchAmount").innerText = totalBlanc;

    document.getElementById("inputWithdrawAmount").value = "";
})

//FUNCTION
function inputValue(id) {
    let number = document.getElementById(id).value;
    if (number < 0 || number == "" || number == " ") {
        return 0;
    }
    number = parseFloat(number);
    return number;
}

function textToValue(id) {
    let number = document.getElementById(id).innerText;
    number = parseFloat(number);
    return number;
}