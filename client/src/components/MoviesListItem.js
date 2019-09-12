import React from 'react';
import { Link } from 'react-router-dom';

const MoviesListItem = ({ movie }) => {
  return (
    <tr>
      <td><Link key={movie.id} to={`/movies/${movie.id}`}>{movie.title}</Link></td>
      <td><Link key={movie.id} to={`/movies/${movie.id}`}>{movie.release_year}</Link></td>
      <td><Link key={movie.id} to={`/movies/${movie.id}`}>{movie.score}</Link></td>
    </tr>
  );
};

export default MoviesListItem;
