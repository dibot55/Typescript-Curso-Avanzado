// Buenas practicas sobre la sobrecarga de funciones

function fn(x: string): string;
function fn(x: number): number;
// Saber cuando utilizar sobrecarga de funciones
function fn(x: boolean | boolean[]): boolean;
// Declarar los unknown al final
function fn(x: unknown): unknown; // <-- Al final

function fn(x: unknown): unknown {
  return x;
}

