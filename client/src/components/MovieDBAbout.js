import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


const MovieDBAbout = props =>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-6">
        <div className="card text-white bg-primary mb-3" style={{textAlign: 'center'}}>
          <h3 className="card-header"><FontAwesomeIcon icon={faFilm} /> MovieDB</h3>
          <img src="/moviedb.jpg" alt="MovieDB image" />
        </div>
      </div>
      <div className="col-6 align-self-center">
        <div className="card text-black bg-light mb-3" style={{textAlign: 'center'}}>
          <h3 className="card-header">About MovieDB</h3>
          <p className="card-body"><strong>Version 0.3</strong><br/><br/>Single Page Application<br/>Powered by ReactJS & Redux<br/><br/>Use links at the top bar to navigate the app. Have Fun!<br/><br/>© 2019 Konstantinos (Kostas) Pediaditakis</p>
        </div>
      </div>
    </div>
  </div>

export default MovieDBAbout
