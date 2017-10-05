const employees = [
  {"id": 01, "name": "John Doe"},
  {"id": 02, "name": "Mike Smith"},
  {"id": 03, "name": "Peter Jackson"},
  {"id": 04, "name": "Alex Smith"},
  {"id": 05, "name": "Bobby Jones"},
  {"id": 06, "name": "Jessica Iozzo"},
  {"id": 07, "name": "Andrew Smith"},
  {"id": 08, "name": "Michelle Williams"},
  {"id": 09, "name": "Stacy Vestper"},
  {"id": 10, "name": "Graig Mcnellie"}
],

export default function fetchEmployees() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees);
    }, 2000);
  })
}
