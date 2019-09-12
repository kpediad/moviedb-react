import React from 'react';
import { connect } from 'react-redux';

const MovieShow = ({ movie }) =>
  <div className="container" >
    <div className="row justify-content-center">
      <table className="table bg-light" style={{textAlign: 'center'}}>
        <thead>
          <tr className="table-primary">
            <th colspan="3" scope="col" id="movie">{movie.title}</th>
          </tr>
          <tr>
            <th id="year">Year: {movie.release_year}</th>
            <th id="score">Score: </th>
          </tr>
          <tr className="table-primary" style={{textAlign: 'center'}}>
            <th colspan="3" scope="col">Synopsis</th>
          </tr>
          <tr style={{textAlign: 'justify'}}>
            <td colspan="3" id="synopsis">{movie.synopsis}</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>;


const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId)

  if (movie) {
    return { movie }
  } else {
    return { movie: {} }
  }
}

export default connect(mapStateToProps)(MovieShow);
