import React, { Component } from 'react';
import AboutSection from './aboutSection';

class AboutPage extends Component {
  render() {
    return(
      <div className="pageContainer">
        <section id="about">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12 py-5">
                <h1>Welcome to Abacus Learning Lab!</h1>
                <br />
                <h3>Learning place where tradition meets innovation.</h3>
                <h3>Let us support your child's learning!</h3>
              </div>
            </div>
            <AboutSection />
          </div>
        </section>
      </div>
    );
  }
}

export default AboutPage;
