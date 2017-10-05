import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../common/Loader';

const EmployeesList = props => {

    if (!props.employees || props.employees.length === 0) {
        return <Loader />
    }

    const goBack = () => {
        props.history.push('/');
    }

    const selectEmployee = (employeeId) => {
        props.history.push(`${props.match.path}/${employeeId}`);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        let newId = generateId();
        let newName = e.target.employeeAdd.value.trim();
        props.actions.addEmployee({id:newId, name: newName});
    }

    const generateId = () => {
        let largestId = Math.max(...props.employees.map( employee => employee.id));
        return largestId+1;
    }

    const employeeList = props.employees.map((employee, index) => {
        return (
            <li key={employee.id} className='list-group-item' onClick={() => selectEmployee(employee.id)}>
                <span className='badge pull-left'>{index + 1}</span>
                <span style={{ marginLeft: 7 }}>{employee.name}</span>
            </li>
        );
    });

    return (
        <div>
            <div className='page-header text-center'>
                <h3>Employees List</h3>
            </div>
            <form className='form-group' onSubmit={handleAdd}>
                <label htmlFor='addEmployee'>Add Employee</label>
                <input  name='employeeAdd' type='text' className='form-control' id='addEmployee' />
                <input type='submit' className='btn btn-default' value='Save' />
            </form>
            <ul className='list-group'>
                {employeeList}
            </ul>
            <input type='button' className='btn btn-default' value='Go Back' onClick={goBack} />
        </div>
    );
};

export default EmployeesList;
