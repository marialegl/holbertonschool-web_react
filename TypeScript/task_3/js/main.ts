// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

// Importamos RowID y RowElement desde interface.ts
import { RowID, RowElement } from './interface';

// Importamos todo de crud.js como CRUD
import * as CRUD from './crud';

// Crear un objeto con tipo RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insertamos la fila y guardamos el RowID resultante
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Actualizamos la fila agregando la edad
const updatedRow: RowElement = { 
  firstName: "Guillaume", 
  lastName: "Salva", 
  age: 23 
};
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ID: ${newRowID}`);

// Eliminamos la fila
CRUD.deleteRow(newRowID);
console.log(`Deleted row ID: ${newRowID}`);
