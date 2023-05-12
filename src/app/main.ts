// Estructuras complejas en TS.
import { addProduct } from "./products/product.service";

// Aqui se consume la interfaz
addProduct({
  id: "1",
  title: "Sueter",
  createdAt: new Date(),
  stock: 10,
  size: "L",
  category:{
    id: 1,
    name: "Ropa"
  }
});
