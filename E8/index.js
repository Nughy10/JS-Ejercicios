//JS ES6

//ARROWS-------------------------------------------------------------------------------------------
// Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parametros.
const suma = (x,y) => x + y;

// 1.1 Ejecuta esta función sin pasar ningún parametro
const sumaTotal1 = suma();
console.log(sumaTotal1);

// 1.2 Ejecuta esta función pasando un solo parametro
const sumaTotal2 = suma(5);
console.log(sumaTotal2);

// 1.3 Ejecuta esta función pasando dos parametros
const sumaTotal3 = suma(5,10);
console.log(sumaTotal3);


//DESTRUCTING--------------------------------------------------------------------------------------
// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
let{title, gender, year} = game;
console.log(title);
console.log(gender[0],gender[1],gender[2]);
console.log(year);

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.
const fruits = ['Banana', 'Strawberry', 'Orange'];
let [B, S, O] = fruits; 
console.log(B,S,O);


// 2.3 En base al siguiente javascript, usa destructuring para crear 2 
// variables igualandolo a la función e imprimiendolo por consola.
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'};
}
let{name, race} = animalFunction ();
console.log(name,race);


// 2.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.
const car = {model: 'Mazda 6', itv: [2015, 2011, 2020] }
let{model,itv} = car;
let[izquierda, centro, derecha] = itv; 
console.log(model,itv);
console.log(izquierda, centro, derecha);


//SPREAD OPERATOR----------------------------------------------------------------------------------
// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
let pointsCopy = [...pointsList];
console.log(pointsCopy);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let toyCopy = {...toy};
console.log(toyCopy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];
let pointsListAll = [...pointsList1, ...pointsList2];
console.log(pointsListAll);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toys = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
let toysAll = {...toys, ...toyUpdate};
console.log(toysAll);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let colorsNew = [...colors];
colorsNew.splice(2,1);
console.log(colorsNew);


//MAP----------------------------------------------------------------------------------------------
// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id:1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const usersName = users.map((users) => {
    return {nombre: users.name};
});
console.log(usersName);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users2 = [
	{id:1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const newUser = {name: "Anacleto"};
for(let i=0; i<users2.length; i++){
    if(users2[i].name === "Abel" || users2[i].name === "Amanda"){
        users2.splice([i],1);
        users2.push(newUser);
    }
}
const users2Name = users2.map((users2) => {
    return {nombre: users2.name};
});
console.log(users2Name);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const newUsers1 = {name: "Tokyo (Visited)"};
const newUsers2 = {name: "Amsterdam (Visited)"}; 
for(let i=0; i<cities.length; i++){
    if(cities[i].name === "Tokyo" || cities[i].name === "Amsterdam"){
        cities.splice([i],1);
    }
}
cities.push(newUsers1, newUsers2);
const citiesName = cities.map((cities) => {
    return {nombre: cities.name};
})
console.log(citiesName);


//FILTER-------------------------------------------------------------------------------------------
// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const result1 = ages1.filter(checkAdult);
function checkAdult(age1) {
  return age1 >= 18;
}
console.log(result1);

// 5.2 Dado el siguiente array, actualiza .filter() para generar un nuevo array con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const result2 = ages2.filter(checkPar);
function checkPar(age2) {
    return age2%2 === 0;  
}
console.log(result2);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lol = streamers1.filter(function(streamer1){
    return streamer1.gameMorePlayed === "League of Legends";
});
console.log(lol);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const uName = streamers2.filter(function(streamer2){
    return streamer2.name.includes("u");
});
console.log(uName);

// // 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// // el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.
// // Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'LEAGUE OF LEGENDS'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const uLegend = streamers3.filter(function(streamer3){
    const filtros = (streamer3.age >= 35);
    return filtros; 
});
console.log(uLegend);

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Siintroduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers4 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
// const input = document.querySelector("input");
// const handleInput = (event) => {
//     console.log(input.value);
//     const filtersStreamers = streamers4.filter((streamer) => streamer.name.toLowerCase().includes(input.value.toLowerCase()));
//     console.log(filtersStreamers);
// }
// input.addEventListener("input", handleInput);

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers5 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
// const input2 = document.querySelector(".filterInput");
// const button = document.querySelector(".filterButton");
// const handleButton = (event) => {
//     console.log(input2.value);
//     const filtersStreamers = streamers5.filter((streamer) => streamer.name.toLowerCase().includes(input2.value.toLowerCase()));
//     console.log(filtersStreamers);
// }
// button.addEventListener("click", handleButton);

//FIND---------------------------------------------------------------------------------------------
// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];
const found = numbers.find(element => element > 99);
console.log(found);

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
function foundMovie (movie){
    return movie.date === 2015;
}
console.log(movies.find(foundMovie));

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
// lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
function foundAlien (alien){
    return alien.name === "Cucushumushu";
}
function foundMutation (mutation){
    return mutation.name === "Porompompero";
}
console.log(aliens.find(foundAlien));
console.log(mutations.find(foundMutation));


//REDUCE-------------------------------------------------------------------------------------------
// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
const totalScore1 = exams.reduce(function(accumulator, exams){
    return accumulator + exams.score;},0);
console.log(exams);
console.log(totalScore1);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().   
const filter = exams.filter(function(exams){
    const filtro = (exams.score >= 5);
    return filtro;
});   
console.log(filter);

const totalScore2 = filter.reduce(function(accumulator, filter){
    return accumulator + filter.score;},0);
console.log(totalScore2);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const totalScore3 = exams.reduce(function(accumulator, exams){
    return accumulator + exams.score;},0);
console.log(exams);
console.log(totalScore3/10);


//BONUS--------------------------------------------------------------------------------------------
// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
// .filter() y usa .reduce() para conseguir la media de sus .score. 
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
// array .gender.
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]
const foundVG = videogames.filter(function(videogames){
    const filterVG = (videogames.genders = "RPG");
    return filterVG;
});   
console.log(foundVG);

const totalScore4 = foundVG.reduce(function(accumulator, foundVG){
    return accumulator + foundVG.score;},0);

console.log(totalScore4/6);
