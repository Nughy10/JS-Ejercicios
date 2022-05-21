//JS REVIEW DOM

//ITERACIÓN CON EL DOM-----------------------------------------------------------------------------
// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const myUl = document.createElement("ul");
for(const country of countries){
    const myLi = document.createElement("li");
    myUl.appendChild(myLi);
    myLi.innerText = country; 
}
document.body.appendChild(myUl);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const myPs = document.querySelectorAll(".fn-remove-me");
for(const myP of myPs){
    myP.remove();
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const myDiv = document.querySelector('[data-function="printHere');
const myUl2 = document.createElement('ul');
for(const car of cars){
    const myLi2 = document.createElement("li");
    myUl2.appendChild(myLi2);
    myLi2.innerText = car; 
    myDiv.appendChild(myUl2);
}
document.body.appendChild(myDiv);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const myUl3 = document.createElement("ul");
for(const country2 of countries2){
    const myLi3 = document.createElement("li");
    myUl3.appendChild(myLi3);
    myLi3.innerText = [country2.title + " - " + country2.imgUrl]; 
}
document.body.appendChild(myUl3);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.
// const button = document.createElement('button'); 
// button.type = 'button'; 
// button.innerText = 'Click para Borrar!'; 
// document.body.appendChild(button);

const countries3 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{id: 99, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const myUl4 = document.createElement("ul");
for(const country3 of countries3){
    const myLi4 = document.createElement("li");
    myUl4.appendChild(myLi4);
    myLi4.innerText = [country3.title + " - " + country3.imgUrl]; 
    for(let i=0; i<countries3.length; i++){
        if(countries3[i].id === 99) {
            const deleting = countries3.splice([i],1);
        }
    }
}
function handleClick5(event){
    document.body.appendChild(myUl4);
}
document.getElementById("btn5").addEventListener("click",handleClick5);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
// const button1 = document.createElement('button'); 
// button1.type = 'button'; 
// button1.innerText = 'Click para Borrar 1!'; 
// document.body.appendChild(button1);

const countries4 = [
	{id: 55,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{id: 66,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{id: 77,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{id: 88,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{id: 99, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const myUl5 = document.createElement("ul");
for(const country4 of countries4){
    const myLi5 = document.createElement("li");
    myUl5.appendChild(myLi5);
    myLi5.innerText = [country4.title + " - " + country4.imgUrl]; 
    for(let i=0; i<countries4.length; i++){
        if(countries4[i].id ===88) {
            const deleting = countries4.splice([i],2);
        }
    }
}
function handleClick4(event){
    document.body.appendChild(myUl5);
}
document.getElementById("btn4").addEventListener("click",handleClick4);

//-------------------------------------------------------------------------------------------------

const countries5 = [
	{id: 55,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{id: 66,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{id: 77,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{id: 88,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{id: 99, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const myUl6 = document.createElement("ul");
for(const country5 of countries5){
    const myLi6 = document.createElement("li");
    myUl6.appendChild(myLi6);
    myLi6.innerText = [country5.title + " - " + country5.imgUrl]; 
    for(let i=0; i<countries5.length; i++){
        if(countries5[i].id ===77) {
            const deleting = countries5.splice([i],3);
        }
    }
}
function handleClick3(event){
    document.body.appendChild(myUl6);
}
document.getElementById("btn3").addEventListener("click",handleClick3);

//-------------------------------------------------------------------------------------------------

const countries6 = [
	{id: 55,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{id: 66,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{id: 77,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{id: 88,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{id: 99, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const myUl7 = document.createElement("ul");
for(const country6 of countries6){
    const myLi7 = document.createElement("li");
    myUl7.appendChild(myLi7);
    myLi7.innerText = [country6.title + " - " + country6.imgUrl]; 
    for(let i=0; i<countries6.length; i++){
        if(countries6[i].id ===66) {
            const deleting = countries6.splice([i],4);
        }
    }
}
function handleClick2(event){
    document.body.appendChild(myUl7);
}
document.getElementById("btn2").addEventListener("click",handleClick2);

//-------------------------------------------------------------------------------------------------

const countries7 = [
	{id: 55,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{id: 66,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{id: 77,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{id: 88,title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{id: 99, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const myUl8 = document.createElement("ul");
for(const country7 of countries7){
    const myLi8 = document.createElement("li");
    myUl8.appendChild(myLi8);
    myLi8.innerText = [country7.title + " - " + country7.imgUrl]; 
    for(let i=0; i<countries7.length; i++){
        if(countries6[i].id ===55) {
            const deleting = countries6.splice([i],5);
        }
    }
}
function handleClick1(event){
    document.body.appendChild(myUl8);
}
document.getElementById("btn1").addEventListener("click",handleClick1);