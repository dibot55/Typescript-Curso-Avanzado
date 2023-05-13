// Manipulacion de los datos
import {Product1} from "./product.models";

export const productArray: Product1[] = [];

// Create
export const addProduct = (data: Product1) => {
  return productArray.push(data);
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
