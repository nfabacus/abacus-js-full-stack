import React from 'react';

const SocialSection = ()=>
  <section id="social">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Connect with us:</h2>
          <hr/>
          <p>Etiam aliquet erat non justo varius pellentesque. Quisque viverra nec lacus volutpat ornare. Etiam molestie nisl odio. </p>
        </div>
        <div className="col-md-6">
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#"><i className="fa fa-youtube"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fa fa-fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li className="list-inline-item"><a href="mailto:contact@abacusmaths.info" target="_blank"><i className="fa fa-envelope-o"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

export default SocialSection;
