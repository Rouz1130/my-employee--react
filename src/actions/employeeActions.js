import * as types from '../constants/ActionTypes';
import fetchEmployees from '../api/employees';

export function changeName({id, name}){
    return { type: types.CHANGE_NAME, id, name };
}

export function addEmployee({id, name}){
    return { type: types.ADD_EMPLOYEE, id, name };
}

export function getEmployees(){
    return (dispatch) => {
        dispatch(showLoader());
        fetchEmployees().then((employees) => {
            dispatch(hideLoader());
            dispatch(getEmployeesSuccess(employees));
        },
    (error) => {
        dispatch(hideLoader());
        dispatch(getEmployeesError(error));
    })
    }
}

function getEmployeesSuccess(employees){
    return {
        type: types.GET_EMPLOYEES_SUCCESS,
        employees
    }
}

function getEmployeesError(error){
    return {
        type: 'GET_EMPLOYEES_ERROR',
        error
    }
}

function showLoader(){
    return {
        type: types.SHOW_LOADER,
        showLoader: true
    }
}

function hideLoader(){
    return {
        type: types.HIDE_LOADER,
        showLoader: false
    }
}

export function deleteEmployee({ id }){
    return { type: types.DELETE_EMPLOYEE, id };
}
