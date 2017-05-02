import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router';


class Header extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      // show a link to sign out
      return(
        <ul className="nav navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/signout">Sign out</Link>
          </li>
        </ul>
      )
    } else {
      // show a link to sign in or sign up
      return (
        <ul className="nav navbar-nav">
          <li className="nav-item" key={1}>
            <Link className="nav-link" to="/signin">Sign in</Link>
          </li>
          <li className="nav-item" key={2}>
            <Link className="nav-link" to="/signup">Sign up</Link>
          </li>
        </ul>
      );
    }

  }

  render() {
    return(
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Abacus Learning Lab</Link>
          {this.renderLinks()}
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
