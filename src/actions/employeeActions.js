import * as types from '../constants/ActionTypes';
import fetchEmployees from '../api/employees';


export function changeName(id, name) {
  return {type: types.CHANGE_NAME, id name};
}

export function getEmployees() {
  return (dispatch) => {
    fetchEmployees().then(employees) => {
      dispatch.(getEmployeesSuccess(employees));
    })
  }
}

function getEmployeesSuccess(employees) {
  return {
    type: types: GET_EMPLOYEES_SUCCESS,
    employees
  }
}
