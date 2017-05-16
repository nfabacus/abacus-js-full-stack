import React from 'react';

const SocialSection = ()=>
  <section id="social">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Connect with us:</h2>
          <hr className="mx-0" width="250px"/>
          <p>Etiam aliquet erat non justo varius pellentesque. Quisque viverra nec lacus volutpat ornare. Etiam molestie nisl odio. </p>
        </div>
        <div className="col-md-6">
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#"><i className="fa fa-youtube fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="mailto:contact@abacusmaths.info" target="_blank"><i className="fa fa-envelope-o fa-2x"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

export default SocialSection;
