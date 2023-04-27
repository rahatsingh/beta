console.log("Page is Loading");

let fData = document.getElementById("fetchdata");
fData.addEventListener("click", ButtonClk);

function ButtonClk() {
  //create XMLHTTPRequest object
  const x = new XMLHttpRequest();

  //open XMLHTTPREQUEST object
  x.open("GET", "hi.txt", true);

  //on Ready state change
  x.onreadystatechange = function () {
    console.log("Ready State is ", x.readyState);
  };

  //on load
  x.onload = function () {
    console.log(this.responseText);
  };
  x.send();
}

