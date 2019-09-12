import React from 'react';
import { Route, Switch } from 'react-router-dom'; // notice we are now importing Switch
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew';

const MoviesPage = ({ match, movies }) =>
  <div className="row">
    <div className="col">
      <MoviesList movies={movies} />
    </div>
    <div className="col">
      <Switch> {/* Make sure to wrap all of your Routes as children of the Switch component*/ }
        <Route path={`${match.url}/new`} component={MoviesNew} />
        <Route path={`${match.url}/:movieId`} component={MovieShow}/>
        <Route exact path={match.url} render={() => (
          <h3 style={{textAlign: 'center'}}>Select a movie from the list</h3>
        )}/>
      </Switch>
    </div>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
