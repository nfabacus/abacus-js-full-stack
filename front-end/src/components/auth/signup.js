import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

//Validations
const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <div className="error">{error}</div>}
    </div>
  </div>
)

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    actions.signupUser(formProps);
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


function validate(formProps) {
  const errors = {};

  if(!formProps.email) {
    errors.email = 'Please enter your email address.';
  }

  if(!formProps.username) {
    errors.username = 'Please enter a username.';
  }

  if(!formProps.password) {
    errors.password = 'Please enter a password.';
  }

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation.';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match.';
  }

  return errors;
}

Signup = reduxForm({
  form: 'signup',
  validate
})(Signup)
Signup = connect(mapStateToProps)(Signup)
export default Signup
