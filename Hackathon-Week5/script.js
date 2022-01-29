//branch 1 is called first
const currency1 = document.querySelector("#currecny1")


let api_url = `https://v6.exchangerate-api.com/v6/596897f4ad88452b228ae09b/latest/USD`;


const getConversion = () => {
    const response = fetch(api_url)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            let value = data.conversion_rates[`ILS`];
            console.log(value);
        })
}

getConversion();