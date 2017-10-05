const employees = [
  {"id": 11, "name": "John Doe"},
  {"id": 12, "name": "Mike Smith"},
  {"id": 13, "name": "Peter Jackson"},
  {"id": 14, "name": "Alex Smith"},
  {"id": 15, "name": "Bobby Jones"},
  {"id": 16, "name": "Jessica Iozzo"},
  {"id": 17, "name": "Andrew Smith"},
  {"id": 18, "name": "Michelle Williams"},
  {"id": 19, "name": "Stacy Vestper"},
  {"id": 20, "name": "Graig Mcnellie"}
];

export default function fetchEmployees() {
    return new Promise((resolve) => {
         setTimeout(() => {
            resolve(employees);
        }, 2000);
    })

}
