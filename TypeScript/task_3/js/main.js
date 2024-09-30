"use strict";
// task_3/js/main.ts
exports.__esModule = true;
// Importamos todo de crud.js como CRUD
var CRUD = require("./crud");
// Crear un objeto con tipo RowElement
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
// Insertamos la fila y guardamos el RowID resultante
var newRowID = CRUD.insertRow(row);
console.log("Inserted row ID: ".concat(newRowID));
// Actualizamos la fila agregando la edad
var updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
console.log("Updated row ID: ".concat(newRowID));
// Eliminamos la fila
CRUD.deleteRow(newRowID);
console.log("Deleted row ID: ".concat(newRowID));
