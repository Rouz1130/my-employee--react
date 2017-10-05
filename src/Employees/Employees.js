import React from 'react'=;
import PropTypes from 'Prop-types';
import {Route} from 'react-router-dom';

import EmployeesList from './EmployeesList';
import EmployeeDetail from './EmployeeDetail';

const Employees = props => {
  return (
    <div>
      <Route path={`${props.match.path}`} exact render={(routeProps) => <EmployeesList employees={props.employees} {...routeProps} />} />
      <Route path={`${props.match.path}/:employeeId`} component={(routeProps) => <EmployeeDetail employee={props.employees} actions={props.actions} {...routeProps} /> } />
    </div>
  );
};

Employees.PropTypes ={

};

export default Employees;
