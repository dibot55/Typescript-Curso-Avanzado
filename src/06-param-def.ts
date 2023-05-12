// Parametros por defecto

export const createProduct = (
  id: string | number,
  isNew: boolean = true,  // <-- Valores por defecto incluso si no lo envias
  stock: number  = 10
) => {
return {
  id,
  isNew,
  stock
  };
};

const p1 = createProduct(1); // 1, true ,10
console.log(p1);
