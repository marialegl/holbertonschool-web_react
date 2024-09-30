// task_3/js/crud.d.ts

// Importamos RowID y RowElement desde interface.ts
import { RowID, RowElement } from './interface';

// Declaración de la función insertRow
export function insertRow(row: RowElement): RowID;

// Declaración de la función deleteRow
export function deleteRow(rowId: RowID): void;

// Declaración de la función updateRow
export function updateRow(rowId: RowID, row: RowElement): RowID;
