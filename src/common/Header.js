import React from 'react';
import PropTypes from 'prop-types';
import NavigationLink from './NavigationLink';

const Header = props => {
    return (
        <div>
            <div className='page-header'>
                <h1>Employee List</h1>
            </div>
            <ul className='nav nav-pills'>
                <NavigationLink to='/' exact label='DashBoard' />
                <NavigationLink to='/employees' exact label='Employees' />
            </ul>
        </div>
    );
};

Header.propTypes = {

};

export default Header;
