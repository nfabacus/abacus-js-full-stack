import React, { Component } from 'react';
import SubSection from './subSection';
import renderHTML from 'react-render-html';

class AboutSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSubContent: "Ethos",
      subContents: [
        { title: 'Ethos', content: 'This is our ethos.'},
        { title: 'About', content: "<p>We combine the eastern tradition of an abacus as a learning tool with technological innovation. Abacus Learning Lab is a playground for us to create learning of the future where education can be both imaginative and scientific, and best tailored to individual child.</p> <p>We are not afraid to create, build, break and rebuild our course for improvements to benefit children's learning. We would like to guide children to learn from trial and error and by perseverance.</p>"},
        { title: 'Mission', content: 'This is our mission.'},
        { title: 'Theory', content: 'This is our theory.'},
      ]
    }
  }

  selectTitle(title) {
    this.setState({
      selectedSubContent: title
    });
  }

  render() {
    const titles = this.state.subContents.map((content)=>{
      return (
      <li onClick={()=>this.selectTitle(content.title)} className="list-inline-item tab" key={content.title}> { content.title } </li>
      )
    });
    const selectedSubContent = ()=>{
      const selected = this.state.subContents.filter((content)=>{
        return content.title == this.state.selectedSubContent;
      });
      return (
        <div>{ renderHTML(selected[0].content) }</div>
      )
    }

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
            <div className="col-md-12 text-center subContent">
              { selectedSubContent() }
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default AboutSection;
