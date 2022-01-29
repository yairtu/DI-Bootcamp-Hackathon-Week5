//branch 1 is called first
const currencyOne = document.querySelector("#currencyOne");
const amountOne = document.querySelector("#currencyOneInput");
const currencyTwo = document.querySelector("#currencyTwo");
const amountTwo = document.querySelector("#currencyTwoInput");

//Testing all elements respond
console.log(currencyTwo.value)
console.log(amountOne.value);
console.log(currencyTwo.value);
console.log(amountTwo.value)

//Testing setting value of amountTwo;
amountTwo.value = 5;



// currencyOne.addEventListener("onchange", getConversionRate);
// currencyOneInput.addEventListener("input", getConversionRate);



// const getConversionRate = () => {
    //     const currecncyOneValue = currencyOne.value;
    //     const currencyTwoValue = currencyTwo.value;
    
    //     let api_url = `https://v6.exchangerate-api.com/v6/596897f4ad88452b228ae09b/latest/${currecncyOneValue}`;
        
    //     const response = fetch(api_url)
    //         .then((result) => result.json())
    //         .then((data) => {
    //             console.log(data);
    //             rate = data.conversion_rates[`${currencyTwoValue}`];
    //         })
    //     console.log(rate)
    //     currencyOneInputValue = currencyOneInput.value;
    //     currencyTwoInputValue = currencyTwoInput.value;
    //     currencyTwoInputValue = (currencyOneInputValue * rate);
    // }