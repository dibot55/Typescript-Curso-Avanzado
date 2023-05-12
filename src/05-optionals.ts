// Parametros opcionales y Nullish coalesing - asignar valores por defecto.

// Los paremetros opcionales solo pueden ir al final, por que los requeridos no pueden ser declarados despues de un opcional.
export const createProduct = (
  id: string | number,
  //stock?: number, // <-- Error
  isNew?: boolean,
  stock?: number // <-- Uso correcto
) => {
return {
  id,
  isNew: isNew || true,
  stock: stock || 10 // Parametro con valores por defecto usando OR
  };
};

const p1 = createProduct(1, true, 2);
console.log(p1);

const p2 = createProduct(2, true); // No da undefined solamente coloca el valor por defecto en stock
console.log(p2);

// OR || - 0, "", false, null, NaN, undefined = false

const p3 = createProduct(2, false, 0);
// Te va a dar True aunque le digas que explicitamente que es false y te va poner 10 aunque le digas que es 0.
console.log(p3);

// Nullish Coalesing ?? - null y undefined = false

const nullish = (
  id: string | number,
  isNew?: boolean,
  stock?: number
  ) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10
  };
};

const p4 = nullish(2, false, 0); // Te da false y 0
console.log(p4);
