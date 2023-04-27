let b1 = document.getElementById("b");

b1.addEventListener("click", ButtonClk);

function ButtonClk() {
  //create request object
  let x = new XMLHttpRequest();

  //open request object
  x.open("GET", "hi.txt", true);

  //ready status
  x.onreadystatechange = function () {
    console.log("Ready State is", x.readyState);
  };

  //on load function
  x.onload = function () {
    console.log(this.responseText);
    document.getElementById("data").innerText = x.responseText;
  };

  x.send();
}

