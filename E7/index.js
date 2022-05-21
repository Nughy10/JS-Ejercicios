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
const button = document.createElement('button'); 
button.type = 'button'; 
button.innerText = 'Click para Borrar!'; 
document.body.appendChild(button);

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
            button.addEventListener("click",deleting);
        }
    }
}
document.body.appendChild(myUl4);


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.
const button1 = document.createElement('button'); 
button1.type = 'button'; 
button1.innerText = 'Click para Borrar 1!'; 
document.body.appendChild(button1);

const button2 = document.createElement('button'); 
button2.type = 'button'; 
button2.innerText = 'Click para Borrar 2!'; 
document.body.appendChild(button2);

const button3 = document.createElement('button'); 
button3.type = 'button'; 
button3.innerText = 'Click para Borrar 3!'; 
document.body.appendChild(button3);

const button4 = document.createElement('button'); 
button4.type = 'button'; 
button4.innerText = 'Click para Borrar 4!'; 
document.body.appendChild(button4);

const button5 = document.createElement('button'); 
button5.type = 'button'; 
button5.innerText = 'Click para Borrar 5!'; 
document.body.appendChild(button5);

const countries4 = [
	{id: 55, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{id: 66, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{id: 77, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{id: 88, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{id: 99, title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const myUl5 = document.createElement("ul");
for(const country4 of countries4){
    const myLi5 = document.createElement("li");
    myUl5.appendChild(myLi5);
    myLi5.innerText = [country4.title + " - " + country4.imgUrl]; 
}
document.body.appendChild(myUl5);