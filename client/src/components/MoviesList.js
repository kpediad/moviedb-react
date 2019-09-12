import React from 'react';
import MoviesListItem from './MoviesListItem';

const MoviesList = ({ movies }) => {
  const renderTableRows = movies.map(movie =>
      <MoviesListItem movie={movie} />
  );

  return (
    <div className="container" >
      <div className="row justify-content-center">
          <table className="table table-bordered bg-light" style={{textAlign: 'center'}}>
            <thead>
              <tr className="table-primary">
                <th colspan="3" scope="col">Movies List</th>
              </tr>
              <tr className="table-primary">
                <th scope="col">Title</th>
                <th scope="col">Release Year</th>
                <th scope="col">Movie Score</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default MoviesList;
