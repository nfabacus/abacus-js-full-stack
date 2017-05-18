import React, { Component } from 'react';
import SubSection from './subSection';

class AboutSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      subContents: [
        { title: 'Ethos', content: 'This is our ethos.'},
        { title: 'Mission', content: 'This is our mission.'},
        { title: 'Theory', content: 'This is our theory.'},
      ]
    }
  }

  render() {
    const titles = this.state.subContents.map((content)=>{
      return (
        <li className="list-inline-item" key={content.title}><a href="">{ content.title }</a></li>
      )
    });

    return(
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

          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="list-inline">
                { titles }
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              {this.state.ethos}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
