//JS ASYNCHRONOUS

//FLETCH-------------------------------------------------------------------------------------------
// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.
const michaelLog = async () => {
    const response = await fetch('https://api.agify.io?name=charlie');
    const michael = await response.json();
    return console.log(michael)
}
michaelLog();

// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';

const input = document.querySelector("input");
const button = document.querySelector("button");
const handleButton = async () => {
    console.log(input.value);
    const response = await fetch(`${baseUrl}?name=${input.value.toLowerCase()}`);
    const name = await response.json();
    return console.log(name);
}
button.addEventListener("click", handleButton);

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.
const myDiv = document.createElement("div");
const handleButton2 = async () => {
    console.log(input.value);
    const response = await fetch(`${baseUrl}?name=${input.value.toLowerCase()}`);
    const name = await response.json();
    for (let index = 0; index < name.country.length; index++){
        const myP = document.createElement('p');
        myP.innerText = "El nombre " + name.name + " tiene un " + name.country[index].probability*100 + "% de probabilidades de ser de " + name.country[index].country_id
        myDiv.appendChild(myP);
        
    }
    document.body.appendChild(myDiv);
}
// button.addEventListener("click", handleButton2);


// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.
const handleButton3 = async () => {
    console.log(input.value);
    const response = await fetch(`${baseUrl}?name=${input.value.toLowerCase()}`);
    const name = await response.json();
    for (let index = 0; index < name.country.length; index++){
        const myP = document.createElement('p');
        const myButton = document.createElement('button');
        myButton.textContent = 'X';
        const eliminarP = () => {
            myP.remove();
            myButton.remove();
        };
        myButton.addEventListener('click', eliminarP);
        myP.innerText = "El nombre " + name.name + " tiene un " + name.country[index].probability*100 + "% de probabilidades de ser de " + name.country[index].country_id
        myDiv.appendChild(myP);
        myDiv.appendChild(myButton);
        
    }
    document.body.appendChild(myDiv);
}
button.addEventListener("click", handleButton3);

//ASYNC/AWAIT--------------------------------------------------------------------------------------
// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })
//     promise.then(() => {console.log('Time out!')})
// };
// runTimeOut();

const promise = new Promise((resolve,rject)=>{
    setTimeout(function(){
        resolve();
    }, 2000); 
});
async function myPromise (){
    await promise;
    console.log("Time out!");
}
myPromise();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }
// getCharacters();

async function getCharacters () {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const character = await res.json();
    return console.log(character);
}
getCharacters();
