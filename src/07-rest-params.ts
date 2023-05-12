// El parametro REST ... - Flexibilidad en los parametros.

// ---- EN JS
// const myFunction = (...args) => {
//  return console.log(args);
// };
// myFunction(1, 2, 3, 4, 5); // Indicas a la funcion que espera "n" cantidad de argumentos y retorna un arreglo con ellos [1,2,3,4,5].

// ---- EN TS

enum ROLESs {
  ADMINs = "admin",
  SELLERs = "seller",
  COSTUMERs = "costumer"
};

type Users = {
  username: string,
  role: ROLESs
};

const currentUser: Users = {
  username: "dibot55",
  role: ROLESs.ADMINs,
};

// Haces un if por cada parametro.
const checkAdminRole1 = (role1: string,  role2: string) => {
  if(currentUser.role === role1){
    return true;
  };
  if(currentUser.role === role2){
    return true;
  };
  return false;
};

const rta = checkAdminRole1(ROLESs.COSTUMERs, ROLESs.SELLERs);
console.log(rta);

// Envias varios parametros en forma de arreglo para evitar el if
const checkAdminRole2 = (roles: string[]) => {
  if(roles.includes(currentUser.role)){
    return true;
  };
  return false;
};

const rta2 = checkAdminRole2([ROLESs.COSTUMERs, ROLESs.SELLERs]); // <-- si o si debes usar un argumento con forma de arreglo para encapsular los parametros y luego enviarlos
console.log(rta2);

// Usando REST
const checkAdminRole3 = (...roles: string[]) => {
  if(roles.includes(currentUser.role)){
    return true;
  };
  return false;
};

const rta3 = checkAdminRole3(ROLESs.COSTUMERs, ROLESs.SELLERs, ROLESs.ADMINs); // <-- Ya solo mandas cualquier argumento sin encapsular. Eso lo hace REST
console.log(rta3);
