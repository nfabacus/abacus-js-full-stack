import  React, { Component } from 'react';
import BannerSection from './bannerSection';

// import { connect } from 'react-redux';
// import * as actions from '../actions';

export default class LandingPage extends Component {
  render(){
    return(
      <div className="pageContainer">
        <BannerSection />
      </div>
    );
  }
}
