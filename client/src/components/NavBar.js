import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <NavLink className="navbar-brand" to="/"><FontAwesomeIcon icon={faFilm} /> MovieDB</NavLink>
      <NavLink className="nav-link text-light" to="/movies">Movies</NavLink>
      <NavLink className="nav-link text-light" to="/movies/new">Add Movie</NavLink>
    </nav>
  );
}

export default NavBar;
