// El remplazo de los Any. Unknown types - Permite asignarle a una variable diferentes tipos

// ANY
let anyVar:any = 12321;
anyVar = "Hola";
anyVar = true;
anyVar = {nombre:"Pepe"};
anyVar = () => {
  return "";
};

let isNew: boolean = anyVar; // ??????
console.log(isNew);

anyVar.toLowerCase();// ??????? NO USAR ANY

// Unknown - Permite la flexibilidad de un ANY sin apagar el analisis de codigo estatico
let unknownVar: unknown;

unknownVar = true;
unknownVar = undefined;
unknownVar = {nombre:""};
unknownVar = 1;

// let isNew2: boolean = unknownVar // Verifica el tipo
// unknownVar.toUpperCase(); // TS te indica que le indiques un tipo primero.

if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}; // Asi si permite que le asignemos un metodo de un tipo en concreto

// Unknown en funciones

const parse = (str: string):unknown => {
  return JSON.parse(str);
};

JSON.parse('{name: "dibot55"}');

// Detectar un array de una variable ANY o unknown
let arr: unknown;

arr = ["hola", 1,2,3]

const exemple = (input: unknown) => {
  if (typeof input === "string" ){
    return console.log("String");
  } else if(Array.isArray(input)){
    return console.log("Es Array");
  };
};

exemple(arr);
