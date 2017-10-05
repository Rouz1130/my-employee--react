import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../common/Loader';
import './TopEmployees.css';

const TopEmployees = props => {

    if(!props.employees || props.employees.length === 0){
        return <Loader />
    }

    const selectEmployee = (employeeId) => {
        props.history.push(`employees/${employeeId}`);
    }

    const TopEmployees = props.employees.filter((employee) => {
        return employee.id % 2 === 0;
    }).map((TopEmployee) => {
        return (
            <div className='panel panel-default col-sm-2' key={TopEmployee.id} onClick={() => selectEmployee(TopEmployee.id)}>
                <div className='panel-body'>
                    {TopEmployee.name}
                </div>
            </div>
        )
    })

    const TopEmployeesPanel = TopEmployee

    return (
        <div>
            <div className='page-header text-center'>
                <h3>Top Employees this Month</h3>
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
