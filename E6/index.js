//JS EVENTS

//CREANDO EVENTOS----------------------------------------------------------------------------------
// 1.1 Añade un botón a tu html con la classe click y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const myButton = document.querySelector(".click");
function myButtonClick(c){
    console.log(c);
}
myButton.addEventListener("click", myButtonClick);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const myFocus = document.querySelector(".focus");
myFocus.addEventListener("focus", function(e){
    console.log(myFocus.value);
})

// 1.3 Añade un evento 'value' que ejecute un console.log con el valor del input.
const myLast = document.querySelector("input.value");
myLast.addEventListener('input', function(f){
    console.log(myLast.value);
})