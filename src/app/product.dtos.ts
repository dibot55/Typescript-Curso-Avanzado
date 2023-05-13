// Dtos - Objetos de transferencia de datos.
import { Product1 } from "./products/product.models";

// Omitir campos para DTOs --> Utility Types.

// Omit con Type
type CreatedProductDto = Omit<Product1, "id" | "createdAt" | "updatedAt" | "category">; // Omite los campos seleccionados

// Omit con Interfaz
export interface CreatedProductDtoInterface extends Omit<Product1, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string; // Se lo estamos agregando para relacionarlo con la categoria en lugar
};

// Contrario al Omit - Pick Type
// Pick es igual a omit pero solo selecciona campos en lugar de omitirlos.

// Pick con Type - crea un nuevo tipo pero solo con los datos seleccionados
type CreatedProductDtoPick = Pick<Product1, "id" | "price" | "description" | "category">;

interface CreatedProductDtoPickInterface extends Pick<Product1, "id" | "price" | "description" | "category"> {

}
