const currencyOne = document.querySelector("#currencyOne");
const currencyTwo = document.querySelector("#currencyTwo");
const amountOne = document.querySelector("#currencyOneInput");
const amountTwo = document.querySelector("#currencyTwoInput");

//testing if elemets are correct, works
console.log(currencyOne);
console.log(currencyTwo);
console.log(amountOne);
console.log(amountTwo);

let calculateExchangeCurr1 = () => {
    const currencyOneID = currencyOne.value;
    const currencyTwoID = currencyTwo.value;

    let api_url = (`https://v6.exchangerate-api.com/v6/596897f4ad88452b228ae09b/latest/${currencyOneID}`);
    
    fetch(api_url)
      .then((result) => result.json())
      .then((json) => {
          //checking json
          console.log(json);
          console.log(json.conversion_rates[currencyTwoID]);
        const rate = json.conversion_rates[currencyTwoID];

        amountTwo.value = (amountOne.value * rate); 
      });
}

let calculateExchangeCurr2 = () => {
    const currencyOneID = currencyOne.value;
    const currencyTwoID = currencyTwo.value;

    let api_url = (`https://v6.exchangerate-api.com/v6/596897f4ad88452b228ae09b/latest/${currencyTwoID}`);
    
    fetch(api_url)
      .then((result) => result.json())
      .then((json) => {
          //checking json
          console.log(json);
          console.log(json.conversion_rates[currencyOneID]);
        const rate = json.conversion_rates[currencyOneID];

        amountOne.value = (amountTwo.value * rate); 
      });
}

//event listener for dropdown and inputs
currencyOne.addEventListener("change", calculateExchangeCurr1);
currencyTwo.addEventListener("change", calculateExchangeCurr1, calculateExchangeCurr2);
amountOne.addEventListener("input", calculateExchangeCurr1);
amountTwo.addEventListener("input", calculateExchangeCurr2);


