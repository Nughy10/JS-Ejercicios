//JS DOM

//MODIFICANDO EL DOM-------------------------------------------------------------------------------
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const myDiv = document.createElement("div");
document.body.appendChild(myDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const myP = document.createElement("p");
const myDivs = document.createElement("div");
myDivs.appendChild(myP);
document.body.appendChild(myDivs);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const myDiv2 = document.createElement("div");
for(let index = 0; index < 6; index++){
    const myP2 = document.createElement("p");
    myDiv2.appendChild(myP2); 
}
document.body.appendChild(myDiv2); 

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const myPs = document.createElement("p");
myPs.innerText = "Soy dinámico!";
document.body.appendChild(myPs);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const myH2 = document.querySelector(".fn-insert-here");
myH2.innerText = "Hubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const myUl = document.createElement("ul");
for(const app of apps){
    const myLi = document.createElement("li");
    myUl.appendChild(myLi);
    myLi.innerText = app; 
}
document.body.appendChild(myUl);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const myP3s = document.querySelectorAll(".fn-remove-me");
console.log(myP3s);
for(const myP3 of myP3s){
    myP3.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const myDiv4 = document.querySelectorAll("div");
const myP4 = document.createElement("p");
myP4.innerText = "Voy en medio";
document.body.insertBefore(myP4, myDiv4[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const allDivs = document.querySelectorAll(".fn-insert-here");
for(const div of allDivs){
    const myP5 = document.createElement("p");
    myP5.innerText = "Voy dentro";
    div.appendChild(myP5);
}