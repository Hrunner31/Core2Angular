$(document).ready(function () {
    var x = 0;
    var s = "";

    console.log("Hola Pluralsight");



    var theForm = $("#form");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Comprando Item");
    });

    var informacionProducto = $(".propiedades-producto li");
    informacionProducto.on("click", function () {
        console.log("Seleccionaste " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(1000);
    });
})

