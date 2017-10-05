import React, {Component} from 'react';
import PropTypes from 'prop-types';


class EmployeeDetail extends Component (

  constructor(props) {
    super(props)
    this.state = {
      employee: {
        name: ''
      }
    };
  }

  hanldeChange = (e) => {
    let newName = e.target.value();
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
  }

  componentDidMount() {
    const filteredEmployee = this.props.employees.filter(employee) => employee.id = this.props.match.params.employee.id);
    if (filteredEmployee && filteredEmployee.length > 0) {
      const employee = Object.assign({}, filteredEmployee[0]);
      this.setState({employee});
    }
  }

  render () {
    if(!this.props.employees || this.props.employees.length === 0) {
      return <Loader/>
    }

    return (

      <div>
      <div className="form-group">
      <label htmlFor='employeeName'>Employee Name</label>
      <input type='text' className='form-control' id='employeeName' value={this.state.employee.name} onChange={this.hanldeChange} />
      </div>
      <input type='button' className='bt btn-default' value='Save' onClick={this.handleSave} />
      <input type='button' className='bt btn -default' value='Go Back' onClick={this.goBack} />
      </div>
    );
  }
}

EmployeeDetail.PropTypes = {

};

export default EmployeeDetail
