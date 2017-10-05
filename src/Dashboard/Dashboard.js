import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import TopEmployees from './TopEmployees';

const Dashboard = props => {
    return (
        <div>
            <Route path={`${props.match.path}`} exact render={(routeProps) => <TopEmployees employees={props.employees} {...routeProps} />} />
        </div>
    );
};

Dashboard.propTypes = {

};

export default Dashboard;
