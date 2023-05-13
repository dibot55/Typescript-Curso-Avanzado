//  Readonly Array - Para evitar mutaciones en el arreglo

  // Array Normal
const arreglo: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

arreglo.push("k"); // Inserta al final
arreglo.pop(); // Elimina el ultimo elemento
arreglo.shift(); // Elimina el primer elemento
arreglo.unshift("x"); // Inserta al principio

  // ReadonlyArray
const arregloReadonly: ReadonlyArray<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// arregloReadonly.push("k"); // Error

// Tecnologias como Redux se basan en no permitir las mutaciones con los siguientes metodos
arregloReadonly.filter(() => {});
arregloReadonly.map(() => {})
arregloReadonly.reduce(() => "");
