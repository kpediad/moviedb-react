import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const MovieDBHome = props =>
  <div className="container">
    <div className="row justify-content-center">
      <div className="card text-white bg-primary mb-3" style={{textAlign: 'center'}}>
        <h3 className="card-header"><FontAwesomeIcon icon={faFilm} /> MovieDB</h3>
        <img src="/moviedb.jpg" alt="MovieDB" />
        <div className="card-body">
          <p className="card-text">Rate you favorite and not so favorite movies...</p>
        </div>
      </div>
    </div>
  </div>

export default MovieDBHome
