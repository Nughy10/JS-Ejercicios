//LOOPS

//USA INCLUDES-------------------------------------------------------------------------------------
// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Camiseta")) {
        console.log(products[i]); 
    }
}


//CONDICIONALES AVANZADOS--------------------------------------------------------------------------
// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
// Una vez lo tengas compruébalo con un console.log.
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
for (let i = 0; i < alumns.length; i++) {
    if ((alumns[i].T1 && alumns[i].T2) || (alumns[i].T1 && alumns[i].T3) || (alumns[i].T2 && alumns[i].T3)) {
        alumns[i].isApproved = true;
    }
    else{
        alumns[i].isApproved = false;
    }
}
console.log(alumns);


//PROVANDO FOR OF----------------------------------------------------------------------------------
// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (const place of placesToTravel) {
    console.log("A good place to travel is " + place);
}


//PROVANDO FOR IN----------------------------------------------------------------------------------
// Usa un for...in para imprimir por consola los datos del alienígena.
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (var key in alien) {
    console.log("The " + key + " of the alien is " + alien[key]);
}


//PROVANDO FOR-------------------------------------------------------------------------------------
// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
// Imprime en un console log el array.
const placeToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]
for (let i = 0; i < placeToTravel.length; i++) {
    if (placeToTravel[i].id === 11 || placeToTravel[i].id === 40) {
        placeToTravel.splice([i],1);
    }
}
console.log(placeToTravel);

//MIXED FOR e INCLUDES-----------------------------------------------------------------------------
// Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
// Recuerda que puedes usar la función .includes() para comprobarlo.
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
for (let i = 0; i < toys.length; i++) {
    if (toys[i].name.includes("gato")) {
        toys.splice([i],2);
    }
}
console.log(toys)


//ADVANCED FOR-------------------------------------------------------------------------------------
// Usa un bucle for para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. 
// Imprimelo por consola.
const popularToys = [];
const jugetes = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (let i = 0; i < jugetes.length; i++) {
    if (jugetes[i].sellCount > 15) {
        popularToys.push(jugetes[i]);
        jugetes.splice([i],1);
    }
}
console.log(popularToys);
console.log(jugetes);