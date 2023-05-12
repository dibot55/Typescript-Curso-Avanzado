//  Sobrecarga de Funciones - Solo funciona con funciones normales NO arrow functions ()=>{}

// Sobrecarga de funciones
function perseStr(input: string): string[]; // Le indicamos el input y que va a retornar
function perseStr(input: string[]): string;

// Función
function perseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)){
    return input.join('');  // String: String[]
  } else {
    return input.split(''); // String[]: String
  }
};

// TypeScript no puede inferir deacuerdo al input que aqui se retorna un ARRAY antes hay que validarlo con un if
const rtArray = perseStr('dibot55');
console.log("String: ",rtArray);

// TypeScript no puede inferir deacuerdo al input que aqui se retorna un STRING antes hay que validarlo con un if
const rtArray2 = perseStr(["d", "i", "b", "o", "t" , "5", "5"]);
console.log("String[] ", rtArray2)

// Otra solición con "as"
const rtArray1 = perseStr('dibot55') as string[]; // <-- Le indicas a TS que esto retorna string[] y ya puedes ocupar metodos de array
console.log("String: ",rtArray);
