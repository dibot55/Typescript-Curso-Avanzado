// Manipulacion de los datos
import {Product1} from "./product.models";
import { CreatedProductDtoInterface } from "../product.dtos";
import { faker } from "@faker-js/faker";

export const productArray: Product1[] = [];

// Create
export const addProduct = (data: CreatedProductDtoInterface): Product1 => {
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

export const updateProduct = (id: string, changes: Product1) => {
  let actual = readIdProduct(id);
  if (actual) {
    actual.title=changes.title;
    actual.description=changes.description;
    actual.price=changes.price;
    actual.image=changes.image;
    actual.color=changes.color;
    actual.stock=changes.stock;
    actual.size=changes.size;
    actual.category=changes.category;
    actual.isNew=changes.isNew;
    actual.createdAt=changes.createdAt;
    actual.updatedAt=changes.updatedAt;
  };
};

// Delete
export const deleteProduct = (id: string) => {
  const product = readIdProduct(id);
  if(product){
    const index= productArray.findIndex((item) => {item.id === id});
    productArray.splice(index, 1);
  };
};
