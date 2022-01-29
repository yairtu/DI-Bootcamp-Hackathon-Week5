let milesInput = document.getElementById("miles");
let kilometersInput = document.getElementById("kilometers");

let distanceInputs = document.getElementsByClassName("inputType2");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (event) {
    let value = parseFloat(event.target.value);

    switch (event.target.name) {
      case "miles":
        kilometersInput.value = value * 1.8 + 32;
        break;
      case "farenheit":
        milesInput.value = (value - 32) / 1.8;
        break;
    }
  });
}
