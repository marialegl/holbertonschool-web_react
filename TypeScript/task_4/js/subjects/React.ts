// task_4/js/subjects/React.ts
namespace Subjects {
    // Declaración de fusión para agregar experienceTeachingReact
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    export class React extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for React";
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  