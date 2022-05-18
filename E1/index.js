
//VARIABLES----------------------------------------------------------------------------------------
// 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero = "Hulk";
console.log(myFavoriteHero);

// 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
let x = 50;
console.log(x);

// 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
let h = 5;
let y = 10;
console.log(h,y);

// 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = h + y; 
console.log(z);


//VARIABLES AVANZADAS------------------------------------------------------------------------------
// 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
character.age=25; 
console.log (character);

// 1.2 Declara 3 variables con los nombres y valores siguientes 
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 
// Muestralos por consola de esta forma: 
// 'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.");

// 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
// ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

// 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
// y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
// basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000; 
console.log(globalBasePrice);
car1.finalPrice = globalBasePrice + car1.basePrice; 
car2.finalPrice = globalBasePrice + car2.basePrice;
console.log(car1);
console.log(car2);


//OPERADORES---------------------------------------------------------------------------------------
// 1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.
let var1 = 5; 
let var2 = 10;
let varSum = var1 + var2; 
//El comando alert solo funciona desde el navegador cuando se ejecuta.
// alert(varSum);  
console.log(varSum);

// 1.2 Divide 10 por 2 y muestra el resultado en un alert.
//El comando alert solo funciona desde el navegador cuando se ejecuta.
// alert(var2/2);  
console.log(var2/2);

// 1.3 Muestra mediante un alert el resto de dividir 15 por 9.
//El comando alert solo funciona desde el navegador cuando se ejecuta.
// alert(varSum/9);  
console.log(varSum/9);

// 1.4 Usa el correcto operador de asignación que resultará en x = 15, 
// teniendo dos variables y = 10 y z = 5.
let varResult = (var1 += var2); 
console.log(varResult);

// 1.5 Usa el correcto operador de asignación que resultará en x = 150,
// teniendo dos variables y = 10 y z = 15.
let varResults = (var1 *= var2); 
console.log(varResults);


//ARRAYS-------------------------------------------------------------------------------------------
// 1.1 Consigue el valor "HULK" del array y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers.splice(0,1,"IRONMAN");
console.log(avengers);

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters1.push("Morty", "Summer");
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0], rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1,1);
console.log(rickAndMortyCharacters3);


//CONDICIONALES------------------------------------------------------------------------------------
const number1 = 10;
const number2 = 20;
const number3 = 2;

//Ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}
if (number2/number1 == 2 ) {
  console.log("number2 dividido entre number1 es igual a 2");
}
if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}
if (number3 != number1) {
  console.log("number3 es distinto number1");
}
if (number3*5 == number1) {
  console.log("number3 por 5 es igual a number1");
}
if (number3*5 == number1 && number1*2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}
if (number2/2 == number1 || number1/5 == number3 ) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


//BUCLES-------------------------------------------------------------------------------------------
// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.
for (let i = 0; i < 10; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}

// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle empieza en 0 y termina en 10. 
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
// y cambia el mensaje en la última vuelta a 'Dormido!'.
for (let j = 0; j < 10; j++) {
    if (j < 9) {
        console.log("Intentando dormir");
    }
    else{
        console.log("Dormido!");
    }
}