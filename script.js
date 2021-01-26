const loginButton = document.getElementById("login-button").addEventListener("click", function(){
    document.getElementById("login-area").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
})

// transaction area 

function inputAmount (id) {
    const amount = parseFloat(document.getElementById(id).value);
    return amount;
}

function updateSpan (id, amount){
    const transaction = parseFloat(document.getElementById(id).innerText);
    const total = amount + transaction;
    document.getElementById(id).innerText = total;
}

const depositButton = document.getElementById("deposit-button").addEventListener("click", function(){
    const amount = inputAmount ("deposit-amount");
    updateSpan("current-deposit", amount);
    updateSpan("current-balance", amount);
    document.getElementById("deposit-amount").value = "";
})

const withdrawButton = document.getElementById("withdraw-button").addEventListener("click", function(){
    const amount = inputAmount ("withdraw-amount");
    updateSpan("current-withdraw", amount);
    updateSpan("current-balance", -1 * amount);
    document.getElementById("withdraw-amount").value = "";
})

