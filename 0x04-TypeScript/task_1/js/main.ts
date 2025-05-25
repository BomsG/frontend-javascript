// Existing Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface describing the function signature
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementing the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface describing the class structure
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Class implementing the StudentInterface
class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
