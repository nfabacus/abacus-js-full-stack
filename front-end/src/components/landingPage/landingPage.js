import  React, { Component } from 'react';
import BannerSection from './bannerSection';
import SocialSection from './socialSection';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

export default class LandingPage extends Component {
  render(){
    return(
      <div className="pageContainer">
        <BannerSection />
        <SocialSection />
      </div>
    );
  }
}
