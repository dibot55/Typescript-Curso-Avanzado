// Modelado de ordenes de compra
import { Product1 } from "../products/product.models"
import { UserApp } from "../users/user.model"

export interface Order{
  id: string | number,
  createdAt: Date,
  products: Product1[],
  user: UserApp
};
