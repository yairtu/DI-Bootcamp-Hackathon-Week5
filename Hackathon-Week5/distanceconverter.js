// let milesInput = document.getElementById("miles");
// let kilometersInput = document.getElementById("kilometers");

// let distanceInputs = document.getElementsByClassName("inputType2");

// for (let i = 0; i < distanceInputs.length; i++) {
//   let input = distanceInputs[i];

//   input.addEventListener("input", function (event) {
//     let value = parseFloat(event.target.value);

//     switch (event.target.name) {
//       case "miles":
//         kilometersInput.value = value * 1.609344;
//         break;
//       case "kilometers":
//         milesInput.value = value / 1.609344;
//         break;
//     }
//   });
// }

let milesInput = document.getElementById("miles");
let kilometersInput = document.getElementById("kilometers");

// let calculateDistanceK = () => {
//   kilometersInput.value = milesInput.value * 1.609344;
// }

// let calculateDistanceM = () => {
//   milesInput.value =  kilometersInput.value / 1.609344;
// }


let calculateDistance = (e) => {
  if(e.target == milesInput) {
    kilometersInput.value = milesInput.value * 1.609344;
  } else {
    milesInput.value =  kilometersInput.value / 1.609344;
  }
}

milesInput.addEventListener("input", calculateDistance);
kilometersInput.addEventListener("input", calculateDistance);