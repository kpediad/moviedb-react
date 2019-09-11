import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <a className="navbar-brand" href="/"><span className="fa fa-film"></span>MovieDB</a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a class="nav-link" href="/movies">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/movies/new">Add Movie</a>
        </li>
      </ul>

  </nav>



  );
}

export default NavBar;
