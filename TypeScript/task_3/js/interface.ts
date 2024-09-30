// task_3/js/interface.ts

// Crear el tipo RowID
export type RowID = number;

// Crear la interfaz RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // El campo age es opcional
}
