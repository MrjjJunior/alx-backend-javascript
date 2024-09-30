#!/usr/bin/node

export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    let employees = [];
  
    // Gather all employees into a single array
    for (const department in allEmployees) {
      employees = [...employees, ...allEmployees[department]];
    }
  
    return employees[Symbol.iterator]();
  }
  