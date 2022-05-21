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
let colorsNew = [colors[0],colors[1],colors[3],colors[4]];
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
