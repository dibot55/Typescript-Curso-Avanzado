// Manipulacion de los datos
import {Product1} from "./product.models";
import { CreatedProductDtoOmitInterface, UpdateDtoPartialInterface, ReadDtoPartialInterfaceMixedyTagsArray} from "../product.dtos";
import { faker } from "@faker-js/faker";

export const productArray: Product1[] = [];

// Create
export const addProduct = (data: CreatedProductDtoOmitInterface): Product1 => {
  // Esto lo crea la base de datos no le hagas caso
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  };
  productArray.push(newProduct);
  return newProduct;
};

// Read
export const readProduct = (dto: ReadDtoPartialInterfaceMixedyTagsArray): Product1[] => {
  // dto.category = {asdsa}; // <-- Solo lectura
  // dto.tags?.push("asd"); // No me deberia dejar mutar el array
  return productArray;
};

// Read By ID - Acceder al tipado por indice. Por si cambia de string  a number :0
export const readIdProduct = (id: Product1["id"]): Product1 => {
  const index = productArray.findIndex((item) => {item.id === id});
  return productArray[index];
};

// Update
export const updateProduct = (id: Product1["id"], changes: UpdateDtoPartialInterface): Product1 => {
  const index = productArray.findIndex((item) => {item.id === id});
  const product = productArray[index];
  // Actualización
  productArray[index] = {
    ...product, // Elementos actuales
    ...changes // Elementos Nuevos
  };
  return productArray[index];
};

// Delete
export const deleteProduct = (id: Product1["id"]) => {

};
