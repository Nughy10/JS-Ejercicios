//REVIEW BASICS

//MIX FOR e INCLUDES-------------------------------------------------------------------------------
// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. 
// Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes()
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const categories = [];
for (const movie of movies) {
    for (const categorie of movie.categories) {
        if(!categories.includes(categorie)){
            categories.push(categorie);
        }
    }
}
console.log(categories);


//MIX FORs 1---------------------------------------------------------------------------------------
// Dado el siguiente javascript usa for y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let sumaVolumen = 0;
let numSonidos = 0;
for (const user of users) {
    for(const key in user.favoritesSounds){
        sumaVolumen += user.favoritesSounds[key].volume;
        numSonidos += 1;
    }
}
console.log("Suma de volumenes: ", sumaVolumen);
console.log("Número de sonidos: ", numSonidos);
console.log("Media volumenes: ", sumaVolumen/numSonidos);


//MIX FORs 2---------------------------------------------------------------------------------------
// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. 
// Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
const usuarios = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
const sonidos = {};
for (const usuario of usuarios) {
    for(const key in usuario.favoritesSounds){
        if(sonidos[key]){
        sonidos[key]++
    }
    else{
        sonidos[key] = 1
    } 
    }
}
console.log(sonidos)


//METODOS findArrayIndex---------------------------------------------------------------------------
// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y 
// devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
const miArray = [
    "Caracol",
    "Mosquito",
    "Salamandra",
    "Ajolote"
];
function findArrayIndex(array, text){
    return array.indexOf(text) !== -1 
    ? text + " esta en la posicion " + array.indexOf(text)
    : text + " no esta en el array";
}
console.log(findArrayIndex(miArray, "Salamandra"));
console.log(findArrayIndex(miArray, "Ajolote"));


//FUNCIÓN rollDice---------------------------------------------------------------------------------
// Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. 
// Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado.
function rollDice (numCaras){
    let resultado = Math.ceil(Math.random() * numCaras);
    return resultado;
}
console.log("rollDice 6", rollDice(6));
console.log("rollDice 12", rollDice(12));
console.log("rollDice 18", rollDice(18));
console.log("rollDice 24", rollDice(24));


//FUNCIÓN swap-----------------------------------------------------------------------------------------------
// Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
// Retorna el array resultante.
const arrayNombres =[
    "Mesirve",
    "Cristiano Penaldo",
    "Fernando Muralla",
    "Ronalguiño",
]
function swap(array, a, b){
    if(array[a] && array[b]){
        let aux = array[b];
        array[b] = array[a];
        array[a] = aux; 
        return array; 
    }
    return array; 
}
console.log(swap(arrayNombres, 1, 2));
