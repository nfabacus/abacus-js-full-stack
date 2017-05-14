import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group row">
    <label className="col-2 col-form-label">{label}: </label>
    <div className="col-10">
      <input className="form-control" {...input} placeholder={label} type={type}/>
      {touched && error && <div className="error">{error}</div>}
    </div>
  </div>
)

class Signin extends Component {
  handleFormSubmit({ username, password }) {
    console.log(username, password);
    this.props.signinUser({username, password});
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
    const {handleSubmit} = this.props;

    return (

      <div className="container mt-5">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group row">
            <div className="col-10">
              <Field label="Username" name="username" component={renderField} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-10">
              <Field label="Password" name="password" component={renderField} type="password" />
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              {this.renderAlert()}
              <button action="submit" className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signin = reduxForm({
  form: 'signin'  //give name to the form, here it is 'signin'
})(Signin);
Signin = connect(mapStateToProps, actions)(Signin)
export default Signin
