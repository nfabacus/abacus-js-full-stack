import React from 'react';
import { Link } from 'react-router';

const BannerSection = ()=>
  <section id="banner">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12 p-5">
          <h1 className="display-2">Abacus Learning Lab</h1>
          <br />
          <h3>Excellence, Diligence, Creativity</h3>
          <h3>The Abacus Course for Children 5 to 11 years olds</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <Link to="/about"><i className="fa fa-chevron-down fa-3x" aria-hidden="true"></i></Link>
        </div>
      </div>
    </div>
  </section>


export default BannerSection;
