
const Helpers = {
  validate(formProps) {
    const errors = {};

    if(!formProps.email) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
      errors.email = 'Invalid email address';
    }

    if(!formProps.username) {
      errors.username = 'Please enter a username.';
      //try to use regex
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


}

export default Helpers;
