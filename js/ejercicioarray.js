

/*ej 1: 1) Recorrer el siguiente array de strings y contabilizar la cantidad de veces que 
aparece el string 'hola' const palabras = ['pepe', 'buen dia', 'hola', 'soy juan', 'hola']
*
 Se debera decir por alerta al final, "la lista de palabras contiene 2
 veces el string 'hola'"*/

 //               1       2           3       4
let palabras = ['pepe', 'buen dia', 'hola', 'soy juan', 'hola'];
let cont1 = 0;
let hola = 'hola';

for (let i = 0; i  < palabras.length; i++) {
    if (palabras[i] == hola) {
    cont1++;
    }
}
console.log('palabras');
alert("La lista de palabras contiene " + cont1 + " veces el string 'hola'");

console.log('--------------------------------');

/*2) Recorrer el array de notas y sacar el promedio
const notas = [8, 9, 4]  * Se debera decir por alerta al final, 
"El promedio final es: {promedio}"*/
const notas = [8, 9, 4];
let sum = 0;

for (let i = 0; i < notas.length; i++) {
    sum = sum + notas [i];
    }
const promedio = sum / notas.length;
console.log('promedio');
alert("el promedio es : " + promedio);
console.log('--------------------------------');

/*3) Recorrer el array de mensajes y contabilizar la cantidad de caracteres de todos los mensajes
 const mensajes = ['hola a todos', 'buenas', 'me gusta JS']
 Si la cantidad total es menor a 20, se dira 'el usuario recien empieza'
  Si la cantidad total es entre 20 y 50, se dira 'el usuario es nuevo'
Si la cantidad total es mayor a 50, se dria 'el usuario es recurrente'*/

const mensajes = ['hola a todos', 'buenas', 'me gusta JS'];
let cont=0;

for (let i = 0; i < mensajes.length; i++) {
    cont++;
}
if (cont < 20) {
    alert("El usuario recién empieza");
} else if (cont >= 20 && cont <= 50) {
    alert("El usuario es nuevo");
} else {
    alert("El usuario es recurrente");
}

