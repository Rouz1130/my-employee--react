import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import EmployeesList from './EmployeesList';
import EmployeeDetail from './EmployeeDetail';

const Employees = props => {
    return (
        <div>
            <Route path={`${props.match.path}`} exact render={(routeProps) => <EmployeesList employees={props.employees} actions={props.actions} {...routeProps} />} />
            <Route path={`${props.match.path}/:employeeId`} component={(routeProps) => <EmployeeDetail employees={props.employees} actions={props.actions} {...routeProps} />} />
        </div>
    );
};

Employees.propTypes = {

};

export default Employees;
