// Tuplas - Un array fuertemente tipado.

// Array Tipado
let arrayTipado: (string | number)[] = [ 1, 2, "3", "a"]; // Solo acepta strings y numbers.
arrayTipado.push("HOLA");

// Tuplas
let tupla: [string, number]; // Limita la posición y los elementos del arreglo.
tupla = ["dibot55", 1];

// tupla = []; // No acepta arrays vacios
// tupla = [2, 3]; // No acepta numbers en el lugar de un string
// tupla = [""]; // No acepta si no se cumplen los dos elementos
// tupla = ["", 2,3]; // No acepta si hay mas de dos elementos

// Destructuracion en tuplas
tupla = ["linsie", 2];
const [username, age] = tupla;
console.log(username);
console.log(age);
