import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router';
import Scrollchor from 'react-scrollchor';


class Header extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      // show a link to sign out
      return(
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/signout">Sign out</Link>
          </li>
        </ul>
      )
    } else {
      // show a link to sign in or sign up
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" key={1}>
            <Link className="nav-link" to="/signin">Sign in</Link>
          </li>
          <li className="nav-item" key={2}>
            <Link className="nav-link" to="/signup">Sign up</Link>
          </li>
          <li className="nav-item" key={3}>
            <a className="nav-link" href="/#about">About</a>
          </li>
        </ul>
      );
    }

  }

  render() {
    return(
      <nav className="navbar navbar-toggleable-md navbar-light fixed-top light-translucent">
         <div className="navbar-header">
           <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <Link to="/" className="navbar-brand">Abacus Learning Lab</Link>

         </div>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {this.renderLinks()}
         </div>
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
