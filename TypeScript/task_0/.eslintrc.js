
module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
      ecmaVersion:  2018,
      sourceType:  'module',
    },
    rules:  {
    },
  };


const table = document.createElement("table");

studentsList.array.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

document.body.appendChild(table);
