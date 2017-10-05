import {CHANGE_NAME, GET_EMPLOYEES_SUCCESS, ADD_EMPLOYEE} from '../constants/ActionTypes';

export default function employeeAppState(state = [], action) {

  switch (action.type) {

    case GET_EMPLOYEES_SUCCESS:
      return [...action.employees];

      case ADD_EMPLOYEE:
          return [...state, { id: action.id, name: action.name }];


    case CHANGE_NAME:
      return state.map((employee) => {
        if(employee.id == action.id) {
          return {...employee, name: action.name}
        }
        return employee;
      });

      default:
        return state;
  }
}
