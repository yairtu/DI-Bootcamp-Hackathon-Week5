let celsiusInput = document.getElementById("celsius");
let farenheitInput = document.getElementById("fahrenheit");

let calculateTemp = (e) => {
  if(e.target == celsiusInput) {
    farenheitInput.value = ((celsiusInput.value * 1.8) + 32);
  } else {
    celsiusInput.value =  ((farenheitInput.value - 32) / 1.8);
  }
}

celsiusInput.addEventListener("input", calculateTemp);
farenheitInput.addEventListener("input", calculateTemp);


// let inputs = document.getElementsByClassName("inputType2");

// for (let i = 0; i < inputs.length; i++) {
//   let input = inputs[i];

//   input.addEventListener("input", function (event) {
//     let value = parseFloat(event.target.value);

//     switch (event.target.name) {
//       case "celsius":
//         farenheitInput.value = value * 1.8 + 32;
//         break;
//       case "farenheit":
//         celsiusInput.value = (value - 32) / 1.8;
//         break;
//     }
//   });
// }
