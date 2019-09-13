import React from 'react';
import MoviesListItem from './MoviesListItem';

const MoviesList = ({ movies }) => {
  const renderTableRows = movies.map(movie =>
      <MoviesListItem key={movie.id} movie={movie} />
  );

  return (
    <tbody>
      {renderTableRows}
    </tbody>
  );
};

export default MoviesList;
