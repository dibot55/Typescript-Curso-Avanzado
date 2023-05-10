// Never - Funciones que nunca van a terminar.

// Inferencia de TS -> never
const withoutEnd = () => {
  while(true){
    console.log('Nunca parar de aprender');
  };
};

const fail = (mensaje: string) => {
  throw new Error(mensaje); // Nunca va a parar
};

let arregloUnknwon: unknown;

arregloUnknwon = ["hola", 1,2,3]

const exempleArray = (input: unknown) => {
  if (typeof input === "string" ){
    return console.log("String");
  } else if(Array.isArray(input)){
    return console.log("Es Array");
  };
  return fail("FAIL"); // Da un error por que nunca para y no retorna nada (Nuevas versiones de TS)
};

exempleArray("string");
exempleArray(arregloUnknwon);
exempleArray(2);
exempleArray("Esto no lo lee. Por que se ejecuto el Never");
