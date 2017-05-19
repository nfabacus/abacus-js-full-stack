import React, { Component } from 'react';
import Header from './shared/header';
import SocialSection from './shared/socialSection';

export default class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <Header/>
        {this.props.children}
        <SocialSection />
      </div>
    );
  }
}
