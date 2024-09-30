var teacher3 = {
    firstName: 'Julio',
    lastName: 'Luque',
    fullTimeEmployee: false,
    location: 'Lima',
    contract: false
};
var director1 = {
    firstName: 'Cesar',
    lastName: 'Espino',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnhomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Santiago", "Mendoza");
console.log(student.displayName());
console.log(student.workOnhomework());
console.log(teacher3);
console.log(director1);
console.log(printTeacher("Julio", "Luque"));
