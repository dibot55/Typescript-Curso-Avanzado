// Manipulacion de los datos
import {Product1} from "./product.models";

export const productArray: Product1[] = [];

export const addProduct = (data: Product1) => {
  productArray.push(data);
};
