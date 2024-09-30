interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yersOfExperience?: number;
  location: string;
  [propname: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Julio',
  lastName: 'Luque',
  fullTimeEmployee: false,
  location: 'Lima',
  contract: false
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Cesar',
  lastName: 'Espino',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName:string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnhomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnhomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: StudentClass = new StudentClass("Santiago", "Mendoza");
console.log(student.displayName());
console.log(student.workOnhomework());

console.log(teacher3);
console.log(director1);
console.log(printTeacher("Julio", "Luque"));
