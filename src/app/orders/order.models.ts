// Modelado de ordenes de compra
import { Product1 } from "../products/product.models"
import { UserApp } from "../users/user.model"
import { BaseModel } from "../base.model"
export interface Order extends BaseModel{
  products: Product1[],
  user: UserApp
};
