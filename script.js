document.addEventListener("mouseup", getDefinition);

document
  .getElementById("simplifyButton")
  .addEventListener("click", updateDefinition);

document
  .getElementById("translateButton")
  .addEventListener("click", translateDefinition);

var counter = 0;

function getDefinition() {
  document.getElementById("print").innerHTML = "worked!!!!";
  if (window.getSelection()) {
    const selectedText = window.getSelection().toString();
    document.getElementById("definition").innerHTML = selectedText;
  }
}

function updateDefinition() {
  document.getElementById("definition").innerHTML =
    "An account that enables you to buy and sell investments through the broker's website.";
}

function translateDefinition() {
  if (counter % 2 == 0) {
    document.getElementById("definition").innerHTML =
      "Una cuenta que le permite comprar y vender inversiones a través del sitio web del corredor.";

    document.getElementById("translateButton").innerHTML =
      "Translate back to English.";
  } else {
    document.getElementById("definition").innerHTML =
      "An account that enables you to buy and sell investments through the broker's website.";
    document.getElementById("translateButton").innerHTML = "Traducir a espanol";
  }
  counter = counter + 1;
}
