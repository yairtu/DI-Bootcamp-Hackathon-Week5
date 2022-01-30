let milesInput = document.getElementById("miles");
let kilometersInput = document.getElementById("kilometers");

let calculateDistance = (e) => {
  if(e.target == milesInput) {
    kilometersInput.value = milesInput.value * 1.609344;
  } else {
    milesInput.value =  kilometersInput.value / 1.609344;
  }
}

milesInput.addEventListener("input", calculateDistance);
kilometersInput.addEventListener("input", calculateDistance);