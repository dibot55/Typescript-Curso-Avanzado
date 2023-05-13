// Dtos - Objetos de transferencia de datos.
import { Product1 } from "./products/product.models";

// ----------------------------- Utility Types - Permiten crear nuevas interfaces basadas en otras pero afectando ciertos valores.

// Omit - Omite los campos seleccionados
type CreatedProductDto = Omit<Product1, "id" | "createdAt" | "updatedAt" | "category">;
export interface CreatedProductDtoOmitInterface extends Omit<Product1, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string; // Se lo estamos agregando para relacionarlo con la categoria en lugar
};

// Pick - crea un nuevo tipo pero solo con los datos seleccionados
type CreatedProductDtoPick = Pick<Product1, "id" | "price" | "description" | "category">;

interface CreatedProductDtoPickInterface extends Pick<Product1, "id" | "price" | "description" | "category"> {
}

// Partial - Vuelve opcional a todos las propiedades de la interfaz
type UpdateDtoPartial = Partial<Product1>;

export interface UpdateDtoPartialInterface extends Partial<CreatedProductDtoOmitInterface> {} // Juntamos dos interfaces mediante utility types

// Required - Vuelve obligatorio a todos las propiedades de la interfaz
type UpdateDtoRequired = Required<Product1>;

interface UpdateDtoRequiredInterface extends Required<Product1> {}

// ReadOnly - Solo lectura para interfaces
export interface ReadDtoPartialInterface extends Partial<Product1> {}

export interface ReadDtoPartialInterfaceReadOnly extends Readonly<ReadDtoPartialInterface> {} // Solo lectura

  // o puedes hacer esto anidando dos utility types

interface ReadDtoPartialInterfaceMixed extends Readonly<Partial<Product1>> {}
