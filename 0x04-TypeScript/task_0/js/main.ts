
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }


  const student1: Student = {
    firstName: "Alice",
    lastName: "Wanjiru",
    age: 21,
    location: "Nairobi",
  };

  const student2: Student = {
    firstName: "Brian",
    lastName: "Otieno",
    age: 22,
    location: "Mombasa",
  };


  const studentsList: Student[] = [student1, student2];


  const table = document.createElement("table");
  const headerRow = document.createElement("tr");


  ["First Name", "Location"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);


  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  document.body.appendChild(table);
