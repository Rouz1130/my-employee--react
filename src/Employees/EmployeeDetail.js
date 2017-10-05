import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../common/Loader';

class EmployeeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {
                name: ''
            }
        };

    }

    handleChange = (e) => {
        let newName = e.target.value.trim();
        const updatedEmployeeDetails = {...this.state.employee, name: newName}
        this.setState({
            employee: updatedEmployeeDetails
        });
    }

    goBack = () => {
        this.props.history.goBack();
    }

    handleSave = () => {
        this.props.actions.changeName(this.state.employee);
        this.goBack();
    }

    componentDidMount() {
        const filteredEmployee = this.props.employees.filter((employee) => employee.id == this.props.match.params.employeeId);
        if (filteredEmployee && filteredEmployee.length > 0) {
            const employee = Object.assign({}, filteredEmployee[0]);
            this.setState({ employee });
        }
    }


    render() {
        if(!this.props.employees || this.props.employees.length === 0){
            return <Loader />
        }

        return (
            <div>
                <div className='form-group'>
                    <label htmlFor='employeeName'>Employee Name</label>
                    <input type='text' className='form-control' id='employeeName' value={this.state.employee.name} onChange={this.handleChange} />
                </div>
                <input type='button' className='btn btn-default' value='Save' onClick={this.handleSave} />
                <input type='button' className='btn btn-default' value='Go Back' onClick={this.goBack} />
            </div>
        );
    }
}

EmployeeDetail.propTypes = {

};

export default EmployeeDetail
