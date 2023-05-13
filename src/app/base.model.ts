// Crear una interfaz de TS

export interface BaseModel {
  readonly id: string | number, // READ ONLY para evitar sobreescrituras en TS
  createdAt?: Date,
  updatedAt?: Date;
}
