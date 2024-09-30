// task_4/js/subjects/Java.ts
namespace Subjects {
    // Declaración de fusión para agregar experienceTeachingJava
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    export class Java extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Java";
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  