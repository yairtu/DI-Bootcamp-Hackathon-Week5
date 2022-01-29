const currencyOne = document.querySelector("#currencyOne");
const currencyTwo = document.querySelector("#currencyTwo");
const amountOne = document.querySelector("#currencyOneInput");
const amountTwo = document.querySelector("#currencyTwoInput");

//testing if elemets are correct, works
console.log(currencyOne);
console.log(currencyTwo);
console.log(amountOne);
console.log(amountTwo);

let calculateExchange = () => {
    const amountOneValue = currencyOne.value;
    let amountTwoValue = currencyTwo.value;
    
    let api_url = (`https://v6.exchangerate-api.com/v6/596897f4ad88452b228ae09b/latest/${amountOneValue}`);
    
    fetch(api_url)
      .then((result) => result.json())
      .then((json) => {
          //checking json
          console.log(json);
      });
}

//event listener for dropdown and inputs
currencyOne.addEventListener("change", calculateExchange);
currencyTwo.addEventListener("change", calculateExchange);
amountOne.addEventListener("input", calculateExchange);
amountTwo.addEventListener("input", calculateExchange);


