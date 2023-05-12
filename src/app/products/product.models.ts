// Modelado de los datos con interfaz
import { Category } from "../categories/categories.model";

export type SizeWear = "C" | "M" | "L" | "XL";

// export interface Product1 {
//   id: string | number,
//   title: string,
//   createdAt: Date,
//   stock: number,
//   size?: SizeWear,
//   category: {
//     id: number,
//     name: string
//   }
// };


export interface Product1 {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: SizeWear,
  category: Category
};
