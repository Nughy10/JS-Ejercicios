//FUNCTIONS

//BUSCAR EL MÁXIMO---------------------------------------------------------------------------------
// Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    }
    else if (numberOne < numberTwo) {
        return numberTwo;
    }
  }
const sumTotal = sum(5,10);
console.log(sumTotal);

//BUSCAR PALABRA MAS LARGA-------------------------------------------------------------------------
// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longestWord = "";
  for (let i = 0; i < param.length; i++) {
      if (param[i].length > longestWord.length) {
          longestWord = param[i];
      }
  }
  return longestWord;
}

const longestAvenger = findLongestWord(avengers);
console.log(longestAvenger);


//CALCULAR LA SUMA---------------------------------------------------------------------------------
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumNumbers(param) {
  let suma = 0;
  for (let i = 0; i < param.length; i++){
    suma += param[i]; 
  }
  return suma; 
}
const sumTotally = sumNumbers(numbers);
console.log(sumTotally);


//CALCULAR EL PROMEDIO-----------------------------------------------------------------------------
// Calcular un promedio es una tarea extremadamente común. 
const numberss = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sum = 0;
  let div = 0; 
  for (let i = 0; i < param.length; i++) {
      sum += param[i];
  }
  div = sum / param.length; 
  return div; 
}
const promedio = average(numberss);
console.log(promedio);


//CALCULAR EL PROMEDIO DE STRINGS------------------------------------------------------------------
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let number = 0;
  let string = 0;
  for (let i = 0; i < param.length; i++) {
      if (param[i].length > 0) {
          string += param[i].length;
      }
      else{
        number += param[i];
      }
  }
  return {number,string};
}
const numberOperation = averageWord(mixedElements);
console.log(numberOperation);


//VALORES ÚNICOS-----------------------------------------------------------------------------------
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina 
// para retornar un array sin los elementos duplicados.
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let arrayNueva = [];
    for (let i = 0; i < param.length; i++) {
        if (!arrayNueva.includes(param[i])) {
            arrayNueva.push(param[i]);
        }
    }
    return arrayNueva;
  }
  const array = removeDuplicates(duplicates);
  console.log(array);


//BUSCADORES DE NOMBRES----------------------------------------------------------------------------
//   Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
//   comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, name) {
    let arrayNombres = []; 
    if (param.includes(name)){
        for (let i = 0; i < param.length; i++) {
            if (param[i] == name) {
                return {true: true, i}
            } 
        }
    }
    else{
        return {false: false}
        }
  }
  const nombres = finderName(nameFinder,"Marc");
  console.log(nombres);


  //CONTADOR DE REPETICIONES ----------------------------------------------------------------------
//   Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    let arrayRepeat = [];
    for (let i = 0; i < param.length; i++) {
        if (!arrayRepeat.includes(param[i])){
            console.log(param[i]);
            const variable = param[i];
            arrayRepeat.push({variable:0})
        }
        else {
            arrayRepeat[param[i]] = param[i]++;
        }
    }
    return arrayRepeat;
  }
  const final = repeatCounter(counterWords);
  console.log(final);
