const currencyOne = document.querySelector("#currencyOne");
const currencyTwo = document.querySelector("#currencyTwo");
const amountOne = document.querySelector("#currencyOneInput");
const amountTwo = document.querySelector("#currencyTwoInput");

//testing if elemets are correct, works
console.log(currencyOne);
console.log(currencyTwo);
console.log(amountOne);
console.log(amountTwo);



//event listener for dropdown and inputs
currencyOne.addEventListener("onchange", calculateExchange);
currencyTwo.addEventListener("onchange", calculateExchange);
amountOne.addEventListener("oninput", calculateExchange);
amountTwo.addEventListener("oninput", calculateExchange);


