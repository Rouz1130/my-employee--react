import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../common/Loader';
import './TopEmployees.css';

const TopEmployees = props => {

    if(!props.employees || props.employees.length === 0){
        return <Loader />
    }

    const selectEmployee = (employeeId) => {
        props.history.push(`heroes/${employeeId}`);
    }

    const TopEmployees = props.employees.filter((employee) => {
        return employee.id % 2 === 0;
    }).map((topEmployee) => {
        return (
            <div className='panel panel-default col-sm-2' key={topEmployee.id} onClick={() => selectEmployee(topEmployee.id)}>
                <div className='panel-body'>
                    {topEmployee.name}
                </div>
            </div>
        )
    })

    const TopEmployeesPanel = TopEmployees

    return (
        <div>
            <div className='page-header text-center'>
                <h3>My Top Employees</h3>
                <div className='row text-center'>
                {TopEmployees}
                </div>
            </div>
        </div>
    );
};

TopEmployees.propTypes = {

};

export default TopEmployees;
