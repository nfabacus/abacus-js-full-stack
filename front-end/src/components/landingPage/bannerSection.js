import React from 'react';

const BannerSection = ()=>
  <section id="banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center card p-5">
          <h1 className="display-2">Abacus Learning Lab</h1>
          <h2 className="display-4">Learn & practice abacus, maths and more!</h2>
        </div>
      </div>
      <div className="row p-5 strapline">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <a href=""><i className="fa fa-chevron-down fa-3x" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </section>


export default BannerSection;
