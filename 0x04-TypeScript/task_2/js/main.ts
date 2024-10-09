interface DirectorInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {

    workFromHome(): string {
        return "Working from home";
    }

    getCoffeBreak(): string {
        return "Getting a coffee break"
    }

    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {

    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break"
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return  new Director();
    }
}

console.log(createEmployee(200));   
console.log(createEmployee(1000)); 
console.log(createEmployee('$500')); 

interface Teacher {
    name: string;
    role: 'Teacher';
}

interface Director {
    name: string;
    role: 'Director';
}

function isDirector(employee: Teacher | Director): employee is Director {
    return employee.role === 'Director';
}

function workDirectorTasks() {
    console.log('Getting to director tasks');
}

function workTeacherTasks() {
    console.log('Getting to work');
}

function executeWork(employee: Teacher | Director) {
    if (isDirector(employee)) {
        workDirectorTasks();
    } else {
        workTeacherTasks();
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

console.log(teachClass('Math')); 
console.log(teachClass('History')); 
