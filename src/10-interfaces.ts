// Interface - Manera de Typescript de manejar los objetos, sirve exactamente igual que los type

// type
type Size = "C" | "M" | "L" | "XL";
type Product = {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Size
};

const product: Product[] = [];

product.push({
  id: "1",
  title: "Sueter",
  createdAt: new Date(),
  stock: 10,
  size: "L"
});

// Interfaz - Una interfaz se puede extender. Un type no. Solo por eso es mas usado.
interface Product1 {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Size
};

const product1: Product[] = [];

product1.push({
  id: "1",
  title: "Sueter",
  createdAt: new Date(),
  stock: 10,
  size: "L"
});

// Una interfaz si o si necesita un cuerpo {} un type no y hasta puede ser definido en una linea

