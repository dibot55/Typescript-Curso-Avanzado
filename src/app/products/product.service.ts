// Manipulacion de los datos
import {Product1} from "./product.models";
import { CreatedProductDtoOmitInterface, UpdateDtoPartialInterface } from "../product.dtos";
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
export const readProduct = () => {
  return productArray;
};

// Read By ID
export const readIdProduct = (id: string) => {
  const response = productArray.find((item)=>{item.id === id});
  return response;
};

// Update
export const updateProduct = (id: string | number, changes: UpdateDtoPartialInterface): Product1 => {
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
export const deleteProduct = (id: string) => {
  const product = readIdProduct(id);
  if(product){
    const index= productArray.findIndex((item) => {item.id === id});
    productArray.splice(index, 1);
  };
};
