interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    contract: boolean;
}

interface Directors {
    firstName:  string;
    lastName: string;
    loaction:  string;
    fullTimeEmployee: boolean;
    numberOfReports: number;
}

const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    yearsOfExperience: 10,
    contract: false,
};

const director1: Directors =  {
    firstName:  'John',
    lastName: 'Doe',
    loaction:  'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentClassConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentClassConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}


console.log(teacher1);
console.log(director1);
console.log(printTeacher("John", "Doe"));

const student = new StudentClass({ firstName: "John", lastName: "Doe" });

console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());    // Output: John

