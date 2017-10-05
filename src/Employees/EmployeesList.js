import React from 'react';
import PropTypes from 'prop-types';
// import Loader from ',,/common/Loader';

const EmployeesList = props => {
  if(!props.employees || props.employees.length === 0) {
    return <Loader />
  }

  const goBack = () => {
    props.history.push('/');
  }

  const selectEmployee = (employeeId) => {
    props.history.push(`${props.match.path}/${employeeId}`);
  }

  const employeeList = props.employee.map((employee, index) => {
    return (
      <li key={employee.id} className='list-group-item' onClick={() => selectEmployee(employee.id)}>
        <span className='badge pull-left'>{index + 1}</span>
        <span style={{marginLeft: 7}}>{employee.name}</span>
      </li>
    );
  });

  return (
    <div>
      <div className='page-header text-center'>
        <h3>Employee List</h3>
      </div>
      <ul className='list-group'>
          {employeeList}
      </ul>
      <input type='button' className='btn btn-default' value='Go Back' onClick={goBack} />
    </div>
  );

};

export default EmployeesList


}
