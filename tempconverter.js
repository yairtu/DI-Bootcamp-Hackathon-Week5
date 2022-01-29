let celsiusInput = document.getElementById("celsius");
let farenheitInput = document.getElementById("farenheit");

let inputs = document.getElementsByClassName("inputType2");
console.log(inputs);

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (event) {
    let value = parseFloat(event.target.value);

    switch (event.target.name) {
      case "celsius":
        farenheitInput.value = value * 1.8 + 32;
        break;
      case "farenheit":
        celsiusInput.value = (value - 32) / 1.8;
        break;
    }
  });
}
