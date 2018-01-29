var x = 0;
var s = "";

console.log("Hola Pluralsight");

var theForm = document.getElementById("form");
theForm.hidden = true;

var button = document.getElementById("buyButton");
button.addEventListener("click", function () {
    if (theForm.hidden == true) {
        theForm.hidden = false;
    }
    else {
        theForm.hidden = true;
    }
});

var informacionProducto = document.getElementsByClassName("informacion-producto");
var listItems = informacionProducto.item[0].children;