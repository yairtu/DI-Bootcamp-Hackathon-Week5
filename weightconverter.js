let poundsInput = document.getElementById("pounds");
let kilogramsInput = document.getElementById("kilograms");

let calculateWeight = (e) => {
  if (e.target == poundsInput) {
    kilogramsInput.value = poundsInput.value / 2.2046;
  } else {
    poundsInput.value = kilogramsInput.value * 2.2046;
  }
};

kilogramsInput.addEventListener("input", calculateWeight);
poundsInput.addEventListener("input", calculateWeight);
