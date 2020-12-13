var input1 = document.querySelector("#inp");
var bbutton = document.querySelector("#trans-button");
var output = document.querySelector("#output");

var urlServer = "https://api.funtranslations.com/translate/shakespeare.json";

function getTransURL(text) {
  return urlServer + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something went wrong ! try again after few minutes later");
}
function trans() {
  var normal = input1.value;
  fetch(getTransURL(normal))
    .then((response) => response.json())
    .then((json) => {
      var transText = json.contents.translated;
      output.innerText = transText;
    })
    .catch(errorHandler);
}

bbutton.addEventListener("click", trans);
