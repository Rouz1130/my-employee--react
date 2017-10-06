import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as EmployeeActions from './actions/employeeActions';
import './App.css';
import Header from './common/Header';
import Dashboard from './Dashboard/Dashboard';
import Employees from './Employees/Employees';

class App extends Component {

  componentDidMount() {
    this.props.actions.getEmployees();
  }


  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <main>
          <Route path='/' exact render={(routeProps) => <Dashboard employees={this.props.employees} showLoader={this.props.showLoader} {...routeProps} />} />
          <Route path='/employees' render={(routeProps) => <Employees employees={this.props.employees} showLoader={this.props.showLoader} actions={this.props.actions} {...routeProps} />} />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    employees: state.employeeAppState,
    showLoader: state.loaderState
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(EmployeeActions, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
