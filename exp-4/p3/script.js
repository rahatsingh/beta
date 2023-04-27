var numberInput = document.getElementById("numbers");
var numbertip = document.getElementById("tip");
var numbertotal = document.getElementById("total");

function calculate() {
  var numberinputString = numberInput.value;
  var cost = parseFloat(numberinputString);
  var tip = cost * 0.15;
  var total = cost + tip;
  numbertip.innerHTML = tip.toString();
  numbertotal.innerHTML = total.toString();
}
