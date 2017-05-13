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
      <nav className="navbar navbar-default">
        <div className="container-fluid">

         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
           <Link to="/" className="navbar-brand">Abacus Learning Lab</Link>
         </div>

         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {this.renderLinks()}
         </div>
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
