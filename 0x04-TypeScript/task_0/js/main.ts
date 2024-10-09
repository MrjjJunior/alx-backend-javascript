interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
    firstName: 'Tshepiso',
    lastName: 'Tlhong',
    age: 20,
    location: "Johnesburg"
}

const student2: Student = {
    firstName: 'Lerato',
    lastName: 'Mia',
    age: 20,
    location: "Sophia Town"
}

const studentsList: Student[] = [student1, student2];

// rendering the table
const table = document.getElementById('table');
const tableHead = document.createElement('thead');
const tableBody = document.createElement('tbody');

const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
const headerLocation = document.createElement('th');
headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);