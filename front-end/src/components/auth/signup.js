import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import Helpers from './helpers';

//Validations
const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type}/>
      {touched && error && <div className="error">{error}</div>}
    </div>
  </div>
)

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }

  renderAlert(){
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component={renderField} type="text" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Username:</label>
          <Field name="username" component={renderField} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component={renderField} type="password" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm password:</label>
          <Field name="passwordConfirm" component={renderField} type="password"  className="form-control" />
        </fieldset>

        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up</button>

      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

// function validate(formProps) {
//   const errors = {};
//
//   if(!formProps.email) {
//     errors.email = 'Please enter your email address.';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
//     errors.email = 'Invalid email address';
//   }
//
//   if(!formProps.username) {
//     errors.username = 'Please enter a username.';
//     //try to use regex
//   }
//
//   if(!formProps.password) {
//     errors.password = 'Please enter a password.';
//   }
//
//   if(!formProps.passwordConfirm) {
//     errors.passwordConfirm = 'Please enter a password confirmation.';
//   }
//
//   if (formProps.password !== formProps.passwordConfirm) {
//     errors.password = 'Passwords must match.';
//   }
//
//   return errors;
// }

console.log('Helpers.validate: ', Object.keys(Helpers));

Signup = reduxForm({
  form: 'signup',
  validate: Helpers.validate
})(Signup)
Signup = connect(mapStateToProps,actions)(Signup)
export default Signup
