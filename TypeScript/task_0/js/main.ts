interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mariana",
  lastName: "Mendoza",
  age: 20,
  location: "Medellin"
};

const student2: Student = {
  firstName: "Santiago",
  lastName: "Gonzalez",
  age: 22,
  location: "Envigado"
}

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  // Crear el elemento tabla
  const table = document.createElement('table');

  // Crear la fila de encabezado (opcional)
  const headerRow = table.insertRow();
  const headerCell1 = headerRow.insertCell();
  const headerCell2 = headerRow.insertCell();
  const headerCell3 = headerRow.insertCell();
  headerCell1.textContent = 'First Name';
  headerCell2.textContent = 'Location';
  headerCell3.textContent = 'Age';
  
  // Agregar cada estudiante como una fila en la tabla
  students.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    cell1.textContent = student.firstName;  // Primer nombre
    cell2.textContent = student.location;   // Ubicación
    cell3.textContent = student.age.toString();   //Age
  });

  // Agregar la tabla al cuerpo del documento HTML
  document.body.appendChild(table);
}

// Llamar a la función para renderizar la tabla con la lista de estudiantes
renderTable(studentsList);
