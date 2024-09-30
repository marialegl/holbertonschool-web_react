var student1 = {
    firstName: "Mariana",
    lastName: "Mendoza",
    age: 20,
    location: "Medellin"
};
var student2 = {
    firstName: "Santiago",
    lastName: "Gonzalez",
    age: 22,
    location: "Envigado"
};
var studentsList = [student1, student2];
function renderTable(students) {
    // Crear el elemento tabla
    var table = document.createElement('table');
    // Crear la fila de encabezado (opcional)
    var headerRow = table.insertRow();
    var headerCell1 = headerRow.insertCell();
    var headerCell2 = headerRow.insertCell();
    var headerCell3 = headerRow.insertCell();
    headerCell1.textContent = 'First Name';
    headerCell2.textContent = 'Location';
    headerCell3.textContent = 'Age';
    // Agregar cada estudiante como una fila en la tabla
    students.forEach(function (student) {
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        cell1.textContent = student.firstName; // Primer nombre
        cell2.textContent = student.location; // Ubicación
        cell3.textContent = student.age.toString(); //Age
    });
    // Agregar la tabla al cuerpo del documento HTML
    document.body.appendChild(table);
}
// Llamar a la función para renderizar la tabla con la lista de estudiantes
renderTable(studentsList);
